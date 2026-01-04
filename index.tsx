import React, { useState, useEffect, useRef } from 'react';
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
  ShieldCheck, 
  ArrowRight,
  Send,
  Loader2
} from 'lucide-react';

// --- Types ---
interface OnboardingData {
  tier: string;
  name: string;
  email: string;
  business: string;
}

// --- Shared Logic ---
const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// --- Components ---

const BlueprintOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.06]">
    <div className="absolute inset-0 bg-mesh" />
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <line x1="10" y1="0" x2="10" y2="100" stroke="white" strokeWidth="0.05" />
      <line x1="90" y1="0" x2="90" y2="100" stroke="white" strokeWidth="0.05" />
      <line x1="0" y1="25" x2="100" y2="25" stroke="white" strokeWidth="0.05" />
      <line x1="0" y1="75" x2="100" y2="75" stroke="white" strokeWidth="0.05" />
    </svg>
  </div>
);

const Logo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="none" stroke="#C83803" strokeWidth="0.5" strokeDasharray="4 2" className="animate-[spin_40s_linear_infinite]" />
      <g transform="translate(20, 20) scale(0.6)">
        <circle cx="25" cy="25" r="22" fill="none" stroke="white" strokeWidth="4" />
        <path d="M25 5 L25 45 M5 25 L45 25" stroke="#C83803" strokeWidth="2" strokeLinecap="round" />
        <rect x="22" y="45" width="6" height="25" fill="#C83803" />
        <rect x="34" y="32" width="6" height="38" fill="#C83803" />
      </g>
    </svg>
  </div>
);

