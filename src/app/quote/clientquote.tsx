// app/quote/ClientQuote.tsx
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { quotes } from "@/data/quotes";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ClientQuote() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const genre = searchParams.get("genre")?.toLowerCase() || "";

  const filteredQuotes = quotes.filter(
    (quote) => quote.genre.toLowerCase() === genre
  );

  const handleBack = () => {
    router.push("/");
  };

  return (
    <main className="bg-gradient-to-r from-amber-100 to-amber-300 flex justify-center min-h-screen">
      <main className="p-8 max-w-xl mx-auto space-y-4">
        <div className="text-center space-x-5 space-y-30 mt-20">
          <motion.h2
            className="text-5xl italic font-extrabold text-foreground capitalize bg-amber-200 p-4 rounded-lg shadow-lg inline-block"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {`${genre} Quotes`.split("").map((char, index) => (
              <motion.span key={index} variants={letterAnimation}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          {filteredQuotes.length > 0 ? (
            <Carousel className="w-full">
              <CarouselContent>
                {filteredQuotes.map((quote) => (
                  <CarouselItem key={quote.id}>
                    <div className="bg-amber-200 p-6 rounded-md h-40 flex flex-col justify-between relative">
                      <p className="text-center text-lg font-medium italic">{quote.text}</p>
                      <p className="text-sm text-right text-gray-700 mt-4">— {quote.author}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ) : (
            <p className="text-red-500">No quotes found for this genre.</p>
          )}
        </div>
        <div className="text-center mt-4">
          <p className="mt-5 font-extrabold italic text-foreground text-1xl mb-7">
            Click on the button to navigate back to the home page.
          </p>
          <Button variant="outline" onClick={handleBack} className="bg-amber-200 text-xl">
            Back
          </Button>
        </div>
      </main>
    </main>
  );
}
