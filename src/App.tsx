import { lazy, Suspense, useEffect, useState, type FormEvent, type ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Award, BookOpen, Braces, BriefcaseBusiness, Check, CheckCircle2, ChevronRight, Cloud, Code2, Database, Download, Globe, Layers3, Linkedin, Mail, MapPin, Menu, MonitorSmartphone, Send, Server, Settings2, ShieldCheck, Terminal, Wrench, X, Zap } from 'lucide-react';
import Reveal from './components/Reveal';
import ProjectCard from './components/ProjectCard';
import useMedia from './hooks/useMedia';
import { education, experience, navLinks, profile, projects, services, skills } from './data/portfolio';
const Scene = lazy(() => import('./components/Scene'));
const serviceIcons = [Layers3, Braces, MonitorSmartphone, Server, Database, Cloud, Wrench];
const skillIcons = [Code2, Server, Database, Cloud];
function SectionHeading({ eyebrow, title, accent, desc }: {
    eyebrow: string;
    title: string;
    accent?: string;
    desc?: string;
}) {
    return <Reveal className="section-heading">
        <div className="eyebrow">
          <span className="eyebrow-line"/>
          {eyebrow}
        </div>
        <h2>
          {title}
          {accent && <span className="gradient-text">{accent}</span>}
        </h2>
        {desc && <p>{desc}</p>}
      </Reveal>;
}
function IconLink({ href, label, children }: {
    href: string;
    label: string;
    children: ReactNode;
}) {
    return href ? <a href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer" aria-label={label} className="social-link">
        {children}
      </a> : <span className="social-link social-disabled" title={`${label} URL not configured`} aria-label={`${label} URL not configured`}>
        {children}
      </span>;
}
function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => { const handler = () => setScrolled(window.scrollY > 24); handler(); window.addEventListener('scroll', handler, { passive: true }); return () => window.removeEventListener('scroll', handler); }, []);
    useEffect(() => { if (!open)
        return; const close = (e: KeyboardEvent) => { if (e.key === 'Escape')
        setOpen(false); }; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, [open]);
    return <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="container nav-inner">
          <a className="brand" href="#home" onClick={() => setOpen(false)} aria-label="Mathan Raja — Home">
            <span className="brand-mark">
              M
              <span>
                .
              </span>
            </span>
            <span>
              Mathan
              <span className="brand-muted">
                /
              </span>
              raja
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.filter(x => x.label !== 'Home' && x.label !== 'Services').map(l => <a href={l.href} key={l.href}>{l.label}</a>)}
          </nav>
          <a className="nav-cta" href="#contact">
            Let's Talk
            <ArrowUpRight size={20}/>
          </a>
          <button className="menu-toggle" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(x => !x)}>
            {open ? <X size={23}/> : <Menu size={23}/>}
          </button>
        </div>
        <nav id="mobile-navigation" className={`mobile-nav ${open ? 'mobile-nav-open' : ''}`} aria-label="Mobile navigation" aria-hidden={!open}>
          {navLinks.map(l => <a key={l.href} href={l.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>{l.label}<ArrowUpRight size={16}/></a>)}
        </nav>
      </header>;
}
function StatusPill() { return <div className="status-pill">
    <span className="live-dot"/>
    {profile.availability}
  </div>; }
