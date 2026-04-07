import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Download, 
  ChevronRight, 
  Menu, 
  X, 
  MapPin, 
  Calendar,
  ArrowRight,
  Terminal,
  Layout,
  Database,
  Briefcase,
  Globe,
  Cpu,
  ShieldCheck,
  Code2,
  Layers,
  Server,
  Zap,
  MousePointer2,
  Award,
  Sparkles,
  Rocket,
  CheckCircle2,
  MessageCircle,
  FileText
} from 'lucide-react';
import { 
  NAV_LINKS, 
  PERSONAL_INFO, 
  SKILLS, 
  EXPERIENCE, 
  PROJECTS, 
  EDUCATION,
  SERVICES,
  PROCESS
} from './constants';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999] hidden md:block"
      animate={{
        x: mousePos.x - 12,
        y: mousePos.y - 12,
        scale: isHovering ? 2 : 1,
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.5 }}
    >
      <div className={`w-full h-full rounded-full border border-primary/40 flex items-center justify-center transition-colors ${isHovering ? 'bg-primary/5' : 'bg-transparent'}`}>
        <div className="w-1 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavItem = ({ link, i }: any) => {
    const content = (
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        className="text-sm font-medium text-slate-400 hover:text-white transition-all relative group cursor-pointer"
      >
        {link.name}
        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
      </motion.span>
    );

    if (isHome) {
      return <a href={link.href}>{content}</a>;
    }
    return <Link to={`/${link.href}`}>{content}</Link>;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-bg/60 backdrop-blur-2xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/20">
              K
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-display font-bold text-white tracking-tight leading-none">Krupal<span className="text-primary">.</span></div>
              <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase mt-1">Full Stack Dev</div>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link, i) => (
            <NavItem key={link.name} link={link} i={i} />
          ))}
          <motion.a
            href={isHome ? "#contact" : "/#contact"}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="btn-primary !py-2.5 !px-6 text-sm"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2 glass rounded-xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-bg/95 backdrop-blur-3xl border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {NAV_LINKS.map((link) => {
                const content = (
                  <span className="text-xl font-display font-bold text-slate-300 hover:text-primary transition-colors">
                    {link.name}
                  </span>
                );
                if (isHome) {
                  return <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}>{content}</a>;
                }
                return <Link key={link.name} to={`/${link.href}`} onClick={() => setIsOpen(false)}>{content}</Link>;
              })}
              <a href={isHome ? "#contact" : "/#contact"} onClick={() => setIsOpen(false)} className="btn-primary text-center">Hire Me</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="glow top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary" />
      <div className="glow bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase mb-6">
              <Sparkles size={12} className="animate-pulse" />
              Available for Freelance Projects
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-[1.1] mb-5 tracking-tight">
              Building <span className="text-gradient">Scalable</span> <br />
              Digital Solutions.
            </h1>
            
            <p className="text-base text-slate-400 mb-8 leading-relaxed max-w-md">
              I'm <span className="text-white font-bold">{PERSONAL_INFO.name}</span>. A Full Stack Developer specializing in <span className="text-white">Enterprise .NET & React</span> ecosystems. I help businesses scale through high-performance software.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary !py-3 !px-6 text-sm group">
                Start a Project <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a href={PERSONAL_INFO.resumeUrl} download className="btn-outline !py-3 !px-6 text-sm group">
                Download CV <Download className="inline-block ml-2 group-hover:translate-y-1 transition-transform" size={18} />
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-bg overflow-hidden glass">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="client" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-white font-bold text-base">15+ Projects</div>
                <div className="text-slate-500 text-xs">Delivered successfully</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block max-w-xs ml-auto"
          >
            <div className="relative z-10 glass-card p-2 rounded-[24px] rotate-3 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://picsum.photos/seed/tech/800/1000" 
                alt="Tech" 
                className="rounded-[18px] w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 glass-card p-4 rounded-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                    <Zap size={20} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xs">Fast Performance</div>
                    <div className="text-slate-500 text-[10px]">Optimized for scale</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-6 glass-card p-4 rounded-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xs">Secure Code</div>
                    <div className="text-slate-500 text-[10px]">Enterprise standards</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative max-w-sm"
          >
            <div className="aspect-square rounded-[32px] overflow-hidden glass p-1.5">
              <img 
                src="https://picsum.photos/seed/krupal/800/800" 
                alt="Krupal" 
                className="w-full h-full object-cover rounded-[26px] grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 glass-card p-5 rounded-[24px] max-w-[200px]">
              <div className="text-2xl font-display font-black text-primary mb-1">2+ Years</div>
              <div className="text-slate-400 text-[10px] leading-relaxed">Experience in crafting high-performance full-stack applications.</div>
            </div>
          </motion.div>

          <div>
            <span className="text-primary font-mono text-xs tracking-[0.5em] uppercase mb-4 block">About Me</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-5 leading-tight">
              Crafting <span className="text-gradient">Robust</span> Digital Ecosystems.
            </h2>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { label: 'Clean Architecture', icon: Layers, desc: 'Maintainable code.' },
                { label: 'Performance First', icon: Zap, desc: 'Optimized logic.' },
                { label: 'Full Stack Mastery', icon: Code2, desc: 'Seamless .NET.' },
                { label: 'Scalable Design', icon: Rocket, desc: 'Built for growth.' }
              ].map((item, i) => (
                <div key={item.label} className="flex gap-3">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm mb-0.5">{item.label}</div>
                    <div className="text-slate-500 text-[10px]">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-mono text-xs tracking-[0.5em] uppercase mb-4 block">Services</span>
          <h2 className="text-3xl md:text-4xl font-display font-black text-white">How I Help You</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 glass-card rounded-[24px] group hover:bg-primary/5 transition-all"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <service.icon size={20} />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2">{service.title}</h3>
              <p className="text-slate-500 text-[10px] leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  skill: any;
  index: number;
}

const SkillCard = ({ skill, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-5 glass-card rounded-[20px] group"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
          <skill.icon size={18} />
        </div>
        <h3 className="text-base font-display font-bold text-white">{skill.category}</h3>
      </div>
      
      <div className="flex flex-wrap gap-1.5">
        {skill.items.map((item: string) => (
          <span key={item} className="px-2 py-0.5 bg-white/5 rounded-md text-[9px] text-slate-400 group-hover:text-white transition-colors">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

interface ProjectCardProps {
  project: any;
  index: number;
}

const ProjectCard = ({ project, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative glass-card rounded-[32px] overflow-hidden"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={project.image || `https://picsum.photos/seed/${project.title}/1200/800`} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t: string) => (
            <span key={t} className="px-2.5 py-1 bg-primary/10 rounded-full text-[9px] font-bold text-primary uppercase tracking-widest">
              {t}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm mb-6 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-white">
              <project.icon size={18} />
            </div>
            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Case Study</span>
          </div>
          <Link to={`/project/${project.slug}`} className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white section-padding">
        <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
        <button onClick={() => navigate('/')} className="btn-primary">Go Back Home</button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8 group"
          >
            <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={18} />
            <span className="text-xs font-mono uppercase tracking-widest">Back to Projects</span>
          </button>

          <div className="flex flex-wrap gap-3 mb-6">
            {project.tech.map((t: string) => (
              <span key={t} className="px-3 py-1 bg-primary/10 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest">
                {t}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6 leading-tight">
            {project.title}
          </h1>
          
          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="aspect-video rounded-[32px] overflow-hidden glass p-2 mb-16"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover rounded-[24px]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                  <Layout size={18} />
                </div>
                Project Overview
              </h2>
              <p className="text-slate-400 leading-relaxed">
                {project.longDescription}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary">
                  <Zap size={18} />
                </div>
                Key Features
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.features?.map((feature: string, i: number) => (
                  <div key={i} className="flex gap-3 p-4 glass-card rounded-xl border border-white/5">
                    <CheckCircle2 className="text-primary shrink-0" size={18} />
                    <span className="text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center text-accent">
                  <ShieldCheck size={18} />
                </div>
                Challenges & Solutions
              </h2>
              <div className="p-6 glass-card rounded-2xl border border-white/5">
                <p className="text-slate-400 leading-relaxed italic">
                  "{project.challenges}"
                </p>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="p-6 glass-card rounded-2xl border border-white/5">
              <h3 className="text-white font-bold mb-4 uppercase text-[10px] tracking-widest text-slate-500">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t: string) => (
                  <div key={t} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs text-slate-300">
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 glass-card rounded-2xl border border-white/5">
              <h3 className="text-white font-bold mb-4 uppercase text-[10px] tracking-widest text-slate-500">Deliverables</h3>
              <ul className="space-y-3">
                {['Source Code', 'Documentation', 'Deployment Guide', 'Performance Report'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-xs text-slate-400">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button className="btn-primary w-full group">
              Live Preview <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:sticky lg:top-32 h-fit">
            <span className="text-primary font-mono text-xs tracking-[0.5em] uppercase mb-4 block">Experience</span>
            <h2 className="text-3xl font-display font-black text-white mb-6">Professional <br />Journey.</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              A timeline of my professional growth and the impact I've made at various organizations.
            </p>
          </div>
          
          <div className="lg:col-span-2 space-y-10">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-10 border-l border-white/5 pb-10 last:pb-0"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
                
                <div className="flex flex-wrap justify-between items-start gap-3 mb-5">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-0.5">{exp.role}</h3>
                    <div className="text-primary font-bold text-sm">{exp.company}</div>
                  </div>
                  <div className="px-3 py-1 glass rounded-full text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                    {exp.period}
                  </div>
                </div>
                
                <div className="space-y-3">
                  {exp.description.map((item, idx) => (
                    <div key={idx} className="flex gap-2 text-slate-400 text-xs leading-relaxed">
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="glow top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary opacity-10" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-mono text-xs tracking-[0.5em] uppercase mb-4 block">Contact</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-8 leading-[1.1]">
              Start a <br />
              <span className="text-gradient">Project.</span>
            </h2>
            
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
                { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with me', href: `https://wa.me/${PERSONAL_INFO.whatsapp}` },
                { icon: Linkedin, label: 'LinkedIn', value: '/krupal-vaishnav', href: PERSONAL_INFO.linkedin },
                { icon: MapPin, label: 'Location', value: PERSONAL_INFO.location }
              ].map((item) => (
                <a key={item.label} href={item.href} target={item.href?.startsWith('http') ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 glass-card rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono text-slate-500 tracking-widest uppercase mb-0.5">{item.label}</div>
                    <div className="text-base font-bold text-white group-hover:text-primary transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="p-6 glass-card rounded-[24px]">
            {/* Note: To receive emails, use a service like Formspree. 
                Replace 'YOUR_FORMSPREE_ID' with your actual ID. */}
            <form 
              action="https://formspree.io/f/YOUR_FORMSPREE_ID" 
              method="POST"
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-slate-500 ml-2 uppercase tracking-wider">Name</label>
                  <input name="name" type="text" required className="w-full bg-white/5 border border-white/10 p-3 rounded-lg focus:outline-none focus:border-primary transition-colors text-white text-xs" placeholder="John Doe" />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-slate-500 ml-2 uppercase tracking-wider">Email</label>
                  <input name="email" type="email" required className="w-full bg-white/5 border border-white/10 p-3 rounded-lg focus:outline-none focus:border-primary transition-colors text-white text-xs" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-bold text-slate-500 ml-2 uppercase tracking-wider">Subject</label>
                <input name="subject" type="text" required className="w-full bg-white/5 border border-white/10 p-3 rounded-lg focus:outline-none focus:border-primary transition-colors text-white text-xs" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-bold text-slate-500 ml-2 uppercase tracking-wider">Message</label>
                <textarea name="message" rows={3} required className="w-full bg-white/5 border border-white/10 p-3 rounded-lg focus:outline-none focus:border-primary transition-colors text-white text-xs resize-none" placeholder="Tell me about your project..." />
              </div>
              <button type="submit" className="btn-primary w-full !py-3 text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      
      {/* Process Section */}
      <section id="process" className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-mono text-xs tracking-[0.5em] uppercase mb-4 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-white">My Workflow</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 glass-card rounded-[20px] relative group"
              >
                <div className="text-3xl font-black text-white/5 absolute top-4 right-4 group-hover:text-primary/10 transition-colors">
                  {step.step}
                </div>
                <h3 className="text-base font-display font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-500 text-[10px] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-8 mb-12">
            <div>
              <span className="text-primary font-mono text-xs tracking-[0.5em] uppercase mb-4 block">Skills</span>
              <h2 className="text-3xl md:text-4xl font-display font-black text-white">Capabilities</h2>
            </div>
            <div className="text-slate-500 font-mono text-[9px] tracking-widest uppercase">
              // Expertise
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SKILLS.map((skill, i) => (
              <SkillCard key={skill.category} skill={skill} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Experience />

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-8 mb-12">
            <div>
              <span className="text-primary font-mono text-xs tracking-[0.5em] uppercase mb-4 block">Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-display font-black text-white">Selected Work</h2>
            </div>
            <a href={PERSONAL_INFO.blog} target="_blank" rel="noreferrer" className="btn-outline !py-2 !px-4 text-[9px] flex items-center gap-2">
              Read Blog <ExternalLink size={10} />
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
};

const Resume = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <span className="text-primary font-mono text-xs tracking-[0.5em] uppercase mb-4 block">Professional</span>
            <h1 className="text-4xl md:text-6xl font-display font-black text-white">My Resume</h1>
          </div>
          <a href={PERSONAL_INFO.resumeUrl} download className="btn-primary flex items-center gap-2">
            <Download size={18} /> Download PDF
          </a>
        </div>

        <div className="glass-card rounded-[32px] overflow-hidden border border-white/5 aspect-[1/1.414] w-full bg-white/5 relative">
          <iframe 
            src={`${PERSONAL_INFO.resumeUrl}#toolbar=0`} 
            className="w-full h-full border-none"
            title="Resume Viewer"
          />
          {/* Fallback for browsers that don't support PDF embedding */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center pointer-events-none -z-10">
            <FileText size={64} className="text-slate-700 mb-4" />
            <p className="text-slate-500">PDF Viewer not supported? <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noreferrer" className="text-primary pointer-events-auto">Open in new tab</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-bg min-h-screen">
        <CustomCursor />
        
        {/* Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary z-[100] origin-left"
          style={{ scaleX }}
        />

        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetails />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        <footer className="py-12 px-6 md:px-12 border-t border-white/5">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-black text-xs">
                  K
                </div>
                <div className="text-xl font-display font-bold text-white tracking-tight">Krupal<span className="text-primary">.</span></div>
              </div>
              <p className="text-slate-500 text-xs">Full Stack Developer specializing in .NET & React.</p>
            </div>
            
            <div className="flex gap-8">
              {NAV_LINKS.map(link => (
                <Link key={link.name} to={link.href.startsWith('#') ? `/${link.href}` : link.href} className="text-[10px] font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-widest">
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: PERSONAL_INFO.linkedin },
                { icon: Github, href: PERSONAL_INFO.github },
                { icon: Mail, href: `mailto:${PERSONAL_INFO.email}` }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noreferrer" className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-slate-400 hover:text-primary hover:scale-110 transition-all">
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600">
            <div>© 2026 Krupal Vaishnav. All Rights Reserved.</div>
            
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
