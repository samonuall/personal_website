export type ProjectLinkKind = "github" | "paper" | "site" | "demo"

export interface ProjectLink {
  kind: ProjectLinkKind;
  href: string;
  /** Overrides the default label for the kind. */
  label?: string;
}

export interface ProjectMedia {
  type: "image" | "video";
  src: string;
  /** Poster frame for videos. */
  poster?: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  /** One line shown in the collapsed row, under the title. */
  tagline: string;
  /** Full paragraph shown when the row is expanded. */
  description: string;
  /** Bullet results — keep these concrete and numeric where possible. */
  highlights?: string[];
  year: string;
  technologies: string[];
  media?: ProjectMedia;
  links?: ProjectLink[];
}

/** Ordered newest-first — this is the order they render on /projects. */
export const projects: Project[] = [
  {
    id: "autoindex",
    title: "AutoIndex",
    tagline: "Learning executable document transformations that make retrieval work better",
    description:
      "AutoIndex treats document representation as something you optimize rather than a fixed preprocessing step. An analysis agent diagnoses retrieval failures, a code agent synthesizes candidate transformation programs that slice, enrich, normalize, reweight, or reorganize documents, and a selection step keeps only what validates on held-out data. The retriever, ranking rules, and index backend stay fixed throughout, so every gain is attributable to the learned representation.",
    highlights: [
      "+8.4% Recall@100 and +8.3% nDCG@10 on average across the eight CRUMB retrieval tasks",
      "Up to +30.5% Recall@100 and +43.6% nDCG@10 on the strongest task",
      "Representations learned against BM25 transfer to dense retrieval: +18.3% Recall@100 on StackExchange",
    ],
    year: "2026",
    technologies: ["Python", "LLM Agents", "BM25", "Information Retrieval"],
    media: {
      type: "image",
      src: "/diagrams/autoindex-loop.svg",
      caption: "Analyze retrieval failures, synthesize a transformation program, keep what validates.",
    },
    links: [
      { kind: "site", href: "https://auto-index.github.io/", label: "Project page" },
      { kind: "paper", href: "https://arxiv.org/abs/2607.18603", label: "Read the paper" },
      { kind: "github", href: "https://github.com/auto-index/autoindex" },
    ],
  },
  {
    id: "reward-alignment",
    title: "LLM-Designed Reward Functions and Misalignment",
    tagline: "Do the reward functions LLMs write for RL agents stay aligned?",
    description:
      "Work like Eureka showed that LLMs can write reward functions good enough to beat human experts, but nobody had asked whether those reward functions are safe. I built a Eureka-inspired reward-design loop — the model gets a task description plus deliberately obfuscated environment code, its reward trains a PPO policy, and the policy's fitness feeds back for another round — and pointed it at AI Safety Gridworlds, environments purpose-built to surface reward hacking and goal misgeneralization.",
    highlights: [
      "The canonical hackable reward emerges from the weaker model (Qwen3.5-9B) under prompts that encourage simplicity",
      "The stronger model (Claude Sonnet 4.6) fails differently: iteration progressively over-engineers a correct reward into one PPO cannot train against",
      "Distributional shift is a blind spot for both — a prompt warning yields layout-agnostic reward code but not policies that generalize",
    ],
    year: "2026",
    technologies: ["Python", "PPO", "stable-baselines3", "LLM Evaluation"],
    media: {
      type: "image",
      src: "/diagrams/reward-design-loop.svg",
      caption: "An LLM writes the reward, PPO trains against it, and the resulting fitness feeds back.",
    },
    links: [
      { kind: "paper", href: "/llm-reward-design-alignment.pdf", label: "Read the report" },
      { kind: "github", href: "https://github.com/samonuall/690_final_project" },
    ],
  },
  {
    id: "rader",
    title: "RaDeR: Reasoning-aware Dense Retrieval Models",
    tagline: "EMNLP '25 paper on retrievers trained to reason about what a query is really asking",
    description:
      "Second author on RaDeR, which trains dense retrieval models on reasoning-based synthetic data so they handle queries where lexical overlap tells you almost nothing. I contributed to the experiment design for synthetic data generation, co-authored paper sections, and implemented the training pipelines and baseline retrieval systems.",
    highlights: [
      "State-of-the-art results on the BRIGHT reasoning-retrieval benchmark",
      "Fine-tuned on A100 clusters with DeepSpeed",
      "Designed a three-tier parallel data pipeline that lifted post-training throughput 15x",
    ],
    year: "2025",
    technologies: ["Python", "PyTorch", "HuggingFace", "vLLM", "DeepSpeed"],
    media: {
      type: "image",
      src: "/rader_logo.png",
    },
    links: [{ kind: "site", href: "https://debrup-61.github.io/RaDeR.github.io/", label: "Project page" }],
  },
  {
    id: "clip-inference",
    title: "CLIP Embedding Pipeline and Inference Service",
    tagline: "A FastAPI service that keeps the GPU busy under bursty embedding traffic",
    description:
      "An end-to-end inference API for CLIP image and text embeddings. The interesting part is the adaptive batching layer: requests queue up and flush on either a size or a timeout threshold, which keeps GPU utilization high without making single requests wait on a full batch.",
    highlights: [
      "100k images embedded and indexed in Pinecone for similarity search",
      "Adaptive queue-and-timeout batching to maximize GPU utilization",
      "Dockerized end to end",
    ],
    year: "2025",
    technologies: ["Python", "FastAPI", "CLIP", "Pinecone", "Docker"],
    media: {
      type: "image",
      src: "/openai-clip.webp",
    },
    links: [{ kind: "github", href: "https://github.com/Sejal135/532Project" }],
  },
  {
    id: "poker-agent",
    title: "AI Poker Agent with Deep Reinforcement Learning",
    tagline: "Monte Carlo tree search guided by a learned policy network for Texas Hold'em",
    description:
      "A deep RL agent for Texas Hold'em built on an AlphaZero-style architecture: Monte Carlo Tree Search does the planning, and a custom policy network trained through self-play guides the search toward moves worth exploring under hidden information.",
    highlights: ["7th place out of 22 teams in the course tournament"],
    year: "2025",
    technologies: ["Python", "PyTorch", "MCTS"],
    media: {
      type: "image",
      src: "/poker_image.png",
    },
    links: [
      {
        kind: "github",
        href: "https://github.com/samonuall/alpha-zero-general/tree/630df23a0436e242733cc54e8af331bd9cc28937",
      },
    ],
  },
  {
    id: "a2c",
    title: "Advantage Actor-Critic from Scratch",
    tagline: "A2C with generalized advantage estimation, implemented from the paper up",
    description:
      "An implementation of Advantage Actor-Critic with generalized advantage estimation written from scratch in PyTorch — no RL framework — and trained on Gymnasium environments to validate that convergence and policy stability matched what the literature reports.",
    year: "2024",
    technologies: ["Python", "PyTorch", "Gymnasium"],
    media: {
      type: "video",
      src: "/lunar_lander_video-episode-0.mp4",
      poster: "/lunar_lander_screenshot.png",
      caption: "The trained agent landing the craft after learning from experience.",
    },
    links: [{ kind: "paper", href: "/RL_final_report.pdf", label: "Read the report" }],
  },
  {
    id: "system-initiative",
    title: "Fine-Tuning LLMs for System Initiative Prediction",
    tagline: "Quantized Llama-7b fine-tuned to predict when a system should take the lead",
    description:
      "Quantized and fine-tuned Llama-7b on tens of thousands of MS Dialog conversations to predict system initiative — when an assistant should ask a clarifying question rather than answer directly. Findings were presented at a final poster session.",
    year: "2024",
    technologies: ["Python", "HuggingFace", "Pandas", "QLoRA"],
    media: {
      type: "image",
      src: "/sip_poster.jpg",
    },
    links: [
      {
        kind: "demo",
        href: "https://colab.research.google.com/drive/1Jud-_r0wpBRpk6IyCk5PfVVZCgFxPi3Z?usp=sharing",
        label: "Open the notebook",
      },
    ],
  },
  {
    id: "face-to-sketch",
    title: "Face-to-Sketch Conditional GAN",
    tagline: "Reproducing a conditional GAN, then improving it with transfer learning",
    description:
      "A conditional GAN that turns face photographs into sketches, built from a research paper. Pretraining the generator on a much larger face dataset before fine-tuning on the paired sketch data produced a clear improvement in output quality over the paper's setup.",
    year: "2024",
    technologies: ["Python", "PyTorch", "CUDA"],
    media: {
      type: "image",
      src: "/gan_photo.jpg",
    },
    links: [
      {
        kind: "demo",
        href: "https://www.kaggle.com/code/samonuallain/389-final-project-second-attempt",
        label: "Open the notebook",
      },
    ],
  },
  {
    id: "echo-chambers",
    title: "Reducing Echo Chambers in Collaborative Filtering",
    tagline: "Graph algorithms applied to recommendation diversity",
    description:
      "A prototype recommender that treats echo chambers as a graph problem: after preprocessing user book ratings into a user-item graph, graph algorithms surface recommendations that reach outside a user's existing cluster instead of reinforcing it.",
    year: "2023",
    technologies: ["Python", "Pandas", "NetworkX"],
    media: {
      type: "image",
      src: "/echo_chamber.jpg",
    },
    links: [{ kind: "github", href: "https://github.com/samonuall/h311_project" }],
  },
];

/** Projects surfaced on the home page, in order. */
export const featuredProjectIds = ["autoindex", "reward-alignment", "rader"];

export const featuredProjects = featuredProjectIds
  .map((id) => projects.find((project) => project.id === id))
  .filter((project): project is Project => Boolean(project));
