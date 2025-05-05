// 

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App min-h-screen font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <a href="/" className={`text-xl md:text-2xl font-bold tracking-tight ${scrollPosition > 50 ? 'text-primary' : 'text-white'}`}>Pranav Dhruv Tandon</a>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-6">
              {['about','skills','experience','approach','contact'].map((sect)=> (
                <Link key={sect} to={sect} smooth={true} duration={500} className={`cursor-pointer transition-colors ${scrollPosition>50?'text-dark hover:text-primary':'text-white hover:text-secondary'}`}>{sect.charAt(0).toUpperCase()+sect.slice(1)}</Link>
              ))}
            </div>

            {/* Mobile toggle */}
            <button onClick={toggleMenu} className={`md:hidden focus:outline-none ${scrollPosition>50?'text-dark':'text-white'}`}> 
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg rounded-b-lg mt-3 py-4 px-6 space-y-3">
              {['about','skills','experience','approach','contact'].map((sect)=> (
                <Link key={sect} to={sect} smooth={true} duration={500} onClick={()=>setIsMenuOpen(false)} className="block text-dark hover:text-primary">{sect.charAt(0).toUpperCase()+sect.slice(1)}</Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-section h-screen flex items-center justify-center bg-cover bg-center text-white" style={{backgroundImage:'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085)'}}>
        <div className="text-center max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">Entrepreneur • AI Consultant • Strategic Investor</h1>
          <p className="text-lg md:text-2xl mb-8 backdrop-blur-sm bg-black bg-opacity-30 p-4 rounded-lg inline-block">
            I build AI systems that scale, raise capital for daring ideas, and invest for long‑term value.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="about" smooth duration={500} className="btn btn-primary">Discover More</Link>
            <Link to="contact" smooth duration={500} className="btn bg-white text-primary hover:bg-gray-100">Let’s Talk</Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-20">
        <div className="container-section">
          <h2 className="section-title gradient-border">About Me</h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <img src="https://images.unsplash.com/photo-1581093588401-175f55227f5b" alt="Pranav Dhruv Tandon" className="rounded-lg shadow-xl w-full h-auto object-cover"/>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                I’m an entrepreneur and problem‑solver who loves pushing technical boundaries for maximum optimisation. My toolkit includes <strong>Retrieval‑Augmented Generation (RAG)</strong>, <strong>vector embeddings</strong>, the <strong>Model Context Protocol (MCP)</strong>, and <strong>semantic chunking</strong>—all of which I’ve used to cut hallucinations and boost accuracy in production systems. ([aws.amazon.com](https://aws.amazon.com/what-is/retrieval-augmented-generation/?utm_source=chatgpt.com))([pinecone.io](https://www.pinecone.io/learn/vector-embeddings/?utm_source=chatgpt.com))
              </p>
              <p>
                Beyond code, I align AI initiatives with real business outcomes. At <em>CodeCertain.ai</em> I grew engagement 3.5× by shipping an AI‑powered code analysis stack and negotiating over&nbsp;$150k in AWS credits to scale it. ([codecertain.ai](https://codecertain.ai/?utm_source=chatgpt.com))([weaviate.io](https://weaviate.io/blog/what-is-agentic-rag?utm_source=chatgpt.com))
              </p>
              <p>
                I’m equally passionate about capital allocation. Since 2021 I’ve managed a <strong>$450k</strong> multi‑market equity portfolio delivering ~<strong>27% CAGR</strong> by applying Buffett‑style value investing and deep fundamental research. ([reddit.com](https://www.reddit.com/r/AZURE/comments/1e2fiz9/microsoft_startups_150k_funding_everything_you/?utm_source=chatgpt.com))([finance.yahoo.com](https://finance.yahoo.com/news/apply-warren-buffetts-principles-etfs-090000871.html?utm_source=chatgpt.com))
              </p>
              <p>
                On the real‑estate front I co‑founded <em>M3S&nbsp;Services</em>, raising&nbsp;$800k to develop a triplex while steering permits, contractors and financial modelling. ([biggerpockets.com](https://www.biggerpockets.com/forums/48/topics/1116601-your-thoughts-on-strategy-duplex-triplex-700k-800k-in-wa-or-2-3-in-midwest?utm_source=chatgpt.com))
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="technology-bg text-white py-20">
        <div className="container-section bg-accent bg-opacity-90 rounded-lg p-8 md:p-12">
          <h2 className="section-title text-white">Technical & Business Edge</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {/* AI & ML */}
            <div className="card skills-card bg-white bg-opacity-10 hover:bg-opacity-20">
              <h3 className="section-subtitle text-white mb-3">AI / ML</h3>
              <ul className="space-y-2">
                {['RAG pipelines','Vector / Hybrid Embeddings','MCP & Tool‑use','Agentic RAG','Semantic Chunking','PyTorch & TensorFlow'].map((s)=>(<li key={s} className="flex items-center"><span className="mr-2">✔</span>{s}</li>))}
              </ul>
            </div>
            {/* Software */}
            <div className="card skills-card bg-white bg-opacity-10 hover:bg-opacity-20">
              <h3 className="section-subtitle text-white mb-3">Software & DevOps</h3>
              <ul className="space-y-2">
                {['Python, Java, C++','React / Next.js','Docker & Kubernetes','AWS / GCP / Azure','Superset & Tableau','Micro‑services Architecture'].map((s)=>(<li key={s} className="flex items-center"><span className="mr-2">✔</span>{s}</li>))}
              </ul>
            </div>
            {/* Bioinformatics */}
            <div className="card skills-card bg-white bg-opacity-10 hover:bg-opacity-20">
              <h3 className="section-subtitle text-white mb-3">Bioinformatics</h3>
              <ul className="space-y-2">
                {['Genome Analysis','Proteomics & Metabolomics','Drug‑discovery ML','High‑throughput sequencing','Synthetic Biology','R & Bioconductor'].map((s)=>(<li key={s} className="flex items-center"><span className="mr-2">✔</span>{s}</li>))}
              </ul>
            </div>
            {/* Business */}
            <div className="card skills-card bg-white bg-opacity-10 hover:bg-opacity-20">
              <h3 className="section-subtitle text-white mb-3">Investment & Business</h3>
              <ul className="space-y-2">
                {['Capital Raising','Value Investing','Real‑estate Analysis','Financial Modelling','Market Research','SWOT & Strategy'].map((s)=>(<li key={s} className="flex items-center"><span className="mr-2">✔</span>{s}</li>))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-white py-20">
        <div className="container-section">
          <h2 className="section-title gradient-border">Experience</h2>
          <div className="space-y-12">
            {/* CodeCertain */}
            <div className="timeline-item">
              <h3 className="text-xl font-semibold text-primary">CodeCertain.ai</h3>
              <p className="text-gray-600 mb-2">Co‑Founder • Technical Program Manager (2022‑Present)</p>
              <p>Scaled an AI‑powered SaaS that predicts bugs pre‑merge; grew active users 350% and unlocked $150k in cloud credits.</p>
              <div className="flex flex-wrap gap-2 mt-2 text-sm">
                {['RAG','AWS','Product Growth','Team Leadership'].map(t=>(<span key={t} className="tech-tag">{t}</span>))}
              </div>
            </div>
            {/* M3S Services */}
            <div className="timeline-item">
              <h3 className="text-xl font-semibold text-primary">M3S Services</h3>
              <p className="text-gray-600 mb-2">Co‑Founder • Real‑Estate Lead (2023‑Present)</p>
              <p>Structured and funded an $800k triplex development, navigating zoning, permits and investor relations.</p>
              <div className="flex flex-wrap gap-2 mt-2 text-sm">
                {['Capital Raising','Real‑Estate Modelling','Stakeholder Mgmt'].map(t=>(<span key={t} className="tech-tag">{t}</span>))}
              </div>
            </div>
            {/* Portfolio */}
            <div className="timeline-item">
              <h3 className="text-xl font-semibold text-primary">Private Portfolio</h3>
              <p className="text-gray-600 mb-2">Investment Manager (2021‑Present)</p>
              <p>Manage $450k across US, CA & IN markets delivering ~27% annual returns through fundamental value investing.</p>
              <div className="flex flex-wrap gap-2 mt-2 text-sm">
                {['Equities','Fundamental Analysis','Risk Mgmt'].map(t=>(<span key={t} className="tech-tag">{t}</span>))}
              </div>
            </div>
            {/* Xneelo */}
            <div className="timeline-item">
              <h3 className="text-xl font-semibold text-primary">Xneelo</h3>
              <p className="text-gray-600 mb-2">Software Developer Intern (2022‑2023)</p>
              <p>Migrated legacy stacks to Kubernetes, cutting infra spend 32% and improving deployment velocity.</p>
              <div className="flex flex-wrap gap-2 mt-2 text-sm">
                {['Kubernetes','Ruby on Rails','DevOps'].map(t=>(<span key={t} className="tech-tag">{t}</span>))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="bg-gray-50 py-20">
        <div className="container-section">
          <h2 className="section-title gradient-border">Problem‑Solving DNA</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8 hover:shadow-lg">
              <h3 className="section-subtitle mb-4">My Method</h3>
              <ul className="space-y-3 list-disc list-inside text-gray-700">
                <li>Spend ~55% of time clarifying the true bottleneck.</li>
                <li>Devote ~30% to mapping solution spaces & recruiting domain experts.</li>
                <li>Execute relentlessly on the final 15%, iterating with data.
                </li>
              </ul>
            </div>
            <div className="card p-8 hover:shadow-lg">
              <h3 className="section-subtitle mb-4">Core Traits</h3>
              <ul className="space-y-3 list-disc list-inside text-gray-700">
                <li>Resourceful & deadline‑oriented.</li>
                <li>Bridge across AI, bio‑tech & finance.</li>
                <li>Collaborative, loyal & positive‑sum.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-primary text-white py-20">
        <div className="container-section">
          <h2 className="section-title text-white">Get in Touch</h2>
          <div className="max-w-3xl mx-auto bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-md">
            <p className="text-center mb-6">Ready to collaborate or just talk shop? Drop a note below or connect on LinkedIn.</p>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Name" className="w-full p-3 rounded-md bg-white bg-opacity-20 focus:bg-opacity-30"/>
                <input type="email" placeholder="Email" className="w-full p-3 rounded-md bg-white bg-opacity-20 focus:bg-opacity-30"/>
              </div>
              <input type="text" placeholder="Subject" className="w-full p-3 rounded-md bg-white bg-opacity-20 focus:bg-opacity-30"/>
              <textarea rows="5" placeholder="Message" className="w-full p-3 rounded-md bg-white bg-opacity-20 focus:bg-opacity-30"/>
              <div className="text-center"><button type="submit" className="btn bg-white text-primary hover:bg-gray-100">Send Message</button></div>
            </form>
            <div className="mt-8 flex justify-center space-x-6">
              <a href="https://www.linkedin.com/in/pranavdhruvtandon/" target="_blank" rel="noreferrer" className="hover:opacity-80">LinkedIn</a>
              <a href="https://github.com/pranav-tandon" target="_blank" rel="noreferrer" className="hover:opacity-80">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Pranav Dhruv Tandon • All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
