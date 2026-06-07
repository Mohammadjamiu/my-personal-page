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
  {
    id: 'fallow',
    name: 'Fallow',
    tagline: 'Deterministic JS/TS codebase intelligence (static analysis, no AI)',
    summary:
      'Fallow maps how a repo fits together—imports, entry points, duplication, complexity, dependency hygiene—and reports evidence-backed findings for humans, CI, and agents. CLI (`npx fallow`), devDependency, GitHub Action, LSP, and MCP; output includes JSON and SARIF.',
    remember: [
      'PR workflow: `npx fallow audit` (diff vs base); merge gates: Action `fallow-rs/fallow@v2` with `command: audit` or `npx fallow audit --changed-since origin/main`.',
      'Repo-wide cleanup: `npx fallow dead-code`, dupes: `npx fallow dupes`, health: `npx fallow health --score --hotspots --targets`; all-in-one: `npx fallow`.',
      '`audit` scopes to changed files—empty diff can mean zero files analyzed; `dead-code` follows reachability from entry points (different signal).',
      'JSON for automation: `npx fallow audit --format json`, `npx fallow dead-code --format json`; dry-run fixes: `npx fallow fix --dry-run`.',
      'Optional: `FALLOW_UPDATE_CHECK=off`, `FALLOW_TELEMETRY=inspect` (see docs). shadcn-style `components/ui/*` “unused” may be deliberate inventory—use `fallow explain <label>` and suppressions as needed.',
      'Long-form notes for this workspace: `docs/fallow-guide.md`.',
    ],
    links: {
      github: 'https://github.com/fallow-rs/fallow',
      docs: 'https://docs.fallow.tools',
    },
    tags: ['typescript', 'javascript', 'static-analysis', 'ci', 'cli', 'devtools'],
  },
  {
    id: 'opencode',
    name: 'OpenCode',
    tagline: 'Open-source AI coding agent — terminal, IDE, and desktop',
    summary:
      'OpenCode is best thought of as a harness: one open-source agent UI that plugs into many model backends. Bring your own keys and routes—Anthropic, OpenAI, Google, DeepSeek, local models, GitHub Copilot login, ChatGPT Plus/Pro, and a long tail of providers (often surfaced via Models.dev), plus optional Zen for OpenCode-curated coding models. Same workflow in the terminal TUI, editor extensions, or a desktop beta; LSPs load for the LLM, multi-session runs, and shareable session links.',
    remember: [
      'Treat it as provider-agnostic glue: configure API keys / provider accounts once, swap models (e.g. DeepSeek, Claude, GPT, Gemini) without changing your repo workflow.',
      'Install: `curl -fsSL https://opencode.ai/install | bash` — also `npm i -g opencode-ai`, Homebrew tap `anomalyco/tap/opencode`, releases at opencode.ai/download (see docs for your OS).',
      'Product pitch includes privacy-sensitive setups: they state code/context are not stored on their side—still read their privacy policy before you trust it for secret codebases.',
      'Differentiators called out on the site: LSP-aware agent, parallel sessions, Copilot and OpenAI subscription auth paths, 75+ provider integrations, Zen for benchmarked agent models.',
    ],
    links: {
      website: 'https://opencode.ai/',
      github: 'https://github.com/anomalyco/opencode',
      docs: 'https://opencode.ai/docs/',
    },
    tags: ['ai', 'agent', 'terminal', 'ide', 'llm', 'multi-provider', 'devtools'],
  },
  {
    id: 'mapcn',
    name: 'mapcn',
    tagline: 'React map components — MapLibre, Tailwind, shadcn-style setup',
    summary:
      'Free MIT registry of ready-to-use map UI for React: theme-aware (light/dark), composable primitives, markers/popups, routes, and controls (zoom, compass, locate, fullscreen). Built on MapLibre GL with Tailwind styling and the same copy-in patterns as shadcn/ui — marketed as zero config and one-command install.',
    remember: [
      'Add via the shadcn CLI workflow from their registry (see Get Started / Installation on the site); components land in your repo like other shadcn-style blocks.',
      'Defaults lean on CARTO basemaps (OSM-derived): commercial apps may need a CARTO Enterprise license — for production, plan on swapping to OSM tiles, MapTiler, Stadia, or another MapLibre-compatible provider per their README.',
      'Stack fit: React + MapLibre + Tailwind; good when you want polished maps without wiring GL primitives from scratch.',
    ],
    links: {
      website: 'https://mapcn.dev/',
      github: 'https://github.com/AnmolSaini16/mapcn',
    },
    tags: ['react', 'maps', 'maplibre', 'tailwind', 'shadcn', 'ui'],
  },
  {
    id: 'elevenlabs-ui',
    name: 'ElevenLabs UI',
    tagline: 'shadcn-style React components for audio and agent apps',
    summary:
      'MIT component registry from ElevenLabs on top of shadcn/ui: orbs, waveforms, voice agents, audio players, and related primitives aimed at multimodal / agentic experiences. Ships with a dedicated CLI and a public JSON registry URL so you can install either via `@elevenlabs/cli` or the standard `shadcn` CLI against your Next.js + Tailwind project.',
    remember: [
      'Prereqs from upstream: Node 18+, `shadcn` initialized, Tailwind configured — then `npx @elevenlabs/cli@latest components add <name>` or `npx @elevenlabs/cli@latest components add all` (sets up shadcn if missing and pulls deps).',
      'shadcn-native alternative: `npx shadcn@latest add https://ui.elevenlabs.io/r/all.json` or per-component JSON under `https://ui.elevenlabs.io/r/<component>.json` (e.g. `orb`).',
      'Pairs naturally with ElevenLabs speech / Conversational AI APIs when you are building voice UIs; components are copied into your repo like other shadcn registries.',
    ],
    links: {
      website: 'https://ui.elevenlabs.io/',
      github: 'https://github.com/elevenlabs/ui',
    },
    tags: ['react', 'audio', 'voice', 'agents', 'shadcn', 'elevenlabs', 'ui'],
  },
  {
    id: 'uitripled',
    name: 'UI TripleD',
    tagline: 'shadcn + Base UI blocks, Framer Motion, and visual builders',
    summary:
      'MIT monorepo of production-ready React blocks, components, and full-page patterns built with shadcn/ui and Base UI (Radix in the stack), animated with Framer Motion and Tailwind. Beyond a static registry, it ships interactive tools: a drag-and-drop Landing Builder for shadcn blocks, a Background Builder for shader-style and Aurora-style backdrops, and a Grid Generator for complex Tailwind grids — browse, preview, and copy code into your app.',
    remember: [
      'Live library and builders live at ui.tripled.work; source and contributing flow live on GitHub (Turborepo + pnpm; Node 18+).',
      'To hack on the docs app locally: `pnpm install` then `pnpm dev --filter=uitripled-docs` and open localhost:3000 (per upstream README).',
      'Good fit when you want motion-rich marketing sections and utility builders without assembling every block from scratch; check license file in repo for exact terms.',
    ],
    links: {
      website: 'https://ui.tripled.work/',
      github: 'https://github.com/moumen-soliman/uitripled',
    },
    tags: ['react', 'shadcn', 'base-ui', 'framer-motion', 'tailwind', 'ui', 'motion'],
  },
  {
    id: 'pretext',
    name: 'Pretext',
    tagline: 'Multiline text measure & layout without DOM reflow',
    summary:
      'MIT pure JS/TS library for paragraph height and line breaking using the browser’s own font metrics (canvas-backed measurement) instead of layout thrashing from `getBoundingClientRect` / DOM reads. `prepare()` does the one-time segmentation and caching; `layout()` is cheap arithmetic for height and line count at a width—ideal for list virtualization, scroll anchoring, and verifying labels don’t wrap. Richer APIs (`prepareWithSegments`, `layoutWithLines`, `walkLineRanges`, variable-width line iteration) support manual Canvas/SVG/WebGL drawing and shrink-to-fit width experiments; `@chenglou/pretext/rich-inline` covers narrow multi-font inline rows (chips, mentions).',
    remember: [
      'Install: `npm install @chenglou/pretext` — pair `prepare`/`prepareWithSegments` with `layout` or the manual line iterators; on resize, usually **only** rerun `layout`, not `prepare`, for the same text + font.',
      'Requires `Intl.Segmenter` and Canvas 2D text measurement; sync `font` / `lineHeight` / `letterSpacing` with real CSS. Upstream warns `system-ui` can skew accuracy on macOS—prefer a named family.',
      'Demos: clone repo (`bun install`, `bun start`, open `/demos/index`) or browse https://chenglou.me/pretext/ — full API + caveats in the GitHub README.',
    ],
    links: {
      website: 'https://chenglou.me/pretext/',
      github: 'https://github.com/chenglou/pretext',
    },
    tags: ['typescript', 'typography', 'layout', 'canvas', 'i18n', 'virtualization'],
  },
  {
    id: 'handy',
    name: 'Handy',
    tagline: 'Offline desktop speech-to-text — hotkey in, paste into any field',
    summary:
      'MIT cross-platform desktop app (Tauri: React/TypeScript UI, Rust audio + ML) for private, local dictation. Press a shortcut, speak with Silero VAD filtering, transcribe with on-device Whisper (GPU when available) or CPU-friendly Parakeet V3, then paste into whatever window has focus—no cloud audio by default. Positioned as simple, forkable accessibility tooling rather than “best STT”; includes CLI flags (`--toggle-transcription`, etc.) for WM/DE shortcuts, optional Raycast extension, and extensive Linux notes (X11/Wayland typing helpers, overlay caveats).',
    remember: [
      'Install from https://handy.computer/ or GitHub releases; community packages include `brew install --cask handy` and `winget install cjpais.Handy` (not maintained by core devs—verify before trusting).',
      'First run needs OS permissions (mic, accessibility / automation) and model downloads; air-gapped setups can side-load models into the app data `models/` folder per upstream README.',
      'Linux: expect extra setup—`xdotool` on X11, `wtype` or `dotool` on Wayland for reliable injection; gtk-layer-shell runtime is common; overlay can steal focus so “Overlay Position: None” is often recommended.',
      'Architecture touchpoints if you fork: `whisper-rs`, `transcribe-rs` (Parakeet), `cpal`, `vad-rs`, `rdev`; debug overlay Cmd/Ctrl+Shift+D.',
    ],
    links: {
      website: 'https://handy.computer/',
      github: 'https://github.com/cjpais/Handy',
    },
    tags: ['speech-to-text', 'accessibility', 'tauri', 'rust', 'offline', 'desktop'],
  },
  {
    id: 'shadcn-studio',
    name: 'shadcn/studio',
    tagline: 'shadcn-style blocks, templates, themes — Radix & Base UI, Motion, MCP',
    summary:
      'Commercial + community ecosystem around shadcn/ui: large catalogs of marketing, dashboard, and e-commerce blocks; full templates; visual theme generator (incl. AI-assisted flows aligned with Tailwind v4 / shadcn presets); Figma UI kit and Figma-to-code path; IDE integrations including an MCP server for generating pages from premium components. Ships code you own via copy-paste or the familiar shadcn CLI workflow; markets Motion-rich variants and “unlimited projects” paid tiers alongside open copy-paste collections.',
    remember: [
      'Treat it as a third-party registry and tooling vendor, not official shadcn — the site states it is independent and not affiliated with Figma or shadcn/ui; read their license and pricing before baking into client work.',
      'Feature surface is intentionally broad: browse blocks/templates on https://shadcnstudio.com/, use docs at https://shadcnstudio.com/docs/getting-started/introduction, and wire MCP / Figma plugins only if your org is OK with the subscription model.',
      'Upstream positions “no hidden deps / full code ownership” for what you install; still audit generated code like any external registry.',
    ],
    links: {
      website: 'https://shadcnstudio.com/',
      github: 'https://github.com/shadcnstudio/shadcn-studio',
      docs: 'https://shadcnstudio.com/docs/getting-started/introduction',
    },
    tags: ['react', 'shadcn', 'tailwind', 'figma', 'mcp', 'motion', 'ui'],
  },
  {
    id: 'obsidian',
    name: 'Obsidian',
    tagline: 'Local-first Markdown notes — links, graph, canvas, plugins',
    summary:
      'Cross-platform personal knowledge app built around Markdown files on disk: fast offline access, `[[wikilinks]]`, backlinks, tags, and a graph view for surfacing connections. Canvas gives a freeform board for research and diagrams; thousands of community plugins extend capture, tasks, publishing, and more. Optional paid **Obsidian Sync** (E2E-encrypted multi-device sync with version history) and **Obsidian Publish** turn vaults into hosted sites; core editing remains free for personal use under their license terms.',
    remember: [
      'Treat each workspace as a plain folder (“vault”) of `.md` files — easy to back up with Git, Syncthing, or your own sync; you are not locked into a proprietary cloud format.',
      'Pick plugins sparingly: they execute with vault access—install from trusted authors and review permissions like any extension ecosystem.',
      'Developer extensions and sample tooling live under the Obsidian GitHub org; user-facing reference starts at https://help.obsidian.md/',
    ],
    links: {
      website: 'https://obsidian.md/',
      github: 'https://github.com/obsidianmd',
      docs: 'https://help.obsidian.md/',
    },
    tags: ['notes', 'markdown', 'pkms', 'productivity', 'offline', 'knowledge-base'],
  },
  {
    id: 'shieldcn',
    name: 'shieldcn',
    tagline: 'README badges as real shadcn/ui buttons (Satori SVG) — shields.io-style URLs',
    summary:
      'MIT hosted badge service and engine by Justin Levine ([jal-co/shieldcn](https://github.com/jal-co/shieldcn)): render metrics as SVG/PNG that match shadcn Button tokens (Inter, radii, padding) via Satori—not flat shields rectangles. Broad provider coverage (npm, PyPI, GitHub CI/stars/license, Discord, Docker, VS Code marketplace, social stats, funding sites, custom static/dynamic/memo endpoints), **badge groups** joined with `+`, optional **pulse/glow/shimmer** animations (use `.gif` where GitHub strips animated SVG), shields.io-compatible patterns, and a **CLI** (`npx shieldcn-cli`) for scan/inject/migrate. Optional **self-host** Docker engine, **agent skill** (`npx skills add jal-co/shieldcn`), and open token-pool model for GitHub API throughput.',
    remember: [
      'Quick README embed: `![npm](https://shieldcn.dev/npm/react.png)` — docs recommend `.png` on GitHub for consistent rendering; swap `.svg` when you want vectors elsewhere.',
      'CLI: `npx shieldcn-cli` to scan a repo, `npx shieldcn-cli migrate` to rewrite shields.io URLs, `--inject` to patch README; explore variants/sizes/icons in https://shieldcn.dev/docs',
      'Animations: query `?animate=pulse|glow|shimmer`; use `.gif` extension for motion inside GitHub READMEs because SVG animation is sanitized—respects `prefers-reduced-motion` on `.svg`.',
    ],
    links: {
      website: 'https://shieldcn.dev/',
      github: 'https://github.com/jal-co/shieldcn',
      docs: 'https://shieldcn.dev/docs',
    },
    tags: ['readme', 'badges', 'devtools', 'markdown', 'shadcn', 'svg', 'open-source'],
  },
  {
    id: 'nativewind',
    name: 'NativeWind',
    tagline: 'Tailwind CSS utility classes for React Native',
    summary:
      'Styling layer that brings the Tailwind utility-first workflow to React Native: compose UIs with `className` on core primitives, share a Tailwind mental model with web teams, and lean on the same design tokens, dark/light handling, CSS-variable-style themes, and animation utilities the ecosystem is moving toward. The site at https://www.nativewind.dev/ highlights platform-aware tweaks (for example `ios:` variants), P3 color workflows, and a v5 pre-release line—useful when you want Tailwind-style consistency across Expo / React Native surfaces.',
    remember: [
      'Wire-up is version-sensitive (Babel / Metro / Expo SDK): follow the “Get started” path that matches your NativeWind major release, and read the v5 pre-release notes if you opt into the next line.',
      'Ecosystem called out upstream: **NativewindUI** for opinionated native-feeling blocks, **React Native Reusables** for copy-paste primitives, **gluestack** for broader component coverage—all assume NativeWind-class styling.',
      'Source and issue tracker: https://github.com/nativewind/nativewind — treat native layout quirks (Text vs View, Yoga) like any RN project; Tailwind parity is deep but not identical to DOM CSS.',
    ],
    links: {
      website: 'https://www.nativewind.dev/',
      github: 'https://github.com/nativewind/nativewind',
    },
    tags: ['react-native', 'tailwind', 'expo', 'mobile', 'styling', 'css'],
  },
  {
    id: 'dotmatrix',
    name: 'Dot Matrix',
    tagline: '55+ free dot-matrix loaders — React, Tailwind, shadcn registry',
    summary:
      'MIT collection of retro-futuristic loading animations you install like any other shadcn registry: each loader is a small React + TypeScript + Tailwind component, previewed on the Dot Matrix site with a playground and copy/install flows. Add the `@dotmatrix` registry URL to `components.json`, then `npx shadcn@latest add @dotmatrix/<loader>` (or `@dotmatrix/all`); upstream ships shared `dotmatrix-loader.css` for timing/effects—import it alongside your Tailwind entry when the CLI does not wire it automatically.',
    remember: [
      'Registry snippet (from upstream docs): `"@dotmatrix": "https://dotmatrix.zzzzshawn.cloud/r/{name}.json"` inside `components.json` → `npx shadcn@latest add @dotmatrix/dotm-square-3` style installs.',
      'After install, confirm `@import "../components/dotmatrix-loader.css"` (path adjusted to your tree) appears in globals when animations look flat—docs call this out explicitly.',
      'Source + issue tracker: https://github.com/zzzzshawn/matrix — treat loaders as decorative; pair with visible status text and avoid stacking many competing spinners in one viewport.',
    ],
    links: {
      website: 'https://dotmatrix.zzzzshawn.cloud/',
      github: 'https://github.com/zzzzshawn/matrix',
      docs: 'https://dotmatrix.zzzzshawn.cloud/getting-started/usage',
    },
    tags: ['react', 'tailwind', 'shadcn', 'loaders', 'animation', 'ui'],
  },
  {
    id: 'neonblade-ui',
    name: 'NeonBlade UI',
    tagline: 'Futuristic neon React components — Tailwind v4, copy-in CLI',
    summary:
      'MIT NeonBlade UI (https://neonbladeui.neuronrush.com/) is a small but opinionated kit of cyberpunk / sci-fi React pieces—neon glows, clip-path frames, glitchy typography, ASCII-style flourishes, micro-motion—meant to be installed into your repo via a dedicated CLI (`npx neonblade add <component>`) so components live beside your app code instead of an opaque package. Built around Tailwind CSS v4, TypeScript, and helpers like Framer Motion + Lucide; ships a docs site with live previews, prop guidance, and starter templates under the NeuronRush banner.',
    remember: [
      'Prereq: Tailwind v4 wired into a React stack (Next.js is the happy path; upstream also mentions Remix and Astro + React). Run `npx neonblade add <name>` after Tailwind is scanning your component tree.',
      'Visual language is intentionally loud—great for dashboards, promos, and portfolio hero sections; pair with calmer typography elsewhere so the glow does not fight your brand.',
      'Source monorepo (CLI + registry + marketing site): https://github.com/vprix21/neonblade-ui — audit motion for reduced-motion preferences when you ship production UX.',
    ],
    links: {
      website: 'https://neonbladeui.neuronrush.com/',
      github: 'https://github.com/vprix21/neonblade-ui',
      docs: 'https://neonbladeui.neuronrush.com/docs',
    },
    tags: ['react', 'tailwind', 'neon', 'cyberpunk', 'motion', 'ui', 'cli'],
  },
];
