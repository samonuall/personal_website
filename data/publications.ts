export interface Publication {
  id: string;
  title: string;
  /** Author list as it appears on the paper; `you` is emphasized in the UI. */
  authors: string;
  venue: string;
  year: string;
  href?: string;
}

export const publications: Publication[] = [
  {
    id: "autoindex",
    title: "AutoIndex: Learning Representation Programs for Retrieval",
    authors:
      "S. O’Nuallain, N. Rajkumar, R. Narayanasamy, H. Jiang, S. Chaudhari, A. Drozdov",
    venue: "COLM ’26 — CBW Workshop",
    year: "2026",
    href: "https://auto-index.github.io/",
  },
  {
    id: "rader",
    title: "RaDeR: Reasoning-aware Dense Retrieval Models",
    authors: "D. Das, S. O’Nuallain, R. Rahimi",
    venue: "EMNLP ’25",
    year: "2025",
    href: "https://debrup-61.github.io/RaDeR.github.io/",
  },
];

/** The name to emphasize when rendering author lists. */
export const authorName = "S. O’Nuallain";
