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
    image: "/gan_gif.gif",
    technologies: ["Python", "PyTorch", "CUDA"],
    link: "https://www.kaggle.com/code/samonuallain/389-final-project-second-attempt"
  },
  {
    id: "2",
    title: "Reducing Echo Chambers in Collaborative Filtering Models",
    description: "Preprocessed user ratings of books and used graph algorithms to create a prototype model for reducing echo chambers.",
    image: "/echo_chamber.jpg",
    technologies: ["Python", "Pandas", "Networkx"],
    github: "https://github.com/samonuall/h311_project"
  },
  {
    id: "3",
    title: "Fine-Tuning LLMs for System Initiative Prediction",
    description: "Quantized and fine-tuned Llama-7b on tens of thousands of MS Dialog conversations, presenting findings at a final poster session.",
    image: "/sip_poster.jpg",
    technologies: ["Python", "Pandas", "HuggingFace API"],
    link: "https://colab.research.google.com/drive/1Jud-_r0wpBRpk6IyCk5PfVVZCgFxPi3Z?usp=sharing"
  }
];

