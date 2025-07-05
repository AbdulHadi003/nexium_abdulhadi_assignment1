export type Quote = {
  id: number;
  genre: string;
  text: string;
};

export const quotes: Quote[] = [
  { id: 1, genre: "motivational", text: "Push yourself, no one else will." },
  { id: 2, genre: "fun", text: "I’m not lazy, I’m on energy-saving mode." },
  { id: 3, genre: "educational", text: "Education is powerful." },
  { id: 4, genre: "motivational", text: "Success doesn’t find you. Go get it." },
  { id: 5, genre: "fun", text: "Why don’t atoms trust each other? They make up everything." },
];