function Hero() {
    const reduced = useReducedMotion();
    const compact = useMedia('(max-width: 650px)');
    return <section id="home" className="hero">
        <div className="hero-glow hero-glow-left"/>
        <div className="hero-glow hero-glow-right"/>
        <div className="hero-grid"/>
        <div className="container hero-inner">
          <div className="hero-copy">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <StatusPill />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.09 }} className="hero-overline">
              <span>
                01
              </span>
              / FULL STACK ENGINEER
              <span className="line-through"/>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
              Hi, I'm
              <br />
              <span className="hero-name">
                Mathan Raja
                <span className="hero-period">
                  .
                </span>
              </span>
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.26 }}>
              <div className="hero-title">
                <span className="title-caret">
                  &lt;
                </span>
                Full Stack Developer
                <span className="title-caret">
                  /&gt;
                </span>
              </div>
              <p className="hero-description">
                {profile.intro}
              </p>
            </motion.div>
            <motion.div className="hero-cta-row" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.37 }}>
              <a href="#projects" className="btn btn-primary">
                Explore My Work
                <ArrowUpRight size={17}/>
              </a>
              <a className="btn btn-secondary" href={profile.resumeUrl} download>
                Download Resume
                <Download size={16}/>
              </a>
              <a className="btn btn-tertiary" href="#contact">
                Contact Me
                <Mail size={15}/>
              </a>
            </motion.div>
            <motion.div className="hero-connect" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }}>
              <span>
                CONNECT WITH ME
              </span>
              <div>
                {/* <IconLink href={profile.githubUrl} label="GitHub">
                  <Github size={18}/>
                </IconLink> */}
                <IconLink href={profile.linkedinUrl} label="LinkedIn">
              <Linkedin size={20}/>
            </IconLink>
                <IconLink href={profile.email.includes('example.com') ? '' : `mailto:${profile.email}`} label="Email">
                  <Mail size={20}/>
                </IconLink>
              </div>
              <span className="hero-divider"/>
              <span className="hero-location">
                <MapPin size={14}/>
                {profile.location}
              </span>
            </motion.div>
          </div>
          <div className="hero-visual">
            <div className="hero-canvas" aria-label="Interactive 3D illustration of a developer laptop">
              {!reduced && !compact ? <Suspense fallback={<div className="scene-loading"><Terminal size={37}/><span>LOADING WORKSPACE...</span></div>}><Scene /></Suspense> : <div className="mobile-code-visual"><div className="mobile-code-head"><span>● ● ●</span> mathan.ts</div><pre><span>const</span> developer = {'{'}<br />  name: <em>'Mathan Raja'</em>,<br />  stack: <em>'Full Stack'</em>,<br />  passion: <em>true</em><br />{'}'};</pre><div className="mobile-code-footer">● SYSTEM ONLINE</div></div>}
            </div>
            <div className="hero-glass-card float-card-one">
              <span className="glass-icon">
                <Code2 size={19}/>
              </span>
              <div>
                <strong>
                  Clean Code
                </strong>
                <small>
                  Crafted with purpose
                </small>
              </div>
            </div>
            <div className="hero-glass-card float-card-two">
              <span className="glass-icon purple">
                <Cloud size={18}/>
              </span>
              <div>
                <strong>
                  Cloud Ready
                </strong>
                <small>
                  Built to scale
                </small>
              </div>
            </div>
            <div className="hero-visual-label">
              FIG 01 — MY DIGITAL WORKSPACE
              <span>
                ↗
              </span>
            </div>
          </div>
        </div>
        <div className="container hero-bottom">
          <a href="#about" className="scroll-indicator">
            <span className="scroll-mouse">
              <i />
            </span>
            SCROLL TO EXPLORE
            <ArrowDown size={13}/>
          </a>
          <div className="hero-bottom-meta">
            <span>
              FRONTEND
            </span>
            <span className="star-divider">
              ✳
            </span>
            <span>
              BACKEND
            </span>
            <span className="star-divider">
              ✳
            </span>
            <span>
              CLOUD
            </span>
          </div>
        </div>
      </section>;
}
function About() { return <section id="about" className="section about-section">
    <div className="container">
      <div className="about-layout">
        <div className="about-left">
          <SectionHeading eyebrow="01 / THE PERSON BEHIND THE CODE" title="Beyond the" accent="screen." desc="A little about who I am and what drives me."/>
          <Reveal className="about-portrait">
            <div className="portrait-grid"/>
            <div className="portrait-glow"/>
            {profile.portraitUrl ? <img src={profile.portraitUrl} alt={`${profile.name} portrait`} className="portrait-photo"/> : <div className="portrait-initials"><span>MR</span><div>YOUR PHOTO HERE</div></div>}
            <div className="portrait-frame-corner corner-a"/>
            <div className="portrait-frame-corner corner-b"/>
            <div className="portrait-tag">
              <span className="live-dot"/>
              DEVELOPER MODE: ON
            </div>
          </Reveal>
        </div>
        <div className="about-right">
          <Reveal>
            <div className="about-leading">
              <span className="quote-mark">
                “
              </span>
              <h3>
                Turning complex challenges into
                <span>
                  simple, meaningful
                </span>
                digital solutions.
              </h3>
            </div>
            <p className="about-body">
              {profile.about}
            </p>
            <p className="about-body second">
              My approach blends analytical problem-solving, clean architecture, and thoughtful interface design — building products that work beautifully from the database to the browser.
            </p>
          </Reveal>
          <Reveal className="stats-grid">
            <div>
              <strong>
                {profile.experienceYears}
              </strong>
              <span>
                YEARS EXPERIENCE
              </span>
            </div>
            <div>
              <strong>
                {profile.projectCount}
              </strong>
              <span>
                FEATURED PROJECTS
              </span>
            </div>
            <div>
              <strong>
                {profile.focusAreas}
              </strong>
              <span>
                CORE DISCIPLINES
              </span>
            </div>
          </Reveal>
          <Reveal className="about-interest">
            <span className="tiny-kicker">
              CURRENTLY EXPLORING
            </span>
            <div>
              <span>
                <Zap size={15}/>
                Modern Web Architecture
              </span>
              <span>
                <Cloud size={15}/>
                Cloud Infrastructure
              </span>
              <span>
                <Braces size={15}/>
                Developer Experience
              </span>
            </div>
          </Reveal>
          <Reveal>
            <a className="text-link" href="#experience">
              My professional journey
              <ArrowUpRight size={17}/>
            </a>
          </Reveal>
        </div>
      </div>
    </div>
  </section>; }
