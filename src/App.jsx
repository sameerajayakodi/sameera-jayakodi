import {
  ArrowRight,
  Award,
  Briefcase,
  ChevronUp,
  Cloud,
  Code,
  Database,
  ExternalLink,
  Github,
  GitMerge,
  GraduationCap,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Palette,
  Phone,
  Send,
  Server,
  Smartphone,
  Star,
  Users,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";

// Helper function to handle smooth scrolling
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Navigation Data
const navLinks = [
  { id: "hero", title: "Home" },
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "skills", title: "Skills" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Contact" },
];

// CV Data (Extracted and structured)
const cvData = {
  personalInfo: {
    name: "Sameera Jayakodi",
    title: "Intern Software Engineer",
    location: "Homagama, Sri Lanka",
    email: "sameerajayakodi456@gmail.com",
    phone: "+94 770309842",
    linkedin: "https://linkedin.com/in/sameerajayakodi",
    github: "https://github.com/sameerajayakodi",
    profileImage: "https://placehold.co/200x200/1F2937/FFFFFF?text=SJ",
  },
  summary:
    "Detail-oriented Computer Science graduate with experience in web development and UI/UX design. Proficient in React, Spring Boot, JavaScript, and Tailwind CSS. Skilled in creating responsive, user-friendly applications with a strong focus on modern design and functionality. Eager to contribute technical expertise and collaborate in a dynamic team environment.",
  skills: [
    {
      name: "React.js",
      icon: <Code size={28} className="text-blue-400" />,
      category: "Frontend",
      level: 90,
    },
    {
      name: "React Native",
      icon: <Smartphone size={28} className="text-blue-400" />,
      category: "Mobile",
      level: 85,
    },
    {
      name: "JavaScript",
      icon: <Code size={28} className="text-yellow-400" />,
      category: "Core",
      level: 95,
    },
    {
      name: "Tailwind CSS",
      icon: <Palette size={28} className="text-cyan-400" />,
      category: "Frontend",
      level: 90,
    },
    {
      name: "Spring Boot",
      icon: <Server size={28} className="text-green-400" />,
      category: "Backend",
      level: 80,
    },
    {
      name: "Node.js",
      icon: <Server size={28} className="text-green-500" />,
      category: "Backend",
      level: 85,
    },
    {
      name: "Express.js",
      icon: <Server size={28} className="text-gray-400" />,
      category: "Backend",
      level: 85,
    },
    {
      name: "Figma",
      icon: <Palette size={28} className="text-purple-400" />,
      category: "Design",
      level: 75,
    },
    {
      name: "Flutter",
      icon: <Smartphone size={28} className="text-blue-500" />,
      category: "Mobile",
      level: 70,
    },
    {
      name: "GitHub",
      icon: <GitMerge size={28} className="text-gray-300" />,
      category: "Tools",
      level: 90,
    },
    {
      name: "MySQL",
      icon: <Database size={28} className="text-orange-400" />,
      category: "Database",
      level: 80,
    },
    {
      name: "MongoDB",
      icon: <Database size={28} className="text-green-500" />,
      category: "Database",
      level: 75,
    },
    {
      name: "AWS",
      icon: <Cloud size={28} className="text-yellow-400" />,
      category: "Cloud",
      level: 70,
    },
  ],
  experience: [
    {
      title: "Freelance React Developer (Contract)",
      company: "Wemixt Software Company - Remote",
      duration: "Feb 2025 - May 2025",
      responsibilities: [
        "Delivered a React.js website for Devisers Immigration within a 2-month deadline, meeting all client UX and functionality requirements.",
        "Collaborated with Wemixt's project manager to refine feature priorities, resolve blockers, and deploy the site using Vercel.",
      ],
    },
  ],
  projects: [
    {
      title: "HireLink - Job & Skill Development Platform",
      description:
        "Developed a multi-role platform for job seekers, employers, and trainers with AI-powered features. Built web and mobile apps for job search, applications, and learning modules. Created REST APIs and managed data with Spring Boot and MySQL. Integrated AI resume parsing (IBM Watson/OpenAI) and a Dialogflow chatbot. Deployed on AWS EC2 and RDS.",
      techStack: [
        "React",
        "React Native",
        "Spring Boot",
        "MySQL",
        "AWS",
        "IBM Watson",
        "Dialogflow",
      ],
      imageUrl: "https://placehold.co/600x400/1F2937/3B82F6?text=HireLink",
      liveLink: "#",
      repoLink: "#",
      featured: true,
    },
    {
      title: "File System Utils - Node.js Library (NPM Package)",
      description:
        "Published a Node.js utility library downloaded by 100+ developers. Boosted file system automation efficiency through fully asynchronous design.",
      techStack: ["Node.js", "NPM"],
      imageUrl: "https://placehold.co/600x400/111827/10B981?text=FS+Utils",
      repoLink: "#",
      featured: false,
    },
    {
      title: "HireSphere - Job Portal Web Application",
      description:
        "Developed RESTful APIs using Express.js and Node.js. Integrated MongoDB Atlas. Designed and implemented an admin panel using React, Vite, and Tailwind CSS. Utilized Clerk for authentication and Cloudinary for media files. Deployed on Vercel.",
      techStack: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Clerk",
        "Cloudinary",
      ],
      imageUrl: "https://placehold.co/600x400/374151/F59E0B?text=HireSphere",
      liveLink: "#",
      repoLink: "#",
      featured: true,
    },
    {
      title: "Auction House - Auction Management System",
      description:
        "Built a full-featured online auction platform. Integrated secure authentication (JWT/OAuth). Created dynamic auction listing, bidding, and search features using React and REST APIs. Implemented admin dashboard. Ensured responsive design using Tailwind CSS. Backend with ASP.NET Core, Entity Framework, SQL Server.",
      techStack: [
        "React",
        "Tailwind CSS",
        "ASP.NET Core",
        "Entity Framework",
        "SQL Server",
      ],
      imageUrl: "https://placehold.co/600x400/1F2937/EF4444?text=Auction+House",
      repoLink: "#",
      featured: false,
    },
  ],
  education: [
    {
      degree: "BSc (Hons) Computer Science",
      institution: "NSBM Green University",
      duration: "Oct 2022 - Dec 2026 (Expected)",
      details: [
        "Coursework: Software Engineering, Data Structures, Algorithms, Database Systems.",
        "Key Areas: Artificial Intelligence, Cybersecurity, Cloud Computing.",
        "Focus: Systems Design, Machine Learning, Industry Training Projects.",
      ],
    },
    {
      degree: "Advanced Fullstack Developer Program",
      institution: "Academy of Computer Programming and Training (ACPT)",
      duration: "Jun 2024 - Dec 2024",
      details: [
        "Focused on web, mobile, and desktop application development and deployment.",
        "Gained strong practical skills in professional software engineering and real-world project implementation.",
      ],
    },
  ],
  certifications: [
    {
      name: "Python for Beginners & Python Programming",
      issuer: "University of Moratuwa",
      date: "Jan 2022 - Jan 2023",
    },
    {
      name: "Web Design for Beginners & Front-End Web Development Using Angular",
      issuer: "University of Moratuwa",
      date: "Jan 2022 - Jan 2023",
    },
    {
      name: "Server-side web programming Using Node & Express Js",
      issuer: "University of Moratuwa",
      date: "Jan 2022 - Jan 2023",
    },
    {
      name: "Professional Practice in Software Development",
      issuer: "University of Moratuwa",
      date: "Jan 2022 - Jan 2023",
      details: "Soft Skills, Technical Skills, Capstone Project",
    },
  ],
  leadership: [
    {
      role: "Executive Committee Member",
      organization: "CSSL GenZ Chapter in NSBM Green University",
      duration: "Aug 2024 - Dec 2025",
      responsibilities: [
        "Organized events promoting professional development in computer science.",
        "Fostered student engagement and knowledge sharing.",
      ],
    },
    {
      role: "Event Organizing Committee Member",
      organization:
        "Department Circle of Computer and Data Science in NSBM Green University (Nexora Event)",
      duration: "Aug 2024 - Dec 2025",
      responsibilities: [
        "Contributed to planning and execution of the Nexora tech event.",
      ],
    },
  ],
};

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}</span>;
};

