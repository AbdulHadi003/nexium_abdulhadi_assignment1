export type Quote = {
  id: number;
  genre: string;
  text: string;
  author: string;
};

export const quotes: Quote[] = [
  // Motivational
  { id: 1, genre: "motivational", text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { id: 2, genre: "motivational", text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { id: 3, genre: "motivational", text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },

  // Fun
  { id: 4, genre: "fun", text: "I'm not superstitious, but I am a little stitious.", author: "Michael Scott" },
  { id: 5, genre: "fun", text: "A day without sunshine is like, you know, night.", author: "Steve Martin" },
  { id: 6, genre: "fun", text: "Insanity is hereditary; you get it from your children.", author: "Sam Levenson" },

  // Educational
  { id: 7, genre: "educational", text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
  { id: 8, genre: "educational", text: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King" },
  { id: 9, genre: "educational", text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },

  // Love
  { id: 10, genre: "love", text: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle" },
  { id: 11, genre: "love", text: "The best thing to hold onto in life is each other.", author: "Audrey Hepburn" },
  { id: 12, genre: "love", text: "Where there is love there is life.", author: "Mahatma Gandhi" },

  // Wisdom
  { id: 13, genre: "wisdom", text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },
  { id: 14, genre: "wisdom", text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  { id: 15, genre: "wisdom", text: "The fool doth think he is wise, but the wise man knows himself to be a fool.", author: "William Shakespeare" },

  // Humor
  { id: 16, genre: "humor", text: "I can resist everything except temptation.", author: "Oscar Wilde" },
  { id: 17, genre: "humor", text: "Behind every great man is a woman rolling her eyes.", author: "Jim Carrey" },
  { id: 18, genre: "humor", text: "I used to think I was indecisive, but now I'm not so sure.", author: "Anonymous" },

  // Success
  { id: 19, genre: "success", text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { id: 20, genre: "success", text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { id: 21, genre: "success", text: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },

  // Life
  { id: 22, genre: "life", text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  { id: 23, genre: "life", text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { id: 24, genre: "life", text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },

  // Leadership
  { id: 25, genre: "leadership", text: "A leader is one who knows the way, goes the way, and shows the way.", author: "John C. Maxwell" },
  { id: 26, genre: "leadership", text: "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things.", author: "Ronald Reagan" },
  { id: 27, genre: "leadership", text: "Leadership is the capacity to translate vision into reality.", author: "Warren Bennis" },

  // Creativity
  { id: 28, genre: "creativity", text: "Creativity is intelligence having fun.", author: "Albert Einstein" },
  { id: 29, genre: "creativity", text: "You can't use up creativity. The more you use, the more you have.", author: "Maya Angelou" },
  { id: 30, genre: "creativity", text: "Everything you can imagine is real.", author: "Pablo Picasso" },
];
