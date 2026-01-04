import React, { useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  MapPin, 
  Rocket, 
  Compass, 
  Menu, 
  X, 
  History, 
  Scale, 
  Users, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  Award
} from 'lucide-react';

// --- Types ---
interface PricingLane {
  id: string;
  name: string;
  subtitle: string;
  intent: string;
  terms: string;
  price: string;
  priceNote?: string;
  buttonText: string;
  highlight?: boolean;
  icon: React.ReactNode;
  badge?: string;
}

// --- Components ---

const BlueprintOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05]">
    <div className="absolute inset-0 bg-mesh" />
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <line x1="10" y1="0" x2="10" y2="100" stroke="white" strokeWidth="0.05" />
      <line x1="90" y1="0" x2="90" y2="100" stroke="white" strokeWidth="0.05" />
      <line x1="0" y1="20" x2="100" y2="20" stroke="white" strokeWidth="0.05" />
      <line x1="0" y1="80" x2="100" y2="80" stroke="white" strokeWidth="0.05" />
    </svg>
  </div>
);

const Logo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="none" stroke="#C83803" strokeWidth="0.5" strokeDasharray="4 2" className="animate-[spin_40s_linear_infinite]" />
      <g transform="translate(20, 20) scale(0.6)">
        <path d="M10 10 L40 40 M40 10 L10 40" stroke="white" strokeWidth="4" strokeLinecap="round" className="opacity-40" />
        <circle cx="25" cy="25" r="20" fill="none" stroke="white" strokeWidth="5" />
        <rect x="22" y="45" width="6" height="20" fill="#C83803" />
        <rect x="35" y="30" width="6" height="35" fill="#C83803" />
      </g>
    </svg>
  </div>
);

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const timer = setInterval(() => {
      const distance = new Date('2026-01-06T23:59:59').getTime() - new Date().getTime();
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

  const lanes: PricingLane[] = [
    {
      id: '01',
      name: 'LANE 01',
      subtitle: 'DIRECTORY ANCHOR',
      intent: 'Entry Level Sovereignty',
      terms: 'Permanent stake in the NWI ecosystem. Valued at $47/mo, currently locked at $9.99 for the 90-day window.',
      price: '$9.99',
      priceNote: 'FOR FIRST 90 DAYS',
      buttonText: 'CLAIM POSITION',
      icon: <MapPin className="w-6 h-6" />
    },
    {
      id: '02',
      name: 'LANE 02',
      subtitle: 'LEGACY ACCELERATOR',
      intent: 'Market Dominance',
      terms: 'Proprietary "Near Me" framework activation + Full Google Asset Optimization. For the definitive market leader.',
      price: '$495',
      priceNote: '/ MO CORE PLAN',
      buttonText: 'ACTIVATE POWER',
      highlight: true,
      icon: <Rocket className="w-6 h-6" />
    },
    {
      id: '03',
      name: 'LANE 03',
      subtitle: 'FOUNDING PARTNER',
      intent: 'The Inner Circle',
      badge: '25 SEATS ONLY',
      terms: 'Founder proximity. SPARK Human Extraction sessions. Story Architecture for the long-term legacy.',
      price: '$2,000',
      priceNote: 'ONE-TIME BUILD FEE',
      buttonText: 'APPLY NOW',
      icon: <Compass className="w-6 h-6" />
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0B162A]">
      <BlueprintOverlay />
      
      {/* Navigation */}
      <nav className={`fixed top-0 inset-x-0 z-[100] transition-all duration-700 ${scrolled ? 'bg-[#0B162A]/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-10'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4 group cursor-pointer">
            <Logo className="w-10 h-10 group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <span className="text-xl font-playfair italic font-bold tracking-tight text-white leading-none">Legacy<span className="text-[#C83803]">Power</span></span>
              <span className="text-[7px] tracking-[0.4em] uppercase text-[#C83803] font-black mt-1">Industrial Digital Assets</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-12 text-[10px] font-black tracking-[0.3em] uppercase">
            <a href="#philosophy" className="text-white/40 hover:text-[#C83803] transition-colors">Philosophy</a>
            <a href="#lanes" className="text-white/40 hover:text-[#C83803] transition-colors">The Lanes</a>
            <button onClick={() => document.getElementById('lanes')?.scrollIntoView({behavior:'smooth'})} className="bg-[#C83803] text-white px-8 py-3.5 hover:bg-white hover:text-[#0B162A] transition-all">ENTER PORCH</button>
          </div>
          <button className="md:hidden text-[#C83803]" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549247793-568f56f40278?q=80&w=2000')] bg-cover bg-center brightness-[0.07] scale-110" />
        <div className="relative z-10 text-center px-8 max-w-5xl">
          <div className="mb-10 inline-flex items-center space-x-4 border border-[#C83803]/20 px-6 py-2 bg-white/[0.02] backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#C83803] animate-ping" />
            <span className="text-[9px] uppercase tracking-[0.5em] font-black text-[#C83803]">System Live // Stewardship Mode</span>
          </div>
          <h1 className="text-6xl md:text-[110px] font-playfair italic text-white mb-10 leading-[0.85] tracking-tighter">
            The Foundation is Set. <br />
            <span className="text-[#C83803]">The Window is Open.</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/30 font-light mb-16 max-w-2xl mx-auto italic">
            Utilizing high-end technology to amplify human legacy. The 12-Directory Ecosystem is Operational.
          </p>
          <div className="flex flex-col items-center gap-12">
            <button 
              onClick={() => document.getElementById('lanes')?.scrollIntoView({behavior:'smooth'})}
              className="group relative bg-[#C83803] text-white text-xl px-20 py-8 font-black transition-all hover:bg-white hover:text-[#0B162A] shadow-[0_20px_50px_rgba(200,56,3,0.3)]"
            >
              STEP ONTO THE PORCH
            </button>
            <div className="flex flex-col items-center">
               <span className="text-[9px] uppercase tracking-[0.6em] text-[#C83803] font-black italic opacity-60">Window Closes Jan 6</span>
               <div className="w-16 h-[1px] bg-[#C83803]/30 mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-40 border-y border-white/[0.03] relative">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-12">
              <div className="flex items-center space-x-4 text-[#C83803]/50">
                <History size={18} />
                <span className="text-[10px] uppercase tracking-[0.4em] font-black">Origins // Private Reserve</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-playfair italic text-white leading-none">
                Forged in <br /><span className="text-[#C83803]">The Inner Room</span>
              </h2>
              <div className="space-y-8 text-xl text-white/40 font-light leading-relaxed">
                <p>For six months, we deployed capital and refined our engineering in silence. We built a local ecosystem designed to return power to the merchant.</p>
                <p className="text-white/80 border-l-2 border-[#C83803] pl-10 italic bg-white/[0.01] py-4">
                  "Technology must be the servant of the legacy, not the master of the merchant."
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 border border-[#C83803]/10 scale-95 group-hover:scale-100 transition-transform duration-700" />
              <img src="https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=1000" className="w-full h-[600px] object-cover grayscale brightness-50 contrast-125" alt="Industrial Foundation" />
              <div className="absolute bottom-10 left-10 flex items-center space-x-6">
                <div className="w-16 h-[1px] bg-[#C83803]" />
                <span className="text-[10px] uppercase font-black tracking-[0.5em] text-white/50">Asset Code: Alpha_01</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lanes / Pricing */}
      <section id="lanes" className="py-40 bg-[#0B162A]">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-32">
            <span className="text-[#C83803] uppercase tracking-[0.8em] font-black text-[9px] block mb-6">Stewardship Selection</span>
            <h2 className="text-6xl md:text-8xl font-playfair italic text-white mb-10 tracking-tighter">Choose Your Lane</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {lanes.map(lane => (
              <div key={lane.id} className={`relative flex flex-col p-14 border transition-all duration-700 orange-glow-hover ${lane.highlight ? 'bg-white/[0.03] border-[#C83803]/50 lg:scale-[1.05] z-10' : 'bg-white/[0.01] border-white/[0.05]'}`}>
                {lane.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C83803] text-white px-8 py-2 text-[8px] font-black tracking-widest uppercase">
                    {lane.badge}
                  </div>
                )}
                <div className={`mb-12 flex justify-center ${lane.highlight ? 'text-[#C83803]' : 'text-white/20'}`}>
                  <div className="w-14 h-14 border border-current rotate-45 flex items-center justify-center transition-transform hover:rotate-[225deg] duration-700">
                    <div className="-rotate-45">{lane.icon}</div>
                  </div>
                </div>
                <div className="text-center mb-10">
                  <span className="text-[9px] tracking-[0.4em] font-black text-white/20 uppercase">{lane.name}</span>
                  <h3 className="text-3xl font-playfair italic text-white mt-4 mb-4">{lane.subtitle}</h3>
                  <p className="text-xs italic text-white/40 tracking-wider">"{lane.intent}"</p>
                </div>
                <div className="flex-grow py-10 border-y border-white/[0.03] mb-10 text-sm text-white/30 text-center leading-relaxed italic">
                  {lane.terms}
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-playfair italic text-white mb-4">{lane.price}</div>
                  <div className="text-[8px] text-white/20 font-black tracking-widest uppercase mb-10">{lane.priceNote}</div>
                  <button className={`w-full py-6 font-black tracking-widest text-[9px] transition-all ${lane.highlight ? 'bg-[#C83803] text-white' : 'border border-white/10 text-white/60 hover:border-[#C83803] hover:text-[#C83803]'}`}>
                    {lane.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Oath */}
      <section className="py-40 bg-[#060D1A] text-center border-y border-white/[0.03]">
        <div className="max-w-4xl mx-auto px-10 space-y-12">
          <Scale className="w-16 h-16 text-[#C83803]/40 mx-auto" strokeWidth={1} />
          <h2 className="text-5xl md:text-7xl font-playfair italic text-white leading-tight">The Legacy Power Oath</h2>
          <p className="text-2xl md:text-4xl font-playfair italic text-white/80 leading-[1.6]">
            "We stand with the merchant, not above them. We protect the story, honor the human, and build for the legacy."
          </p>
          <div className="h-[2px] w-24 bg-[#C83803]/30 mx-auto" />
          <p className="text-[10px] uppercase tracking-[0.5em] font-black text-[#C83803]/50 italic">Sealed in the NWI Forge</p>
        </div>
      </section>

      {/* Countdown CTA */}
      <section className="py-40 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-10 relative z-10">
          <h2 className="text-6xl md:text-9xl font-playfair italic text-white mb-20 leading-none tracking-tighter">
            The Window is <br /><span className="text-[#C83803]">Closing.</span>
          </h2>
          <div className="grid grid-cols-4 gap-4 md:gap-12 max-w-4xl mx-auto mb-20 border-y border-white/[0.03] py-16">
            {[
              { label: 'Days', val: timeLeft.d },
              { label: 'Hrs', val: timeLeft.h },
              { label: 'Min', val: timeLeft.m },
              { label: 'Sec', val: timeLeft.s }
            ].map((t, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-5xl md:text-8xl font-playfair italic font-black text-white">{String(t.val).padStart(2, '0')}</span>
                <span className="text-[9px] uppercase tracking-[0.5em] font-black text-[#C83803] mt-6 opacity-40">{t.label}</span>
              </div>
            ))}
          </div>
          <button className="bg-[#C83803] text-white px-24 py-10 font-black text-xl hover:bg-white hover:text-[#0B162A] transition-all tracking-widest shadow-2xl">
            STEP ONTO THE PORCH
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/[0.03] bg-[#0B162A]">
        <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-10 opacity-30 text-[9px] font-black uppercase tracking-[0.4em]">
          <div className="flex items-center space-x-4">
            <Logo className="w-8 h-8 opacity-50 grayscale" />
            <span>&copy; {new Date().getFullYear()} LEGACY POWER LOCAL NETWORK</span>
          </div>
          <div className="flex items-center space-x-8 italic">
            <a href="#" className="hover:text-[#C83803]">Privacy Protocol</a>
            <div className="w-1.5 h-1.5 rounded-full bg-[#C83803]" />
            <a href="#" className="hover:text-[#C83803]">Architecture Registry</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- Render ---
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Root not found");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
