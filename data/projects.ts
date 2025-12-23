export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "7",
    title: "Reinforcement Learning Final Project",
    description: "Implemented and compared three advanced RL algorithms (True Online SARSA, n-Step SARSA, and Advantage Actor-Critic with GAE) on CartPole and LunarLander environments, with extensive hyperparameter tuning and performance analysis.",
    image: "/lunar_lander_screenshot.png",
    technologies: ["Python", "OpenAI Gym", "PyTorch", "Tile Coding"]
  },
  {
    id: "2",
    title: "RaDeR: Retrieval-Augmented Dense Retrieval",
    description: "Research paper on enhancing dense retrieval models through retrieval augmentation techniques for improved information retrieval performance.",
    image: "/rader_logo.png",
    technologies: ["Python", "HuggingFace", "PyTorch"],
    link: "https://debrup-61.github.io/RaDeR.github.io/"
  },
  {
    id: "3",
    title: "AI Poker Agent with Deep Reinforcement Learning",
    description: "Engineered a deep reinforcement learning agent for Texas Hold'em, leveraging a Monte Carlo Tree Search (MCTS) guided by a custom policy network to learn decision-making under uncertainty.",
    image: "/poker_image.png",
    technologies: ["Python", "PyTorch", "MCTS"],
    github: "https://github.com/samonuall/alpha-zero-general/tree/630df23a0436e242733cc54e8af331bd9cc28937"
  },
  {
    id: "4",
    title: "CLIP-Based Image Similarity Search Pipeline",
    description: "Built a full data pipeline to process and embed a 100k image dataset using OpenAI's CLIP model. Deployed the model as a high-throughput inference service with FastAPI for real-time image similarity search.",
    image: "/openai-clip.webp",
    technologies: ["Python", "FastAPI", "CLIP", "OpenAI"],
    github: "https://github.com/Sejal135/532Project",
    link: "https://www.youtube.com/watch?v=S8pFvLiviMs"
  },
  {
    id: "5",
    title: "Face-to-Sketch Conditional GAN",
    description: "Built a generative image model based on a research paper, improving sketch quality by pretraining on a larger face image dataset.",
    image: "/gan_photo.jpg",
    technologies: ["Python", "PyTorch", "CUDA"],
    link: "https://www.kaggle.com/code/samonuallain/389-final-project-second-attempt"
  },
  {
    id: "6",
    title: "Reducing Echo Chambers in Collaborative Filtering Models",
    description: "Preprocessed user ratings of books and used graph algorithms to create a prototype model for reducing echo chambers.",
    image: "/echo_chamber.jpg",
    technologies: ["Python", "Pandas", "Networkx"],
    github: "https://github.com/samonuall/h311_project"
  },
  {
    id: "8",
    title: "Fine-Tuning LLMs for System Initiative Prediction",
    description: "Quantized and fine-tuned Llama-7b on tens of thousands of MS Dialog conversations, presenting findings at a final poster session.",
    image: "/sip_poster.jpg",
    technologies: ["Python", "Pandas", "HuggingFace API"],
    link: "https://colab.research.google.com/drive/1Jud-_r0wpBRpk6IyCk5PfVVZCgFxPi3Z?usp=sharing"
  },
];