function Skills() { return <section id="skills" className="section skills-section">
    <div className="skills-orb orb-a"/>
    <div className="container">
      <div className="section-heading-row">
        <SectionHeading eyebrow="02 / THE TOOLKIT" title="Tools of the" accent="trade." desc="A versatile stack for building impactful digital products."/>
        <Reveal>
          <div className="skill-section-annotation">
            <span className="tiny-kicker">
              MY TECH UNIVERSE
            </span>
            <div className="orbit-animation">
   
              <div className="orbit-center">
                <Braces size={25}/>
              </div>
                           <span className="orbit-node node-php">
    PHP
  </span>
              <div className="orbit-ring ring-a"/>
              <div className="orbit-ring ring-b"/>
              <span className="orbit-node node-a">
                R
              </span>
              
              <span className="orbit-node node-b">
                JS
              </span>
              <span className="orbit-node node-c">
                ☁
              </span>
              <span className="orbit-node node-d">
                DB
              </span>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="skills-grid">
        {skills.map((skill, i) => { const Icon = skillIcons[i]; return <Reveal key={skill.title} delay={i * 0.075}><div className="skill-card"><div className="skill-card-top"><div className="skill-card-icon"><Icon size={22}/></div><span>{skill.code} / 04</span></div><h3>{skill.title}</h3><p>{skill.description}</p><div className="skill-tags">{skill.items.map(item => <span key={item}><span className="tag-dot"/>{item}</span>)}</div><div className="skill-card-line"/></div></Reveal>; })}
      </div>
      <Reveal className="skill-marquee">
        <span>
          THE RIGHT TOOLS.
        </span>
        <span>
          THE RIGHT MINDSET.
        </span>
        <span className="gradient-text">
          ENDLESS POSSIBILITIES.
        </span>
        <span>
          ✳
        </span>
      </Reveal>
    </div>
  </section>; }
