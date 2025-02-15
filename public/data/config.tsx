import {
  Box,
  BrainCircuit,
  BriefcaseBusiness,
  FileText,
  GraduationCap,
} from "lucide-react";

export const UserData = {
  name: "Mohammad",
  lastname: "Yehya",
  email: 'mohammad7446@gmail.com',
  phone: '+92335 2495576',
  profession: "Software Developer | Machine Learning Engineer",
  about:
    "I'm a developer who lives in Pakistan. I love learning and using different technologies. Currently, I'm working on a project with Toyota which involves context-aware anomaly detection, computer vision, and sequence verification.",
  github: "https://github.com/MohammadYehya",
  linkedin: "https://www.linkedin.com/in/mohammad-yehya/",
};
export const MySkills = {
  name: "Skills",
  icon: <BrainCircuit className="scale-[60%]" />,
  href: "/Skills",
  content: [
    {
      group: "Programming Languages",
      content: [
        { name: "C", imgpath: "/data/images/c.svg", proficiency: 1 },
        { name: "C++", imgpath: "/data/images/cpp.svg", proficiency: 1 },
        { name: "Rust", imgpath: "/data/images/rust.svg", proficiency: 1 },
        { name: "C#", imgpath: "/data/images/csharp.svg", proficiency: 1 },
        { name: "Javascript", imgpath: "/data/images/js.png", proficiency: 1 },
        { name: "Typescript", imgpath: "/data/images/ts.png", proficiency: 1 },
        { name: "Python", imgpath: "/data/images/python.png", proficiency: 1 },
        {
          name: "Assembly Script",
          imgpath: "/data/images/assembly.svg",
          proficiency: 1,
        },
        {
          name: "Shell Script",
          imgpath: "/data/images/bash.svg",
          proficiency: 1,
        },
      ],
    },
    {
      group: "Scripting & Markup",
      content: [
        { name: "LaTeX", imgpath: "/data/images/latex.svg", proficiency: 1 },
        {
          name: "Markdown",
          imgpath: "/data/images/markdown.svg",
          proficiency: 1,
        },
        { name: "Yaml", imgpath: "/data/images/yaml.svg", proficiency: 1 },
      ],
    },
    {
      group: "Frontend Development",
      content: [
        { name: "HTML5", imgpath: "/data/images/html.svg", proficiency: 1 },
        { name: "CSS3", imgpath: "/data/images/css.svg", proficiency: 1 },
        {
          name: "Bootstrap",
          imgpath: "/data/images/bootstrap.svg",
          proficiency: 1,
        },
        { name: "Blazor", imgpath: "/data/images/blazor.svg", proficiency: 1 },
        { name: "React", imgpath: "/data/images/react.svg", proficiency: 1 },
        { name: "NextJS", imgpath: "/data/images/nextjs.svg", proficiency: 1 },
        {
          name: "TailwindCSS",
          imgpath: "/data/images/tailwind.svg",
          proficiency: 1,
        },
        {
          name: "ShadCN/UI",
          imgpath: "/data/images/shadcn.svg",
          proficiency: 1,
        },
      ],
    },
    {
      group: "Backend Development",
      content: [
        {
          name: "FastAPI",
          imgpath: "/data/images/fastapi.svg",
          proficiency: 1,
        },
        {
          name: "Django",
          imgpath: "/data/images/django.svg",
          proficiency: 1,
        },
        { name: "NodeJS", imgpath: "/data/images/node.png", proficiency: 1 },
        {
          name: "ExpressJS",
          imgpath: "/data/images/express.png",
          proficiency: 1,
        },
        { name: ".NET", imgpath: "/data/images/dotnet.svg", proficiency: 1 },
        {
          name: "Socket.IO",
          imgpath: "/data/images/socketio.svg",
          proficiency: 1,
        },
        {
          name: "WebSocket",
          imgpath: "/data/images/websocket.svg",
          proficiency: 1,
        },
      ],
    },
    {
      group: "DevOps & Cloud",
      content: [
        { name: "Azure", imgpath: "/data/images/azure.svg", proficiency: 1 },
        { name: "AWS", imgpath: "/data/images/aws.svg", proficiency: 1 },
        {
          name: "Google Cloud",
          imgpath: "/data/images/gcp.svg",
          proficiency: 1,
        },
        {
          name: "Github Actions",
          imgpath: "/data/images/githubactions.svg",
          proficiency: 1,
        },
        { name: "Docker", imgpath: "/data/images/docker.svg", proficiency: 1 },
        { name: "Vercel", imgpath: "/data/images/vercel.svg", proficiency: 1 },
        { name: "Nginx", imgpath: "/data/images/nginx.svg", proficiency: 1 },
      ],
    },
    {
      group: "Databases",
      content: [
        {
          name: "MongoDB",
          imgpath: "/data/images/mongodb.svg",
          proficiency: 1,
        },
        {
          name: "PostgreSQL",
          imgpath: "/data/images/postgres.png",
          proficiency: 1,
        },
        { name: "Neo4J", imgpath: "/data/images/neo4j.svg", proficiency: 1 },
        { name: "SQLIte", imgpath: "/data/images/sqlite.svg", proficiency: 1 },
        {
          name: "Firebase",
          imgpath: "/data/images/firebase.png",
          proficiency: 1,
        },
        {
          name: "Supabase",
          imgpath: "/data/images/Supabase.svg",
          proficiency: 1,
        },
        {
          name: "Pinecone",
          imgpath: "/data/images/Pinecone.svg",
          proficiency: 1,
        },
        { name: "MySQL", imgpath: "/data/images/mysql.svg", proficiency: 1 },
      ],
    },
    {
      group: 'ORM',
      content: [
        {name: "DrizzleORM", imgpath: "/data/images/DrizzleORM.svg", proficiency:1}
      ]
    },
    {
      group: 'Payment Systems',
      content: [
        {name: "Stripe", imgpath: "/data/images/Stripe.svg", proficiency:1}
      ]
    },
    {
      group: "Data Sceince & Machine Learning",
      content: [
        { name: "Keras", imgpath: "/data/images/keras.svg", proficiency: 1 },
        {
          name: "Tensorflow",
          imgpath: "/data/images/tensorflow.svg",
          proficiency: 1,
        },
        {
          name: "Langchain",
          imgpath: "/data/images/langchain.svg",
          proficiency: 1,
        },
        {
          name: "Scikit-Learn",
          imgpath: "/data/images/scikit-learn.svg",
          proficiency: 1,
        },
        {
          name: "Matplotlib",
          imgpath: "/data/images/matplotlib.svg",
          proficiency: 1,
        },
        { name: "Numpy", imgpath: "/data/images/numpy.svg", proficiency: 1 },
        { name: "Pandas", imgpath: "/data/images/pandas.svg", proficiency: 1 },
        { name: "Scipy", imgpath: "/data/images/scipy.svg", proficiency: 1 },
        { name: "OpenCV", imgpath: "/data/images/opencv.svg", proficiency: 1 },
      ],
    },
    {
      group: "Others",
      content: [
        { name: "CMake", imgpath: "/data/images/cmake.svg", proficiency: 1 },
        { name: "Poetry", imgpath: "/data/images/poetry.svg", proficiency: 1 },
        { name: "NPM", imgpath: "/data/images/npm.svg", proficiency: 1 },
        { name: "JWT", imgpath: "/data/images/jwt.svg", proficiency: 1 },
        {
          name: "Postman",
          imgpath: "/data/images/postman.svg",
          proficiency: 1,
        },
        {
          name: "Swagger",
          imgpath: "/data/images/swagger.svg",
          proficiency: 1,
        },
        {
          name: "Nodemon",
          imgpath: "/data/images/nodemon.svg",
          proficiency: 1,
        },
        { name: "Cuda", imgpath: "/data/images/cuda.svg", proficiency: 1 },
        { name: "SDL", imgpath: "/data/images/SDL.svg", proficiency: 1 },
        { name: "OpenGL", imgpath: "/data/images/opengl.svg", proficiency: 1 },
        { name: "Unity", imgpath: "/data/images/Unity.svg", proficiency: 1 },
        { name: "Qiskit", imgpath: "/data/images/qiskit.svg", proficiency: 1 },
        {
          name: "Selenium",
          imgpath: "/data/images/selenium.svg",
          proficiency: 1,
        },
        { name: "ESLint", imgpath: "/data/images/eslint.svg", proficiency: 1 },
        { name: "Glade", imgpath: "/data/images/glade.svg", proficiency: 1 },
        { name: "GTK", imgpath: "/data/images/gtk.svg", proficiency: 1 },
        { name: "QT", imgpath: "/data/images/qt.svg", proficiency: 1 },
        { name: "Canva", imgpath: "/data/images/canva.svg", proficiency: 1 },
        { name: "Figma", imgpath: "/data/images/figma.svg", proficiency: 1 },
        { name: "Redis", imgpath: "/data/images/redis.svg", proficiency: 1 },
        {
          name: "Apache Kafka",
          imgpath: "/data/images/kafka.svg",
          proficiency: 1,
        },
      ],
    },
  ],
};
export const MyProjects = {
  name: "Projects",
  icon: <Box className="scale-[60%]" />,
  href: "/Projects",
  content: [
    {
      title: "LinguaLink",
      Logo: "/data/logos/LinguaLink.png",
      type: "Web Application",
      description:
        "An AI powered website which introduces a translation feature to remove restrictions of language.",
      startDate: "Apr 2024",
      endDate: "Jun 2024",
      link: "https://github.com/MohammadYehya/LinguaLink",
      tech: [
        "NextJS",
        "ExpressJS",
        "FastAPI",
        "Keras",
        "Tensorflow",
        "Socket.IO",
      ],
    },
    {
      title: "Context-Aware Detection of Mixed Critical Events using Video Classification",
      Logo: null,
      type: "Published Research",
      description:
        "Models created to detect mixed-critical events through computer vision.",
      startDate: "Feb 2024",
      endDate: "Dec 2024",
      link: "https://arxiv.org/abs/2411.15773v1",
      tech: ["Python", "Tensorflow", "Keras", "Numpy", "Scikit-Learn"],
    },
    {
      title: "GridForge",
      Logo: "/data/logos/GridForge.png",
      type: "Framework",
      description:
        "A game engine created using SDL2 & OpenGL to enhance development of isometric games.",
      startDate: "Dec 2024",
      endDate: "Present",
      link: "https://github.com/MohammadYehya/GridForge",
      tech: ["C++", "CMake", "OpenGL", "SDL"],
    },
    {
      title: "Stock Price Predictor App",
      Logo: null,
      type: "Web Application",
      description: "An application to predict the trend of a specific company's market value based on its past and current trend available on yfinance.",
      startDate: "Mar 2024",
      endDate: "May 2024",
      link: "https://github.com/MohammadYehya/Stock-Price-Predictor-App",
      tech: [
        "NextJS",
        "TailwindCSS",
        "Django",
        "Numpy",
        "Pandas",
        "Matplotlib",
        "Scikit-Learn",
        "Keras",
      ],
    },
    {
      title: "Quantum Edge Detection",
      Logo: null,
      type: "Research",
      description:
        "A Quantum Edge Detection algorithm using different Quantum Encoding strategies along with a modified Quantum Hadamard Edge Detection (QHED) Algorithm.",
      startDate: "Oct 2024",
      endDate: "Dec 2024",
      link: "https://github.com/MohammadYehya/Quantum_Edge_Detection",
      tech: ["Python", "Qiskit"],
    },
    {
      title: "Synq ",
      Logo: "/data/logos/Synq.png",
      type: "Web Application",
      description:
        "A real-time collaborative workspace that keeps teams and files in perfect sync. Share folders, edit documents, and collaborate effortlessly with instant updates and secure cloud storage.",
      startDate: "",
      endDate: "Present",
      link: "",
      tech: ["NextJS", "TailwindCSS", "ShadCN/UI", "Supabase", "DrizzleORM", "Socket.IO", "Stripe"],
    },
    {
      title: "Photo Album Application",
      Logo: null,
      type: "Web Application",
      description:
        "An all in a user-friendly interface which includes, user sign-in and sign-out functionalities, photo uploads, and a favorites system.",
      startDate: "",
      endDate: "Present",
      link: "",
      tech: ["NextJS", "TailwindCSS", "Supabase"],
    },
    {
      title: "ComicVault",
      Logo: "/data/logos/ComicVault.png",
      type: "Web Application",
      description:
        "An online library of all comics with realtime tracking of the latest link to where they are updated.",
      startDate: "",
      endDate: "Present",
      link: "https://github.com/MohammadYehya/ComicVault",
      tech: ["NextJS", "TailwindCSS", "ShadCN/UI", "FastAPI", "PostgreSQL", "Selenium"],
    },
    {
      title: "PDF Chatter",
      Logo: null,
      type: "Web Application",
      description:
        "An application where users can upload pdfs and ask an AI chatbot about the contents.",
      startDate: "",
      endDate: "Present",
      link: "",
      tech: ["NextJS", "TailwindCSS", "MongoDB", "AWS"],
    },
    {
      title: "Realtime Face Recognition System",
      Logo: null,
      type: "Web Application",
      description: "An AI-powered system for instant identity verification using deep learning. It detects and recognizes faces from live video feeds with high accuracy,",
      startDate: "",
      endDate: "Present",
      link: "",
      tech: [],
    },
    {
      title: "CoinScope",
      Logo: "/data/logos/CoinScope.png",
      type: "Web Application",
      description: "A realtime cryptocurrency wallet tracker.",
      startDate: "",
      endDate: "Present",
      link: "https://github.com/MohammadYehya/CoinScope",
      tech: ["NextJS", "TailwindCSS", "Apache Kafka", "NodeJS", "Socket.IO", "WebSocket"],
    },
    {
      title: "AutoSprite",
      Logo: "/data/logos/AutoSprite.png",
      type: "Web Application",
      description: "An AI-Based Auto Animator that takes a static sprite and auto-generates animations.",
      startDate: "",
      endDate: "Present",
      link: "https://github.com/MohammadYehya/AutoSprite",
      tech: ["NextJS", "TailwindCSS", "ShadCN/UI","Tensorflow"],
    },
    {
      title: "Convex Hull Generator",
      Logo: null,
      type: "Web Application",
      description: "Generates convex hulls using different algorithms. Also implemented an algorithm explained in a research paper.",
      startDate: "Oct 2023",
      endDate: "Dec 2023",
      link: "https://github.com/MohammadYehya/ConvexHull_Generator",
      tech: ["HTML5", "CSS3", "Javascript"],
    },
    {
      title: "Linux Based Task Manager",
      Logo: null,
      type: "Linux Application",
      description:
        "An application to view used system resources as well as set priorities and processor affinities for different processes.",
      startDate: "Apr 2023",
      endDate: "Jun 2023",
      link: "https://github.com/MohammadYehya/Linux_Based_Task_Manager",
      tech: ["C", "GTK", "Glade", "Shell Script"],
    },
    {
      title: "Huffman Encoding File Compression",
      Logo: null,
      type: "CLI Application",
      description:
        "A file compression application that is based on Huffman Encoding created in C++. It can only encode .txt and .bmp files and is completely CLI based.",
      startDate: "Oct 2022",
      endDate: "Dec 2022",
      link: "https://github.com/MohammadYehya/Huffman_Encoding_File_Compression",
      tech: ["C++"],
    },
    {
      title: "Assembly 2048",
      Logo: null,
      type: "CLI Application",
      description:
        "a simple 2048 replica made on CLI using MASM 8086. Some features include a main menu and movement of the numbers using arrow keys.",
      startDate: "Oct 2022",
      endDate: "Dec 2022",
      link: "https://github.com/MohammadYehya/Assembly_2048",
      tech: ["Assembly Script"],
    },
  ],
};
export const MyExperiences = {
  name: "Experience",
  icon: <BriefcaseBusiness className="scale-[60%]" />,
  href: "/Experience",
  content: [
    {
      logo: "/data/logos/toyotaimc.png",
      title: "Toyota Indus Motor Company",
      positions: ['Junior Full Stack ML Engineer'],
      location: "Karachi, Pakistan",
      startDate: "Oct 2024",
      endDate: "Present",
      desc: "Developed a computer vision-based anomaly detection system with PyTorch and a real-time monitoring dashboard. Built an AI-powered sequence verification system to ensure correct assembly steps, reducing errors and improving efficiency. This minimized defects, optimized production, and enhanced Toyota’s cost-effectiveness.",
    },
    {
      logo: "/data/logos/eyeconai.png",
      title: "EyeconAI",
      positions: ['Intern ML Engineer', 'Junior ML Engineer'],
      location: "Karachi, Pakistan",
      startDate: "July 2024",
      endDate: "Present",
      desc: "Developed a production-ready, full-stack web application for EyeconAI using Next.js, Express.js, and FastAPI, integrating user authentication, API endpoints, and cloud deployment to ensure scalability as a SaaS product. Additionally, built and fine-tuned context-aware machine learning models with TensorFlow and PyTorch, enhancing real-time adaptability across different environments.",
    },
    {
      logo: "/data/logos/syslabai.svg",
      title: "Syslab.ai",
      positions: ['Research Intern'],
      location: "Karachi, Pakistan",
      startDate: "Dec 2023",
      endDate: "June 2024",
      desc: "Expanded datasets using data augmentation techniques (rotation, scaling, noise addition) and preprocessing to improve AI model robustness and accuracy. Designed an intuitive Next.js and TailwindCSS-based dashboard for visualizing trends and evaluating model performance.",
    },
  ],
};
export const MyEducations = {
  name: "Education",
  icon: <GraduationCap className="scale-[60%]" />,
  href: "/Education",
  content: [
    {
      logo: "/data/logos/highbrow.png",
      title: "A Levels",
      location: "Highbrow College, Karachi, Pakistan",
      startDate: "Aug 2019",
      endDate: "July 2021",
      desc: "2A*s, 3As",
    },
    {
      logo: "/data/logos/FAST.png",
      title: "Bachelor Degree of Computer Science",
      location: "FAST NUCES, Karachi, Pakistan",
      startDate: "Sep 2021",
      endDate: "June 2025",
      desc: "GPA 3.91/4",
    },
  ],
};
export const MyResume = {
  name: "Resume",
  icon: <FileText className="scale-[60%]" />,
  href: "/Resume",
  resumePath: "/data/MohammadYehyaHayati_Resumev2.01.pdf" 
};
export const NavItems = {
  MySkills,
  MyProjects,
  MyExperiences,
  MyEducations,
  MyResume,
};
