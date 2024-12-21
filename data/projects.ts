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
    id: "1",
    title: "Face-to-Sketch Conditional GAN",
    description: "Built a generative image model based on a research paper, improving sketch quality by pretraining on a larger face image dataset.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "PyTorch", "CUDA"],
    github: "https://github.com/samonuall/face-to-sketch-gan"
  },
  {
    id: "2",
    title: "Reducing Echo Chambers in Collaborative Filtering Models",
    description: "Preprocessed user ratings of books and used graph algorithms to create a prototype model for reducing echo chambers.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "Pandas", "Networkx"],
    github: "https://github.com/samonuall/echo-chamber-reduction"
  },
  {
    id: "3",
    title: "Fine-Tuning LLMs for System Initiative Prediction",
    description: "Quantized and fine-tuned Llama-7b on tens of thousands of MS Dialog conversations, presenting findings at a final poster session.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "Pandas", "HuggingFace API"],
    github: "https://github.com/samonuall/llm-system-initiative"
  }
];