function Experience() { return <section id="experience" className="section experience-section">
    <div className="container">
      <SectionHeading eyebrow="03 / PROFESSIONAL JOURNEY" title="Experience that" accent="delivers." desc="Professional work from 2024 to the present, based on my resume."/>
      <div className="experience-stack">
        {experience.map((job, j) => <div className="experience-layout" key={job.period}><Reveal className="exp-timeline"><div className="timeline-track"><div className="timeline-glow"/></div><div className="timeline-node"><BriefcaseBusiness size={19}/></div><div className="exp-content"><div className="exp-top"><span className="tiny-kicker">{j === 0 ? 'CURRENT ROLE' : 'PREVIOUS ROLE'}</span><span className="exp-duration">{job.type}</span></div><h3>{job.role}</h3><div className="exp-company">{job.company}</div><div className="exp-period">{job.period}</div><p>{job.description}</p></div></Reveal><Reveal className="responsibility-panel"><div className="panel-top"><span><Terminal size={16}/> responsibilities.json</span><span className="panel-dots"><i /><i /><i /></span></div><div className="responsibility-list">{job.responsibilities.map((item, i) => <div key={item}><span className="resp-index">{String(i + 1).padStart(2, '0')}</span><CheckCircle2 size={16}/><span>{item}</span></div>)}</div><div className="panel-bottom"><span>{job.responsibilities.length} RESPONSIBILITIES</span><span>{job.period}</span></div></Reveal></div>)}
      </div>
    </div>
  </section>; }
function Projects() { return <section id="projects" className="section projects-section">
    <div className="container">
      <div className="projects-heading">
        <SectionHeading eyebrow="04 / SELECTED WORK" title="Built with" accent="intention." desc="A selection of real-world applications and platforms I've worked on."/>
        <Reveal>
          <div className="project-count">
            <span>
              SHOWCASING
            </span>
            <strong>
              03
              <em>
                /
              </em>
              03
            </strong>
            <span>
              PROJECTS
            </span>
          </div>
        </Reveal>
      </div>
      <div className="projects-grid">
        {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i}/>)}
      </div>
      <Reveal className="projects-note">
        <span>
          ✳
        </span>
        Some project demos and source repositories are private or not yet linked. Add verified URLs in the portfolio data to activate those buttons.
      </Reveal>
    </div>
  </section>; }
function Services() { return <section id="services" className="section services-section">
    <div className="container">
      <SectionHeading eyebrow="05 / WHAT I BRING TO THE TABLE" title="From idea to" accent="deployment." desc="Practical development services across the entire product lifecycle."/>
      <div className="services-grid">
        {services.map((service, i) => { const Icon = serviceIcons[i]; return <Reveal key={service.title} delay={i * .045}><div className="service-card"><div className="service-top"><span>{String(i + 1).padStart(2, '0')}</span><ArrowUpRight size={18}/></div><div className="service-icon"><Icon size={50}/></div><h3>{service.title}</h3><p>{service.copy}</p></div></Reveal>; })}
      </div>
    </div>
  </section>; }
function Education() { return <section id="education" className="section education-section">
    <div className="container">
      <div className="education-layout">
        <SectionHeading eyebrow="06 / THE FOUNDATION" title="Always" accent="learning." desc="Education, certifications, and the pursuit of continuous growth."/>
        <div className="education-list">
          {education.map((entry, i) => { const Icon = [BookOpen, Award, ShieldCheck][i] || BookOpen; return <Reveal key={entry.label} delay={i * .08}><div className="education-item"><div className="edu-icon"><Icon size={20}/></div><div><span className="tiny-kicker">{entry.label}</span><h3>{entry.value}</h3><p>{entry.detail}</p></div><span className="edu-year">{entry.year}</span><ChevronRight size={19} className="edu-chevron"/></div></Reveal>; })}
          <p className="editable-note">
            <Settings2 size={14}/>
            Degree and GPA details are based on the uploaded resume.
          </p>
        </div>
      </div>
    </div>
  </section>; }

