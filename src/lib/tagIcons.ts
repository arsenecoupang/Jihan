const BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const tagIconMap: Record<string, string> = {
  // Frontend Frameworks
  React: `${BASE}/react/react-original.svg`,
  "React.js": `${BASE}/react/react-original.svg`,
  "Next.js": `${BASE}/nextjs/nextjs-original.svg`,
  "Vue.js": `${BASE}/vuejs/vuejs-original.svg`,
  Nuxt: `${BASE}/nuxtjs/nuxtjs-original.svg`,

  // Languages
  TypeScript: `${BASE}/typescript/typescript-original.svg`,
  JavaScript: `${BASE}/javascript/javascript-original.svg`,
  Python: `${BASE}/python/python-original.svg`,

  // Styling
  "Tailwind CSS": `${BASE}/tailwindcss/tailwindcss-original.svg`,
  "Styled Component": `${BASE}/styledcomponents/styledcomponents-original.svg`,
  "Pico CSS": `${BASE}/css3/css3-original.svg`,
  CSS: `${BASE}/css3/css3-original.svg`,
  HTML: `${BASE}/html5/html5-original.svg`,
  "HTML/CSS": `${BASE}/html5/html5-original.svg`,
  Biome: `${BASE}/biome/biome-original.svg`,

  // Build & Package Tools
  Vite: `${BASE}/vitejs/vitejs-original.svg`,
  webpack: `${BASE}/webpack/webpack-original.svg`,
  Pnpm: `${BASE}/pnpm/pnpm-original.svg`,

  // Backend
  "Node.js": `${BASE}/nodejs/nodejs-original.svg`,
  Flask: `${BASE}/flask/flask-original.svg`,

  // HTTP / API
  axios: `${BASE}/axios/axios-plain.svg`,
  Axios: `${BASE}/axios/axios-plain.svg`,

  // Linting & Formatting
  eslint: `${BASE}/eslint/eslint-original.svg`,

  // State management
  Zustand: `${BASE}/react/react-original.svg`,

  // DevOps / CI/CD
  Git: `${BASE}/git/git-original.svg`,
  "Github Actions": `${BASE}/github/github-original.svg`,
  Vercel: `${BASE}/vercel/vercel-original.svg`,
  Netlify: `${BASE}/netlify/netlify-original.svg`,

  // BaaS / Database
  Supabase: `${BASE}/supabase/supabase-original.svg`,
  PostgreSQL: `${BASE}/postgresql/postgresql-original.svg`,
  MySQL: `${BASE}/mysql/mysql-original.svg`,
};

export function getTagIcon(tag: string): string | null {
  return tagIconMap[tag] ?? null;
}
