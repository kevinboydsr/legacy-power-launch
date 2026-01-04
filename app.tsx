import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Rocket, 
  Shield, 
  Archive, 
  Unlock, 
  Compass, 
  ArrowRight,
  Menu,
  X,
  Lock,
  Building,
  Globe,
  ShieldAlert,
  ShieldCheck,
  History,
  Scale,
  Users,
  CheckCircle2
} from 'lucide-react';
import { PricingLane, IntegrityPoint } from './types';

const IndustrialMesh = () => (
  <svg className="absolute opacity-[0.03] pointer-events-none w-full h-full inset-0 z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      <pattern id="mesh" width="8" height="8" patternUnits="userSpaceOnUse">
        <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.05"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#mesh)" />
  </svg>
);

const BrandLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="45" fill="none" stroke="#C83803" strokeWidth="0.5" strokeDasharray="10 5" className="opacity-30 animate-[spin_30s_linear_infinite]" />
      <g transform="translate(15, 15) scale(0.7)">
        <path d="M40 40 L10 10" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
        <circle cx="50" cy="50" r="32" fill="none" stroke="#FFFFFF" strokeWidth="5" />
        <rect x="35" y="55" width="8" height="15" fill="#FFFFFF" />
        <rect x="47" y="40" width="8" height="30" fill="#C83803" />
        <rect x="59" y="30" width="8" height="40" fill="#C83803" />
      </g>
    </svg>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-1000 ${scrolled ? 'bg-[#0B162A]/95 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-12'}`}>
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <div className="flex items-center space-x-5 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <BrandLogo className="w-12 h-12 group-hover:scale-105 transition-transform duration-700" />
          <div className="flex flex-col">
            <span className="text-2xl font-playfair italic font-bold tracking-tight leading-none text-white">
              Legacy<span className="text-[#C83803]">Power</span>Local
            </span>
            <span className="text-[8px] tracking-[0.4em] uppercase text-[#C83803] font-black mt-1.5 opacity-80">Industrial Digital Assets</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-14 text-[10px] font-black tracking-[0.3em] uppercase">
          {['Context', 'Philosophy', 'The Lanes', 'Oath'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))} 
              className="hover:text-[#C83803] transition-all relative group text-white/30"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C83803] group-hover:w-full transition-all duration-700"></span>
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('pricing')}
            className="bg-[#C83803] text-white px-10 py-4 rounded-none font-black hover:bg-white hover:text-[#0B162A] transition-all duration-700 shadow-2xl shadow-[#C83803]/10 text-[9px]"
          >
            ENTER THE ECOSYSTEM
          </button>
        </div>

        <button className="md:hidden text-[#C83803]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <div className={`md:hidden fixed inset-0 top-[100px] bg-[#0B162A] z-[90] transition-transform duration-1000 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-16 space-y-16 text-center text-white">
          <button onClick={() => scrollToSection('context')} className="text-4xl font-playfair italic">The Context</button>
          <button onClick={() => scrollToSection('philosophy')} className="text-4xl font-playfair italic">Philosophy</button>
          <button onClick={() => scrollToSection('pricing')} className="text-4xl font-playfair italic">The Lanes</button>
          <button onClick={() => scrollToSection('oath')} className="text-4xl font-playfair italic">The Oath</button>
          <button onClick={() => scrollToSection('pricing')} className="bg-[#C83803] text-white py-8 rounded-none font-black text-xl tracking-[0.3em]">
            STEP ONTO THE PORCH
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1549247793-568f56f40278?auto=format&fit=crop&q=80&w=2400" 
          alt="Atmospheric NWI Lake Michigan Shoreline" 
          className="w-full h-full object-cover brightness-[0.06] contrast-[1.1] scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B162A]/90 via-transparent to-[#0B162A]"></div>
        <IndustrialMesh />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-10 text-center pt-48">
        <div className="mb-16 inline-flex items-center space-x-6 px-10 py-3 border border-[#C83803]/20 bg-white/[0.01] backdrop-blur-lg">
          <div className="w-2 h-2 rounded-full bg-[#C83803] animate-ping"></div>
          <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#C83803]">System Live // Stewardship Mode</span>
        </div>
        
        <div className="mb-16 animate-float inline-block">
          <BrandLogo className="w-40 h-40" />
        </div>
        
        <h1 className="text-6xl md:text-9xl text-white font-playfair italic mb-12 leading-[0.8] tracking-tighter">
          The Foundation is Set. <br />
          <span className="text-[#C83803]/90">The Window is Open.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-white/30 font-light mb-20 max-w-3xl mx-auto leading-relaxed tracking-wide italic">
          High-end technology deployed to anchor human legacy. <br className="hidden md:block"/>
          <span className="text-[#C83803] font-black not-italic mt-6 block uppercase tracking-[0.2em]">The 12-Directory Ecosystem is Operational.</span>
        </p>
        
        <div className="flex flex-col items-center space-y-12">
          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}
            className="group relative overflow-hidden bg-[#C83803] text-white text-xl px-24 py-8 rounded-none font-black transition-all shadow-[0_30px_70px_rgba(200,56,3,0.3)] hover:bg-white hover:text-[#0B162A] active:scale-95"
          >
            <span className="relative z-10 tracking-[0.3em]">STEP ONTO THE PORCH</span>
            <div className="absolute inset-0 bg-black/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
          </button>
          <div className="flex flex-col items-center space-y-3">
            <span className="text-[10px] uppercase tracking-[0.6em] text-[#C83803] font-black italic opacity-60">
              Stewardship Window Closes Jan 6
            </span>
            <div className="h-[1px] w-20 bg-[#C83803]/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContextSection = () => {
  return (
    <section id="context" className="py-48 md:py-80 relative bg-[#0B162A] border-y border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-40 items-center">
          <div className="order-2 lg:order-1 space-y-16">
            <div className="inline-flex items-center space-x-5 text-[#C83803]/50">
              <History size={20} />
              <span className="text-[11px] uppercase tracking-[0.4em] font-black">Architecture // Private Reserve</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-playfair italic text-white leading-[1.05]">
              Forged in the <br /><span className="text-[#C83803]">Inner Chamber</span>
            </h2>
            <div className="space-y-10 text-xl text-white/40 leading-relaxed font-light">
              <p>
                A half-year of development in total silence. We deployed institutional capital, hardened our cloud infrastructure, and indexed every local touchpoint. Why? To return power to the business owner.
              </p>
              <p className="text-white/80 font-medium italic border-l-2 border-[#C83803] pl-10 py-4 bg-white/[0.01]">
                "Technology is the servant of the legacy, never the master of the merchant."
              </p>
              <p>
                This <span className="text-[#C83803] font-bold">90-Day Financial Stewardship Window</span> is the only entry point for those seeking definitive ownership of their digital future.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative p-2 border border-white/[0.05] bg-white/[0.01]">
              <div className="h-[600px] overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1200" 
                  alt="Historic Structural Foundation" 
                  className="w-full h-full object-cover grayscale brightness-50 contrast-125 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-[2500ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0B162A] via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 flex items-center space-x-6">
                  <div className="w-16 h-[1px] bg-[#C83803]/50"></div>
                  <span className="text-[11px] uppercase font-black tracking-[0.5em] text-white/40 italic">Asset Code: Foundation_Alpha</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-48 md:py-80 bg-[#0B162A] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-10 text-center relative z-10">
        <div className="flex justify-center mb-20">
          <div className="grid grid-cols-2 gap-24 max-w-xl w-full">
            <div className="flex flex-col items-center opacity-20">
              <div className="w-20 h-20 border border-white/10 flex items-center justify-center rotate-45 mb-12">
                <ShieldAlert className="w-8 h-8 text-white -rotate-45" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white">Passive Listing</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 border border-[#C83803]/40 flex items-center justify-center rotate-45 mb-12 bg-[#C83803]/10 group-hover:border-[#C83803] transition-all duration-700">
                <Users className="w-8 h-8 text-[#C83803] -rotate-45" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#C83803]">Active Legacy</span>
            </div>
          </div>
        </div>

        <h2 className="text-5xl md:text-8xl font-playfair italic text-white mb-16 leading-[0.9] tracking-tighter">
          The Sovereignty <br />of Your Data
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-16">
          <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed">
            Legacy Power Intelligent Systems is more than software. It is a <span className="text-[#C83803] font-bold italic">human-first operative</span> that extracts your story and anchors it into the permanent digital landscape.
          </p>
          <div className="py-24 border-y border-white/[0.06] relative group">
            <div className="absolute inset-0 bg-[#C83803]/[0.02] scale-x-0 group-hover:scale-x-100 transition-transform duration-[1500ms] origin-center"></div>
            <p className="text-4xl md:text-6xl text-[#C83803] font-playfair italic tracking-tighter relative z-10">
              Build Assets. <br className="md:hidden" />Own the Market.
            </p>
          </div>
          <p className="text-lg text-white/20 leading-relaxed italic font-light tracking-widest uppercase">
            Not a monthly subscription. An <span className="text-white/60 not-italic font-black">Industrial Asset.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const lanes: PricingLane[] = [
    {
      id: 'lane-01',
      name: 'LANE 01',
      subtitle: 'DIRECTORY ANCHOR',
      intent: 'Secure Your Position',
      availability: '100 SLOTS PER DIRECTORY',
      terms: 'Your permanent stake in the ecosystem. Valued at $47/mo, locked at $9.99 for the stewardship window. Absolute protection for your digital footprint.',
      price: '$9.99',
      priceNote: 'FIRST 90 DAYS (ENTRY LEVEL)',
      buttonText: 'CLAIM POSITION',
      icon: <MapPin className="w-8 h-8" />
    },
    {
      id: 'lane-02',
      name: 'LANE 02',
      subtitle: 'LEGACY ACCELERATOR',
      intent: 'Definitive Market Dominance',
      terms: 'Immediate search dominance. Activation of the "Near Me" proprietary framework + full Google Asset Optimization. For the leader who refuses to be second.',
      price: '$495',
      priceNote: '/ MO (CORE) | $695 / MO (ADV)',
      buttonText: 'ACTIVATE ACCELERATOR',
      highlight: true,
      icon: <Rocket className="w-8 h-8" />
    },
    {
      id: 'lane-03',
      name: 'LANE 03',
      subtitle: 'FOUNDING PARTNER',
      intent: 'Architect the Future',
      badge: 'STRICTLY 25 SEATS',
      terms: 'The Inner Circle. High-proximity partnership with the founders. Includes the SPARK Extraction Deep-Dive and Story Architecture.',
      price: '$2,000',
      priceNote: 'ONE-TIME ARCHITECTURE FEE',
      buttonText: 'APPLY FOR PARTNERSHIP',
      icon: <Compass className="w-8 h-8" />
    }
  ];

  return (
    <section id="pricing" className="py-48 md:py-80 bg-[#0B162A] relative">
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="text-center mb-40">
          <span className="text-[#C83803] uppercase tracking-[0.8em] font-black text-[10px] block mb-8 opacity-70 italic">Stewardship Selection</span>
          <h2 className="text-6xl md:text-9xl font-playfair italic text-white mb-12 tracking-tighter">Choose Your Lane</h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 items-stretch">
          {lanes.map(lane => (
            <div key={lane.id} className={`relative flex flex-col p-16 border transition-all duration-[1200ms] group ${
              lane.highlight 
                ? 'bg-white/[0.03] border-[#C83803]/50 lg:scale-[1.05] z-20 shadow-[0_50px_120px_rgba(0,0,0,0.6)]' 
                : 'bg-white/[0.01] border-white/[0.04] hover:border-white/[0.2]'
            }`}>
              {lane.badge && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#C83803] text-white px-10 py-3 text-[9px] font-black tracking-[0.5em] uppercase shadow-2xl">
                  {lane.badge}
                </div>
              )}
              
              <div className={`mb-16 flex justify-center ${lane.highlight ? 'text-[#C83803]' : 'text-white/20'}`}>
                <div className="w-16 h-16 border border-current rotate-45 flex items-center justify-center group-hover:rotate-[225deg] transition-transform duration-[2000ms]">
                  <div className="-rotate-45 group-hover:-rotate-[225deg] transition-transform duration-[2000ms]">{lane.icon}</div>
                </div>
              </div>

              <div className="text-center mb-14">
                <span className={`text-[9px] tracking-[0.5em] font-black uppercase ${lane.highlight ? 'text-[#C83803]' : 'text-white/30'}`}>
                  {lane.name}
                </span>
                <h3 className="text-3xl font-playfair italic mt-6 mb-8 text-white tracking-tight">{lane.subtitle}</h3>
                <p className="text-sm font-light italic text-white/40 tracking-wider">"{lane.intent}"</p>
              </div>

              <div className="flex-grow space-y-10 mb-16 border-y border-white/[0.03] py-14 text-white/30 text-sm leading-relaxed text-center font-light">
                {lane.availability && (
                  <p className="font-black text-[#C83803]/80 uppercase tracking-[0.4em] text-[9px]">{lane.availability}</p>
                )}
                <p className="italic leading-loose">{lane.terms}</p>
              </div>

              <div className="text-center">
                <div className="mb-14">
                  <span className="text-5xl md:text-6xl font-playfair italic text-white">{lane.price}</span>
                  {lane.priceNote && (
                    <div className="text-[9px] text-white/20 mt-5 uppercase tracking-[0.5em] font-black leading-tight">
                      {lane.priceNote}
                    </div>
                  )}
                </div>
                <button 
                  className={`w-full py-7 text-[10px] font-black tracking-[0.5em] transition-all duration-700 relative overflow-hidden group/btn border border-transparent ${
                  lane.highlight 
                    ? 'bg-[#C83803] text-white' 
                    : 'border-white/10 text-white/60 hover:border-[#C83803] hover:text-[#C83803]'
                }`}>
                  <span className="relative z-10">{lane.buttonText}</span>
                  <div className="absolute inset-0 bg-white/5 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-700"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OathSection = () => {
  return (
    <section id="oath" className="py-48 md:py-80 bg-[#060D1A] relative overflow-hidden text-center border-y border-white/[0.04]">
      <div className="max-w-4xl mx-auto px-10 relative z-10">
        <div className="flex justify-center mb-20">
          <Scale className="w-16 h-16 text-[#C83803]/40" strokeWidth={1} />
        </div>
        <h2 className="text-5xl md:text-7xl font-playfair italic text-white mb-16 tracking-tighter">The Legacy Power Oath</h2>
        <div className="space-y-12">
          <p className="text-2xl md:text-4xl font-playfair italic leading-[1.7] text-white/80">
            "We stand with the merchant, not above them. We protect the story, honor the human, and build for the legacy."
          </p>
          <div className="h-[2px] w-32 bg-[#C83803]/30 mx-auto"></div>
          <p className="text-lg md:text-2xl font-light leading-relaxed text-white/30 tracking-widest max-w-3xl mx-auto italic uppercase">
            "Sovereignty is the objective. Integrity is the method."
          </p>
        </div>
        <div className="mt-24 flex flex-col items-center">
          <div className="w-14 h-14 border border-[#C83803]/30 rotate-45 flex items-center justify-center bg-[#0B162A]">
             <CheckCircle2 className="w-6 h-6 text-[#C83803] -rotate-45" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#C83803]/40 mt-10 italic">Sealed in the NWI Forge</span>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const target = new Date('2026-01-06T23:59:59').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-48 md:py-80 bg-[#0B162A] relative overflow-hidden text-white">
      <div className="max-w-5xl mx-auto px-10 text-center relative z-10">
        <h2 className="text-5xl md:text-9xl font-playfair italic mb-24 leading-[0.85] tracking-tighter">
          The Foundation is Live. <br className="hidden md:block"/>
          <span className="text-[#C83803]">Claim Your Legacy.</span>
        </h2>
        
        <div className="grid grid-cols-4 gap-6 md:gap-24 max-w-4xl mx-auto mb-32 border-y border-white/[0.04] py-20 bg-white/[0.01]">
          {[
            { label: 'Days', val: timeLeft.days },
            { label: 'Hrs', val: timeLeft.hours },
            { label: 'Min', val: timeLeft.mins },
            { label: 'Sec', val: timeLeft.secs }
          ].map((item, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-5xl md:text-8xl font-playfair italic font-black text-white">{String(item.val).padStart(2, '0')}</span>
              <span className="text-[10px] uppercase tracking-[0.5em] font-black opacity-20 mt-8 italic">{item.label}</span>
            </div>
          ))}
        </div>

        <button 
          onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}
          className="group relative bg-[#C83803] text-white text-xl px-28 py-10 rounded-none font-black transition-all hover:bg-white hover:text-[#0B162A] active:scale-95 shadow-[0_40px_90px_rgba(200,56,3,0.3)] overflow-hidden uppercase tracking-[0.4em]"
        >
          <span className="relative z-10">STEP ONTO THE PORCH</span>
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-40 bg-[#0B162A] border-t border-white/[0.03] relative overflow-hidden">
      <IndustrialMesh />
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-32 items-start mb-40">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-6 mb-12">
              <BrandLogo className="w-10 h-10" />
              <span className="text-2xl font-playfair italic text-white font-bold tracking-[0.2em] uppercase">LEGACY POWER</span>
            </div>
            <p className="text-white/20 text-[10px] max-w-sm tracking-[0.4em] leading-loose mx-auto md:mx-0 uppercase font-bold italic">
              Architecting the digital future for the Northwest Indiana Merchant.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end space-y-12">
             <div className="px-10 py-4 border border-[#C83803]/30 text-[#C83803]/60 text-[10px] uppercase tracking-[0.5em] font-black italic bg-[#C83803]/5">
               Operative Intelligence // v2.0
             </div>
          </div>
        </div>
        <div className="pt-20 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 text-[9px] text-white/10 tracking-[0.5em] font-black uppercase">
          <span>&copy; {new Date().getFullYear()} LEGACY POWER LOCAL NETWORK</span>
          <div className="flex items-center space-x-8">
             <div className="w-2 h-2 rounded-full bg-[#C83803]/30"></div>
             <a href="#oath" className="hover:text-[#C83803] transition-colors italic">The Legacy Power Oath</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#C83803] selection:text-white bg-[#0B162A]">
      <Navbar />
      <Hero />
      <ContextSection />
      <PhilosophySection />
      <PricingSection />
      <OathSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default App;