// Navbar Component
const Navbar = ({ onLinkClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (id) => {
    onLinkClick(id);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-2xl shadow-2xl border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl px-6 lg:px-8">
        <div className="flex items-center   h-20">
          <div className="flex items-center"></div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavLinkClick(link.id)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                      : "text-gray-200 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.title}
                </button>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-3 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? "text-gray-300 hover:bg-gray-800"
                  : "text-gray-200 hover:bg-white/10"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-gray-800">
          <div className="px-6 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavLinkClick(link.id)}
                className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300"
              >
                {link.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Section Title Component
const SectionTitle = ({ title, subtitle, icon }) => (
  <div className="text-center mb-16">
    <div className="flex items-center justify-center mb-6">
      {icon &&
        React.cloneElement(icon, { size: 40, className: "text-blue-400" })}
    </div>
    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{title}</h2>
    {subtitle && (
      <p className="text-xl text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);

// Hero Section Component
const Hero = () => (
  <section
    id="hero"
    className="min-h-screen flex items-center relative bg-black font-['Poppins']"
  >
    {/* Background image */}
    <div className="absolute inset-0 z-0">
      <img
        src="../src/assets/back2.jpg"
        alt="Peaceful Background"
        className="w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-black/70"></div>
    </div>

    {/* Content */}
    <div
      className="relative w-full max-w-7xl px-6 sm:px-10 md:px-16 lg:px-20 text-left z-10 py-20 sm:py-24 
      flex flex-col items-center sm:items-start text-center sm:text-left"
    >
      <div className="animate-fadeInUp">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-white mb-4 tracking-wide leading-tight uppercase">
          I'M{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-indigo-600 to-blue-900 border-b-4 border-white">
            {cvData.personalInfo.name.split(" ")[0]}
          </span>
        </h1>

        <p className="text-2xl sm:text-3xl text-gray-300 font-medium mb-4 tracking-wide">
          {cvData.personalInfo.title}
        </p>

        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed">
          {cvData.summary.substring(0, 180)}...
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-start mb-12">
          <button
            onClick={() => scrollToSection("projects")}
            className="group flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold px-14 py-4 rounded-xl text-lg shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span className="mr-3">View My Work</span>
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="group flex items-center justify-center border border-white/20 bg-black/40 text-white font-bold px-14 py-4 rounded-xl text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:scale-105"
          >
            <span className="mr-3">Get In Touch</span>
            <Send
              className="group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </button>
        </div>

        {/* Social icons */}
        <div className="flex justify-center sm:justify-start space-x-6 sm:space-x-10">
          {[
            {
              href: cvData.personalInfo.linkedin,
              icon: Linkedin,
              label: "LinkedIn",
            },
            {
              href: cvData.personalInfo.github,
              icon: Github,
              label: "GitHub",
            },
            {
              href: `mailto:${cvData.personalInfo.email}`,
              icon: Mail,
              label: "Email",
            },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white/10 backdrop-blur-md rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-xl"
              aria-label={label}
            >
              <Icon
                className="text-white group-hover:text-black transition-colors"
                size={28}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// About Section Component
const About = () => (
  <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <SectionTitle
        title="About Me"
        subtitle="Passionate developer crafting digital experiences"
        icon={<Users />}
      />

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">
              A Bit About Myself
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {cvData.summary}
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  text: cvData.personalInfo.email,
                  href: `mailto:${cvData.personalInfo.email}`,
                },
                {
                  icon: Phone,
                  text: cvData.personalInfo.phone,
                  href: `tel:${cvData.personalInfo.phone.replace(/\s/g, "")}`,
                },
                { icon: MapPin, text: cvData.personalInfo.location },
              ].map(({ icon: Icon, text, href }, index) => (
                <div key={index} className="flex items-center group">
                  <div className="p-3 bg-blue-500/20 rounded-xl mr-4 group-hover:bg-blue-500/30 transition-colors">
                    <Icon size={20} className="text-blue-400" />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-gray-300 font-medium">{text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            {[
              { number: 15, label: "Projects\nCompleted", suffix: "+" },
              { number: 3, label: "Years\nExperience", suffix: "+" },
              { number: 100, label: "NPM\nDownloads", suffix: "+" },
            ].map(({ number, label, suffix }, index) => (
              <div
                key={index}
                className="text-center bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  <AnimatedCounter end={number} />
                  {suffix}
                </div>
                <div className="text-sm text-gray-400 font-medium whitespace-pre-line">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="relative">
            <img
              src="https://placehold.co/600x700/111827/3B82F6?text=Professional+Photo"
              alt="Sameera Jayakodi"
              className="rounded-3xl shadow-2xl w-full object-cover border-4 border-gray-700"
            />
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-2xl shadow-xl">
              <Star className="text-white" size={32} />
            </div>
          </div>

          {/* Leadership */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-700">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center">
              <Award className="mr-3 text-blue-400" size={24} />
              Leadership & Activities
            </h4>
            <div className="space-y-6">
              {cvData.leadership.map((activity, index) => (
                <div
                  key={index}
                  className="bg-gray-700/50 p-6 rounded-2xl border border-gray-600"
                >
                  <h5 className="font-bold text-blue-400 mb-2">
                    {activity.role}
                  </h5>
                  <p className="text-sm text-gray-300 mb-3 font-medium">
                    {activity.organization}
                  </p>
                  <p className="text-xs text-gray-400 mb-3">
                    {activity.duration}
                  </p>
                  <ul className="space-y-2">
                    {activity.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-300 flex items-start"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Experience Section Component
const Experience = () => (
  <section
    id="experience"
    className="py-24 bg-gradient-to-b from-gray-900 to-black"
  >
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <SectionTitle
        title="Work Experience"
        subtitle="Building solutions that make a difference"
        icon={<Briefcase />}
      />

      <div className="max-w-4xl mx-auto">
        {cvData.experience.map((job, index) => (
          <div key={index} className="relative pl-12 pb-12 group">
            <div className="absolute left-0 top-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-800 shadow-lg group-hover:scale-125 transition-transform"></div>
            <div className="absolute left-3 top-6 w-0.5 h-full bg-gradient-to-b from-blue-400/50 to-transparent"></div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-700 group-hover:shadow-3xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-2xl font-bold text-white mb-2 sm:mb-0">
                  {job.title}
                </h3>
                <span className="text-sm font-medium text-blue-400 bg-blue-500/20 px-4 py-2 rounded-full">
                  {job.duration}
                </span>
              </div>
              <p className="text-lg text-blue-400 font-semibold mb-6">
                {job.company}
              </p>
              <ul className="space-y-4">
                {job.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Projects Section Component
const Projects = () => (
  <section
    id="projects"
    className="py-24 bg-gradient-to-b from-black to-gray-900"
  >
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <SectionTitle
        title="Featured Projects"
        subtitle="Innovative solutions built with passion"
        icon={<Lightbulb />}
      />

      {/* Featured Projects */}
      <div className="mb-16 space-y-16">
        {cvData.projects
          .filter((p) => p.featured)
          .map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative group">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="rounded-3xl shadow-2xl w-full object-cover transition-transform duration-500 group-hover:scale-105 border border-gray-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>

              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Star className="text-blue-400" size={24} />
                  <span className="text-blue-400 font-semibold">
                    Featured Project
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4">
                  {project.liveLink && project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Live Demo
                      <ExternalLink
                        size={16}
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                      />
                    </a>
                  )}
                  {project.repoLink && project.repoLink !== "#" && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center border-2 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white hover:border-gray-500 px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      GitHub
                      <Github
                        size={16}
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Other Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {cvData.projects
          .filter((p) => !p.featured)
          .map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-700 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  {project.liveLink && project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
                    >
                      Live Demo
                      <ExternalLink
                        size={14}
                        className="ml-1 group-hover:translate-x-1 transition-transform"
                      />
                    </a>
                  )}
                  {project.repoLink && project.repoLink !== "#" && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center text-gray-400 hover:text-gray-200 font-medium text-sm transition-colors"
                    >
                      GitHub
                      <Github
                        size={14}
                        className="ml-1 group-hover:translate-x-1 transition-transform"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  </section>
);

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Mobile",
    "Database",
    "Tools",
    "Design",
    "Cloud",
  ];

  const skills = [
    // Frontend
    {
      name: "Angular",
      category: "Frontend",
      icon: "🅰️",
      color: "from-red-500 to-red-600",
    },
    {
      name: "React",
      category: "Frontend",
      icon: "⚛️",
      color: "from-blue-400 to-blue-500",
    },
    {
      name: "Vue.js",
      category: "Frontend",
      icon: "💚",
      color: "from-green-400 to-green-500",
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: "💚",
      color: "from-green-500 to-green-600",
    },
    {
      name: "PHP",
      category: "Backend",
      icon: "🐘",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Next.js",
      category: "Frontend",
      icon: "▲",
      color: "from-gray-700 to-gray-800",
    },
    {
      name: "Express",
      category: "Backend",
      icon: "🚂",
      color: "from-gray-600 to-gray-700",
    },
    {
      name: "AWS",
      category: "Cloud",
      icon: "☁️",
      color: "from-orange-400 to-orange-500",
    },
    {
      name: "Python",
      category: "Backend",
      icon: "🐍",
      color: "from-yellow-400 to-blue-500",
    },
    {
      name: "Flutter",
      category: "Mobile",
      icon: "💙",
      color: "from-blue-400 to-blue-600",
    },

    // Second row
    {
      name: "CobiT",
      category: "Tools",
      icon: "📊",
      color: "from-gray-600 to-gray-700",
    },
    {
      name: "MongoDB",
      category: "Database",
      icon: "🍃",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Joomla",
      category: "Tools",
      icon: "🔧",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "MySQL",
      category: "Database",
      icon: "🐬",
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "NIST",
      category: "Tools",
      icon: "🛡️",
      color: "from-red-500 to-red-600",
    },
    {
      name: "Adobe AI",
      category: "Design",
      icon: "🎨",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Shopify",
      category: "Tools",
      icon: "🛍️",
      color: "from-green-500 to-green-600",
    },
    {
      name: "GCP",
      category: "Cloud",
      icon: "☁️",
      color: "from-blue-500 to-green-500",
    },

    // Third row
    {
      name: "WordPress",
      category: "Tools",
      icon: "📝",
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "Java",
      category: "Backend",
      icon: "☕",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Swift",
      category: "Mobile",
      icon: "🦉",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Figma",
      category: "Design",
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Docker",
      category: "Tools",
      icon: "🐳",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Kubernetes",
      category: "Tools",
      icon: "⚙️",
      color: "from-blue-600 to-purple-600",
    },
    {
      name: "Azure",
      category: "Cloud",
      icon: "☁️",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "CloudFlare",
      category: "Cloud",
      icon: "🌐",
      color: "from-orange-400 to-orange-500",
    },
  ];

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section className="py-16 bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg">
            Digital solutions that grow with your business.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center h-16">
                <div className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap border border-gray-700">
                  {skill.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional empty slots to match the grid pattern */}
        {filteredSkills.length < 40 && (
          <>
            {Array.from({ length: 40 - filteredSkills.length }).map(
              (_, index) => (
                <div
                  key={`empty-${index}`}
                  className="hidden lg:block bg-gray-800/30 rounded-xl h-24 border-2 border-dashed border-gray-700"
                ></div>
              )
            )}
          </>
        )}
      </div>
    </section>
  );
};

// Education Section Component
const Education = () => (
  <section
    id="education"
    className="py-24 bg-gradient-to-b from-black to-gray-900"
  >
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <SectionTitle
        title="Education & Certifications"
        subtitle="Continuous learning and growth"
        icon={<GraduationCap />}
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <div className="p-3 bg-blue-500/20 rounded-xl mr-4">
              <GraduationCap size={28} className="text-blue-400" />
            </div>
            Academic Background
          </h3>

          <div className="space-y-8">
            {cvData.education.map((edu, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-700 hover:shadow-3xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-blue-400 mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-lg text-white font-semibold mb-2">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-blue-400 bg-blue-500/20 px-4 py-2 rounded-full whitespace-nowrap ml-4">
                    {edu.duration}
                  </span>
                </div>

                <ul className="space-y-3">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <div className="p-3 bg-blue-500/20 rounded-xl mr-4">
              <Award size={28} className="text-blue-400" />
            </div>
            Professional Certifications
          </h3>

          <div className="space-y-6">
            {cvData.certifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl group-hover:scale-110 transition-transform">
                    <Award size={20} className="text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-blue-400 mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-gray-300 font-medium mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-400">{cert.date}</p>
                    {cert.details && (
                      <p className="text-sm text-gray-400 mt-2 italic">
                        {cert.details}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Contact Section Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.email &&
      formData.subject &&
      formData.message
    ) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        console.log("Form data submitted:", formData);
        setIsSubmitted(true);
        setIsLoading(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 1000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title="Let's Work Together"
          subtitle="Ready to bring your ideas to life"
          icon={<Send />}
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Have a project in mind, want to collaborate, or just want to say
                hi? I'd love to hear from you! Let's create something amazing
                together.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    value: cvData.personalInfo.email,
                    href: `mailto:${cvData.personalInfo.email}`,
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    value: cvData.personalInfo.phone,
                    href: `tel:${cvData.personalInfo.phone.replace(/\s/g, "")}`,
                    color: "from-green-500 to-green-600",
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    value: cvData.personalInfo.location,
                    color: "from-purple-500 to-purple-600",
                  },
                ].map(({ icon: Icon, title, value, href, color }, index) => (
                  <div
                    key={index}
                    className="group flex items-center space-x-4"
                  >
                    <div
                      className={`p-4 bg-gradient-to-r ${color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                        {title}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-lg font-semibold text-white hover:text-blue-400 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-white">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-700">
              <h4 className="text-xl font-bold text-white mb-6">
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                {[
                  {
                    href: cvData.personalInfo.linkedin,
                    icon: Linkedin,
                    label: "LinkedIn",
                    color: "hover:bg-blue-600",
                  },
                  {
                    href: cvData.personalInfo.github,
                    icon: Github,
                    label: "GitHub",
                    color: "hover:bg-gray-600",
                  },
                  {
                    href: `mailto:${cvData.personalInfo.email}`,
                    icon: Mail,
                    label: "Email",
                    color: "hover:bg-red-600",
                  },
                ].map(({ href, icon: Icon, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`group p-4 bg-gray-700 ${color} rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 hover:text-white`}
                    aria-label={label}
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-700">
            {isSubmitted && (
              <div className="mb-8 p-6 bg-gradient-to-r from-green-900/50 to-emerald-900/50 text-green-400 rounded-2xl border border-green-500/50 shadow-lg">
                <div className="flex items-center">
                  <div className="p-2 bg-green-500/20 rounded-full mr-4">
                    <Send className="text-green-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Message Sent!</h4>
                    <p className="text-sm">
                      Thank you for reaching out. I'll get back to you soon!
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-300 mb-3"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 rounded-2xl border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-300 mb-3"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 rounded-2xl border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-300 mb-3"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 rounded-2xl border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-300 mb-3"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                  className="w-full px-4 py-4 rounded-2xl border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 disabled:transform-none flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-gradient-to-r from-gray-900 to-black text-gray-400 py-16 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center space-y-8">
        <div className="flex justify-center space-x-6">
          {[
            {
              href: cvData.personalInfo.linkedin,
              icon: Linkedin,
              label: "LinkedIn",
            },
            { href: cvData.personalInfo.github, icon: Github, label: "GitHub" },
            {
              href: `mailto:${cvData.personalInfo.email}`,
              icon: Mail,
              label: "Email",
            },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group p-4 bg-gray-800 hover:bg-blue-600 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
              aria-label={label}
            >
              <Icon className="group-hover:text-white" size={24} />
            </a>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-lg font-medium mb-2 text-gray-300">
            &copy; {new Date().getFullYear()} {cvData.personalInfo.name}. All
            rights reserved.
          </p>
          <p className="text-gray-400">
            Crafted with <span className="text-red-400">♥</span> using React &
            Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  </footer>
);

// Back to Top Button Component
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-2xl shadow-2xl transition-all duration-300 z-50 transform hover:scale-110 hover:-translate-y-1"
        aria-label="Back to top"
      >
        <ChevronUp size={24} />
      </button>
    )
  );
};

// Main App Component
export default function App() {
  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  return (
    <div className="bg-black text-gray-300 antialiased font-sans overflow-x-hidden">
      <Navbar onLinkClick={handleNavClick} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      <BackToTopButton />

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, sans-serif;
          background: #000000;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #1f2937;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }

        /* Selection color */
        ::selection {
          background: #3b82f6;
          color: white;
        }

        ::-moz-selection {
          background: #3b82f6;
          color: white;
        }
      `}</style>
    </div>
  );
}
