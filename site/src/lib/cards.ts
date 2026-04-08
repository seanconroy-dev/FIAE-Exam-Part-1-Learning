import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

// Resolve the content root relative to this file (site/src/lib → repo root)
const REPO_ROOT = path.resolve(import.meta.dirname, '../../..');

const CONTENT_DIRS = [
  'Plannen,Vorbereiten und Durchführen von Arbeitsaufgaben',
  'Beurteilen marktgängiger IT-Systeme und Lösungen',
  'Entwickeln, Erstellen und Betreuen von IT_Lösungen',
  'IT-Sicherheit und Datenschutz, Ergonomie',
  'Informieren und Beraten von Kunden und Kundinnen',
  'Auftragsabschluss und Leistungenerbringen',
  'Qualitätssichernde Maßnahmen',
];

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

export interface Card extends CardFrontmatter {
  body: string;
  /** The folder the source file lives in */
  category: string;
}

let _cache: Card[] | null = null;

export function getAllCards(): Card[] {
  if (_cache) return _cache;

  const cards: Card[] = [];

  for (const dir of CONTENT_DIRS) {
    const dirPath = path.join(REPO_ROOT, dir);
    if (!fs.existsSync(dirPath)) continue;

    const files = fs.readdirSync(dirPath).filter((f) => f.endsWith('.md') && f !== 'README.md');

    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(raw);

      // Skip if required fields are missing
      if (!data.id || !data.slug) continue;

      cards.push({
        id: data.id ?? '',
        slug: data.slug ?? '',
        title: data.title ?? data.slug,
        module: (data.module && !data.module.startsWith('<')) ? data.module : dir,
        topics: data.topics ?? [],
        tags: data.tags ?? [],
        card: {
          type: data.card?.type ?? 'basic',
          question: data.card?.question ?? '',
          image: data.card?.image,
          answer: data.card?.answer ?? '',
          answerImage: data.card?.answerImage,
          examples: data.card?.examples ?? [],
        },
        status: data.status ?? 'draft',
        created: data.created ?? '',
        updated: data.updated ?? '',
        body: content.trim(),
        category: dir,
      });
    }
  }

  // Sort by numeric ID
  cards.sort((a, b) => a.id.localeCompare(b.id));
  _cache = cards;
  return cards;
}

export function getPublishedCards(): Card[] {
  return getAllCards().filter((c) => c.status === 'published');
}

export function getCardBySlug(slug: string): Card | undefined {
  return getAllCards().find((c) => c.slug === slug);
}

export function getCardsByModule(module: string): Card[] {
  return getAllCards().filter((c) => c.module === module);
}

export function getAllModules(): string[] {
  const set = new Set(getAllCards().map((c) => c.module).filter(Boolean));
  return Array.from(set).sort();
}

export function getAllTags(): string[] {
  const set = new Set(getAllCards().flatMap((c) => c.tags));
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

export function moduleFromSlug(slug: string): string {
  return getAllModules().find((m) => moduleSlug(m) === slug) ?? slug;
}
