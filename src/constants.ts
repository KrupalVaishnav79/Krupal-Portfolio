import { 
  Code2, 
  Database, 
  Globe, 
  Layers, 
  Layout, 
  Server, 
  Cpu, 
  Zap,
  Cloud, 
  ShieldCheck, 
  Terminal,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  Download,
  Briefcase,
  GraduationCap,
  Award
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '#contact' },
];

export const PERSONAL_INFO = {
  name: "Krupal Vaishnav",
  role: "Full Stack Developer",
  specialization: ".NET + React",
  email: "v.krupal01@gmail.com",
  phone: "+91 99790 31263",
  whatsapp: "919979031263", // Format: countrycode + number without '+'
  resumeUrl: "/resume.pdf", // Path to the file in public folder
  location: "Gandhinagar, Gujarat",
  linkedin: "https://linkedin.com/in/krupal-vaishnav",
  github: "https://github.com", // Placeholder
  blog: "https://reactflux.hashnode.dev",
  summary: "Results-driven Full Stack Developer with 2+ years of experience delivering enterprise ERP, CRM, and SaaS solutions. Adept at building REST APIs, migrating legacy systems, and developing productivity integrations using clean architecture and performance optimization."
};

export const SKILLS = [
  {
    category: "Backend & API",
    icon: Server,
    items: ["ASP.NET Core", ".NET Framework", "C#", "Node.js", "REST APIs", "Clean Architecture", "JWT / RBAC / SSO"]
  },
  {
    category: "Frontend Development",
    icon: Layout,
    items: ["React.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS", "Kendo UI", "HTML5 / CSS3"]
  },
  {
    category: "Database",
    icon: Database,
    items: ["SQL Server", "PostgreSQL", "MongoDB", "Entity Framework Core", "Query Optimization"]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    items: ["Azure", "IIS", "CI/CD (Basic)", "Git / GitHub", "VS Code", "Linux (Ubuntu)"]
  }
];

export const EXPERIENCE = [
  {
    company: "Betanet Consultancy Pvt Ltd",
    role: "Senior Software Developer",
    period: "Dec 2024 – Present",
    location: "Gandhinagar, Gujarat",
    description: [
      "Designed and maintained enterprise ERP and CRM modules using ASP.NET Core and SQL Server.",
      "Improved system performance by identifying and rewriting bottleneck SQL queries, reducing response time.",
      "Managed deployment pipelines on IIS with DNS configuration for multiple client environments.",
      "Implemented Azure SSO and RBAC-based authentication for enhanced security."
    ]
  },
  {
    company: "ALPS Logic Infotech",
    role: "Full Stack Developer",
    period: "Oct 2023 – Dec 2024",
    location: "Gandhinagar, Gujarat",
    description: [
      "Migrated the Makana data science platform from Angular to React + TypeScript.",
      "Developed a Microsoft Teams Ticket Manager using ASP.NET Core and EF Core.",
      "Built a Microsoft Word Add-in for document automation and data integration.",
      "Optimized UI and API interactions improving responsiveness and user experience."
    ]
  },
  {
    company: "Tech Terminologie",
    role: "Web Developer",
    period: "May 2023 – Oct 2023",
    location: "Ahmedabad, Gujarat",
    description: [
      "Developed reusable React front-end components with HTML5 and CSS3.",
      "Resolved UI performance bottlenecks and design inconsistencies.",
      "Supported reusable component structure to maintain consistent UI quality."
    ]
  }
];

