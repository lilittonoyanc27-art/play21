export interface PoderQuestion {
  sentence: string;
  translation: string;
  options: string[];
  correct: string;
  explanation: string;
  context: string;
  icon: string;
}

export const PODER_CONJUGATION = [
  { subject: "Yo", conjugation: "puedo", note: "O -> UE" },
  { subject: "Tú", conjugation: "puedes", note: "O -> UE" },
  { subject: "Él/Ella/Usted", conjugation: "puede", note: "O -> UE" },
  { subject: "Nosotros/as", conjugation: "podemos", note: "Պահպանում է O-ն" },
  { subject: "Vosotros/as", conjugation: "podéis", note: "Պահպանում է O-ն" },
  { subject: "Ellos/Ellas/Ustedes", conjugation: "pueden", note: "O -> UE" }
];

export const BASKETBALL_DATA: PoderQuestion[] = [
  {
    sentence: "Yo ____ (poder) encestar desde aquí.",
    translation: "Ես կարող եմ այստեղից գնդակը զամբյուղը գցել:",
    options: ["puedo", "podemos", "pueden"],
    correct: "puedo",
    explanation: "Yo -> puedo. 'Poder' բայը արմատական փոփոխություն ունի (O -> UE):",
    context: "Free throw",
    icon: "🏀"
  },
  {
    sentence: "¿Tú ____ (poder) saltar muy alto?",
    translation: "Դու կարո՞ղ ես շատ բարձր թռչել:",
    options: ["puedes", "puedo", "puede"],
    correct: "puedes",
    explanation: "Tú -> puedes.",
    context: "Warm up",
    icon: "👟"
  },
  {
    sentence: "Él ____ (poder) jugar de base.",
    translation: "Նա կարող է խաղալ որպես խաղարկող:",
    options: ["puede", "puedo", "pueden"],
    correct: "puede",
    explanation: "Él -> puede.",
    context: "Positioning",
    icon: "⛹️"
  },
  {
    sentence: "Nosotros ____ (poder) ganar este partido.",
    translation: "Մենք կարող ենք հաղթել այս խաղը:",
    options: ["podemos", "pueden", "puedo"],
    correct: "podemos",
    explanation: "Nosotros/as ձևում O-ն չի փոխվում UE-ի:",
    context: "Team talk",
    icon: "🏆"
  },
  {
    sentence: "Ustedes ____ (poder) defender mejor.",
    translation: "Դուք կարող եք ավելի լավ պաշտպանվել:",
    options: ["pueden", "puedes", "puede"],
    correct: "pueden",
    explanation: "Ustedes -> pueden.",
    context: "Defense",
    icon: "🛡️"
  },
  {
    sentence: "Vosotros ____ (poder) correr muy rápido.",
    translation: "Դուք կարող եք շատ արագ վազել:",
    options: ["podéis", "pueden", "puedo"],
    correct: "podéis",
    explanation: "Vosotros (Spain) ձևում O-ն չի փոխվում:",
    context: "Fast break",
    icon: "⚡"
  },
  {
    sentence: "Ella no ____ (poder) jugar hoy.",
    translation: "Նա չի կարող այսօր խաղալ:",
    options: ["puede", "puedo", "pueden"],
    correct: "puede",
    explanation: "Ella -> puede.",
    context: "Substitution",
    icon: "❌"
  },
  {
    sentence: "¿____ (poder) yo tirar el balón?",
    translation: "Կարո՞ղ եմ ես նետել գնդակը:",
    options: ["Puedo", "Puedes", "Pueden"],
    correct: "Puedo",
    explanation: "Yo -> puedo.",
    context: "Asking coach",
    icon: "🙋"
  },
  {
    sentence: "Tú y yo ____ (poder) encestar juntos.",
    translation: "Դու և ես կարող ենք միասին զամբյուղը գցել:",
    options: ["podemos", "pueden", "puedes"],
    correct: "podemos",
    explanation: "Tú y yo = Nosotros -> podemos.",
    context: "Cooperation",
    icon: "🤝"
  },
  {
    sentence: "Los jugadores ____ (poder) descansar ahora.",
    translation: "Խաղացողները կարող են հիմա հանգստանալ:",
    options: ["pueden", "puede", "podemos"],
    correct: "pueden",
    explanation: "Los jugadores (ellos) -> pueden.",
    context: "Half time",
    icon: "🥤"
  },
  {
    sentence: "Usted ____ (poder) ver el partido.",
    translation: "Դուք (հարգալից) կարող եք դիտել խաղը:",
    options: ["puede", "puedo", "pueden"],
    correct: "puede",
    explanation: "Usted -> puede.",
    context: "V.I.P. Seat",
    icon: "🎟️"
  },
  {
    sentence: "Nosotras ____ (poder) viajar al torneo.",
    translation: "Մենք (աղջիկներով) կարող ենք մեկնել մրցաշարին:",
    options: ["podemos", "pueden", "puedes"],
    correct: "podemos",
    explanation: "Nosotras -> podemos.",
    context: "Travel",
    icon: "🚌"
  },
  {
    sentence: "Mis amigos ____ (poder) venir a animar.",
    translation: "Իմ ընկերները կարող են գալ երկրպագելու:",
    options: ["pueden", "puede", "puedes"],
    correct: "pueden",
    explanation: "Mis amigos (ellos) -> pueden.",
    context: "Fan support",
    icon: "📣"
  },
  {
    sentence: "Tú ____ (poder) ser el capitán.",
    translation: "Դու կարող ես լինել ավագը:",
    options: ["puedes", "puede", "puedo"],
    correct: "puedes",
    explanation: "Tú -> puedes.",
    context: "Leadership",
    icon: "⭐"
  },
  {
    sentence: "Nosotros no ____ (poder) perder.",
    translation: "Մենք չենք կարող պարտվել:",
    options: ["podemos", "pueden", "puedo"],
    correct: "podemos",
    explanation: "Nosotros -> podemos.",
    context: "Final motivation",
    icon: "🔥"
  }
];
