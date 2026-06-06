/**
 * Package radar — tools and libraries to remember.
 * Edit this file to add rows; the page at /package-radar renders them as collapsible panels.
 */
export type PackageRadarLinks = {
  website?: string;
  github?: string;
  docs?: string;
};

export type PackageRadarEntry = {
  id: string;
  name: string;
  tagline: string;
  summary: string;
  /** Short bullets: what to remember when picking it up again */
  remember: string[];
  links: PackageRadarLinks;
  tags?: string[];
};

export const packageRadarEntries: PackageRadarEntry[] = [
  {
    id: 'remocn',
    name: 'remocn',
    tagline: 'Remotion scenes and motion primitives via shadcn CLI',
    summary:
      'A shadcn-style registry for Remotion: blur reveals, typewriter text, wipes, mesh gradients, and larger compositions. Components are copied into your repo (MIT) — tweak props like any React code.',
    remember: [
      'Requires a Remotion project first (`pnpm create video@latest`), then `shadcn` init.',
      'Install primitives with e.g. `pnpm dlx shadcn@latest add remocn/blur-reveal`.',
      'Render MP4 with `pnpm dlx remotion render` — no NLE required for simple promos.',
    ],
    links: {
      website: 'https://remocn.dev/',
      github: 'https://github.com/kapishdima/remocn',
    },
    tags: ['react', 'remotion', 'video', 'shadcn'],
  },
  {
    id: 'shark-ui',
    name: 'Shark UI',
    tagline: 'shadcn-style registry on Ark UI + Tailwind',
    summary:
      '~90+ accessible UI blocks with the familiar shadcn CLI workflow, but behaviour from Ark UI (WAI-ARIA, keyboard). Tailwind + tailwind-variants — copy into your codebase.',
    remember: [
      'Good when you want shadcn-like ownership with Ark primitives instead of Radix-only stacks.',
      'Docs live under shark.vini.one/docs (see repo README).',
    ],
    links: {
      website: 'https://shark.vini.one/',
      github: 'https://github.com/sharkui-inc/shark-ui',
      docs: 'https://shark.vini.one/docs',
    },
    tags: ['react', 'ark-ui', 'tailwind', 'shadcn'],
  },
  {
    id: 'typesense',
    name: 'Typesense',
    tagline: 'Fast typo-tolerant search (self-host or cloud)',
    summary:
      'Open-source search engine (C++) with a small operational surface: REST API, typo tolerance, faceting, geo, vectors/semantic paths. Single binary or Docker; managed cloud optional.',
    remember: [
      'Server is GPL-3.0; client libs are Apache-2.0 — sanity-check compliance before you fork the server.',
      'Docker quick start and large public demos (songs, books, recipes) are linked from typesense.org.',
    ],
    links: {
      website: 'https://typesense.org/',
      github: 'https://github.com/typesense/typesense',
      docs: 'https://typesense.org/docs/',
    },
    tags: ['search', 'docker', 'api'],
  },
];
