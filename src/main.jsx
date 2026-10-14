import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin, Menu, X,
  Download, Sparkles, BrainCircuit, ShieldCheck, Activity, Zap, Database,
  Code2, ExternalLink, Terminal, Globe, Send, CheckCircle2, GraduationCap,
  Layers3, GitBranch, Cpu, ChevronRight
} from 'lucide-react';
import './styles.css';

const GITHUB = 'https://github.com/rajesh-r-16';
const LINKEDIN = 'https://www.linkedin.com/in/rajesh-16-r/';
const EMAIL = 'rajeshrajini1523@gmail.com';

const projects = [
  {
    no: '01', type: 'AI / FINTECH', title: 'FraudSentinel AI',
    subtitle: 'Financial threat intelligence platform',
    description: 'A machine-learning-led fraud analysis workflow designed to score transaction risk, surface anomalies and make threat signals easier to understand.',
    stack: ['Python', 'FastAPI', 'ML', 'React'],
    icon: ShieldCheck, theme: 'lime', link: `${GITHUB}?tab=repositories`,
    note: 'IN PROGRESS'
  },
  {
    no: '02', type: 'COMPUTER VISION', title: 'PavSentinel AI',
    subtitle: 'Road safety, powered by vision',
    description: 'An AI-powered pavement damage detection concept for identifying road defects, classifying severity and visualizing assessment results.',
    stack: ['Computer Vision', 'YOLO', 'React', 'Python'],
    icon: Activity, theme: 'violet', link: 'https://github.com/rajesh-r-16/PaveSentinel-ai',
    note: 'AI FOR CIVIC IMPACT'
  },
  {
    no: '03', type: 'FULL-STACK / MOBILITY', title: 'EV Charge Network',
    subtitle: 'Find a charger. Plan the next move.',
    description: 'A web application for discovering EV charging stations, checking availability and reserving a charging slot, with route-planning features.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Maps'],
    icon: Zap, theme: 'blue', link: 'https://github.com/rajesh-r-16/ev-charging-station-finder-and-slot-booking',
    note: 'FULL-STACK BUILD'
  },
  {
    no: '04', type: 'DATA / ANALYTICS', title: 'FoodPulse Analytics',
    subtitle: 'Turn delivery data into decisions',
    description: 'An interactive food delivery analytics platform with dashboard views for orders, restaurants, customers and delivery performance.',
    stack: ['React', 'FastAPI', 'MongoDB', 'Recharts'],
    icon: Layers3, theme: 'orange', link: 'https://github.com/rajesh-r-16/foodpulse-analytics',
    note: 'ANALYTICS DASHBOARD'
  },
  {
    no: '05', type: 'MACHINE LEARNING', title: 'ML Lab',
    subtitle: 'Experiments, models and evaluation',
    description: 'A hands-on repository exploring preprocessing, feature engineering, training, testing and performance comparison across ML datasets.',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter'],
    icon: BrainCircuit, theme: 'pink', link: 'https://github.com/rajesh-r-16/machine-learning',
    note: 'LEARNING IN PUBLIC'
  },
  {
    no: '06', type: 'PREDICTIVE ANALYTICS', title: 'Manufacturing Output Predictor',
    subtitle: 'Forecasting production with ML',
    description: 'A machine learning project comparing Linear, Ridge and Lasso regression for hourly manufacturing equipment output prediction.',
    stack: ['Python', 'Regression', 'Streamlit', 'Pandas'],
    icon: Activity, theme: 'mint', link: 'https://github.com/rajesh-r-16/manufacturing-equipment-output-prediction',
    note: 'PREDICTIVE MODEL'
  }
];

