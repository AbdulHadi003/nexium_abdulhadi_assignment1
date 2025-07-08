// app/quote/page.tsx
import { Suspense } from "react";
import ClientQuote from "./clientquote";

export default function QuotePage() {
  return (
    <Suspense fallback={<div className="text-center p-10 text-lg">Loading...</div>}>
      <ClientQuote />
    </Suspense>
  );
}