const OnboardingModal = ({ isOpen, onClose, initialTier }: { isOpen: boolean; onClose: () => void; initialTier: string }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [loading, setLoading] = useState(false);
  
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API connection
    setTimeout(() => {
      setLoading(false);
      setStep('success');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-[#0B162A]/95 backdrop-blur-2xl" onClick={onClose} />
      <div className="relative w-full max-w-xl glass-panel p-12 md:p-16 border-[#C83803]/30 animate-entry shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
        <button onClick={onClose} className="absolute top-8 right-8 text-white/20 hover:text-[#C83803] transition-colors">
          <X size={32} />
        </button>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="text-center">
              <span className="text-[10px] uppercase tracking-[0.5em] text-[#C83803] font-black italic block mb-4">Onboarding Operative</span>
              <h2 className="text-4xl font-playfair italic text-white mb-2">Architect Your Legacy</h2>
              <p className="text-white/30 text-xs tracking-widest uppercase">Tier: {initialTier}</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-widest text-white/40 font-black">Founder Name</label>
                <input required className="w-full bg-white/[0.03] border border-white/10 p-5 text-white focus:border-[#C83803] outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-widest text-white/40 font-black">Email Address</label>
                <input required type="email" className="w-full bg-white/[0.03] border border-white/10 p-5 text-white focus:border-[#C83803] outline-none transition-colors" placeholder="john@legacy.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-widest text-white/40 font-black">Business Narrative</label>
                <input required className="w-full bg-white/[0.03] border border-white/10 p-5 text-white focus:border-[#C83803] outline-none transition-colors" placeholder="Contracting / Real Estate / Legal" />
              </div>
            </div>

            <button 
              disabled={loading}
              className="w-full bg-[#C83803] text-white py-6 font-black tracking-[0.4em] uppercase hover:bg-white hover:text-[#0B162A] transition-all flex items-center justify-center space-x-4"
            >
              {loading ? <Loader2 className="animate-spin" /> : <><span>Submit for Vetting</span> <Send size={16} /></>}
            </button>
            <p className="text-[8px] text-center text-white/20 uppercase tracking-widest italic">Confidentiality Protocol Active // SSL Secured</p>
          </form>
        ) : (
          <div className="text-center py-20 space-y-10">
            <div className="w-24 h-24 border border-[#C83803] rotate-45 flex items-center justify-center mx-auto mb-10 bg-[#C83803]/10">
              <CheckCircle2 size={40} className="text-[#C83803] -rotate-45" />
            </div>
            <h2 className="text-5xl font-playfair italic text-white">Entry Logged.</h2>
            <p className="text-white/40 leading-relaxed italic max-w-sm mx-auto">
              The architects have received your signature. A Legacy Power representative will contact you for the SPARK session within 24 hours.
            </p>
            <button onClick={onClose} className="text-[#C83803] text-[10px] uppercase font-black tracking-[0.6em] border-b border-[#C83803]/30 pb-2 hover:text-white hover:border-white transition-all">Return to Foundation</button>
          </div>
        )}
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

  return (
    <div className="relative min-h-screen">
      <BlueprintOverlay />
      <OnboardingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} initialTier={selectedTier} />
      
      {/* Navigation */}
      <nav className={`fixed top-0 inset-x-0 z-[100] transition-all duration-1000 ${scrolled ? 'bg-[#0B162A]/95 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-10'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <Logo className="w-10 h-10 group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <span className="text-xl font-playfair italic font-bold tracking-tight text-white leading-none">Legacy<span className="text-[#C83803]">Power</span></span>
              <span className="text-[7px] tracking-[0.4em] uppercase text-[#C83803] font-black mt-1 opacity-70">Industrial Digital Assets</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-12 text-[10px] font-black tracking-[0.3em] uppercase">
            <button onClick={() => scrollToId('philosophy')} className="text-white/30 hover:text-white transition-all">Philosophy</button>
            <button onClick={() => scrollToId('lanes')} className="text-white/30 hover:text-white transition-all">The Lanes</button>
            <button onClick={() => scrollToId('oath')} className="text-white/30 hover:text-white transition-all">The Oath</button>
            <button onClick={() => openPortal('GENERAL_ENTRY')} className="bg-[#C83803] text-white px-8 py-3.5 hover:bg-white hover:text-[#0B162A] transition-all shadow-xl shadow-[#C83803]/10">ENTER THE PORCH</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549247793-568f56f40278?q=80&w=2000')] bg-cover bg-center brightness-[0.05] scale-110 blur-[2px]" />
        <div className="relative z-10 text-center px-8 max-w-5xl">
          <div className="mb-12 inline-flex items-center space-x-5 border border-[#C83803]/20 px-8 py-3 bg-white/[0.02] backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C83803] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.6em] font-black text-[#C83803]">System Operational // Jan 5 - Jan 12 Window</span>
          </div>
          <h1 className="text-6xl md:text-[120px] font-playfair italic text-white mb-12 leading-[0.8] tracking-tighter">
            Foundation is Set. <br />
            <span className="text-[#C83803]">Window is Open.</span>
          </h1>
          <p className="text-xl md:text-3xl text-white/30 font-light mb-20 max-w-3xl mx-auto italic leading-relaxed">
            Architecting high-end digital infrastructure to secure your local market legacy.
          </p>
          <button 
            onClick={() => openPortal('PREMIUM_ONBOARDING')}
            className="group relative bg-[#C83803] text-white text-xl px-24 py-9 font-black transition-all hover:bg-white hover:text-[#0B162A] shadow-[0_30px_70px_rgba(200,56,3,0.3)] active:scale-95 uppercase tracking-[0.3em]"
          >
            STEP ONTO THE PORCH
          </button>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-48 bg-[#0B162A] border-y border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-16">
              <div className="flex items-center space-x-5 text-[#C83803]/40">
                <History size={24} />
                <span className="text-[11px] uppercase tracking-[0.5em] font-black">Architecture // Private Reserve</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-playfair italic text-white leading-[0.9] tracking-tighter">
                Forged in <br /><span className="text-[#C83803]">Quiet Strength</span>
              </h2>
              <div className="space-y-10 text-2xl text-white/40 font-light leading-relaxed">
                <p>We built this infrastructure in silence to return sovereignty to the local merchant. This is not a service; it is a structural asset.</p>
                <p className="text-white/80 border-l-4 border-[#C83803] pl-10 italic bg-white/[0.01] py-8 shadow-inner">
                  "The code must serve the builder, not the landlord."
                </p>
              </div>
            </div>
            <div className="relative group p-1 border border-white/[0.05]">
              <img src="https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=1200" className="w-full h-[650px] object-cover grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-[2s]" alt="Industrial Luxury" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B162A] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Lanes */}
      <section id="lanes" className="py-48 bg-[#0B162A]">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-40">
            <span className="text-[#C83803] uppercase tracking-[0.8em] font-black text-[10px] block mb-10 opacity-70">Strategic Deployment</span>
            <h2 className="text-7xl md:text-9xl font-playfair italic text-white tracking-tighter">Select Your Lane</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-10">
            {[
              { id: '01', tier: 'DIRECTORY ANCHOR', icon: <MapPin />, price: '$9.99', note: 'FOR STEWARDSHIP WINDOW', terms: 'Your permanent claim. Protection for your digital footprint.' },
              { id: '02', tier: 'LEGACY ACCELERATOR', icon: <Rocket />, price: '$495', note: '/ MO CORE PLAN', highlight: true, terms: 'Activation of "Near Me" proprietary framework. Immediate market authority.' },
              { id: '03', tier: 'FOUNDING PARTNER', icon: <Compass />, price: '$2,000', note: 'ONE-TIME BUILD FEE', badge: 'STRICTLY 25 SEATS', terms: 'Direct founder proximity. Custom story architecture and extraction.' }
            ].map(lane => (
              <div key={lane.id} className={`relative flex flex-col p-16 border transition-all duration-1000 orange-glow-hover group ${lane.highlight ? 'bg-white/[0.04] border-[#C83803]/50 lg:scale-105 z-10 shadow-2xl' : 'bg-white/[0.01] border-white/10'}`}>
                {lane.badge && <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#C83803] text-white px-10 py-3 text-[9px] font-black tracking-widest uppercase shadow-xl">{lane.badge}</div>}
                
                <div className={`mb-16 flex justify-center ${lane.highlight ? 'text-[#C83803]' : 'text-white/20'}`}>
                  <div className="w-20 h-20 border border-current rotate-45 flex items-center justify-center transition-transform group-hover:rotate-[225deg] duration-[1.5s]">
                    <div className="-rotate-45">{lane.icon}</div>
                  </div>
                </div>

                <div className="text-center mb-12">
                  <span className="text-[10px] font-black text-white/20 tracking-[0.5em] uppercase">{lane.id} // TIER</span>
                  <h3 className="text-3xl font-playfair italic text-white mt-6 mb-6 leading-tight">{lane.tier}</h3>
                </div>

                <p className="text-center text-white/40 text-sm italic font-light leading-relaxed flex-grow border-y border-white/[0.04] py-12 mb-12">
                  {lane.terms}
                </p>

                <div className="text-center">
                  <div className="text-5xl font-playfair italic text-white mb-4">{lane.price}</div>
                  <div className="text-[9px] text-white/30 font-black tracking-widest uppercase mb-12">{lane.note}</div>
                  <button onClick={() => openPortal(lane.tier)} className={`w-full py-7 font-black tracking-widest text-[10px] transition-all uppercase ${lane.highlight ? 'bg-[#C83803] text-white hover:bg-white hover:text-[#0B162A]' : 'border border-white/20 text-white hover:border-[#C83803] hover:text-[#C83803]'}`}>
                    Claim Position
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oath */}
      <section id="oath" className="py-48 bg-[#060D1A] text-center border-y border-white/[0.03]">
        <div className="max-w-5xl mx-auto px-10 space-y-20">
          <Scale className="w-24 h-24 text-[#C83803]/40 mx-auto" strokeWidth={0.5} />
          <h2 className="text-6xl md:text-8xl font-playfair italic text-white leading-[0.9] tracking-tighter">The Legacy Power Oath</h2>
          <p className="text-3xl md:text-5xl font-playfair italic text-white/80 leading-[1.6] max-w-4xl mx-auto">
            "We stand with the merchant, not above them. We protect the story, honor the human, and build for the legacy."
          </p>
          <div className="flex flex-col items-center space-y-6">
            <div className="h-[2px] w-32 bg-[#C83803]/40" />
            <p className="text-[11px] uppercase tracking-[0.6em] font-black text-[#C83803] italic">Window Closes Mon Jan 12</p>
          </div>
        </div>
      </section>

      {/* Final CTA / Countdown */}
      <section className="py-60 text-center relative overflow-hidden bg-[#0B162A]">
        <div className="max-w-6xl mx-auto px-10 relative z-10">
          <h2 className="text-6xl md:text-[140px] font-playfair italic text-white mb-28 leading-none tracking-tighter">
            Legacy <span className="text-[#C83803]">Is Now.</span>
          </h2>
          <div className="grid grid-cols-4 gap-6 md:gap-16 max-w-5xl mx-auto mb-32 border-y border-white/[0.04] py-24 bg-white/[0.01] backdrop-blur-sm">
            {[
              { label: 'Days', val: timeLeft.d },
              { label: 'Hrs', val: timeLeft.h },
              { label: 'Min', val: timeLeft.m },
              { label: 'Sec', val: timeLeft.s }
            ].map((t, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-6xl md:text-[100px] font-playfair italic font-black text-white leading-none">{String(t.val).padStart(2, '0')}</span>
                <span className="text-[10px] uppercase tracking-[0.6em] font-black text-[#C83803] mt-10 opacity-50 italic">{t.label}</span>
              </div>
            ))}
          </div>
          <button 
            onClick={() => openPortal('FINAL_CALL')}
            className="bg-[#C83803] text-white px-28 py-10 font-black text-2xl hover:bg-white hover:text-[#0B162A] transition-all tracking-[0.3em] shadow-[0_40px_90px_rgba(200,56,3,0.4)] uppercase"
          >
            ENTER THE PORCH
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-white/[0.05] bg-[#0B162A]">
        <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-12 opacity-20 text-[10px] font-black uppercase tracking-[0.5em]">
          <div className="flex items-center space-x-6">
            <Logo className="w-12 h-12 grayscale opacity-40" />
            <span>&copy; {new Date().getFullYear()} LEGACY POWER LOCAL NETWORK</span>
          </div>
          <div className="flex items-center space-x-12 italic">
            <button onClick={() => scrollToId('oath')} className="hover:text-[#C83803] transition-all">Integrity Protocol</button>
            <div className="w-2 h-2 rounded-full bg-[#C83803]" />
            <button onClick={() => scrollToId('lanes')} className="hover:text-[#C83803] transition-all">Asset Architecture</button>
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
