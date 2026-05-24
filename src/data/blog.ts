export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMin: number;
  date: string;
  body: { heading?: string; paragraph: string }[];
};

export const POSTS: Post[] = [
  {
    slug: "glp1-vs-tirzepatide",
    title: "GLP-1 vs Tirzepatide: Which weight loss medication is right for you?",
    excerpt: "A clear comparison of the two most effective medical weight loss options — how they work, what to expect, and how to choose.",
    category: "Treatments",
    readMin: 6,
    date: "2025-03-12",
    body: [
      { paragraph: "Choosing between semaglutide and tirzepatide is one of the most common questions patients ask. Both are powerful tools — but they work a little differently and produce different average results." },
      { heading: "How they work", paragraph: "Semaglutide is a GLP-1 receptor agonist. Tirzepatide activates both GLP-1 and GIP receptors. The dual mechanism in tirzepatide tends to drive stronger appetite suppression and somewhat greater weight loss on average." },
      { heading: "What to expect", paragraph: "In clinical trials, semaglutide produced about 10–15% body weight loss; tirzepatide produced 15–22%. Real-world results vary based on dose, adherence, and individual metabolism." },
      { heading: "Which is right for you?", paragraph: "Cost, prior treatment, weight loss goals, and tolerance to side effects all matter. Your Ōra physician will walk through your history and recommend a starting point that fits your life." },
    ],
  },
  {
    slug: "managing-glp1-side-effects",
    title: "Managing GLP-1 side effects: a practical guide",
    excerpt: "Nausea, fatigue, constipation — the common side effects of GLP-1 medications and the simple strategies that keep them in check.",
    category: "Wellness",
    readMin: 5,
    date: "2025-02-22",
    body: [
      { paragraph: "Most GLP-1 side effects are mild and short-lived. They typically appear during dose increases and improve as your body adapts." },
      { heading: "Nausea", paragraph: "Eat smaller meals, stop before you feel full, and avoid heavy fatty foods around injection day. Ginger tea and bland carbs help." },
      { heading: "Constipation", paragraph: "Hydration is everything. Aim for 80oz+ water per day, increase fiber gradually, and stay active. Magnesium citrate can help short-term." },
      { heading: "Fatigue", paragraph: "Often related to lower calorie intake. Make sure you're getting adequate protein (0.7g per pound of goal weight) and electrolytes." },
    ],
  },
  {
    slug: "protein-on-glp1",
    title: "Why protein matters more than ever on GLP-1 medications",
    excerpt: "When appetite drops, protein becomes the single most important nutrient to prioritize. Here's how much you need and how to get it.",
    category: "Nutrition",
    readMin: 4,
    date: "2025-02-08",
    body: [
      { paragraph: "On a GLP-1, you'll naturally eat less. The challenge: protecting muscle mass while you lose fat. The solution is high-quality protein at every meal." },
      { heading: "How much protein?", paragraph: "Aim for 0.7–1g of protein per pound of your goal body weight. For most adults, that lands between 100–150g daily." },
      { heading: "Best sources", paragraph: "Greek yogurt, eggs, chicken, fish, lean beef, tofu, cottage cheese, and protein shakes when whole foods feel like too much." },
    ],
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
