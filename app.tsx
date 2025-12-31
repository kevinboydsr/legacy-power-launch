
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
  Sword,
  ShieldCheck,
  Zap,
  TrendingUp,
  Search,
  CheckCircle2,
  Cpu,
  Fingerprint,
  Users,
  Briefcase,
  History,
  Flame,
  Scale
} from 'lucide-react';
import { PricingLane, IntegrityPoint } from './types';

const IndustrialMesh = () => (
  <svg className="absolute opacity-[0.03] pointer-events-none w-full h-full inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      <pattern id="mesh" width="8" height="8" patternUnits="userSpaceOnUse">
        <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.03"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#mesh)" />
  </svg>
);

const BrandLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="45" fill="none" stroke="#C83803" strokeWidth="1" strokeDasharray="10 5" className="opacity-40 animate-[spin_20s_linear_infinite]" />
      <g transform="translate(15, 15) scale(0.7)">
        <path d="M40 40 L10 10" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="#FFFFFF" strokeWidth="6" />
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
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled ? 'bg-[#0B162A]/90 backdrop-blur-2xl shadow-2xl py-4 border-b border-white/5' : 'bg-transparent py-10'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <BrandLogo className="w-10 h-10 group-hover:scale-110 transition-transform duration-500" />
          <div className="flex flex-col">
            <span className="text-xl font-playfair italic font-bold tracking-tight leading-none text-white">
              Legacy<span className="text-[#C83803]">Power</span>Local
            </span>
            <span className="text-[7px] tracking-[0.3em] uppercase text-[#C83803] font-black mt-1">Building Online Assets</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-12 text-[9px] font-black tracking-[0.25em] uppercase">
          {['Context', 'Philosophy', 'The Lanes', 'Oath'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))} 
              className="hover:text-[#C83803] transition-colors relative group text-white/40"
            >
              {item}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-[#C83803] group-hover:w-full transition-all duration-500"></span>
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('pricing')}
            className="bg-[#C83803] text-white px-8 py-3.5 rounded-none font-black hover:bg-white hover:text-[#0B162A] transition-all duration-500 shadow-lg shadow-[#C83803]/10"
          >
            STEP ONTO THE PORCH
          </button>
        </div>

        <button className="md:hidden text-[#C83803]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`md:hidden fixed inset-0 top-[88px] bg-[#0B162A] z-[90] transition-transform duration-700 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-16 space-y-12 text-center text-white">
          <button onClick={() => scrollToSection('context')} className="text-3xl font-playfair italic">The Context</button>
          <button onClick={() => scrollToSection('philosophy')} className="text-3xl font-playfair italic">Philosophy</button>
          <button onClick={() => scrollToSection('pricing')} className="text-3xl font-playfair italic">The Lanes</button>
          <button onClick={() => scrollToSection('oath')} className="text-3xl font-playfair italic">The Oath</button>
          <button onClick={() => scrollToSection('pricing')} className="bg-[#C83803] text-white py-6 rounded-none font-bold text-lg tracking-widest">
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
          src="https://images.unsplash.com/photo-1549247793-568f56f40278?auto=format&fit=crop&q=80&w=2000" 
          alt="Atmospheric NWI Lake Michigan Shoreline at Dusk" 
          className="w-full h-full object-cover brightness-[0.08] contrast-[1.1] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B162A]/95 via-transparent to-[#0B162A]"></div>
        <IndustrialMesh />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center pt-32">
        <div className="mb-14 inline-flex items-center space-x-5 px-8 py-2.5 border border-[#C83803]/10 rounded-none bg-white/[0.01] backdrop-blur-md">
          <div className="w-1.5 h-1.5 rounded-full bg-[#C83803] animate-pulse"></div>
          <span className="text-[9px] uppercase tracking-[0.4em] font-black text-[#C83803]/70">Building Online Assets Driving Leads 24/7</span>
        </div>
        
        <div className="mb-12 animate-float inline-block">
          <BrandLogo className="w-32 h-32" />
        </div>
        
        <h1 className="text-5xl md:text-8xl lg:text-9xl text-white font-playfair italic mb-10 leading-[0.85] tracking-tight">
          The Foundation is Set. <br />
          <span className="text-[#C83803]/90">The Window is Open.</span>
        </h1>
        
        <p className="text-base md:text-xl text-white/40 font-light mb-16 max-w-2xl mx-auto leading-relaxed tracking-wide">
          We utilize high-end technology to amplify human legacy. <br className="hidden md:block"/>
          <span className="text-[#C83803] font-medium italic mt-4 block">The 12-Directory Ecosystem is Live.</span>
        </p>
        
        <div className="flex flex-col items-center space-y-10">
          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}
            className="group relative overflow-hidden bg-[#C83803] text-white text-lg md:text-xl px-20 py-7 rounded-none font-black transition-all shadow-[0_20px_50px_rgba(200,56,3,0.2)] hover:bg-white hover:text-[#0B162A] active:scale-95"
          >
            STEP ONTO THE PORCH
            <div className="absolute inset-0 bg-black/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
          <div className="flex flex-col items-center space-y-2">
            <span className="text-[9px] md:text-xs uppercase tracking-[0.5em] text-[#C83803] font-black italic opacity-50">
              Stewardship Window Closes Jan 6
            </span>
            <div className="h-[1px] w-12 bg-[#C83803]/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContextSection = () => {
  return (
    <section id="context" className="py-40 md:py-60 relative bg-[#0B162A] border-y border-white/[0.02]">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div className="order-2 lg:order-1 space-y-12">
            <div className="inline-flex items-center space-x-4 text-[#C83803]/60">
              <History size={18} strokeWidth={1.5} />
              <span className="text-[10px] uppercase tracking-[0.35em] font-black">Origins // Private Stewardship</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-playfair italic text-white leading-[1.1]">
              Forged in the <br /><span className="text-[#C83803]">Inner Room</span>
            </h2>
            <div className="space-y-8 text-lg text-white/40 leading-relaxed font-light">
              <p>
                For six months, we worked in silence. We deployed capital, refined engineering, and hardened the infrastructure. Why? To build a local ecosystem that puts power back in the hands of the business owner.
              </p>
              <p className="text-white/70 font-medium italic border-l border-[#C83803]/40 pl-8 py-3 bg-white/[0.005]">
                "We didn't just build a service; we cultivated a human-first operating philosophy where technology serves the legacy of the local leader."
              </p>
              <p>
                From now until January 6, we are opening a <span className="text-[#C83803] font-bold">90-Day Financial Stewardship Window.</span> This is your invitation to claim a position in a system built for ownership, not dependency.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative p-1 border border-white/[0.02] bg-white/[0.01]">
              <div className="h-[500px] overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1200" 
                  alt="Historic Midwestern Town Square with moody brick architecture" 
                  className="w-full h-full object-cover grayscale brightness-50 contrast-125 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0B162A]/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 flex items-center space-x-4">
                  <div className="w-10 h-[0.5px] bg-[#C83803]/40"></div>
                  <span className="text-[10px] uppercase font-black tracking-[0.3em] text-white/50">The Foundation Alpha</span>
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
    <section id="philosophy" className="py-40 md:py-72 bg-[#0B162A] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-2 gap-16 max-w-lg w-full">
            <div className="flex flex-col items-center opacity-30 hover:opacity-50 transition-opacity">
              <div className="w-16 h-16 border border-white/10 flex items-center justify-center rotate-45 mb-10">
                <ShieldAlert className="w-7 h-7 text-white/40 -rotate-45" />
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/40">Hostage Marketing</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 border border-[#C83803]/30 flex items-center justify-center rotate-45 mb-10 bg-[#C83803]/5 group-hover:border-[#C83803] transition-all">
                <Users className="w-7 h-7 text-[#C83803] -rotate-45" />
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#C83803]">Human Intelligence</span>
            </div>
          </div>
        </div>

        <h2 className="text-4xl md:text-7xl font-playfair italic text-white mb-14 leading-[0.9] tracking-tight">
          The Architecture <br />of Your Presence
        </h2>
        
        <div className="max-w-2xl mx-auto space-y-12">
          <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed">
            Legacy Power Intelligent Systems is a human-first operating philosophy. We use technology to <span className="text-[#C83803] font-semibold italic">extract</span> and <span className="text-[#C83803] font-semibold italic">anchor</span> your definitive story.
          </p>
          <div className="py-20 border-y border-white/[0.04] relative group">
            <div className="absolute inset-0 bg-[#C83803]/[0.02] scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-center"></div>
            <p className="text-3xl md:text-5xl text-[#C83803] font-playfair italic tracking-tighter relative z-10">
              Legacy Power is <br className="md:hidden" />Digital Real Estate.
            </p>
          </div>
          <p className="text-base text-white/20 leading-relaxed italic font-light tracking-wide">
            When we build an asset for you, it is yours. It is anchored in the community, indexed by Google, and amplified by a proprietary framework. You aren't just listed—you are <span className="text-white/60 not-italic font-black">KNOWN.</span>
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
      subtitle: 'THE DIRECTORY ENTRY',
      intent: 'Secure Your Stake',
      availability: 'LIMITED TO 100 PER DIRECTORY',
      terms: 'Securing your stake while we build and complete. A $47/mo value, currently offered at $9.99 for the first 90 days. Choose your directory at order. Window closes Jan 6.',
      price: '$9.99',
      priceNote: 'FOR 90 DAYS (VALUED @ $47/MO)',
      buttonText: 'CLAIM DIRECTORY ENTRY',
      icon: <MapPin className="w-6 h-6" />
    },
    {
      id: 'lane-02',
      name: 'LANE 02',
      subtitle: 'THE LEGACY POWER BOOST',
      intent: 'Now & In the future for the future',
      terms: 'Dominating search near me. Activate immediate "Near Me" dominance + Google Footprint Optimization. We ensure you are the definitive answer for today and the foundation for tomorrow.',
      price: '$495',
      priceNote: '/ MO (Core) | $695 / MO (Adv)',
      buttonText: 'ACTIVATE LOCAL BOOST',
      highlight: true,
      icon: <Rocket className="w-6 h-6" />
    },
    {
      id: 'lane-03',
      name: 'LANE 03',
      subtitle: 'THE FOUNDING STEWARDS',
      intent: 'Architect the Future',
      badge: '25 SEATS ONLY',
      terms: 'The Inner Circle. High-proximity partnership. The SPARK deep-dive human extraction + Story Architecture.',
      price: '$2,000',
      priceNote: 'ONE-TIME 90-DAY BUILD FEE',
      buttonText: 'APPLY FOR STEWARDSHIP',
      icon: <Compass className="w-6 h-6" />
    }
  ];

  return (
    <section id="pricing" className="py-40 md:py-64 bg-[#0B162A] relative">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-32">
          <span className="text-[#C83803] uppercase tracking-[0.6em] font-black text-[9px] block mb-6">Strategic Acceleration</span>
          <h2 className="text-5xl md:text-8xl font-playfair italic text-white mb-10 tracking-tight">Choose Your Lane</h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-10 items-stretch">
          {lanes.map(lane => (
            <div key={lane.id} className={`relative flex flex-col p-14 border transition-all duration-1000 group ${
              lane.highlight 
                ? 'bg-white/[0.02] border-[#C83803]/40 lg:scale-[1.03] z-20 shadow-[0_40px_100px_rgba(0,0,0,0.5)]' 
                : 'bg-white/[0.005] border-white/[0.03] hover:border-white/[0.1]'
            }`}>
              {lane.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C83803] text-white px-7 py-2 text-[7px] font-black tracking-[0.4em] uppercase shadow-2xl">
                  {lane.badge}
                </div>
              )}
              
              <div className={`mb-14 flex justify-center ${lane.highlight ? 'text-[#C83803]' : 'text-white/10'}`}>
                <div className="w-14 h-14 border border-current rotate-45 flex items-center justify-center group-hover:rotate-[225deg] transition-transform duration-[1500ms]">
                  <div className="-rotate-45 group-hover:-rotate-[225deg] transition-transform duration-[1500ms]">{lane.icon}</div>
                </div>
              </div>

              <div className="text-center mb-12">
                <span className={`text-[8px] tracking-[0.4em] font-black uppercase ${lane.highlight ? 'text-[#C83803]' : 'text-white/20'}`}>
                  {lane.name}
                </span>
                <h3 className="text-2xl font-playfair italic mt-5 mb-6 text-white leading-tight">{lane.subtitle}</h3>
                <p className="text-xs font-medium italic text-white/40 tracking-wide">"{lane.intent}"</p>
              </div>

              <div className="flex-grow space-y-8 mb-14 border-y border-white/[0.03] py-12 text-white/30 text-xs leading-relaxed text-center tracking-wide">
                {lane.availability && (
                  <p className="font-black text-[#C83803]/60 uppercase tracking-[0.3em] text-[8px]">{lane.availability}</p>
                )}
                <p>{lane.terms}</p>
              </div>

              <div className="text-center">
                <div className="mb-12">
                  <span className="text-4xl md:text-5xl font-playfair italic text-white">{lane.price}</span>
                  {lane.priceNote && (
                    <div className="text-[8px] text-white/20 mt-4 uppercase tracking-[0.4em] font-black leading-tight">
                      {lane.priceNote}
                    </div>
                  )}
                </div>
                <button 
                  className={`w-full py-5 text-[9px] font-black tracking-[0.4em] transition-all duration-500 relative overflow-hidden group/btn border border-transparent ${
                  lane.highlight 
                    ? 'bg-[#C83803] text-white' 
                    : 'border-white/10 text-white/60 hover:border-[#C83803] hover:text-[#C83803]'
                }`}>
                  <span className="relative z-10">{lane.buttonText}</span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
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
    <section id="oath" className="py-40 md:py-60 bg-[#060D1A] relative overflow-hidden text-center border-y border-white/[0.02]">
      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <div className="flex justify-center mb-16">
          <Scale className="w-12 h-12 text-[#C83803]/40" strokeWidth={1} />
        </div>
        <h2 className="text-4xl md:text-6xl font-playfair italic text-white mb-12 tracking-tight">The Legacy Power Oath</h2>
        <div className="space-y-10">
          <p className="text-xl md:text-3xl font-playfair italic leading-[1.6] text-white/80">
            "We stand with local businesses, not above them and never at their expense. We protect the stories entrusted to us, treat truth as sacred, and build systems that serve people—not replace them."
          </p>
          <div className="h-[1px] w-24 bg-[#C83803]/30 mx-auto"></div>
          <p className="text-base md:text-xl font-light leading-relaxed text-white/40 tracking-wide max-w-3xl mx-auto italic">
            "We use technology with restraint, clarity, and purpose, ensuring every tool strengthens the entrepreneur’s sovereignty rather than diminishing it. We move with discipline, act with integrity, and fight confusion with understanding. Whether a business grows with us or learns to grow on its own, our commitment remains the same: to advocate, to equip, and to leave every business stronger, clearer, and more capable than we found it."
          </p>
        </div>
        <div className="mt-20 flex flex-col items-center">
          <div className="w-12 h-12 border border-[#C83803]/20 rotate-45 flex items-center justify-center bg-[#0B162A]">
             <CheckCircle2 className="w-5 h-5 text-[#C83803] -rotate-45" />
          </div>
          <span className="text-[9px] uppercase tracking-[0.4em] font-black text-[#C83803]/50 mt-8 italic">Forged on the Porch</span>
        </div>
      </div>
    </section>
  );
};

