export interface Experience {
  id: string;
  title: string;
  company: string;
  contractType: string;
  location: string;
  dateRange: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    id: "0",
    title: "Software Engineering Intern",
    company: "Klaviyo",
    contractType: "Internship",
    location: "Boston, MA",
    dateRange: "June 2025 - August 2025",
    description: [
      "Owned end-to-end lifecycle of a Model Context Protocol (MCP) server extension with threaded orchestration layer for complex data retrievals.",
      "Shipped push notification analytics (Python, React) adopted by 400+ companies, generating 5,000+ reports in two weeks.",
      "Prototyped semantic documentation search and prompt management system that was added directly to the product roadmap."
    ]
  },
  {
    id: "1",
    title: "Researcher",
    company: "Center for Intelligent Information Retrieval",
    contractType: "Research",
    location: "UMass Amherst",
    dateRange: "September 2024 - Present",
    description: [
      "Second author on RaDeR (EMNLP '25); achieved state-of-the-art results on BRIGHT benchmark using fine-tuned dense retrieval models on A100 GPU clusters.",
      "Boosted data throughput by 15x for LLM post-training by designing a three-tier parallel pipeline with Python multiprocessing, threaded I/O, and model parallelism."
    ]
  },
  {
    id: "2",
    title: "Software Engineering Intern",
    company: "X-Camp Academy",
    contractType: "Internship",
    location: "Remote",
    dateRange: "June 2024 - August 2024",
    description: [
      "Implemented cookie-based session management for a prototype chatbot, maintaining persistent state and conversation context across sessions (Flask, React).",
      "Automated conversion of 90,000+ student submissions into an embedding index and integrated it into a FAISS-backed dense retrieval system, improving LLM-judged response quality by 42%."
    ]
  },
  {
    id: "3",
    title: "Software Engineering Intern",
    company: "Lockheed Martin Space",
    contractType: "Internship",
    location: "Denver, CO",
    dateRange: "June 2023 - August 2023",
    description: [
      "Developed performance-critical C++ data interfaces for LM 50 & 400 satellites, enabling real-time communication between satellite components.",
      "Built serialization and validation routines for satellite telemetry data, ensuring reliable, low-latency delivery under strict memory constraints.",
      "Engineered a reusable C++ class to manage asynchronous packet processing using mutexes and locks for thread safety in a memory-constrained environment."
    ]
  },
  {
    id: "4",
    title: "Junior Software Engineering Intern",
    company: "Lockheed Martin Space",
    contractType: "Internship",
    location: "Denver, CO",
    dateRange: "June 2022 - August 2022",
    description: [
      "Designed, tested, and launched components for a large C++ codebase in a Cubesat mission using CI/CD pipelines in GitLab.",
      "Accelerated inter-application messaging by 100% by enhancing the existing TCP service with multi-threading."
    ]
  }
];