function Contact() {
  // --------------------------------
  // Form State
  // --------------------------------

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const [feedback, setFeedback] = useState('');

  // --------------------------------
  // Web3Forms Configuration
  // --------------------------------

  const accessKey =
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const configured = Boolean(accessKey);

  // --------------------------------
  // Handle Input Changes
  // --------------------------------

  const update = (
    name: keyof typeof form,
    value: string
  ) => {
    setForm((previous) => ({
      ...previous,
      [name]: value
    }));

    if (status !== 'loading') {
      setStatus('idle');
    }

    setFeedback('');
  };

  // --------------------------------
  // Submit Contact Form
  // --------------------------------

  async function submit(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (status === 'loading') {
      return;
    }

    // Required fields
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      setStatus('error');
      setFeedback('Please complete all required fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email.trim())) {
      setStatus('error');
      setFeedback('Please enter a valid email address.');
      return;
    }

    // Message validation
    if (form.message.trim().length < 10) {
      setStatus('error');
      setFeedback('Please enter at least 10 characters.');
      return;
    }

    // Access key validation
    if (!configured) {
      setStatus('error');
      setFeedback('Web3Forms access key is missing.');
      return;
    }

    setStatus('loading');
    setFeedback('');

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            from_name: 'Mathan Raja Portfolio',
            name: form.name.trim(),
            email: form.email.trim(),
            subject: form.subject.trim(),
            message: form.message.trim(),
            botcheck: false
          })
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || 'Message sending failed.'
        );
      }

      // Successful submission
      setStatus('success');

      setFeedback(
        'Message sent successfully! Thank you for contacting me.'
      );

      // Clear form
      setForm({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      setStatus('error');

      setFeedback(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      );
    }
  }

  // --------------------------------
  // Contact Section UI
  // --------------------------------

  return (
    <section
      id="contact"
      className="section contact-section"
    >
      <div className="contact-glow" />

      <div className="container">
        <div className="contact-layout">

          {/* Contact Information */}

          <div className="contact-info">

            <SectionHeading
              eyebrow="07 / LET'S CONNECT"
              title="Let's build"
              accent="something amazing."
            />

            
<Reveal>
  <p className="contact-lead">
    Have a project in mind, an opportunity to
    discuss, or just want to say hello?
    My inbox is open.
  </p>

  <div className="contact-availability">
    <span className="live-dot" />
    {profile.availability}
  </div>

  <div className="contact-details">

    {/* Email Address */}

    <div className="contact-detail">
      <div>
        <Mail size={20} />
      </div>

      <span>
        EMAIL ME

        <a
          href={`mailto:${profile.email}`}
          className="contact-email-link"
        >
          <strong>{profile.email}</strong>
        </a>
      </span>
    </div>

    {/* Location */}

    <div className="contact-detail">
      <div>
        <MapPin size={20} />
      </div>

      <span>
        BASED IN

        <strong>
          {profile.location}
          {' · Open to remote opportunities'}
        </strong>
      </span>
    </div>

  </div>

  {/* Social Media Icons */}

 
{/* Contact Social Links */}

<div className="contact-socials">

  {/* LinkedIn */}
  <IconLink
    href={profile.linkedinUrl}
    label="LinkedIn"
  >
    <Linkedin size={20} />
  </IconLink>

  {/* Email */}
  <IconLink
    href={`mailto:${profile.email}`}
    label="Email"
  >
    <Mail size={20} />
  </IconLink>

</div>

</Reveal>

          </div>

          {/* Contact Form */}

          <Reveal className="contact-form-wrap">

            <div className="form-head">
              <span>
                <span className="live-dot" />
                NEW MESSAGE
              </span>

              <span>
                contact.tsx
                <Terminal size={15} />
              </span>
            </div>

            <form
              onSubmit={submit}
              noValidate
            >

              <div className="field-row">

                {/* Name Field */}

                <label>
                  YOUR NAME
                  <span>*</span>

                  <input
                    autoComplete="name"
                    type="text"
                    maxLength={120}
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) =>
                      update('name', e.target.value)
                    }
                    required
                  />
                </label>

                {/* Email Field */}

                <label>
                  EMAIL ADDRESS
                  <span>*</span>

                  <input
                    autoComplete="email"
                    type="email"
                    maxLength={254}
                    placeholder="Your@example.com"
                    value={form.email}
                    onChange={(e) =>
                      update('email', e.target.value)
                    }
                    required
                  />
                </label>

              </div>

              {/* Subject Field */}

              <label>
                SUBJECT
                <span>*</span>

                <input
                  type="text"
                  maxLength={160}
                  placeholder="Let's talk about a project..."
                  value={form.subject}
                  onChange={(e) =>
                    update('subject', e.target.value)
                  }
                  required
                />
              </label>

              {/* Message Field */}

              <label>
                YOUR MESSAGE
                <span>*</span>

                <textarea
                  minLength={10}
                  maxLength={5000}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={(e) =>
                    update('message', e.target.value)
                  }
                  required
                />
              </label>

              {/* Submit Button */}

              <button
                className="btn btn-primary send-btn"
                type="submit"
                disabled={status === 'loading'}
              >
                {status === 'loading'
                  ? 'Sending...'
                  : 'Send Message'
                }

                {status === 'success'
                  ? <Check size={17} />
                  : <Send size={16} />
                }
              </button>

              {/* Form Feedback */}

              <div
                className={`form-feedback ${status}`}
                role="status"
                aria-live="polite"
              >
                {feedback || (
                  configured
                    ? 'Your message will be sent via Web3Forms.'
                    : 'Web3Forms access key required.'
                )}
              </div>

            </form>

          </Reveal>

        </div>
      </div>
    </section>
  );
}

