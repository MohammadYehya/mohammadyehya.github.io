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
      ],
    },
    {
      group: "DevOps & Cloud",
      content: [
        { name: "Azure", imgpath: "/data/images/azure.svg", proficiency: 1 },
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
        { name: "MySQL", imgpath: "/data/images/mysql.svg", proficiency: 1 },
      ],
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
        { name: "OpenGL", imgpath: "/data/images/opengl.svg", proficiency: 1 },
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
      type: "Website",
      description:
        "An AI powered website which introduces a translation feature to remove restrictions of language.",
      startDate: "Apr 2024",
      endDate: "Jun 2024",
      link: "https://github.com/MohammadYehya/LinguaLink",
      tech: ["NextJS", "ExpressJS", "FastAPI", "Keras", "Tensorflow", "Socket.IO"],
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
      tech: ["C++", "CMake", "OpenGL"],
    },
    {
      title: "Stock Price Predictor App",
      Logo: null,
      type: "Website",
      description: "-",
      startDate: "Mar 2024",
      endDate: "May 2024",
      link: "https://github.com/MohammadYehya/Stock-Price-Predictor-App",
      tech: ["NextJS", "TailwindCSS", "Django", "Numpy", "Pandas", "Matplotlib", "Scikit-Learn", "Keras"],
    },
    {
      title: "Quantum Edge Detection",
      Logo: null,
      type: "Research",
      description: "A Quantum Edge Detection algorithm using different Quantum Encoding strategies along with a modified Quantum Hadamard Edge Detection (QHED) Algorithm.",
      startDate: "Oct 2024",
      endDate: "Dec 2024",
      link: "https://github.com/MohammadYehya/Quantum_Edge_Detection",
      tech: [],
    },
    {
      title: "Realtime Face Recognition System",
      Logo: null,
      type: "Website",
      description: "-",
      startDate: "",
      endDate: "Present",
      link: "",
      tech: [],
    },
    {
      title: "Linux Based Task Manager",
      Logo: null,
      type: "Linux Application",
      description: "An application to view used system resources as well as set priorities and processor affinities for different processes.",
      startDate: "Apr 2023",
      endDate: "Jun 2023",
      link: "https://github.com/MohammadYehya/Linux_Based_Task_Manager",
      tech: ["C", "GTK", "Glade", "Shell Script"],
    },
    {
      title: "Huffman Encoding File Compression",
      Logo: null,
      type: "CLI Application",
      description: "A file compression application that is based on Huffman Encoding created in C++. It can only encode .txt and .bmp files and is completely CLI based.",
      startDate: "Oct 2022",
      endDate: "Dec 2022",
      link: "https://github.com/MohammadYehya/Huffman_Encoding_File_Compression",
      tech: ["C++"],
    },
  ],
};
export const MyExperiences = {
  name: "Experience",
  icon: <BriefcaseBusiness className="scale-[60%]" />,
  href: "/Experience",
  content: [{ title: "test" }],
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
      startDate: "",
      endDate: "",
      desc: "2A*s, 3As",
    },
    {
      logo: '/data/logos/FAST.png',
      title: "Bachelor Degree of Computer Science",
      location: "FAST NUCES, Karachi, Pakistan",
      startDate: "",
      endDate: "",
      desc: "GPA 3.91/4",
    },
  ],
};
export const Resume = {
  name: "Resume",
  icon: <FileText className="scale-[60%]" />,
  href: "/Resume",
  content: [{ title: "test" }],
};
export const NavItems = {
  MySkills,
  MyProjects,
  MyExperiences,
  MyEducations,
  Resume,
};