const IntegritySection = () => {
  const points: IntegrityPoint[] = [
    {
      title: 'Human-First Assets',
      description: 'Technology is the conduit, but the story is human. We extract the definitive truth of your legacy.',
      icon: <Users size={32} strokeWidth={1.5} />
    },
    {
      title: 'Absolute Ownership',
      description: 'Every story, interview, and article belongs to you. Forever. We build for your long-term sovereignty.',
      icon: <ShieldCheck size={32} strokeWidth={1.5} />
    },
    {
      title: 'Operational Ethics',
      description: 'No hidden data. No locked results. No hostage marketing. We build for the long-term health of the business.',
      icon: <Unlock size={32} strokeWidth={1.5} />
    }
  ];

  return (
    <section id="integrity" className="py-40 md:py-60 bg-white text-[#0B162A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-36">
          <h2 className="text-5xl md:text-8xl font-playfair italic mb-10 tracking-tight">Real Assets. Real Ownership.</h2>
          <p className="text-lg md:text-xl text-[#0B162A]/40 font-light italic max-w-xl mx-auto">"Intelligence is the tool. Stewardship is the imperative."</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-24">
          {points.map((point, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="p-10 bg-[#0B162A] text-[#C83803] rounded-none mb-12 shadow-2xl transition-all group-hover:bg-[#C83803] group-hover:text-white group-hover:-translate-y-2">
                {point.icon}
              </div>
              <h3 className="text-3xl font-playfair italic mb-6 font-bold tracking-tight">{point.title}</h3>
              <p className="text-base text-[#0B162A]/50 leading-relaxed font-light tracking-wide">
                {point.description}
              </p>
            </div>
          ))}
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
    <section id="countdown" className="py-40 md:py-72 bg-[#0B162A] relative overflow-hidden text-white">
      <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-8xl font-playfair italic mb-20 leading-[0.9] tracking-tight">
          The Infrastructure is Live. <br className="hidden md:block"/>
          <span className="text-[#C83803]">The Human Capital is Set.</span>
        </h2>
        
        <div className="grid grid-cols-4 gap-8 md:gap-20 max-w-3xl mx-auto mb-28 border-y border-white/[0.04] py-16">
          {[
            { label: 'Days', val: timeLeft.days },
            { label: 'Hrs', val: timeLeft.hours },
            { label: 'Min', val: timeLeft.mins },
            { label: 'Sec', val: timeLeft.secs }
          ].map((item, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-4xl md:text-7xl font-playfair italic font-black text-white">{String(item.val).padStart(2, '0')}</span>
              <span className="text-[9px] uppercase tracking-[0.4em] font-black opacity-20 mt-6">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="space-y-8 mb-24 text-base md:text-lg font-light italic text-white/30 max-w-xl mx-auto leading-relaxed">
          <p>Intelligence serves the architect. The window is closing on this stewardship event.</p>
          <div className="flex flex-col space-y-3 mt-16 not-italic text-[9px] uppercase tracking-[0.5em] font-black text-[#C83803]">
             <span className="opacity-80">Stewardship Window closes January 6</span>
             <span className="opacity-40">Delivery and Activation begin January 7</span>
          </div>
        </div>

        <button 
          onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}
          className="group relative bg-[#C83803] text-white text-lg md:text-2xl px-24 py-9 rounded-none font-black transition-all hover:bg-white hover:text-[#0B162A] active:scale-95 shadow-[0_20px_50px_rgba(200,56,3,0.15)] overflow-hidden uppercase tracking-[0.4em]"
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
    <footer className="py-32 bg-[#0B162A] border-t border-white/[0.02] relative overflow-hidden">
      <IndustrialMesh />
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-start mb-32">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-4 mb-10">
              <BrandLogo className="w-8 h-8" />
              <span className="text-xl font-playfair italic text-white font-bold tracking-widest uppercase">LEGACY POWER</span>
            </div>
            <p className="text-white/20 text-xs max-w-sm tracking-widest leading-loose mx-auto md:mx-0 uppercase font-medium">
              Architecting the digital future of local business. A human-first operative intelligence powered by Legacy systems.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end space-y-8">
             <div className="px-8 py-3 border border-[#C83803]/20 text-[#C83803]/40 text-[9px] uppercase tracking-[0.5em] font-black italic">
               Operative Intelligence // 2024
             </div>
             <div className="flex space-x-12 text-[8px] font-black tracking-[0.4em] text-white/10 uppercase">
                <a href="#context" className="hover:text-white transition-colors">Infrastructure</a>
                <a href="#integrity" className="hover:text-white transition-colors">Ethics</a>
                <a href="#pricing" className="hover:text-white transition-colors">Network</a>
             </div>
          </div>
        </div>
        <div className="pt-16 border-t border-white/[0.02] flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-[8px] text-white/10 tracking-[0.4em] font-black uppercase">
          <span>&copy; {new Date().getFullYear()} LEGACY POWER LOCAL NETWORK</span>
          <div className="flex items-center space-x-6">
             <div className="w-1.5 h-1.5 rounded-full bg-[#C83803]/20"></div>
             <a href="#oath" className="hover:text-[#C83803] transition-colors">The Legacy Power Oath</a>
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
      <IntegritySection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default App;
export default App;
