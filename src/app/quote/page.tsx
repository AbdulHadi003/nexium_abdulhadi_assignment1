// src/app/quote/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { quotes } from "@/data/quotes";

export default function QuotePage() {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre")?.toLowerCase() || "";

  const filteredQuotes = quotes.filter(
    (quote) => quote.genre.toLowerCase() === genre
  );

  return (
    <main className="p-8 max-w-xl mx-auto space-y-4">
      <h2 className="text-xl font-semibold capitalize">
        {genre} Quotes
      </h2>

      {filteredQuotes.length > 0 ? (
        filteredQuotes.map((quote) => (
          <div key={quote.id} className="bg-muted p-4 rounded-md">
            {quote.text}
          </div>
        ))
      ) : (
        <p className="text-red-500">No quotes found for this genre.</p>
      )}
    </main>
  );
}