const skills = [
  { group: 'LANGUAGES', items: ['Python', 'C++', 'Java · basics', 'SQL', 'HTML & CSS', 'JavaScript'] },
  { group: 'AI / DATA', items: ['Machine Learning', 'Deep Learning', 'Generative AI', 'Pandas', 'NumPy', 'Matplotlib'] },
  { group: 'BUILD', items: ['React', 'FastAPI', 'Node.js', 'REST APIs', 'Git & GitHub', 'VS Code'] },
  { group: 'DATA STORES & TOOLS', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Jupyter', 'Power BI', 'Tableau'] }
];

const certifications = [
  { org: 'NPTEL · IIT MADRAS', name: 'The Joy of Computing Using Python', result: 'Elite + Silver' },
  { org: 'NPTEL · IIT KHARAGPUR', name: 'Ethical Hacking', result: 'Certification' },
  { org: 'INFOSYS SPRINGBOARD', name: 'Cloud Computing', result: 'Certification' },
  { org: 'INFOSYS SPRINGBOARD', name: 'Software Engineering', result: 'Certification' },
  { org: 'INFOSYS SPRINGBOARD', name: 'Generative AI Concepts', result: 'Certification' },
  { org: 'UDEMY', name: 'Database Management Systems', result: 'Certification' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [filter, setFilter] = useState('ALL');
  const filters = ['ALL', 'AI / ML', 'FULL-STACK', 'DATA'];

  const filteredProjects = projects.filter(p => {
    if (filter === 'ALL') return true;
    if (filter === 'AI / ML') return ['AI / FINTECH', 'COMPUTER VISION', 'MACHINE LEARNING'].includes(p.type);
    if (filter === 'FULL-STACK') return p.type.includes('FULL-STACK') || p.type.includes('MOBILITY');
    return p.type.includes('DATA') || p.type.includes('ANALYTICS') || p.type.includes('PREDICTIVE');
  });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Rajesh R home"><span className="mark">R<span>.</span></span><span className="wordmark-label">RAJESH R <small>PORTFOLIO / 2026</small></span></a>
        <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#work" onClick={closeMenu}>Work <span>01</span></a>
          <a href="#about" onClick={closeMenu}>About <span>02</span></a>
          <a href="#skills" onClick={closeMenu}>Stack <span>03</span></a>
          <a href="#journey" onClick={closeMenu}>Journey <span>04</span></a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
              <span className="status-dot" /> AVAILABLE FOR INTERNSHIPS <span className="eyebrow-slash">/</span> BENGALURU, IN
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .08 }}>
              I build things<br/>that make <em>data</em><br/>do more<span className="period">.</span>
            </motion.h1>
            <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3, duration: .7 }}>
              Hey, I’m <strong>Rajesh</strong> — a CSE (AI & ML) engineering student exploring the space where intelligent systems meet useful software.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .42 }}>
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a>
              <a className="button button-quiet" href="/Rajesh_R_Resume.pdf" target="_blank" rel="noreferrer"><Download size={16}/> Resume</a>
            </motion.div>
            <div className="hero-meta">
              <span><MapPin size={14}/> Bengaluru, India</span>
              <span className="meta-separator">/</span>
              <span>BE · CSE (AI & ML)</span>
              <span className="meta-separator">/</span>
              <span>2023 — 2027</span>
            </div>
          </div>
          <motion.div className="hero-art" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .2 }}>
            <div className="art-topline"><span>FIG. 001 — THINK / BUILD / ITERATE</span><span className="art-live"><i/> SYSTEM ONLINE</span></div>
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="orbit orbit-three"></div>
            <div className="core">
              <div className="core-grid"></div>
              <span className="core-r">R<span>.</span></span>
              <span className="core-caption">HUMAN IDEAS<br/>MACHINE LOGIC</span>
            </div>
            <div className="orbit-node node-a"><BrainCircuit size={18}/><span>AI / ML</span></div>
            <div className="orbit-node node-b"><Code2 size={18}/><span>SOFTWARE</span></div>
            <div className="orbit-node node-c"><Database size={18}/><span>DATA</span></div>
            <div className="art-coordinate coord-a">12°58' N</div><div className="art-coordinate coord-b">77°35' E</div>
            <div className="art-footer"><span>BUILDING WITH INTENT</span><span>● 2026</span></div>
          </motion.div>
          <div className="hero-index"><span>SCROLL TO EXPLORE</span><span className="scroll-line"></span><span>00 — 04</span></div>
        </section>

        <section className="ticker" aria-label="Areas of focus"><div className="ticker-track">
          {Array.from({length: 2}).map((_, i) => <div className="ticker-set" key={i}><span>ARTIFICIAL INTELLIGENCE</span><b>✳</b><span>FULL-STACK ENGINEERING</span><b>✳</b><span>DATA-DRIVEN PRODUCTS</span><b>✳</b><span>CONTINUOUS LEARNING</span><b>✳</b></div>)}
        </div></section>

        <section className="work-section section-wrap section-pad" id="work">
          <div className="section-heading">
            <div><p className="kicker">01 / SELECTED WORK</p><h2>Proof of <em>curiosity.</em></h2></div>
            <p className="section-intro">A selection of projects where I turn a problem statement into a working, testable idea.</p>
          </div>
          <div className="filter-row">{filters.map(f => <button key={f} className={filter === f ? 'filter active' : 'filter'} onClick={() => setFilter(f)}>{f}<span>{f === 'ALL' ? '06' : f === 'AI / ML' ? '03' : f === 'FULL-STACK' ? '02' : '02'}</span></button>)}</div>
          <div className="project-grid">
            {filteredProjects.map((p, i) => {
              const Icon = p.icon;
              return <motion.article className={`project-card ${p.theme}`} key={p.no} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .45, delay: i * .05 }}>
                <div className="project-top"><span className="project-no">{p.no} / 06</span><span className="project-type">{p.type}</span></div>
                <div className="project-visual"><div className="visual-lines"></div><div className="visual-orb"><Icon size={38} strokeWidth={1.4}/></div><span className="visual-label">{p.note}</span><span className="visual-code">{p.no === '01' ? 'RISK_SCORE = f(x)' : p.no === '02' ? 'VISION.detect()' : p.no === '03' ? 'ROUTE.optimize()' : p.no === '04' ? 'DATA → INSIGHT' : p.no === '05' ? 'model.fit(X, y)' : 'ŷ = f(X)'}</span></div>
                <div className="project-content"><p className="project-subtitle">{p.subtitle}</p><h3>{p.title}</h3><p className="project-description">{p.description}</p><div className="tag-list">{p.stack.map(t => <span key={t}>{t}</span>)}</div><a className="project-link" href={p.link} target="_blank" rel="noreferrer">View project <ArrowUpRight size={16}/></a></div>
              </motion.article>
            })}
          </div>
          <div className="all-repos"><span>MORE EXPERIMENTS, NOTES & CODE</span><a href={`${GITHUB}?tab=repositories`} target="_blank" rel="noreferrer">Explore all repositories <ArrowUpRight size={16}/></a></div>
        </section>

        <section className="about-section section-wrap section-pad" id="about">
          <div className="section-heading">
            <div><p className="kicker">02 / A LITTLE ABOUT ME</p><h2>Curious by nature.<br/><em>Builder by choice.</em></h2></div>
          </div>
          <div className="about-grid">
            <div className="about-main">
              <div className="about-number">“01</div>
              <p className="about-statement">I’m interested in the <span>why</span> behind a problem as much as the code that solves it.</p>
              <p className="about-body">I’m pursuing a Bachelor of Engineering in Computer Science & Engineering (AI & ML) at AMC Engineering College, Bengaluru. I enjoy combining machine learning, thoughtful interfaces and backend engineering to build software that is both useful and understandable.</p>
              <p className="about-body">Right now, I’m sharpening my foundations in algorithms, system design and data-driven application development — one project and one iteration at a time.</p>
              <a className="text-link" href={LINKEDIN} target="_blank" rel="noreferrer">More about my journey on LinkedIn <ArrowUpRight size={16}/></a>
            </div>
            <div className="about-side">
              <div className="mini-stat"><span className="mini-stat-number">9.015</span><span className="mini-stat-label">CURRENT CGPA<br/>AMC ENGINEERING COLLEGE</span><span className="stat-star">✳</span></div>
              <div className="principle"><Sparkles size={19}/><div><h4>Make it meaningful</h4><p>Start with a real problem, not just a trendy stack.</p></div></div>
              <div className="principle"><GitBranch size={19}/><div><h4>Learn by building</h4><p>Test ideas, read the output, improve the next version.</p></div></div>
              <div className="principle"><Globe size={19}/><div><h4>Keep an open mind</h4><p>Stay curious across AI, software, data and cloud.</p></div></div>
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap section-pad" id="skills">
          <div className="section-heading">
            <div><p className="kicker">03 / TOOLS OF THE TRADE</p><h2>My current <em>stack.</em></h2></div>
            <p className="section-intro">A practical toolkit I’m using and growing through coursework, training and projects.</p>
          </div>
          <div className="skills-grid">
            {skills.map((s, i) => <div className="skill-group" key={s.group}><div className="skill-group-head"><span>0{i + 1}</span><h3>{s.group}</h3><ArrowUpRight size={15}/></div><div className="skill-items">{s.items.map((item, j) => <span className={(j === 0 || j === 2) ? 'skill-pill featured' : 'skill-pill'} key={item}>{item}</span>)}</div></div>)}
          </div>
          <div className="tool-note"><Terminal size={18}/><span>My default workflow:</span><code>understand → prototype → evaluate → refine</code></div>
        </section>

        <section className="journey-section section-wrap section-pad" id="journey">
          <div className="section-heading">
            <div><p className="kicker">04 / THE JOURNEY SO FAR</p><h2>Learning is a <em>long game.</em></h2></div>
            <p className="section-intro">Education, practical training and certifications that keep the foundation growing.</p>
          </div>
          <div className="journey-grid">
            <div className="timeline">
              <div className="timeline-item"><span className="timeline-date">2023 — 2027</span><div className="timeline-marker"><GraduationCap size={18}/></div><div className="timeline-copy"><h3>B.E. Computer Science & Engineering</h3><p>AI & Machine Learning · AMC Engineering College, VTU</p><span className="timeline-detail">CGPA 9.015 · Bengaluru</span></div></div>
              <div className="timeline-item"><span className="timeline-date">JUL 2026 — NOW</span><div className="timeline-marker"><Layers3 size={18}/></div><div className="timeline-copy"><h3>TNS India Foundation</h3><p>Employability & Technical Skills Training</p><span className="timeline-detail">Technical and career-readiness development</span></div></div>
              <div className="timeline-item"><span className="timeline-date">2021 — 2023</span><div className="timeline-marker"><GraduationCap size={18}/></div><div className="timeline-copy"><h3>Pre-University · PCMC</h3><p>Narayana PU College, Bengaluru</p><span className="timeline-detail">88.5%</span></div></div>
            </div>
            <div className="cert-panel"><div className="cert-panel-head"><div><p className="kicker">SELECTED CERTIFICATIONS</p><h3>Proof of learning<span>.</span></h3></div><span className="cert-count">06 ITEMS</span></div>
              {certifications.map((c, i) => <div className="cert-row" key={c.name}><div className="cert-icon">{i < 2 ? <GraduationCap size={17}/> : <CheckCircle2 size={17}/>}</div><div className="cert-info"><span>{c.org}</span><h4>{c.name}</h4></div><span className="cert-result">{c.result}</span></div>)}
              <a className="cert-footer" href={LINKEDIN} target="_blank" rel="noreferrer">See more on LinkedIn <ArrowUpRight size={15}/></a>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-card">
            <div className="contact-bg-mark">R.</div>
            <div className="contact-left"><p className="kicker">HAVE A PROBLEM WORTH SOLVING?</p><h2>Let’s make<br/><em>something useful.</em></h2><p className="contact-desc">I’m open to software engineering and AI/ML internship opportunities, project collaborations and conversations with people who love building.</p><div className="contact-location"><MapPin size={15}/> Bengaluru, India <span>/</span> Open to opportunities</div></div>
            <div className="contact-right"><button className="email-button" onClick={copyEmail}><span>{copied ? 'EMAIL COPIED' : EMAIL}</span>{copied ? <CheckCircle2 size={18}/> : <Send size={18}/>}</button><a className="contact-social" href={GITHUB} target="_blank" rel="noreferrer"><Github size={18}/> GitHub <ArrowUpRight size={16}/></a><a className="contact-social" href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn <ArrowUpRight size={16}/></a><a className="contact-social" href={`mailto:${EMAIL}`}><Mail size={18}/> Send an email <ArrowUpRight size={16}/></a></div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="footer-mark" href="#home">R<span>.</span></a><span>DESIGNED WITH INTENT · BUILT WITH CURIOSITY</span><span>© 2026 RAJESH R</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);