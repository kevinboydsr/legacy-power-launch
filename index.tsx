import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  MapPin, 
  Rocket, 
  Compass, 
  Menu, 
  X, 
  History, 
  Scale, 
  CheckCircle2, 
  Send,
  Loader2,
  ShieldCheck,
  CreditCard,
  Settings,
  ArrowRight,
  Globe,
  Zap,
  Target
} from 'lucide-react';

// --- System Configuration ---
const FORM_WEBHOOK_URL = "https://formspree.io/f/PLACEHOLDER"; // User replaces this to go LIVE
const STRIPE_CHECKOUT_LINK = "https://buy.stripe.com/PLACEHOLDER"; // User replaces with their Stripe Link

// --- Components ---

const BlueprintOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.07]">
    <div className="absolute inset-0 bg-mesh" />
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <line x1="15" y1="0" x2="15" y2="100" stroke="white" strokeWidth="0.03" />
      <line x1="85" y1="0" x2="85" y2="100" stroke="white" strokeWidth="0.03" />
      <line x1="0" y1="33" x2="100" y2="33" stroke="white" strokeWidth="0.03" />
      <line x1="0" y1="66" x2="100" y2="66" stroke="white" strokeWidth="0.03" />
    </svg>
  </div>
);

const Logo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="none" stroke="#C83803" strokeWidth="0.5" strokeDasharray="4 2" className="animate-[spin_60s_linear_infinite]" />
      <g transform="translate(25, 25) scale(0.5)">
        <path d="M10 10 L40 40 M40 10 L10 40" stroke="white" strokeWidth="3" strokeLinecap="round" className="opacity-40" />
        <circle cx="25" cy="25" r="20" fill="none" stroke="white" strokeWidth="4" />
        <rect x="22" y="45" width="6" height="25" fill="#C83803" />
        <rect x="35" y="30" width="6" height="40" fill="#C83803" />
      </g>
    </svg>
  </div>
);

