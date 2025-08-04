export type Post = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: string;
  image: string;
  date: string;
  author: string;
  tags?: string[];
  content: string;
};

const IMAGES = {
  buildStrength:
    "https://cdn.pixabay.com/photo/2016/03/27/23/00/weight-lifting-1284616_1280.jpg",
  superfood:
    "https://cdn.pixabay.com/photo/2016/10/27/22/52/fruit-1776744_1280.jpg",
  mentalHealth:
    "https://cdn.pixabay.com/photo/2016/11/22/23/29/meditate-1851165_1280.jpg",
  dailyWater:
    "https://cdn.pixabay.com/photo/2016/06/22/22/16/thirst-1474240_1280.jpg",
  digitalDetox:
    "https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491_1280.jpg",
};

export const posts: Post[] = [
  {
    id: "1",
    title: "Building Strength: A Beginner's Guide",
    slug: "building-strength-guide",
    summary:
      "Start your fitness journey by learning how to build strength safely and effectively.",
    category: "Fitness",
    image: IMAGES.buildStrength,
    date: "2024-12-01",
    author: "Max Spidy",
    tags: ["strength", "fitness", "beginner"],
    content: `
# Building Strength: A Beginner's Guide

Building strength isn't just for bodybuilders. It's essential for daily health and longevity.

## Why Strength Matters

- Improves posture
- Supports bone health
- Boosts metabolism

### Starting Out

Begin with bodyweight exercises like:

- Squats
- Push-ups
- Planks

Stay consistent and track your progress.

> "Strength doesn't come from what you can do, it comes from overcoming the things you once thought you couldn't."
    `,
  },
  {
    id: "2",
    title: "Superfoods You Should Add Today",
    slug: "must-have-superfoods",
    summary:
      "Learn which superfoods can boost your energy and immune system naturally.",
    category: "Nutrition",
    image: IMAGES.superfood,
    date: "2024-11-20",
    author: "Emma Blake",
    tags: ["nutrition", "superfoods", "healthy-eating"],
    content: `
# Superfoods You Should Add Today

Eating well isn't about eating less — it's about eating smart.

## Top Superfoods:

- Blueberries
- Chia Seeds
- Spinach
- Avocados

They are packed with antioxidants, fiber, and vitamins your body needs.
    `,
  },
  {
    id: "3",
    title: "Digital Detox: Reclaim Your Focus",
    slug: "digital-detox-focus",
    summary: "Feeling distracted? It’s time to unplug and reboot your brain.",
    category: "Lifestyle",
    image: IMAGES.digitalDetox,
    date: "2024-10-10",
    author: "Lena White",
    tags: ["digital-detox", "focus", "mental-clarity"],
    content: `
# Digital Detox: Reclaim Your Focus

Our brains weren’t designed for constant notifications.

## Try This:

- No screens 1 hour before bed
- Schedule app-free time
- Use grayscale mode

> "Almost everything will work again if you unplug it for a few minutes — including you."
    `,
  },
  {
    id: "4",
    title: "Why You Should Drink More Water",
    slug: "daily-water-benefits",
    summary:
      "Hydration affects everything — from brain function to skin health.",
    category: "Health",
    image: IMAGES.dailyWater,
    date: "2024-12-08",
    author: "Noah Reed",
    tags: ["hydration", "water", "wellness", "nutrition"],
    content: `
# Why You Should Drink More Water

Water is life. Literally.

## Benefits of Staying Hydrated:

- Improves concentration
- Boosts physical performance
- Supports skin health

Aim for 2–3 liters per day depending on your activity level.
    `,
  },
  {
    id: "5",
    title: "Journaling for Mental Health",
    slug: "mental-health-journaling",
    summary: "A few minutes a day with a pen can reduce stress and anxiety.",
    category: "Mental Health",
    image: IMAGES.mentalHealth,
    date: "2024-11-01",
    author: "Sophia Kay",
    tags: ["mental-health", "journaling", "self-care"],
    content: `
# Journaling for Mental Health

Putting thoughts on paper can bring clarity and calm.

## How to Start:

- Write 3 things you're grateful for
- Note any stressors or thoughts
- Don’t edit, just express

Keep it private and consistent.
    `,
  },
  {
    id: "6",
    title: "Top Exercises to Build Strength Fast",
    slug: "top-strength-exercises",
    summary: "Skip the fluff. These proven moves build real strength.",
    category: "Fitness",
    image: IMAGES.buildStrength,
    date: "2025-01-12",
    author: "Leo Watts",
    tags: ["fitness", "strength", "workout"],
    content: `
# Top Exercises to Build Strength Fast

Want fast gains? Stick to the basics:

- Deadlifts
- Squats
- Bench Press
- Pull-ups

Compound movements activate more muscles.
    `,
  },
  {
    id: "7",
    title: "Quick and Healthy Superfood Smoothies",
    slug: "superfood-smoothies",
    summary: "Power your day with these nutrient-dense smoothies.",
    category: "Nutrition",
    image: IMAGES.superfood,
    date: "2025-02-10",
    author: "Maya Fern",
    tags: ["smoothie", "healthy", "nutrition"],
    content: `
# Quick and Healthy Superfood Smoothies

## Ingredients to Try:

- Spinach + Banana + Almond Milk
- Berries + Chia + Greek Yogurt
- Avocado + Cacao + Oat Milk

Delicious, quick, and energizing!
    `,
  },
  {
    id: "8",
    title: "Your Digital Detox Starter Plan",
    slug: "digital-detox-plan",
    summary: "A 7-day plan to unplug and feel better.",
    category: "Lifestyle",
    image: IMAGES.digitalDetox,
    date: "2025-01-25",
    author: "Jamie Scott",
    tags: ["detox", "mental-clarity", "tech-break"],
    content: `
# Your Digital Detox Starter Plan

## Day 1–2: No screens 1 hour before bed  
## Day 3–4: Delete 3 distracting apps  
## Day 5–6: Leave phone at home for walks  
## Day 7: Journal how you feel

Less screen = more clarity.
    `,
  },
  {
    id: "9",
    title: "Is Your Body Getting Enough Water?",
    slug: "hydration-checklist",
    summary: "How to tell if you’re dehydrated and what to do about it.",
    category: "Health",
    image: IMAGES.dailyWater,
    date: "2025-02-15",
    author: "Anya Rivers",
    tags: ["hydration", "health", "body-signs", "nutrition"],
    content: `
# Is Your Body Getting Enough Water?

## Signs of Dehydration:

- Headaches
- Dry mouth
- Fatigue
- Dark urine

Drink water throughout the day — not just when you're thirsty.
    `,
  },
  {
    id: "10",
    title: "Mental Health Habits You Can Start Today",
    slug: "mental-health-habits",
    summary: "Simple daily habits that support your emotional well-being.",
    category: "Mental Health",
    image: IMAGES.mentalHealth,
    date: "2025-02-18",
    author: "Zoe Night",
    tags: ["mental-wellness", "habits", "self-care"],
    content: `
# Mental Health Habits You Can Start Today

- Journal every morning
- Get 7–9 hours of sleep
- Move your body daily
- Disconnect from devices

Mental health = daily practice.
    `,
  },
];
