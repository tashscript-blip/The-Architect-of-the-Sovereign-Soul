import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Shield, Cpu, Globe, Key, Landmark, MapPin, ArrowRight, Scroll, Zap, 
  BookOpen, PenTool, Anchor, Terminal, Eye, Lock, Database, 
  Activity, Sparkles, ChevronRight, Binary, Layers, Compass, 
  FileText, Users, History, Menu, X, Landmark as LandmarkIcon,
  CreditCard, Wallet, Receipt, CheckCircle2
} from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

// Initialize Stripe
const stripePromise = loadStripe((import.meta as any).env.VITE_STRIPE_PUBLISHABLE_KEY || "pk_test_placeholder");

// --- Types ---

type View = "codex" | "infrastructure" | "seed" | "bureau" | "commons" | "engagement" | "treasury";

// --- Components ---

const Navigation = ({ currentView, setView }: { currentView: View, setView: (v: View) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const menuItems: { id: View, label: string }[] = [
    { id: "codex", label: "The Codex" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "seed", label: "The Seed" },
    { id: "bureau", label: "Legacy Bureau" },
    { id: "commons", label: "The Commons" },
    { id: "engagement", label: "Engagement" },
    { id: "treasury", label: "Treasury" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView("codex")}>
        <div className="w-10 h-10 flex items-center justify-center border border-[#c5a059]/40 rounded-sm bg-[#c5a059]/5">
          <Layers className="w-6 h-6 text-[#c5a059]" />
        </div>
        <div className="hidden sm:block">
          <div className="text-xs font-mono tracking-[0.3em] text-[#c5a059] uppercase">LGC LLC</div>
          <div className="text-[10px] font-serif italic text-slate-500">Architect of CIaaS</div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setView(item.id)}
            className={`text-[10px] font-mono uppercase tracking-[0.2em] transition-colors hover:text-[#c5a059] ${currentView === item.id ? 'text-[#c5a059]' : 'text-slate-500'}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-slate-400" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 p-8 flex flex-col gap-6 md:hidden"
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setView(item.id); setIsOpen(false); }}
                className={`text-sm font-mono uppercase tracking-[0.2em] text-left ${currentView === item.id ? 'text-[#c5a059]' : 'text-slate-500'}`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeader = ({ title, subtitle, icon: Icon }: { title: string, subtitle?: string, icon?: any }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-4">
      {Icon && <Icon className="w-5 h-5 text-[#c5a059]" />}
      <div className="h-px flex-1 bg-gradient-to-r from-[#c5a059]/30 to-transparent" />
    </div>
    <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-2">{title}</h2>
    {subtitle && <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#c5a059]/60">{subtitle}</p>}
  </div>
);

// --- Views ---

const CodexView = ({ setView }: { setView: (v: View) => void }) => (
  <div className="space-y-32">
    {/* Hero */}
    <section className="min-h-[80vh] flex flex-col justify-center relative">
      <div className="absolute inset-0 technical-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 seed-of-life-pattern opacity-5 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <div className="mb-8 inline-block px-4 py-1 border border-[#c5a059]/30 bg-[#c5a059]/5 rounded-full">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#c5a059]">The Sovereign Guarantee</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-white leading-[1.1] mb-8">
          The Legacy Clause: <br />
          <span className="text-[#c5a059]">Securing Structural Continuity.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl leading-relaxed mb-12">
          "The Codex exists to reimagine the flawed systems and policies that have perpetuated deep inequities. LGC LLC ordains the structural foundations required to move beyond the current crisis."
        </p>
        <div className="flex flex-wrap gap-6">
          <button 
            onClick={() => setView("engagement")}
            className="px-8 py-4 bg-[#c5a059] text-black font-mono text-xs uppercase tracking-[0.2em] hover:bg-[#d4b57a] transition-colors flex items-center gap-3"
          >
            Establish Your Estate <ArrowRight className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setView("infrastructure")}
            className="px-8 py-4 border border-white/10 hover:bg-white/5 transition-colors font-mono text-xs uppercase tracking-[0.2em] text-white"
          >
            View Infrastructure
          </button>
        </div>
      </motion.div>
    </section>

    {/* CIaaS Intro */}
    <section className="grid md:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <SectionHeader title="The Architect of CIaaS" subtitle="Cultural Infrastructure as a Service" icon={Compass} />
        <p className="text-lg text-slate-400 leading-relaxed font-light">
          CIaaS is the mandated response to the "ripple effect" of economic devastation. This is not a failure of talent, but a failure of infrastructure. We reimagine the flawed systems that have perpetuated deep inequities, transforming "deficits of trust" into hardened technical foundations.
        </p>
        <div className="grid grid-cols-2 gap-8">
          <div className="p-6 border border-white/5 bg-white/5">
            <div className="text-3xl font-serif italic text-[#c5a059] mb-2">41%</div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Black-owned business failure rate</div>
          </div>
          <div className="p-6 border border-white/5 bg-white/5">
            <div className="text-3xl font-serif italic text-[#c5a059] mb-2">32%</div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Latinx-owned business failure rate</div>
          </div>
        </div>
      </div>
      <div className="relative aspect-square">
        <div className="absolute inset-0 border border-[#c5a059]/20 rounded-full animate-spin-slow" />
        <div className="absolute inset-4 border border-[#c5a059]/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 charcoal-panel rounded-full flex items-center justify-center p-12 text-center">
            <div>
              <div className="text-[#c5a059] mb-4 flex justify-center"><Shield className="w-12 h-12" /></div>
              <div className="text-xs font-mono uppercase tracking-widest text-white">Immune System</div>
              <div className="text-[10px] text-slate-500 italic">For community ecosystems</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const InfrastructureView = () => {
  const domains = [
    { id: "I", title: "Capital Reserve", driver: "Absence of generational family wealth", purpose: "Architecting alternatives to traditional family/friend collateral.", icon: LandmarkIcon },
    { id: "II", title: "Credit Intelligence", driver: "Credit Invisibles (Lacking score files)", purpose: "Constructing non-traditional markers of creditworthiness.", icon: Activity },
    { id: "III", title: "Compliance Logic", driver: "Know Your Customer (KYC) barriers", purpose: "Proactive profile engineering to bypass bank risk-aversion.", icon: Lock },
    { id: "IV", title: "Data Connectivity", driver: "Lack of Broadband/Technical Access", purpose: "Establishing broadband as a non-negotiable infrastructure.", icon: Globe },
    { id: "V", title: "Admin Backbone", driver: "Lack of back-office support", purpose: "Scaling financial documentation and payroll transparency.", icon: Database },
    { id: "VI", title: "Risk Mitigation", driver: "Student loan/Personal debt burdens", purpose: "Creating Flexibility Beyond Debt via equity and grants.", icon: Zap },
    { id: "VII", title: "Legal Continuity", driver: "Insolvent/Restructuring hurdles", purpose: "Pathways for primed debt to relaunch.", icon: History },
    { id: "VIII", title: "Harlem Hub", driver: "Depleted community networks", purpose: "Fortifying specialized delivery systems (MDIs and CDFIs).", icon: MapPin },
  ];

  return (
    <div className="space-y-24">
      <SectionHeader title="The Eight-Domain Infrastructure Stack" subtitle="Community Immune System" icon={Layers} />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {domains.map((domain) => (
          <div key={domain.id} className="charcoal-panel p-8 group hover:border-[#c5a059]/30 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 flex items-center justify-center border border-[#c5a059]/20 bg-[#c5a059]/5 rounded-sm">
                <domain.icon className="w-5 h-5 text-[#c5a059]" />
              </div>
              <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">Domain {domain.id}</div>
            </div>
            <h3 className="text-lg font-serif italic text-white mb-4">{domain.title}</h3>
            <div className="space-y-4">
              <div>
                <div className="text-[9px] font-mono uppercase tracking-widest text-[#c5a059]/60 mb-1">Historical Driver</div>
                <div className="text-xs text-slate-500 italic leading-relaxed">{domain.driver}</div>
              </div>
              <div>
                <div className="text-[9px] font-mono uppercase tracking-widest text-[#c5a059]/60 mb-1">Strategic Purpose</div>
                <div className="text-xs text-slate-400 leading-relaxed">{domain.purpose}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-12 border border-[#c5a059]/20 bg-[#c5a059]/5">
        <h3 className="text-2xl font-serif italic text-white mb-8">Pillars of Fortification</h3>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h4 className="text-sm font-mono uppercase tracking-widest text-[#c5a059]">Organizational Mastery</h4>
            <p className="text-sm text-slate-400 leading-relaxed font-light">Precision management of detail, self-discipline, and time efficiency to govern employees, sales, and expenses concurrently.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-mono uppercase tracking-widest text-[#c5a059]">Decisiveness Protocols</h4>
            <p className="text-sm text-slate-400 leading-relaxed font-light">Training the entrepreneur to execute judgment despite setbacks, viewing mistakes as part of the legislative process.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-mono uppercase tracking-widest text-[#c5a059]">Regulatory Navigation</h4>
            <p className="text-sm text-slate-400 leading-relaxed font-light">Technical guidance through Government Regulations, including Certificate of Authority and Bulk Sales transactions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SeedView = () => {
  const nodes = [
    { id: 1, title: "Trust Integrity", desc: "Hardening the protocol to resolve deficits of trust in historically disenfranchised zones." },
    { id: 2, title: "CBO Gateway", desc: "Integrating local organizations as the primary infrastructure for community resource distribution." },
    { id: 3, title: "Technical Resilience", desc: "Mandating essential technology and broadband access as a prerequisite for capital." },
    { id: 4, title: "Ecosystem Maintenance", desc: "Mitigating the ripple effect where insolvency destabilizes an entire vendor lineage." },
    { id: 5, title: "Liquidity Logic", desc: "Managing the flow between grants, equity, and the Senior Debt strategy." },
    { id: 6, title: "Administrative Synthesis", desc: "Engineering back-office support missing in previous relief cycles." },
    { id: 7, title: "Legislative Geometry", desc: "Mapping local growth to pathways for equity defined by federal policy." },
  ];

  return (
    <div className="space-y-24">
      <SectionHeader title="The Seven-Node Operating System" subtitle="Technical Logic Log" icon={Binary} />
      
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#c5a059]/40 via-[#c5a059]/10 to-transparent" />
        <div className="space-y-12">
          {nodes.map((node) => (
            <div key={node.id} className="relative pl-16 group">
              <div className="absolute left-0 top-0 w-8 h-8 flex items-center justify-center border border-[#c5a059]/40 bg-[#0a0a0a] rounded-sm group-hover:bg-[#c5a059] group-hover:text-black transition-all">
                <span className="text-[10px] font-mono">{node.id}</span>
              </div>
              <div className="max-w-2xl">
                <h3 className="text-xl font-serif italic text-white mb-2">Node [{node.title}]</h3>
                <p className="text-slate-400 leading-relaxed font-light">{node.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BureauView = () => (
  <div className="space-y-24">
    <SectionHeader title="Legacy Bureau" subtitle="Trust & Continuity" icon={Landmark} />
    
    <div className="grid md:grid-cols-2 gap-12">
      <div className="charcoal-panel p-12 border-t-4 border-t-[#c5a059]">
        <h3 className="text-2xl font-serif italic text-white mb-8">Federal Trust Markers</h3>
        <div className="space-y-8">
          <div className="ledger-line pb-4 flex justify-between items-center">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Federal UEI</span>
            <span className="text-sm font-mono text-[#c5a059]">QSS3J6N1A6C5</span>
          </div>
          <div className="ledger-line pb-4 flex justify-between items-center">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Federal EIN</span>
            <span className="text-sm font-mono text-[#c5a059]">41-2653211</span>
          </div>
          <div className="ledger-line pb-4 flex justify-between items-center">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">NYS DOS ID</span>
            <span className="text-sm font-mono text-[#c5a059]">7761343</span>
          </div>
          <div className="ledger-line pb-4 flex justify-between items-center">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Compliance Status</span>
            <span className="text-sm font-mono text-green-500">ACTIVE</span>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl font-serif italic text-white">The Legacy Clause</h3>
        <ul className="space-y-6">
          {[
            "A commitment to resolving deficits of trust through verified federal identity.",
            "A mandate for Administrative Capacity as an antidote to systemic failure.",
            "A guarantee that business and personal finances are shielded from personal risk and hardship."
          ].map((text, i) => (
            <li key={i} className="flex gap-4">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#c5a059] shrink-0" />
              <p className="text-slate-400 leading-relaxed font-light">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const CommonsView = () => (
  <div className="space-y-24">
    <SectionHeader title="The Commons" subtitle="Structural-Visionary Insights" icon={BookOpen} />
    
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { title: "Flexibility Beyond Debt", desc: "Shifting the paradigm from a singular focus on loans to capital strategies where borrowed funds are senior to existing debts." },
        { title: "Administrative Capacity", desc: "Providing the essential back-office support cited as a structural failure in previous relief cycles." },
        { title: "Technical & Broadband Access", desc: "Defining high-speed broadband as Essential Technology—a prerequisite for capital access." },
      ].map((insight, i) => (
        <div key={i} className="p-8 border border-white/5 hover:bg-white/5 transition-all">
          <h3 className="text-xl font-serif italic text-[#c5a059] mb-4">{insight.title}</h3>
          <p className="text-sm text-slate-400 leading-relaxed font-light">{insight.desc}</p>
          <button className="mt-8 text-[10px] font-mono uppercase tracking-widest text-slate-500 hover:text-white transition-colors flex items-center gap-2">
            Read Logic Log <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      ))}
    </div>
  </div>
);

const CheckoutForm = ({ amount, onSuccess }: { amount: number, onSuccess: () => void }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setProcessing(true);

    try {
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amount * 100 }), // Stripe expects cents
      });

      const { clientSecret, error: backendError } = await response.json();

      if (backendError) {
        setError(backendError);
        setProcessing(false);
        return;
      }

      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement) as any,
        },
      });

      if (stripeError) {
        setError(stripeError.message || "Payment failed");
      } else if (paymentIntent.status === "succeeded") {
        onSuccess();
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    }

    setProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#cbd5e1",
                fontFamily: "JetBrains Mono, monospace",
                "::placeholder": {
                  color: "#64748b",
                },
              },
              invalid: {
                color: "#ef4444",
              },
            },
          }}
        />
      </div>
      {error && <div className="text-xs font-mono text-red-500 uppercase tracking-widest">{error}</div>}
      <button
        type="submit"
        disabled={!stripe || processing}
        className="w-full py-4 bg-[#c5a059] text-black font-mono text-xs uppercase tracking-[0.2em] hover:bg-[#d4b57a] transition-colors disabled:opacity-50"
      >
        {processing ? "Processing Transaction..." : `Authorize $${amount}.00`}
      </button>
    </form>
  );
};

const TreasuryView = () => {
  const [amount, setAmount] = useState(100);
  const [isSuccess, setIsSuccess] = useState(false);

  const tiers = [
    { label: "Sovereign Seed", amount: 50, desc: "Initial contribution to the CIaaS infrastructure." },
    { label: "Legacy Builder", amount: 250, desc: "Standard tier for scaling community ecosystems." },
    { label: "Architect Tier", amount: 1000, desc: "Premium allocation for large-scale legislative geometry." },
  ];

  if (isSuccess) {
    return (
      <div className="space-y-12 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto charcoal-panel p-12 border-t-4 border-t-green-500"
        >
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-serif italic text-white mb-4">Transaction Confirmed</h2>
          <p className="text-slate-400 font-light mb-8">
            Your contribution has been recorded in the Legacy Ledger. The architecture of sovereignty is strengthened.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="text-[10px] font-mono uppercase tracking-widest text-[#c5a059] hover:text-white transition-colors"
          >
            New Transaction
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="space-y-24">
      <SectionHeader title="The Treasury" subtitle="Capital Allocation Portal" icon={Wallet} />
      
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <p className="text-lg text-slate-400 leading-relaxed font-light">
            Allocate capital to the Cultural Infrastructure as a Service (CIaaS) fund. Every transaction is a building block in the architecture of community sovereignty.
          </p>
          
          <div className="space-y-4">
            {tiers.map((tier) => (
              <button
                key={tier.amount}
                onClick={() => setAmount(tier.amount)}
                className={`w-full p-6 text-left border transition-all ${amount === tier.amount ? 'border-[#c5a059] bg-[#c5a059]/5' : 'border-white/5 bg-white/5 hover:border-white/20'}`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-mono uppercase tracking-widest text-white">{tier.label}</span>
                  <span className="text-xl font-serif italic text-[#c5a059]">${tier.amount}</span>
                </div>
                <p className="text-xs text-slate-500 italic">{tier.desc}</p>
              </button>
            ))}
          </div>

          <div className="p-6 border border-white/5 bg-white/5">
            <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-4">Custom Allocation ($)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full bg-transparent border-b border-white/10 py-2 font-mono text-2xl text-[#c5a059] outline-none focus:border-[#c5a059] transition-colors"
            />
          </div>
        </div>

        <div className="charcoal-panel p-12 flex flex-col justify-center">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="w-5 h-5 text-[#c5a059]" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Secure Payment Gateway</span>
            </div>
            <h3 className="text-2xl font-serif italic text-white">Authorize Allocation</h3>
          </div>

          <Elements stripe={stripePromise}>
            <CheckoutForm amount={amount} onSuccess={() => setIsSuccess(true)} />
          </Elements>

          <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-4 text-slate-600">
            <Lock className="w-4 h-4" />
            <span className="text-[9px] font-mono uppercase tracking-widest">Encrypted by Stripe Protocol</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const EngagementView = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      entityName: formData.get("entityName"),
      entityType: formData.get("entityType"),
      objective: formData.get("objective"),
    };

    try {
      const response = await fetch("/api/engage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("success");
        setMessage(result.message);
      } else {
        setStatus("error");
        setMessage(result.error || "Failed to initiate protocol.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Protocol interrupted.");
    }
  };

  return (
    <div className="space-y-24">
      <SectionHeader title="The Engagement Portal" subtitle="Direct Intake for MDIs & CBOs" icon={PenTool} />
      
      <div className="max-w-3xl mx-auto charcoal-panel p-12">
        {status === "success" ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 border border-[#c5a059] rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-[#c5a059]" />
            </div>
            <h3 className="text-2xl font-serif italic text-white mb-4">Protocol Initiated</h3>
            <p className="text-slate-400 font-light mb-8">{message}</p>
            <button 
              onClick={() => setStatus("idle")}
              className="text-[10px] font-mono uppercase tracking-widest text-[#c5a059] hover:text-white transition-colors"
            >
              Return to Portal
            </button>
          </motion.div>
        ) : (
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Entity Name</label>
                <input 
                  name="entityName"
                  required
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 p-4 font-mono text-sm focus:border-[#c5a059] outline-none transition-colors" 
                  placeholder="LGC LLC" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Entity Type</label>
                <select 
                  name="entityType"
                  className="w-full bg-white/5 border border-white/10 p-4 font-mono text-sm focus:border-[#c5a059] outline-none transition-colors"
                >
                  <option>CBO (Community-Based Organization)</option>
                  <option>MDI (Minority Depository Institution)</option>
                  <option>Minority-Owned Entity</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Primary Objective</label>
              <textarea 
                name="objective"
                required
                className="w-full bg-white/5 border border-white/10 p-4 font-mono text-sm focus:border-[#c5a059] outline-none transition-colors h-32" 
                placeholder="Describe your structural needs..."
              ></textarea>
            </div>
            
            {status === "error" && (
              <div className="text-xs font-mono text-red-500 uppercase tracking-widest">
                Error: {message}
              </div>
            )}

            <button 
              disabled={status === "submitting"}
              type="submit"
              className="w-full py-4 bg-[#c5a059] text-black font-mono text-xs uppercase tracking-[0.2em] hover:bg-[#d4b57a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Initiating Protocol..." : "Initiate Protocol"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [view, setView] = useState<View>("codex");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen mythic-modern-bg selection:bg-[#c5a059]/30 selection:text-[#c5a059]">
      <Navigation currentView={view} setView={setView} />
      
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.4 }}
          >
            {view === "codex" && <CodexView setView={setView} />}
            {view === "infrastructure" && <InfrastructureView />}
            {view === "seed" && <SeedView />}
            {view === "bureau" && <BureauView />}
            {view === "commons" && <CommonsView />}
            {view === "engagement" && <EngagementView />}
            {view === "treasury" && <TreasuryView />}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-white/5 bg-[#0a0a0a] py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Layers className="w-6 h-6 text-[#c5a059]" />
              <span className="text-xs font-mono tracking-[0.3em] text-white uppercase">LGC LLC</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              Legacy Grove Codex: Ordaining a new architecture of sovereignty. Legislative rigor ensured through technical compliance.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#c5a059]">Federal Compliance</h4>
            <div className="space-y-2 text-[10px] font-mono text-slate-600">
              <div>UEI: QSS3J6N1A6C5</div>
              <div>EIN: 41-2653211</div>
              <div>STATUS: ACTIVE / COMPLIANT</div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#c5a059]">Modern Gateway</h4>
            <div className="space-y-2 text-[10px] font-mono text-slate-600">
              <div>NEW YORK BUSINESS EXPRESS</div>
              <div>NYS TAX GUIDE (PUB 20)</div>
              <div>NYS SMALL BUSINESS HUB</div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[9px] font-mono uppercase tracking-widest text-slate-700">
            © 2026 Legacy Grove Codex LLC. All Rights Reserved.
          </div>
          <div className="flex gap-8">
            <button className="text-[9px] font-mono uppercase tracking-widest text-slate-700 hover:text-white transition-colors">Privacy Protocol</button>
            <button className="text-[9px] font-mono uppercase tracking-widest text-slate-700 hover:text-white transition-colors">Terms of Sovereignty</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
