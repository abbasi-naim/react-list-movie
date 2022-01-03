export const partOfSpeech = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Verb" },
  { _id: "5b21ca3eeb7f6fbccd471819", name: "Adjective" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Noun" },
  { _id: "5b21ca3eeb7f6fbccd471821", name: "Pronoun" },
  { _id: "5b21ca3eeb7f6fbccd471822", name: "Adverb" },
  { _id: "5b21ca3eeb7f6fbccd471823", name: "Preposition" }
];

export function getGenres() {
  return genres.filter(g => g);
}
