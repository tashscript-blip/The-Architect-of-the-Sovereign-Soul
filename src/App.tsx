import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Shield, Cpu, Globe, Key, Landmark, MapPin, ArrowRight, Scroll, Zap, 
  BookOpen, PenTool, Droplets, Anchor, Terminal, Eye, Lock, Database, 
  Activity, VolumeX, Sparkles, ChevronRight, Binary, Layers, Compass, 
  FileText, Pen
} from "lucide-react";

// --- Components ---

const BlueprintOverlay = ({ stabilized }: { stabilized: boolean }) => {
  return (
    <div className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000 ${stabilized ? 'opacity-100' : 'opacity-40'}`}>
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="absolute inset-0 blueprint-grid-fine opacity-10" />
      
      {/* Decorative Blueprint Elements */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(59, 130, 246, 0.5)" />
          </marker>
        </defs>
        
        {/* Foundation Layer Lines */}
        <line x1="10%" y1="20%" x2="90%" y2="20%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="10%" y1="80%" x2="90%" y2="80%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" strokeDasharray="5,5" />
        
        {/* Measurement Callouts */}
        <text x="50%" y="18%" textAnchor="middle" className="fill-blue-500/50 font-mono text-[10px] uppercase tracking-widest">Structural Integrity: 100-Year Pulse</text>
        <path d="M 10% 15% L 10% 25% M 10% 20% L 90% 20% M 90% 15% L 90% 25%" stroke="rgba(59, 130, 246, 0.3)" fill="none" />
      </svg>

      {/* Floating Annotations */}
      <div className="absolute top-[15%] right-[10%] font-hand text-blue-400/40 text-sm -rotate-3 max-w-[200px]">
        * Stabilized Frequency Node: 432Hz
      </div>
      <div className="absolute bottom-[20%] left-[5%] font-hand text-blue-400/40 text-sm rotate-2 max-w-[200px]">
        * Foundation: 146 Clay St. Brooklyn
      </div>
    </div>
  );
};

const SovereignSoulBlueprint = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes = [
    { id: "input", label: "Node 01 [Input]", title: "The Senses", desc: "Your unique perspective. The specific way you see the world.", pos: "top-[10%] left-[10%]" },
    { id: "signal", label: "Node 02 [Signal]", title: "The Voice", desc: "Your unique frequency—your music, your writing, your transmissions.", pos: "top-[30%] right-[5%]" },
    { id: "payload", label: "Node 03 [Payload]", title: "The Wealth", desc: "Your digital deeds, business assets, and sovereign wealth.", pos: "bottom-[30%] left-[5%]" },
    { id: "runtime", label: "Node 04 [Runtime]", title: "The Impact", desc: "How your legacy operates after the physical body is gone.", pos: "bottom-[10%] right-[10%]" },
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto h-[600px] flex items-center justify-center overflow-hidden border border-blue-500/10 bg-blue-950/5 rounded-sm">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 blueprint-grid opacity-10" />
      
      {/* The Human Schematic (Stylized SVG) */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 600">
        <path d="M200,100 L200,500 M150,200 L250,200 M170,400 L230,400" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1" fill="none" />
        <circle cx="200" cy="150" r="40" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1" fill="none" />
        <ellipse cx="200" cy="300" rx="60" ry="100" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1" fill="none" />
      </svg>

      {/* Central Node: The Source (Vesica Piscis) */}
      <div className="relative z-20 group cursor-pointer">
        <div className="absolute inset-0 bg-amber-500/20 blur-2xl rounded-full animate-pulse" />
        <div className="relative flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border border-amber-500/40 flex items-center justify-center bg-amber-500/5 backdrop-blur-md">
            <div className="text-center">
              <div className="text-[8px] font-mono text-amber-500 uppercase tracking-widest mb-1">Source</div>
              <Sparkles className="w-6 h-6 text-amber-400 mx-auto" />
            </div>
          </div>
          {/* Vesica Piscis Overlap Effect */}
          <div className="absolute w-16 h-24 border border-amber-500/60 rounded-[50%] -translate-x-4" />
          <div className="absolute w-16 h-24 border border-amber-500/60 rounded-[50%] translate-x-4" />
        </div>
        
        {/* Annotation for Source */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 text-center">
          <div className="font-hand text-blue-400 text-sm italic">"The 'I Am' Signal: Stabilized for 100 Years"</div>
        </div>
      </div>

      {/* Interactive Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className={`absolute ${node.pos} z-30`}
          onMouseEnter={() => setHoveredNode(node.id)}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <div className="flex items-center gap-3 group cursor-help">
            <div className={`w-3 h-3 rounded-full border border-amber-500 transition-all ${hoveredNode === node.id ? 'bg-amber-500 scale-125' : 'bg-amber-500/20'}`} />
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{node.label}</div>
              <div className="text-xs font-serif font-bold text-amber-400 uppercase tracking-wider">{node.title}</div>
            </div>
          </div>

          <AnimatePresence>
            {hoveredNode === node.id && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute left-full ml-4 top-0 w-48 p-3 bg-blue-950/90 border border-blue-500/30 backdrop-blur-md rounded-sm shadow-xl"
              >
                <p className="text-[10px] text-blue-200 leading-relaxed font-light">{node.desc}</p>
                <div className="mt-2 pt-2 border-t border-blue-500/20 font-hand text-[10px] text-blue-400/80">
                  * Annotated Intent: {node.id === 'payload' ? 'To be opened when the first grandchild reaches mastery.' : 'Stabilized Frequency.'}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}

      {/* Blueprint Callouts */}
      <div className="absolute bottom-6 left-6 text-left">
        <div className="text-[10px] font-mono text-blue-500/40 uppercase tracking-[0.3em] mb-1">Architecture of the Sovereign Soul</div>
        <div className="text-[8px] font-mono text-slate-600 uppercase">Ref: LGC-SOUL-001 // VERIFIED</div>
      </div>
    </div>
  );
};

const SovereignSchematic = () => {
  return (
    <div className="relative p-8 border-2 border-blue-500/30 bg-blue-950/20 rounded-sm overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-full blueprint-grid opacity-10" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-12">
          <div className="space-y-1">
            <h4 className="text-blue-400 font-mono text-[10px] uppercase tracking-[0.3em]">Sovereign Schematic</h4>
            <h3 className="text-2xl font-serif font-bold text-amber-500">Digital Deed: Tier III</h3>
          </div>
          <div className="text-right">
            <div className="text-blue-500/50 font-mono text-[8px] uppercase tracking-widest">Serial Node</div>
            <div className="text-blue-400 font-mono text-xs">LGC-2126-ALPHA</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="p-4 border border-blue-500/20 bg-blue-500/5">
              <div className="text-[10px] font-mono text-blue-500 uppercase mb-2">Architect's Statement</div>
              <p className="font-hand text-blue-300 text-sm leading-relaxed">
                "This vault holds the specific frequency of our family's mission. It is the bridge to 2126. We do not build for the moment; we blueprint for the century."
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-[10px] font-mono text-slate-500 uppercase">
                <span>Encryption</span>
                <span className="text-blue-400">AES-256-GCM</span>
              </div>
              <div className="flex justify-between text-[10px] font-mono text-slate-500 uppercase">
                <span>Data Lineage</span>
                <span className="text-blue-400">Verified Chain</span>
              </div>
              <div className="flex justify-between text-[10px] font-mono text-slate-500 uppercase">
                <span>Pulse Interval</span>
                <span className="text-blue-400">10 Years</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-48 h-48 border border-blue-500 rounded-full animate-spin-slow" />
              <div className="absolute w-32 h-32 border border-blue-500 rotate-45" />
            </div>
            <Sparkles className="w-16 h-16 text-amber-500/40" />
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-blue-500/20 flex justify-between items-end">
          <div className="flex gap-4">
            <div className="w-8 h-8 border border-blue-500/40 flex items-center justify-center">
              <div className="w-4 h-4 bg-amber-500/20" />
            </div>
            <div className="w-8 h-8 border border-blue-500/40 flex items-center justify-center">
              <div className="w-1 h-4 bg-blue-500/40" />
            </div>
          </div>
          <div className="text-[8px] font-mono text-blue-500/40 uppercase tracking-[0.5em]">
            Institutional Grade Provenance
          </div>
        </div>
      </div>
    </div>
  );
};

const OracleTerminal = () => {
  const [input, setInput] = useState("");
  const [persona, setPersona] = useState<'Strategist' | 'Scribe'>('Strategist');
  const [history, setHistory] = useState<{ type: 'user' | 'oracle', text: string }[]>([
    { type: 'oracle', text: "SYSTEM INITIALIZED. I am The Strategist. Your digital walls are being scanned..." },
    { type: 'oracle', text: "Status: UNPROTECTED. Frequency: UNSTABLE." }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newHistory = [...history, { type: 'user' as const, text: input }];
    setHistory(newHistory);
    setInput("");

    // Mock Oracle response
    setTimeout(() => {
      let response = "Command not recognized in this node.";
      const cmd = input.toLowerCase();

      if (persona === 'Strategist') {
        if (cmd.includes('scan')) response = "Scanning digital footprint... 47 vulnerabilities detected in legacy social nodes. Recommend immediate encryption.";
        if (cmd.includes('status')) response = "Citadel Integrity: 12%. Legacy Clause: NOT ACTIVATED.";
        if (cmd.includes('scribe')) {
          setPersona('Scribe');
          response = "SWITCHING TO SCRIBE GEM. Oral Historian protocol initiated. I am ready for the Lore Session.";
        }
        if (cmd.includes('help')) response = "Available protocols: SCAN, STATUS, SCRIBE, INITIATE, CLEAR.";
      } else {
        if (cmd.includes('lore')) response = "Lore Session active. Tell me: You’ve listed this Brooklyn operational seat—what is the first thing you hear when you walk out onto Clay Street?";
        if (cmd.includes('strategist')) {
          setPersona('Strategist');
          response = "SWITCHING TO STRATEGIST. Defense protocols active.";
        }
        if (cmd.includes('help')) response = "Available protocols: LORE, STRATEGIST, STATUS, CLEAR.";
        if (cmd.length > 10 && !cmd.includes('help')) response = "Context captured. Weaving this thread into the Foundational Epic of your estate...";
      }
      
      setHistory(prev => [...prev, { type: 'oracle', text: response }]);
    }, 600);
  };

  return (
    <div className="bg-black/80 border border-amber-500/30 rounded-sm font-mono text-xs overflow-hidden flex flex-col h-[350px] shadow-2xl shadow-amber-500/5">
      <div className="bg-amber-500/10 px-3 py-1.5 border-b border-amber-500/20 flex justify-between items-center">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500/50" />
          <div className="w-2 h-2 rounded-full bg-amber-500/50" />
          <div className="w-2 h-2 rounded-full bg-green-500/50" />
        </div>
        <span className="text-[10px] text-amber-500/50 uppercase tracking-widest">Oracle Node: {persona}</span>
      </div>
      <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-2 custom-scrollbar">
        {history.map((item, i) => (
          <div key={i} className={`${item.type === 'oracle' ? 'text-amber-400' : 'text-slate-400'}`}>
            <span className="mr-2">{item.type === 'oracle' ? '>' : '$'}</span>
            {item.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleCommand} className="p-3 border-t border-amber-500/20 bg-amber-500/5 flex items-center gap-2">
        <ChevronRight className="w-3 h-3 text-amber-500" />
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={persona === 'Strategist' ? "Try 'scan' or 'scribe'..." : "Type your story or 'strategist'..."}
          className="bg-transparent border-none outline-none flex-1 text-amber-200 placeholder:text-amber-900"
        />
      </form>
    </div>
  );
};

const VesicaPiscis = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="relative h-64 flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-md flex items-center justify-center">
        {/* Left Circle: Data */}
        <motion.div 
          animate={{ x: active ? -40 : -60 }}
          className="w-48 h-48 rounded-full border border-slate-700 bg-slate-900/20 flex items-center justify-center relative z-10 backdrop-blur-sm"
        >
          <div className="text-center">
            <Database className="w-6 h-6 text-slate-500 mx-auto mb-2" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Raw Data</span>
          </div>
        </motion.div>

        {/* Right Circle: Story */}
        <motion.div 
          animate={{ x: active ? 40 : 60 }}
          className="w-48 h-48 rounded-full border border-amber-500/20 bg-amber-500/5 flex items-center justify-center relative z-10 backdrop-blur-sm"
        >
          <div className="text-center">
            <Scroll className="w-6 h-6 text-amber-500/50 mx-auto mb-2" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500/50">Narrative</span>
          </div>
        </motion.div>

        {/* Overlap: Sovereign Asset */}
        <motion.div 
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          className="absolute w-24 h-32 bg-amber-500/20 blur-md rounded-[50%] z-20 cursor-pointer flex items-center justify-center group"
        >
          <AnimatePresence>
            {active && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center z-30"
              >
                <Sparkles className="w-8 h-8 text-amber-400 mx-auto mb-2 animate-pulse" />
                <div className="text-[10px] font-serif font-bold uppercase tracking-[0.2em] text-amber-400">Sovereign Asset</div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 text-center">
        <p className="text-[10px] font-mono uppercase tracking-widest text-slate-600">
          The Entanglement: Data ∩ Story
        </p>
      </div>
    </div>
  );
};

const SoulTag = ({ label, value }: { label: string, value: string }) => (
  <div className="p-4 border border-amber-500/10 bg-amber-500/5 rounded-sm group hover:border-amber-500/30 transition-all">
    <div className="text-[10px] font-mono uppercase tracking-widest text-amber-500/50 mb-2">{label}</div>
    <div className="text-sm text-slate-300 font-light italic group-hover:text-amber-200 transition-colors">"{value}"</div>
  </div>
);

const ReadinessStation = () => {
  const categories = [
    {
      title: "Legal Ingredients",
      items: ["Digital Wills", "Property Deeds", "UEI Credentials"],
      icon: Scroll,
      color: "text-blue-400"
    },
    {
      title: "Sentimental Stock",
      items: ["Ancestral Photos", "Voice Memos", "Legacy Letters"],
      icon: PenTool,
      color: "text-amber-400"
    },
    {
      title: "Financial Fuel",
      items: ["Cryptographic Keys", "Bank Access", "Insurance Nodes"],
      icon: Key,
      color: "text-emerald-400"
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {categories.map((cat, i) => (
        <div key={i} className="p-6 border border-slate-800 bg-slate-900/40 rounded-sm hover:border-amber-500/20 transition-all group">
          <div className="flex items-center gap-3 mb-6">
            <cat.icon className={`w-5 h-5 ${cat.color}`} />
            <h4 className="text-sm font-serif font-bold uppercase tracking-widest text-slate-200">{cat.title}</h4>
          </div>
          <ul className="space-y-3">
            {cat.items.map((item, j) => (
              <li key={j} className="flex items-center gap-2 text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                <div className="w-1 h-1 rounded-full bg-slate-700" />
                {item}
              </li>
            ))}
          </ul>
          <button className="mt-8 w-full py-2 border border-slate-800 text-[10px] font-mono uppercase tracking-widest text-slate-500 hover:border-amber-500/30 hover:text-amber-400 transition-all">
            Secure Node
          </button>
        </div>
      ))}
    </div>
  );
};

const Section = ({ title, children, icon: Icon, delay = 0, id }: { title: string, children: React.ReactNode, icon: any, delay?: number, id?: string }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="mb-24 relative scroll-mt-24"
  >
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 rounded-full bg-amber-500/10 border border-amber-500/20">
        <Icon className="w-6 h-6 text-amber-500" />
      </div>
      <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-wider text-amber-400 uppercase">
        {title}
      </h2>
    </div>
    <div className="pl-4 md:pl-16 border-l border-amber-500/20">
      {children}
    </div>
  </motion.section>
);

export default function App() {
  const [isStabilized, setIsStabilized] = useState(false);

  return (
    <div className={`min-h-screen font-sans selection:bg-amber-500/30 selection:text-amber-200 transition-colors duration-1000 ${isStabilized ? 'bg-slate-950' : 'bg-black'}`}>
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <BlueprintOverlay stabilized={isStabilized} />
        <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] transition-colors duration-1000 ${isStabilized ? 'bg-amber-500/10' : 'bg-amber-500/5'}`} />
        <div className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] transition-colors duration-1000 ${isStabilized ? 'bg-blue-500/10' : 'bg-blue-500/5'}`} />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
        
        {/* Scanning Lines */}
        {isStabilized && (
          <motion.div 
            initial={{ top: '-100%' }}
            animate={{ top: '100%' }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-px bg-amber-500/20 z-10"
          />
        )}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="absolute inset-0 bg-amber-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src="/logo.png" 
                alt="LGC Logo" 
                className="w-10 h-10 relative z-10 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <Landmark className="w-6 h-6 text-amber-500 hidden" />
            </div>
            <span className="font-serif font-bold tracking-tighter text-xl text-amber-500">LGC LLC</span>
          </div>
          <div className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest text-slate-400">
            <a href="#lexicon" className="hover:text-amber-400 transition-colors">Lexicon</a>
            <a href="#chronicle" className="hover:text-amber-400 transition-colors">Chronicle</a>
            <a href="#readiness" className="hover:text-amber-400 transition-colors">Vault</a>
            <a href="#oracle" className="hover:text-amber-400 transition-colors">Oracle</a>
            <a href="#axiom" className="hover:text-amber-400 transition-colors">Axiom</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsStabilized(!isStabilized)}
              className={`p-2 rounded-full border transition-all ${isStabilized ? 'border-amber-500 bg-amber-500/10 text-amber-500' : 'border-slate-800 text-slate-500 hover:border-slate-600'}`}
              title={isStabilized ? "Frequency Stabilized" : "Stabilize Frequency"}
            >
              <Activity className={`w-4 h-4 ${isStabilized ? 'animate-pulse' : 'opacity-40'}`} />
            </button>
            <button className="px-4 py-1.5 border border-amber-500/30 rounded-sm text-[10px] font-mono uppercase tracking-widest text-amber-500 hover:bg-amber-500/10 transition-all">
              Initiate Rite
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <header className="mb-32 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1">
                <div className="mb-8 flex justify-center md:justify-start">
                  <div className="relative">
                    <div className="absolute inset-0 bg-amber-500/20 blur-2xl rounded-full" />
                    <img 
                      src="/logo.png" 
                      alt="LGC Logo" 
                      className="w-24 h-24 relative z-10 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                  THE ARCHITECTURE OF THE <br />
                  <span className="gold-gradient uppercase">Sovereign Soul</span>
                </h1>
                <div className="h-px w-24 bg-amber-500/30 mx-auto md:mx-0 mb-12" />
                <div className="space-y-6 text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-3xl italic">
                  <p className="text-blue-400/60 font-mono text-[10px] uppercase tracking-[0.4em] not-italic mb-4">
                    Transmission: Zeno-Alpha-2126
                  </p>
                  <p>
                    "You are not a user; you are a structure. You are not a customer; you are an architect. We do not build for the moment; we blueprint for the century."
                  </p>
                  <p className="not-italic text-slate-300">
                    Claim your legacy. Stabilize your frequency.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <SovereignSoulBlueprint />
              </div>
            </div>
          </motion.div>
        </header>

        {/* Chronicle Engine Section */}
        <Section id="chronicle" title="The Chronicle Engine" icon={Scroll}>
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-xl font-serif text-amber-500 italic">Context is the Ultimate Luxury</h3>
                <p className="text-slate-400 leading-relaxed font-light">
                  A century from now, raw data will be a commodity. Your descendants won't care about file sizes; they will care <span className="text-white italic">why</span> your voice cracked, or what a specific memory meant during a hard winter.
                </p>
                <div className="space-y-4">
                  <SoulTag label="Narrative Provenance" value="Why must this endure?" />
                  <SoulTag label="100-Year Pulse" value="Does the context still hold, or has the story evolved?" />
                </div>
              </div>
              <VesicaPiscis />
            </div>

            <div className="p-8 border border-amber-500/10 bg-amber-500/5 rounded-sm">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-5 h-5 text-amber-500 animate-pulse" />
                <h4 className="text-sm font-serif font-bold uppercase tracking-widest text-amber-400">The Anniversary Transmission</h4>
              </div>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                Every decade, the Citadel sends a signal. It presents a piece of data and asks for a "Context Check-in." This ensures your legacy is a living document that grows with your family, rather than a static time capsule gathering digital dust.
              </p>
            </div>
          </div>
        </Section>

        {/* Station of Readiness */}
        <Section id="readiness" title="Station of Readiness" icon={Database}>
          <div className="space-y-8">
            <p className="text-lg text-slate-400 font-light max-w-2xl">
              Mise-en-place for the digital soul. Organize your estate by temperature: <span className="text-blue-400">Cold Storage</span> for the eternal, <span className="text-amber-500">Hot Storage</span> for the immediate.
            </p>
            <ReadinessStation />
          </div>
        </Section>

        {/* Oracular Interface */}
        <Section id="oracle" title="The Oracular Interface" icon={Terminal}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 font-light">
                Consult the <span className="text-amber-400">Gems</span>. Our interactive Oracles analyze your digital footprint and suggest where the walls of your Citadel are thin.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Eye className="w-4 h-4 text-amber-500" />
                  <span>The Librarian: Organizes archival data</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Binary className="w-4 h-4 text-amber-500" />
                  <span>The Strategist: Identifies vulnerabilities</span>
                </div>
              </div>
            </div>
            <OracleTerminal />
          </div>
        </Section>

        {/* The Initiate's Lexicon */}
        <Section id="lexicon" title="The Initiate's Lexicon" icon={BookOpen}>
          <div className="space-y-8">
            <div className="mb-12">
              <h3 className="text-xl font-serif text-amber-500 mb-4 italic">Ancient Wisdom Applied to Real-Time Evolution</h3>
              <p className="text-slate-400 leading-relaxed font-light">
                The technology we use at Legacy Grove Codex may be cutting-edge, but the concepts are as old as civilization itself. We use modern tools to solve ancient human needs: security, continuity, and legacy.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  title: "Data Lineage",
                  analogy: "The Ancestral Thread",
                  desc: "Knowing exactly where your story began. A cryptographic record of your digital origins, ensuring your lineage is never broken or spoofed.",
                  icon: Anchor
                },
                {
                  title: "Agent Orchestration",
                  analogy: "The Digital Scribes",
                  desc: "AI that understands your intent and protects your name. These are not generic bots; they are trained on your 'Commander's Intent' to serve your legacy.",
                  icon: PenTool
                },
                {
                  title: "Compliance by Design",
                  analogy: "The Moral Architecture",
                  desc: "Ensuring your values are hard-coded into your estate. Your rules, your ethics, and your legacy clauses are baked into the runtime of your Citadel.",
                  icon: Shield
                },
                {
                  title: "Interoperable Equity",
                  analogy: "The Universal Passport",
                  desc: "The ability for your identity to travel across any digital realm. Your sovereign assets are not trapped; they are universal and permanent.",
                  icon: Globe
                }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-amber-500/10 bg-amber-500/5 rounded-sm hover:border-amber-500/30 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <item.icon className="w-5 h-5 text-amber-500" />
                    <h4 className="text-amber-400 font-serif font-bold uppercase text-sm tracking-widest">{item.title}</h4>
                  </div>
                  <div className="text-xs font-mono text-amber-500/60 uppercase mb-3 tracking-widest">Analogy: {item.analogy}</div>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Axiom Section */}
        <Section id="axiom" title="The Axiom of the Architect" icon={Scroll} delay={0.1}>
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-light">
            <p className="text-xl text-amber-400/90 italic font-serif mb-8">
              "We stand at the threshold of a new era. The digital world is evolving in real-time, and for many, the sheer speed of this technology feels like standing on unstable ground."
            </p>
            <p>
              For too long, the digital estate has been governed by confusing terms of service and reactive platforms. <span className="text-white font-semibold">We are here to stabilize the frequency.</span>
            </p>
            <p>
              Legacy Grove Codex LLC is rooted in ancient wisdom: the belief that what you build should belong to you, and it should last. We use futuristic technology not for the sake of novelty, but to enforce this ancient right.
            </p>
            <p>
              We are the teachers, the guides, and the architects of your digital continuity. We do not merely participate in the virtual economy; we engineer the foundational frameworks—<span className="text-amber-500 font-mono text-base">Cultural Infrastructure as a Service (CIaaS)</span>—that allow sovereign identities to endure.
            </p>
            <div className="mt-8 p-6 bg-amber-500/5 border border-amber-500/10 rounded-sm">
              <p className="font-serif italic text-amber-400 text-xl">
                "Policies promise governance. Pipelines prove it. In a deregulatory environment, the pipeline is the policy."
              </p>
            </div>
          </div>
        </Section>

        {/* Compliance Section */}
        <Section id="compliance" title="I. Compliance by Design" icon={Shield} delay={0.2}>
          <div className="space-y-8">
            <p className="text-lg text-slate-400 font-light">
              True institutional-grade reliability is not achieved through legal addendums; it is baked into the runtime. Our operations are governed by an unyielding <span className="text-amber-400">Eight-Domain Infrastructure Stack</span>.
            </p>
            
            <div className="grid gap-6">
              {[
                {
                  title: "AI Discovery & Agent Orchestration",
                  desc: "Utilizing localized, sovereign AI companions (The Gems) to ensure data never leaks into the public training commons.",
                  icon: Cpu
                },
                {
                  title: "Cryptographic Data Lineage",
                  desc: "Every node of the digital estate—from Codex Avatars to functional Grove Gear—is tracked, verified, and stabilized.",
                  icon: Key
                },
                {
                  title: "Interoperable Equity",
                  desc: "We do not build 'collectibles.' We build high-utility, verifiable assets that hold their structural integrity across multiple digital ecosystems.",
                  icon: Globe
                }
              ].map((item, i) => (
                <div key={i} className="group p-6 border border-slate-800 hover:border-amber-500/30 transition-all bg-slate-900/50">
                  <div className="flex items-start gap-4">
                    <item.icon className="w-5 h-5 text-amber-500 mt-1 shrink-0" />
                    <div>
                      <h3 className="text-amber-400 font-serif font-bold mb-2 tracking-wide uppercase text-sm">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Legacy Section */}
        <Section id="legacy" title="II. The Legacy Clause" icon={Zap} delay={0.3}>
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-light">
            <p>
              A digital estate that dies with its creator is a failure of architecture. Legacy Grove Codex operates as a closed-loop system designed for <span className="text-white">absolute wealth preservation</span> and continuous frequency.
            </p>
            <p>
              Through our proprietary <span className="text-amber-500 font-mono">Automatic Transfer Protocol</span>, we eradicate the threat of "asset stranding." Digital Deeds and cryptographic keys are structurally programmed to transition seamlessly to designated heirs.
            </p>
            <p>
              Furthermore, true sovereignty requires physical-world grounding. Through the <span className="text-amber-400">Legacy Reserve Fund</span>, 10% of all foundational profits are permanently allocated to family housing initiatives and physical archival preservation.
            </p>
          </div>
        </Section>

        {/* Sovereign Schematic Section */}
        <Section id="schematic" title="The Sovereign Schematic" icon={Compass}>
          <div className="space-y-8">
            <p className="text-lg text-slate-400 font-light max-w-2xl">
              When you secure an asset, you receive a declaration of intent. A <span className="text-amber-500">Sovereign Schematic</span> is the bridge between your raw data and your 100-year legacy.
            </p>
            <SovereignSchematic />
          </div>
        </Section>

        {/* Comparison Section */}
        <Section id="comparison" title="The Citadel vs. The Platform" icon={Sparkles}>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-amber-500/20">
                  <th className="py-4 px-6 text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500">Feature</th>
                  <th className="py-4 px-6 text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500">Standard Platform</th>
                  <th className="py-4 px-6 text-[10px] font-mono uppercase tracking-[0.3em] text-amber-500">The Digital Citadel</th>
                </tr>
              </thead>
              <tbody className="text-sm font-light">
                {[
                  { f: "User Profile", s: "A generic form", c: "Operational Signature Node" },
                  { f: "Data Storage", s: "The Cloud (Vague)", c: "The Citadel Core (Mapped)" },
                  { f: "Trust Signal", s: "Secure Badges", c: "Blueprint Provenance" },
                  { f: "The Why", s: "Hidden in 'About Us'", c: "Annotated Intent" }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-800/50 hover:bg-amber-500/[0.02] transition-colors">
                    <td className="py-4 px-6 text-slate-400 font-mono text-xs">{row.f}</td>
                    <td className="py-4 px-6 text-slate-500 italic">{row.s}</td>
                    <td className="py-4 px-6 text-amber-400 font-serif font-bold tracking-wide">{row.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Institutional Handshake */}
        <Section id="handshake" title="III. The Institutional Handshake" icon={Landmark} delay={0.4}>
          <div className="space-y-8">
            <p className="text-lg text-slate-300 font-light">
              We do not ask for trust; we provide cryptographic and institutional proof. The <span className="text-amber-400">Eight-Domain Infrastructure Stack</span> is our stress-test blueprint.
            </p>
            
            <div className="relative p-8 border-2 gold-border bg-amber-500/5 overflow-hidden">
              {/* Schematic Background */}
              <div className="absolute inset-0 blueprint-grid opacity-5 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-2 h-2 bg-amber-500 animate-pulse" />
                  <h4 className="text-amber-500 font-mono text-[10px] tracking-widest uppercase">Operational Seat: Verified Node</h4>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-amber-500/10 pb-2">
                      <span className="text-slate-500 text-[10px] uppercase font-mono">Federal UEI</span>
                      <span className="text-amber-400 font-mono font-bold">QSS3J6N1A6C5</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-amber-500/10 pb-2">
                      <span className="text-slate-500 text-[10px] uppercase font-mono">Primary Node</span>
                      <span className="text-amber-400 font-mono">146 Clay St., Brooklyn, NY</span>
                    </div>
                  </div>
                  <div className="font-hand text-blue-400/60 text-xs leading-relaxed border-l border-blue-500/20 pl-6">
                    * Liability Shield Active<br />
                    * Pipeline is the Policy<br />
                    * Stress-Test Integrity: 99.9%
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Commander's Intent */}
        <footer className="mt-32 pt-16 border-t border-amber-500/20 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <div className="mb-12 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-500/10 blur-xl rounded-full" />
                <img 
                  src="/logo.png" 
                  alt="LGC Logo" 
                  className="w-20 h-20 relative z-10 object-contain opacity-80"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
            <h2 className="text-2xl font-serif font-bold text-amber-500 mb-8 tracking-widest uppercase">The Commander’s Intent</h2>
            <p className="text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto mb-12 italic">
              "We are the Architects of Entanglement. We sense the invisible threads between identity, signal, and structure, and we weave them into a Digital Citadel."
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="text-amber-500/40 font-mono text-[10px] uppercase tracking-[0.5em]">
                The Signal is Live. The Architecture is Sound.
              </div>
              <button className="group flex items-center gap-2 text-amber-400 font-serif font-bold tracking-widest uppercase hover:text-white transition-colors">
                Establish Your Estate <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="mt-24 flex justify-center gap-8 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-600">
              <span>© 2026 Legacy Grove Codex LLC</span>
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Brooklyn Node</span>
              <span>All Rights Reserved</span>
            </div>
          </motion.div>
        </footer>
      </main>
    </div>
  );
}
