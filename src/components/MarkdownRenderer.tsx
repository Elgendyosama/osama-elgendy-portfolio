"use client";

import React, { useState } from "react";
import { slugify } from "@/lib/articles-data";
import { Check, Copy, Terminal } from "lucide-react";

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  // Split into blocks by double newlines or code fences
  const renderContent = () => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeLanguage = "";
    let codeBuffer: string[] = [];
    let listBuffer: { type: "ul" | "ol"; items: string[] } | null = null;
    let tableBuffer: string[] = [];

    const flushList = (key: string) => {
      if (!listBuffer) return;
      if (listBuffer.type === "ul") {
        elements.push(
          <ul key={key} className="my-5 space-y-2.5 pl-2">
            {listBuffer.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 shrink-0 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                <span>{renderInline(item)}</span>
              </li>
            ))}
          </ul>
        );
      } else {
        elements.push(
          <ol key={key} className="my-5 space-y-2.5 pl-2">
            {listBuffer.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <span className="flex items-center justify-center w-5 h-5 rounded-md bg-cyan-500/10 text-cyan-400 font-mono text-xs font-bold shrink-0 border border-cyan-500/20">
                  {i + 1}
                </span>
                <span>{renderInline(item)}</span>
              </li>
            ))}
          </ol>
        );
      }
      listBuffer = null;
    };

    const flushTable = (key: string) => {
      if (tableBuffer.length < 2) {
        tableBuffer = [];
        return;
      }
      const headerLine = tableBuffer[0];
      const headers = headerLine
        .split("|")
        .map((h) => h.trim())
        .filter(Boolean);

      const rows = tableBuffer.slice(2).map((rowLine) =>
        rowLine
          .split("|")
          .map((c) => c.trim())
          .filter(Boolean)
      );

      elements.push(
        <div key={key} className="my-6 overflow-x-auto rounded-xl border border-white/10 bg-[#0c1222]/80">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-900/90 text-cyan-300 border-b border-white/10">
              <tr>
                {headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-white/[0.02]">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="px-4 py-3 text-slate-300">
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableBuffer = [];
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Code Block Fence
      if (line.startsWith("```")) {
        if (inCodeBlock) {
          const codeString = codeBuffer.join("\n");
          elements.push(
            <CodeBlock key={`code-${i}`} code={codeString} language={codeLanguage} />
          );
          codeBuffer = [];
          inCodeBlock = false;
          codeLanguage = "";
        } else {
          if (listBuffer) flushList(`list-${i}`);
          if (tableBuffer.length > 0) flushTable(`tbl-${i}`);
          inCodeBlock = true;
          codeLanguage = line.replace("```", "").trim();
        }
        continue;
      }

      if (inCodeBlock) {
        codeBuffer.push(line);
        continue;
      }

      // Table Line
      if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
        if (listBuffer) flushList(`list-${i}`);
        tableBuffer.push(line.trim());
        continue;
      } else if (tableBuffer.length > 0) {
        flushTable(`tbl-${i}`);
      }

      // Unordered list item
      if (line.match(/^[\*\-]\s+(.+)/)) {
        const itemContent = line.replace(/^[\*\-]\s+/, "");
        if (!listBuffer || listBuffer.type !== "ul") {
          if (listBuffer) flushList(`list-${i}`);
          listBuffer = { type: "ul", items: [itemContent] };
        } else {
          listBuffer.items.push(itemContent);
        }
        continue;
      }

      // Ordered list item
      if (line.match(/^\d+\.\s+(.+)/)) {
        const itemContent = line.replace(/^\d+\.\s+/, "");
        if (!listBuffer || listBuffer.type !== "ol") {
          if (listBuffer) flushList(`list-${i}`);
          listBuffer = { type: "ol", items: [itemContent] };
        } else {
          listBuffer.items.push(itemContent);
        }
        continue;
      }

      // Flush any pending list
      if (listBuffer) {
        flushList(`list-${i}`);
      }

      // Empty line
      if (line.trim() === "") {
        continue;
      }

      // Headings
      if (line.startsWith("### ")) {
        const title = line.replace("### ", "").trim();
        const id = slugify(title.replace(/[*_`]/g, ""));
        elements.push(
          <h3
            key={`h3-${i}`}
            id={id}
            className="text-lg sm:text-xl font-heading font-bold text-slate-100 mt-8 mb-3 scroll-mt-24 flex items-center gap-2 group"
          >
            <span>{renderInline(title)}</span>
            <a
              href={`#${id}`}
              className="opacity-0 group-hover:opacity-100 text-cyan-400 hover:text-cyan-300 transition-opacity text-sm"
              aria-label={`Anchor link for ${title}`}
            >
              #
            </a>
          </h3>
        );
        continue;
      }

      if (line.startsWith("## ")) {
        const title = line.replace("## ", "").trim();
        const id = slugify(title.replace(/[*_`]/g, ""));
        elements.push(
          <h2
            key={`h2-${i}`}
            id={id}
            className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-white mt-12 mb-4 scroll-mt-24 border-b border-white/10 pb-2.5 flex items-center justify-between group"
          >
            <span>{renderInline(title)}</span>
            <a
              href={`#${id}`}
              className="opacity-0 group-hover:opacity-100 text-cyan-400 hover:text-cyan-300 transition-opacity text-base font-normal"
              aria-label={`Anchor link for ${title}`}
            >
              #
            </a>
          </h2>
        );
        continue;
      }

      // Horizontal Divider
      if (line.trim() === "---" || line.trim() === "***") {
        elements.push(
          <hr
            key={`hr-${i}`}
            className="my-10 border-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent"
          />
        );
        continue;
      }

      // Blockquote
      if (line.startsWith("> ")) {
        elements.push(
          <blockquote
            key={`quote-${i}`}
            className="my-6 pl-4 py-2 border-l-2 border-cyan-400 bg-cyan-950/20 rounded-r-xl text-slate-300 italic text-sm sm:text-base"
          >
            {renderInline(line.replace(/^>\s*/, ""))}
          </blockquote>
        );
        continue;
      }

      // Standard Paragraph
      elements.push(
        <p
          key={`p-${i}`}
          className="text-slate-300 text-sm sm:text-base leading-relaxed my-4 font-normal"
        >
          {renderInline(line)}
        </p>
      );
    }

    if (listBuffer) flushList("list-end");
    if (tableBuffer.length > 0) flushTable("tbl-end");

    return elements;
  };

  const renderInline = (text: string): React.ReactNode => {
    // Process markdown inline syntax: `code`, **bold**, *italic*, [link](url)
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let keyIdx = 0;

    while (remaining.length > 0) {
      // Inline Code: `code`
      const codeMatch = remaining.match(/`([^`]+)`/);
      // Bold: **bold**
      const boldMatch = remaining.match(/\*\*([^*]+)\*\*/);
      // Link: [label](url)
      const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
      // Italic: *italic*
      const italicMatch = remaining.match(/(?<!\*)\*([^*]+)\*(?!\*)/);

      const matches = [
        codeMatch ? { type: "code", match: codeMatch, index: codeMatch.index! } : null,
        boldMatch ? { type: "bold", match: boldMatch, index: boldMatch.index! } : null,
        linkMatch ? { type: "link", match: linkMatch, index: linkMatch.index! } : null,
        italicMatch ? { type: "italic", match: italicMatch, index: italicMatch.index! } : null,
      ]
        .filter(Boolean)
        .sort((a, b) => a!.index - b!.index);

      if (matches.length === 0) {
        parts.push(remaining);
        break;
      }

      const earliest = matches[0]!;
      // Push text before match
      if (earliest.index > 0) {
        parts.push(remaining.substring(0, earliest.index));
      }

      const fullMatch = earliest.match[0];
      const matchIndex = earliest.index;

      if (earliest.type === "code") {
        parts.push(
          <code
            key={`inline-code-${keyIdx++}`}
            className="px-1.5 py-0.5 rounded-md bg-slate-800 text-cyan-300 font-mono text-xs border border-white/10"
          >
            {earliest.match[1]}
          </code>
        );
      } else if (earliest.type === "bold") {
        parts.push(
          <strong key={`inline-bold-${keyIdx++}`} className="font-bold text-white">
            {earliest.match[1]}
          </strong>
        );
      } else if (earliest.type === "link") {
        parts.push(
          <a
            key={`inline-link-${keyIdx++}`}
            href={earliest.match[2]}
            target={earliest.match[2].startsWith("http") ? "_blank" : undefined}
            rel={earliest.match[2].startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 font-medium transition-colors"
          >
            {earliest.match[1]}
          </a>
        );
      } else if (earliest.type === "italic") {
        parts.push(
          <em key={`inline-italic-${keyIdx++}`} className="italic text-slate-200">
            {earliest.match[1]}
          </em>
        );
      }

      remaining = remaining.substring(matchIndex + fullMatch.length);
    }

    return parts;
  };

  return <div className="space-y-1">{renderContent()}</div>;
};

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-[#080d1a] shadow-2xl">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-white/10 text-xs">
        <div className="flex items-center gap-2 text-slate-400">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span className="font-mono uppercase text-[11px] tracking-wider font-semibold text-slate-300">
            {language || "code"}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-xs font-medium"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-growth-400" />
              <span className="text-growth-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Text Content */}
      <pre className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm font-mono text-cyan-100 leading-relaxed bg-[#060913]/90">
        <code>{code}</code>
      </pre>
    </div>
  );
};
