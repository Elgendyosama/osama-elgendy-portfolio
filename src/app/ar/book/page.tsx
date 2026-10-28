import React, { Suspense } from "react";
import { BookingContent } from "@/app/book/page";

export default function ArabicBookPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#060913] flex items-center justify-center text-cyan-400">
          <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <BookingContent forcedLang="ar" />
    </Suspense>
  );
}

