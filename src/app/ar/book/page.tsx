import React, { Suspense } from "react";
import { BookingContent } from "@/app/book/page";

export default function ArabicBookPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center text-brand-600">
          <div className="w-8 h-8 border-2 border-brand-600 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <BookingContent forcedLang="ar" />
    </Suspense>
  );
}

