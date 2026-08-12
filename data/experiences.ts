export interface Experience {
  id: string;
  title: string;
  company: string;
  contractType: string;
  location: string;
  dateRange: string;
  description: string[];
  technologies?: string[];
  /** Marks the present-day role. Drives the hero's "currently" line and the timeline badge. */
  current?: boolean;
}

/** Ordered newest-first — this is the order the timeline renders. */
export const experiences: Experience[] = [
  {
    id: "current",
    title: "AI Engineer",
    company: "Klaviyo",
    contractType: "Full-time",
    location: "Boston, MA",
    dateRange: "June 2026 – Present",
    current: true,
    description: [
      "Building AI and LLM-powered features across Klaviyo's product.",
    ],
    technologies: ["Python", "LLMs", "React"],
  },
  {
    id: "0",
    title: "Software Engineering Intern",
    company: "Klaviyo",
    contractType: "Internship",
    location: "Boston, MA",
    dateRange: "June 2025 – August 2025",
    description: [
      "Owned the end-to-end lifecycle of a Model Context Protocol (MCP) server extension, shipping a dynamic prompt template feature to the product.",
      "Replaced thin API wrappers with a threaded, cached orchestration layer that chains complex data retrievals, and added metadata filtering for denser, better-grounded LLM context.",
      "Shipped push notification analytics (Python, React) adopted by 400+ companies, generating 5,000+ reports in two weeks.",
    ],
    technologies: ["Python", "React", "MCP", "ReactQuery"],
  },
  {
    id: "1",
    title: "Researcher",
    company: "Center for Intelligent Information Retrieval",
    contractType: "Research",
    location: "UMass Amherst",
    dateRange: "September 2024 – June 2025",
    description: [
      "Second author on RaDeR (EMNLP ’25); contributed to experiment design for synthetic data generation, co-authored paper sections, and built the training pipelines and baseline retrieval systems.",
      "Fine-tuned dense retrieval models on A100 clusters with DeepSpeed, reaching state-of-the-art results on the BRIGHT benchmark.",
      "Boosted LLM post-training data throughput 15x with a three-tier parallel pipeline: multiprocessing for tree traversal, threaded I/O against vLLM servers, and model parallelism across GPUs.",
    ],
    technologies: ["PyTorch", "vLLM", "DeepSpeed", "HuggingFace"],
  },
  {
    id: "2",
    title: "Software Engineering Intern",
    company: "X-Camp Academy",
    contractType: "Internship",
    location: "Remote",
    dateRange: "June 2024 – August 2024",
    description: [
      "Implemented cookie-based session management for a prototype chatbot, keeping state and conversation context persistent across sessions (Flask, React).",
      "Automated the conversion of 90,000+ student submissions into an embedding index behind a FAISS dense retrieval system, improving LLM-judged response quality by 42%.",
    ],
    technologies: ["Flask", "React", "FAISS", "Embeddings"],
  },
  {
    id: "3",
    title: "Software Engineering Intern",
    company: "Lockheed Martin Space",
    contractType: "Internship",
    location: "Denver, CO",
    dateRange: "Summer 2022 & Summer 2023",
    description: [
      "Developed performance-critical C++ data interfaces for the LM 50 and LM 400 satellites, enabling real-time communication between satellite components.",
      "Built serialization and validation routines for telemetry data, delivering sensor readings reliably and with low latency under strict memory constraints.",
      "Engineered a reusable C++ class for asynchronous packet processing that worked around a custom OS limit of one callback at a time, using mutexes and locks for thread safety.",
    ],
    technologies: ["C++", "Multithreading", "GitLab CI"],
  },
];