function Footer() { return <footer className="site-footer">
    <div className="container">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#home" className="brand">
            <span className="brand-mark">
              M
              
            </span>
            <span>
              Mathan
              <span className="brand-muted">
                /
              </span>
              raja
            </span>
          </a>
          <p>
            Full Stack Developer
            <br />
            Creating thoughtful digital experiences.
          </p>
        </div>
        <div className="footer-links">
          <span>
            EXPLORE
          </span>
          <div>
            {navLinks.filter(x => ['About', 'Skills', 'Projects', 'Contact'].includes(x.label)).map(l => <a href={l.href} key={l.href}>{l.label}</a>)}
          </div>
        </div>
        <div className="footer-links">
          <span>
            CONNECT
          </span>
          <div>
            {/* <IconLink href={profile.githubUrl} label="GitHub">
              <Github size={30}/>
            </IconLink> */}
            <IconLink href={profile.linkedinUrl} label="LinkedIn">
              <Linkedin size={20}/>
            </IconLink>
            <IconLink href={profile.email.includes('example.com') ? '' : `mailto:${profile.email}`} label="Email">
              <Mail size={20}/>
            </IconLink>
          </div>
        </div>
        <a href="#home" className="back-to-top">
          BACK TO TOP
          <ArrowUpRight size={17}/>
        </a>
      </div>
      <div className="footer-bottom">
        <span>
          © 
          {new Date().getFullYear()}

           MATHANRAJA. ALL RIGHTS RESERVED.
        </span>
        <span>
          DESIGNED WITH
          <span className="heart">
             ♥
          </span>
          . BUILT WITH REACT & THREE.JS
        </span>
        <span>
          INDIA
          <Globe size={13}/>
        </span>
      </div>
    </div>
  </footer>; }
function ProgressBar() { const { scrollYProgress } = useScroll(); const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: .001 }); return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true"/>; }
export default function App() { return <>
    <a className="skip-link" href="#main">
      Skip to content
    </a>
    <ProgressBar />
    <Header />
    <main id="main">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Education />
      <Contact />
    </main>
    <Footer />
  </>; }
