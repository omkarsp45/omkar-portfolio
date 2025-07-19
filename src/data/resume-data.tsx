import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Omkar Patil",
  initials: "OP",
  location: "Mumbai, Maharashtra, India",
  locationLink: "https://www.google.com/maps/place/Mumbai",
  about: "Aspiring Software Engineer with a passion for Full Stack Development, Data Science, and DevOps.",
  summary: (
    <>
      Final-year Information Technology student at VJTI with hands-on experience in building scalable full-stack web applications and developing data-driven models. 
      <br />
      🚀 I love building full-stack applications and exploring modern DevOps tools.
      <br />
      ⚙️ I work with JavaScript, TypeScript, C++, Python, Go, Rust, and Java.  
      <br />
      💡 Passionate about real-world problem solving and impactful tech.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/221701467",
  personalWebsiteUrl: "",
  contact: {
    email: "omkar.spatil@outlook.com",
    tel: "+91 9322090208",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/omkarsp45",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/omkarsp45",
        icon: "linkedin",
      },
      {
        name: "X",
        url: "https://x.com/omkarsp23",
        icon: "x",
      },
    ],
  },
  education: [
    {
      school: "Veermata Jijabai Technological Institute, Mumbai",
      degree: "Bachelor of Technology in Information Technology",
      start: "2022",
      end: "Present",
    },
  ],
  work: [
    {
      company: "NPCI",
      link: "https://www.npci.org.in",
      badges: ["Internship", "Data Science", "Fraud Detection", "UPI"],
      title: "Data Science Intern",
      start: "May 2025",
      end: "July 2025",
      description: (
        <>
          Interned in the Market Innovation department at NPCI. Focused on data preprocessing, feature engineering, and reporting workflows related to fraud analytics in UPI transactions. Gained hands-on experience in applying data science practices within a large-scale payments infrastructure.
        </>
      ),
    },
  ],
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "Data Science",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "System Design",
  ],
  projects: [
    {
      title: "No Big Project as such to showcase :(",
      techStack: [""],
      description:
        "",
      link: {
        label: "",
        href: "https://monito.dev/",
      },
    },
  ],
} as const;