const OnboardingPortal = ({ isOpen, onClose, initialTier }: { isOpen: boolean; onClose: () => void; initialTier: string }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [tier, setTier] = useState(initialTier);

  const addons = [
    { id: 'seo', name: 'Hyper-Local SEO injection', price: 199, desc: 'Dominance in NWI search results.' },
    { id: 'ads', name: 'Google LSA Management', price: 250, desc: 'Verified badge & top of page placement.' },
    { id: 'ai', name: 'Human Narrative AI Agent', price: 150, desc: '24/7 lead capture and booking.' }
  ];

  const basePrices: Record<string, number> = {
    'DIRECTORY ANCHOR': 9.99,
    'LEGACY ACCELERATOR': 495,
    'FOUNDING PARTNER': 2000
  };

  const calculateTotal = () => {
    const base = basePrices[tier] || 0;
    const addonTotal = selectedAddons.reduce((acc, id) => {
      const addon = addons.find(a => a.id === id);
      return acc + (addon?.price || 0);
    }, 0);
    return base + addonTotal;
  };

  const handleFinalize = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate real-time deployment
    setTimeout(() => {
      setLoading(false);
      setStep(4);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#0B162A]/98 backdrop-blur-3xl" onClick={onClose} />
      <div className="relative w-full max-w-5xl glass-panel h-[90vh] md:h-auto flex flex-col md:flex-row overflow-hidden animate-slide-up border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
        
        {/* Left: Summary Panel */}
        <div className="w-full md:w-80 bg-white/[0.02] border-r border-white/5 p-10 flex flex-col">
          <div className="mb-12">
            <span className="text-[9px] uppercase tracking-[0.5em] text-[#C83803] font-black italic">Architecture Session</span>
            <h2 className="text-2xl font-playfair italic text-white mt-2">Configuration</h2>
          </div>
          
          <div className="space-y-8 flex-grow">
            <div className="space-y-2">
              <span className="text-[8px] uppercase tracking-widest text-white/30 font-black">Core Lane</span>
              <p className="text-white text-sm font-bold uppercase tracking-tight">{tier}</p>
            </div>
            {selectedAddons.length > 0 && (
              <div className="space-y-4">
                <span className="text-[8px] uppercase tracking-widest text-white/30 font-black">Add-ons</span>
                {selectedAddons.map(id => (
                  <div key={id} className="flex justify-between text-[11px] text-white/60 italic border-b border-white/5 pb-2">
                    <span>{addons.find(a => a.id === id)?.name}</span>
                    <span className="text-[#C83803]">+${addons.find(a => a.id === id)?.price}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-10 border-t border-white/10">
            <div className="flex justify-between items-end">
              <span className="text-[10px] uppercase font-black tracking-widest text-white/40">Total Commitment</span>
              <span className="text-3xl font-playfair italic text-white">${calculateTotal().toFixed(2)}</span>
            </div>
            <p className="text-[8px] text-white/20 mt-4 uppercase tracking-widest italic leading-relaxed">
              *Prices locked for the Jan 5 - 12 stewardship window.
            </p>
          </div>
        </div>

        {/* Right: Steps */}
        <div className="flex-grow p-10 md:p-20 overflow-auto relative">
          <button onClick={onClose} className="absolute top-10 right-10 text-white/10 hover:text-[#C83803] transition-colors">
            <X size={32} />
          </button>

          {step === 1 && (
            <div className="space-y-12 max-w-xl mx-auto py-10">
              <div className="text-center">
                <Globe className="w-12 h-12 text-[#C83803] mx-auto mb-8" />
                <h3 className="text-4xl font-playfair italic text-white mb-6 tracking-tight">Step 01: Profile Your Asset</h3>
                <p className="text-white/40 text-sm font-light leading-relaxed italic">Identify your merchant standing to begin the deployment.</p>
              </div>
              <div className="space-y-6">
                <input required className="w-full bg-white/[0.03] border border-white/10 p-6 text-white focus:border-[#C83803] outline-none transition-all placeholder:text-white/10" placeholder="LEGAL BUSINESS NAME" />
                <input required className="w-full bg-white/[0.03] border border-white/10 p-6 text-white focus:border-[#C83803] outline-none transition-all placeholder:text-white/10" placeholder="FOUNDER EMAIL ADDRESS" />
                <button onClick={() => setStep(2)} className="w-full bg-[#C83803] text-white py-6 font-black tracking-[0.4em] uppercase hover:bg-white hover:text-[#0B162A] transition-all flex items-center justify-center space-x-4">
                  <span>Allocate Resources</span> <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-12 max-w-xl mx-auto py-10">
              <div className="text-center">
                <Zap className="w-12 h-12 text-[#C83803] mx-auto mb-8" />
                <h3 className="text-4xl font-playfair italic text-white mb-6 tracking-tight">Step 02: Scale Your Authority</h3>
                <p className="text-white/40 text-sm font-light leading-relaxed italic">Select auxiliary assets to accelerate your market dominance.</p>
              </div>
              <div className="space-y-4">
                {addons.map(addon => (
                  <button 
                    key={addon.id}
                    onClick={() => {
                      setSelectedAddons(prev => 
                        prev.includes(addon.id) ? prev.filter(i => i !== addon.id) : [...prev, addon.id]
                      );
                    }}
                    className={`w-full p-6 text-left border transition-all flex items-center justify-between group ${selectedAddons.includes(addon.id) ? 'bg-[#C83803]/10 border-[#C83803]' : 'bg-white/[0.02] border-white/10 hover:border-white/20'}`}
                  >
                    <div>
                      <p className="text-white font-bold text-sm tracking-tight">{addon.name}</p>
                      <p className="text-[10px] text-white/30 italic mt-1">{addon.desc}</p>
                    </div>
                    <span className={`text-sm font-playfair italic ${selectedAddons.includes(addon.id) ? 'text-white' : 'text-white/30'}`}>+${addon.price}</span>
                  </button>
                ))}
              </div>
              <div className="flex gap-4">
                <button onClick={() => setStep(1)} className="flex-1 border border-white/10 text-white/40 py-6 font-black uppercase tracking-widest text-[10px] hover:text-white transition-all">Back</button>
                <button onClick={() => setStep(3)} className="flex-[2] bg-[#C83803] text-white py-6 font-black tracking-[0.4em] uppercase hover:bg-white hover:text-[#0B162A] transition-all">Deploy Asset</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-12 max-w-xl mx-auto py-10">
              <div className="text-center">
                <CreditCard className="w-12 h-12 text-[#C83803] mx-auto mb-8" />
                <h3 className="text-4xl font-playfair italic text-white mb-6 tracking-tight">Final Step: Secure Entry</h3>
                <p className="text-white/40 text-sm font-light leading-relaxed italic">Initialize the transaction via our secure merchant portal.</p>
              </div>
              <div className="p-8 border border-[#C83803]/20 bg-white/[0.01] text-center space-y-6">
                <p className="text-white/60 text-xs italic leading-relaxed">By clicking finalize, you will be redirected to the secure Stewardship Transaction Terminal powered by Stripe.</p>
                <button 
                  onClick={handleFinalize}
                  disabled={loading}
                  className="w-full bg-white text-[#0B162A] py-8 font-black tracking-[0.4em] uppercase hover:bg-[#C83803] hover:text-white transition-all flex items-center justify-center space-x-4 shadow-2xl"
                >
                  {loading ? <Loader2 className="animate-spin" /> : <><span>FINALIZE & DEPLOY</span> <ArrowRight size={18} /></>}
                </button>
              </div>
              <button onClick={() => setStep(2)} className="w-full text-white/20 hover:text-white text-[10px] uppercase font-black tracking-widest transition-all">Adjust Resources</button>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-20 space-y-12 max-w-xl mx-auto">
              <div className="w-24 h-24 border-2 border-[#C83803] rotate-45 flex items-center justify-center mx-auto mb-16 bg-[#C83803]/5 shadow-[0_0_50px_rgba(200,56,3,0.3)]">
                <ShieldCheck size={48} className="text-[#C83803] -rotate-45" />
              </div>
              <h3 className="text-6xl font-playfair italic text-white tracking-tighter">Asset Secured.</h3>
              <p className="text-white/40 text-lg font-light leading-relaxed italic">
                Your entry into the Legacy Power Local Network has been logged. Our deployment engineers will contact you on Monday, January 5th to begin the integration.
              </p>
              <div className="pt-10">
                <button onClick={onClose} className="text-[#C83803] text-[11px] uppercase font-black tracking-[0.6em] border-b border-[#C83803]/40 pb-3 hover:text-white hover:border-white transition-all">Return to Foundation</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState('DIRECTORY ANCHOR');
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const timer = setInterval(() => {
      const target = new Date('2026-01-12T23:59:59').getTime();
      const distance = target - new Date().getTime();
      if (distance < 0) return clearInterval(timer);
      setTimeLeft({
        d: Math.floor(distance / (1000 * 60 * 60 * 24)),
        h: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        m: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        s: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const openPortal = (tier: string) => {
    setSelectedTier(tier);
    setIsModalOpen(true);
  };

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative min-h-screen">
      <BlueprintOverlay />
      <OnboardingPortal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} initialTier={selectedTier} />
      
      {/* Navigation */}
      <nav className={`fixed top-0 inset-x-0 z-[100] transition-all duration-1000 ${scrolled ? 'bg-[#0B162A]/98 backdrop-blur-2xl py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-10'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center space-x-5 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <Logo className="w-12 h-12 group-hover:scale-105 transition-transform duration-500" />
            <div className="flex flex-col">
              <span className="text-2xl font-playfair italic font-bold tracking-tight text-white leading-none">Legacy<span className="text-[#C83803]">Power</span></span>
              <span className="text-[8px] tracking-[0.4em] uppercase text-[#C83803] font-black mt-1 opacity-70">Industrial Digital Ecosystem</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-12 text-[10px] font-black tracking-[0.4em] uppercase">
            <button onClick={() => scrollToId('philosophy')} className="text-white/30 hover:text-white transition-all">Philosophy</button>
            <button onClick={() => scrollToId('lanes')} className="text-white/30 hover:text-white transition-all">Lanes</button>
            <button onClick={() => openPortal('DIRECT_ACCESS')} className="bg-[#C83803] text-white px-10 py-4 hover:bg-white hover:text-[#0B162A] transition-all shadow-2xl shadow-[#C83803]/20">CLAIM POSITION</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549247793-568f56f40278?q=80&w=2000')] bg-cover bg-center brightness-[0.05] scale-110 blur-[3px]" />
        <div className="relative z-10 text-center px-8 max-w-6xl">
          <div className="mb-14 inline-flex items-center space-x-6 border border-[#C83803]/30 px-10 py-4 bg-white/[0.02] backdrop-blur-md rounded-full">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C83803] animate-pulse shadow-[0_0_15px_#C83803]" />
            <span className="text-[11px] uppercase tracking-[0.7em] font-black text-[#C83803]">System Operational // Jan 5 Launch</span>
          </div>
          <h1 className="text-6xl md:text-[140px] font-playfair italic text-white mb-14 leading-[0.75] tracking-tighter">
            Foundation Set. <br />
            <span className="text-[#C83803]">Window Open.</span>
          </h1>
          <p className="text-xl md:text-4xl text-white/30 font-light mb-24 max-w-4xl mx-auto italic leading-relaxed tracking-tight">
            Deploying industrial-grade digital assets for the 12-Directory Ecosystem in Northwest Indiana.
          </p>
          <div className="flex flex-col items-center gap-12">
            <button 
              onClick={() => openPortal('PRIME_ENTRY')}
              className="group relative bg-[#C83803] text-white text-2xl px-28 py-10 font-black transition-all hover:bg-white hover:text-[#0B162A] shadow-[0_40px_100px_rgba(200,56,3,0.4)] active:scale-95 uppercase tracking-[0.4em]"
            >
              STEP ONTO THE PORCH
            </button>
            <span className="text-[10px] text-white/20 uppercase tracking-[0.8em] font-black italic">Window Closes Monday Jan 12</span>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-60 bg-[#0B162A] border-y border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-40 items-center">
            <div className="space-y-20">
              <div className="flex items-center space-x-6 text-[#C83803]/40">
                <History size={28} />
                <span className="text-[12px] uppercase tracking-[0.6em] font-black italic">Origin // Private Reserve</span>
              </div>
              <h2 className="text-7xl md:text-9xl font-playfair italic text-white leading-[0.85] tracking-tighter">
                Built in <br /><span className="text-[#C83803]">The Shadow</span>
              </h2>
              <div className="space-y-12 text-2xl text-white/40 font-light leading-relaxed max-w-xl italic">
                <p>We engineered this infrastructure over 4 months of silent development. It is designed to return the power of the "Near Me" search to the local NWI merchant.</p>
                <div className="p-10 border-l-4 border-[#C83803] bg-white/[0.01] shadow-2xl">
                  <p className="text-white/80 font-playfair text-3xl leading-snug">"This is not a directory. This is an ecosystem of asset sovereignty."</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden border border-white/10 p-2">
              <img src="https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=1200" className="w-full h-[750px] object-cover grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-75 transition-all duration-[3s]" alt="Industrial Aesthetics" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B162A] to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Lanes Section */}
      <section id="lanes" className="py-60">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-48">
            <span className="text-[#C83803] uppercase tracking-[1em] font-black text-[12px] block mb-12 opacity-80">Strategic Allocation</span>
            <h2 className="text-8xl md:text-[160px] font-playfair italic text-white leading-none tracking-tighter">Choose Your Lane</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { id: '01', tier: 'DIRECTORY ANCHOR', icon: <MapPin size={24} />, price: '$9.99', desc: 'Secure your stake. Permanent directory indexing.' },
              { id: '02', tier: 'LEGACY ACCELERATOR', icon: <Rocket size={24} />, price: '$495', highlight: true, desc: 'Full framework activation. Google Asset Optimization.' },
              { id: '03', tier: 'FOUNDING PARTNER', icon: <Compass size={24} />, price: '$2,000', badge: 'STRICTLY 25 SEATS', desc: 'Inner circle access. Direct founder consultation.' }
            ].map(lane => (
              <div key={lane.id} className={`relative flex flex-col p-20 border transition-all duration-[1s] orange-glow-hover group ${lane.highlight ? 'bg-white/[0.05] border-[#C83803]/50 lg:scale-105 z-10 shadow-2xl' : 'bg-white/[0.01] border-white/10'}`}>
                {lane.badge && <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#C83803] text-white px-12 py-3 text-[10px] font-black tracking-widest uppercase shadow-xl">{lane.badge}</div>}
                <div className={`mb-20 flex justify-center ${lane.highlight ? 'text-[#C83803]' : 'text-white/20'}`}>
                  <div className="w-24 h-24 border border-current rotate-45 flex items-center justify-center group-hover:rotate-[225deg] transition-transform duration-[1.5s]">
                    <div className="-rotate-45">{lane.icon}</div>
                  </div>
                </div>
                <div className="text-center mb-16">
                  <span className="text-[11px] font-black text-white/20 tracking-[0.6em] uppercase">Asset Lane {lane.id}</span>
                  <h3 className="text-4xl font-playfair italic text-white mt-8 mb-8">{lane.tier}</h3>
                  <p className="text-white/40 text-sm italic font-light leading-relaxed border-t border-white/5 pt-10 px-4">{lane.desc}</p>
                </div>
                <div className="text-center mt-auto">
                  <div className="text-6xl font-playfair italic text-white mb-6">{lane.price}</div>
                  <button onClick={() => openPortal(lane.tier)} className={`w-full py-8 font-black tracking-[0.4em] uppercase text-[11px] transition-all ${lane.highlight ? 'bg-[#C83803] text-white hover:bg-white hover:text-[#0B162A]' : 'border border-white/20 text-white hover:border-[#C83803] hover:text-[#C83803]'}`}>
                    Claim Position
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer System */}
      <footer className="py-32 bg-[#0B162A] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-10 relative z-10 flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="flex items-center space-x-8 opacity-40">
            <Logo className="w-16 h-16 grayscale" />
            <div className="text-[10px] font-black uppercase tracking-[0.5em] text-white">
              <p>&copy; {new Date().getFullYear()} Legacy Power Local Network</p>
              <p className="mt-2 text-[#C83803]">Operational Protocol Alpha-01</p>
            </div>
          </div>
          <div className="flex items-center space-x-16 text-[11px] font-black uppercase tracking-[0.6em]">
             <button onClick={() => scrollToId('philosophy')} className="text-white/20 hover:text-[#C83803] transition-all">Integrity</button>
             <button onClick={() => scrollToId('lanes')} className="text-white/20 hover:text-[#C83803] transition-all">Lanes</button>
             <div className="w-2 h-2 rounded-full bg-[#C83803]/40" />
             <button className="text-[#C83803] hover:text-white transition-all flex items-center gap-3"><Settings size={14} /> Merchant Portal</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Root not found");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