export const PROJECTS = [
  {
    slug: "makana-data-science",
    title: "Makana – Data Science Platform",
    tech: ["React", "TypeScript", "ASP.NET Core", "Azure", "Kendo UI"],
    description: "Migrated frontend from Angular to React + TypeScript; integrated secure backend APIs and implemented Azure SSO with RBAC access control for enterprise-level data processing.",
    longDescription: "Makana is a sophisticated data science platform designed for enterprise-level data processing and visualization. The primary challenge was migrating a large-scale Angular codebase to a modern React + TypeScript architecture without disrupting ongoing operations. I led the frontend migration, ensuring type safety and improved performance while implementing complex Kendo UI components for data-heavy dashboards.",
    features: [
      "Full migration from Angular to React/TypeScript",
      "Enterprise-grade Azure SSO integration",
      "Role-Based Access Control (RBAC) implementation",
      "High-performance data visualization with Kendo UI",
      "Optimized REST API consumption layers"
    ],
    challenges: "Handling state management across a massive data-driven UI and ensuring seamless transition for existing users while improving overall application responsiveness.",
    icon: Cpu,
    image: "https://picsum.photos/seed/makana/1200/600"
  },
  {
    slug: "real-estate-platform",
    title: "Real Estate Listing Platform",
    tech: ["React", "ASP.NET Core", "MongoDB", "Tailwind CSS"],
    description: "Developed a full-stack portal with admin controls, dynamic property listings, inquiry-to-lead system, and real-time search and filtering.",
    longDescription: "A comprehensive real estate solution that bridges the gap between property owners and potential buyers. The platform features a robust admin dashboard for managing listings, a sophisticated search engine with multi-criteria filtering, and an automated lead generation system that captures and routes inquiries in real-time.",
    features: [
      "Dynamic property listing management",
      "Advanced real-time search and filtering engine",
      "Automated inquiry-to-lead conversion system",
      "Responsive admin dashboard for content management",
      "NoSQL database integration for flexible data structures"
    ],
    challenges: "Implementing a highly performant search and filtering system over a growing database of properties while maintaining a clean, intuitive user interface.",
    icon: Globe,
    image: "https://picsum.photos/seed/realestate/1200/600"
  },
  {
    slug: "ms-teams-ticket-manager",
    title: "MS Teams Ticket Manager",
    tech: ["ASP.NET Core", "EF Core", "Microsoft Teams SDK"],
    description: "Built a productivity tool embedded inside Microsoft Teams for managing tickets and tasks, improving team productivity and tracking.",
    longDescription: "This productivity integration allows teams to manage their internal support tickets and tasks without leaving the Microsoft Teams environment. By leveraging the Teams SDK, I built a seamless experience that feels native to the platform, significantly reducing context-switching for team members and improving overall task completion rates.",
    features: [
      "Native Microsoft Teams integration",
      "Real-time ticket tracking and notifications",
      "Automated task assignment logic",
      "Comprehensive reporting dashboard for managers",
      "Secure authentication via Microsoft Graph API"
    ],
    challenges: "Working within the constraints of the Microsoft Teams SDK and ensuring consistent performance across desktop, web, and mobile versions of the Teams client.",
    icon: Layout,
    image: "https://picsum.photos/seed/teams/1200/600"
  },
  {
    slug: "crm-financial-systems",
    title: "CRM & Financial Systems",
    tech: ["C#", ".NET Core", "PostgreSQL", "MongoDB"],
    description: "Developed centralized CRM and financial management systems to manage student lifecycles and track income/transactions across multiple branches.",
    longDescription: "A mission-critical system designed for educational institutions to manage their entire student lifecycle and financial health. The system handles everything from initial lead capture and enrollment to fee collection and multi-branch financial reporting. It uses a hybrid database approach, leveraging PostgreSQL for relational financial data and MongoDB for flexible student profiles.",
    features: [
      "End-to-end student lifecycle management",
      "Multi-branch financial tracking and reporting",
      "Hybrid database architecture (SQL + NoSQL)",
      "Automated fee reminder and collection system",
      "Comprehensive audit logs for financial transactions"
    ],
    challenges: "Ensuring data consistency across multiple branches and maintaining high availability for financial operations while handling complex reporting requirements.",
    icon: ShieldCheck,
    image: "https://picsum.photos/seed/crm/1200/600"
  }
];

export const SERVICES = [
  {
    title: "Custom ERP & CRM",
    desc: "End-to-end development of enterprise-grade management systems tailored to your business workflows.",
    icon: Layers
  },
  {
    title: "API Development",
    desc: "Building secure, scalable, and high-performance RESTful APIs using ASP.NET Core and Clean Architecture.",
    icon: Server
  },
  {
    title: "Legacy Migration",
    desc: "Modernizing outdated systems to modern tech stacks (React + .NET) without data loss or downtime.",
    icon: Zap
  },
  {
    title: "Performance Audit",
    desc: "Identifying bottlenecks in your database or backend logic and implementing optimizations for speed.",
    icon: Cpu
  }
];

export const PROCESS = [
  {
    step: "01",
    title: "Discovery",
    desc: "Understanding your business goals, requirements, and user needs to build a solid roadmap."
  },
  {
    step: "02",
    title: "Architecture",
    desc: "Designing a scalable database schema and clean backend structure for long-term stability."
  },
  {
    step: "03",
    title: "Development",
    desc: "Iterative building with regular updates, focusing on performance and user experience."
  },
  {
    step: "04",
    title: "Deployment",
    desc: "Smooth release on Azure/IIS with monitoring and post-launch support for your peace of mind."
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering – Instrumentation & Control",
    institution: "Government Engineering College, Gandhinagar",
    period: "Aug 2019 – Jun 2023"
  }
];
