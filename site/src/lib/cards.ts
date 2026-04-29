import { Marked } from 'marked';

export interface CardFrontmatter {
  id: string;
  slug: string;
  title: string;
  module: string;
  topics: string[];
  tags: string[];
  card: {
    type: 'basic' | 'multi' | 'steps' | 'definition' | 'comparison';
    question: string;
    image?: string;
    answer: string;
    answerImage?: string;
    examples?: string[];
  };
  status: 'draft' | 'published' | 'deprecated';
  created: string;
  updated: string;
}
const mRenderer = new Marked();
export interface Card extends CardFrontmatter {
  body: string;
  /** The folder the source file lives in */
  category: string;
}

let _cache: Promise<Card[]> | null = null;

export function getAllCards(): Promise<Card[]> {
  if (_cache) return _cache;

  const API_BASE = import.meta.env.PUBLIC_API_BASE;

  _cache = fetch(`${API_BASE}/api/cards/markdown`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch cards: ${res.status}`);
      }

      return res.json() as Promise<Card[]>;
    })

    .then((cards) => {
      for (const c of cards) {
        c.body = mRenderer.parse(c.body ?? '') as string;
        c.card.answer = mRenderer.parse(c.card.answer ?? '') as string;
      }

      cards.sort((a, b) => a.id.localeCompare(b.id));
      return cards;
    });

  return _cache;
}

export async function getPublishedCards(): Promise<Card[]> {
  const cards = await getAllCards();
  return cards.filter((c) => c.status === 'published');
}

export async function getCardBySlug(slug: string): Promise<Card | undefined> {
  const cards = await getAllCards();
  return cards.find((c) => c.slug === slug);
}

export async function getCardsByModule(module: string): Promise<Card[]> {
  const cards = await getAllCards();
  return cards.filter((c) => c.module === module);
}

export async function getAllModules(): Promise<string[]> {
  const cards = await getAllCards();
  const set = new Set(cards.map((c) => c.module).filter(Boolean));
  return Array.from(set).sort();
}

export async function getAllTags(): Promise<string[]> {
  const cards = await getAllCards();
  const set = new Set(cards.flatMap((c) => c.tags));
  return Array.from(set).sort();
}

export function moduleSlug(module: string): string {
  return module
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9\s_-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export async function moduleFromSlug(slug: string): Promise<string> {
  const modules = await getAllModules();
  return modules.find((m) => moduleSlug(m) === slug) ?? slug;
}
