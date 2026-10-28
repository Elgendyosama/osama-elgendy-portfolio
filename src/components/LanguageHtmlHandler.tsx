"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function LanguageHtmlHandler() {
  const pathname = usePathname() || "";

  useEffect(() => {
    const isAr = pathname.startsWith("/ar");
    document.documentElement.lang = isAr ? "ar" : "en";
    document.documentElement.dir = isAr ? "rtl" : "ltr";
  }, [pathname]);

  return null;
}

