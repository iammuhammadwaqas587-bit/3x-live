import React, { useEffect } from 'react';
import { IndustryItem, PageId } from '../types';
import { INDUSTRIES_DATA, SERVICES_DATA, COMPANY_INFO } from '../data/contentData';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Mail, 
  ShieldCheck, 
  Lock, 
  Calendar, 
  Building2, 
  Landmark, 
  PhoneCall, 
  ShoppingBag, 
  HeartPulse, 
  Train, 
  Briefcase, 
  Headphones, 
  Network, 
  Lightbulb, 
  ChevronRight,
  Layers,
  FileCheck,
  Check
} from 'lucide-react';

interface SingleIndustryPageProps {
  industry: IndustryItem;
  onBack: () => void;
  onSelectIndustry: (ind: IndustryItem) => void;
  onNavigate: (page: PageId, detailId?: string) => void;
  onOpenConsultation: () => void;
}

export const SingleIndustryPage: React.FC<SingleIndustryPageProps> = ({
  industry,
  onBack,
  onSelectIndustry,
  onNavigate,
  onOpenConsultation,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [industry.id]);

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'financial-services': return <Landmark className="w-6 h-6 text-emerald-600" />;
      case 'public-sector': return <Building2 className="w-6 h-6 text-[#C026D3]" />;
      case 'telecoms-media': return <PhoneCall className="w-6 h-6 text-sky-600" />;
      case 'retail-logistics': return <ShoppingBag className="w-6 h-6 text-amber-600" />;
      case 'health-care': return <HeartPulse className="w-6 h-6 text-rose-600" />;
      default: return <Train className="w-6 h-6 text-indigo-600" />;
    }
  };

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'project-management': return <Briefcase className="w-4 h-4 text-emerald-600" />;
      case 'technical-support': return <Headphones className="w-4 h-4 text-[#C026D3]" />;
      case 'managed-network': return <Network className="w-4 h-4 text-[#00D2D3]" />;
      case 'consulting': return <Lightbulb className="w-4 h-4 text-amber-500" />;
      default: return <Briefcase className="w-4 h-4 text-emerald-600" />;
    }
  };

  const otherIndustries = INDUSTRIES_DATA.filter(i => i.id !== industry.id);

  return (
    <div className="bg-white min-h-screen text-slate-900 pb-20">
      {/* 1. Breadcrumb Top Bar */}
      <div className="bg-slate-50 border-b border-slate-200 py-3.5">
        <div className="w-[90%] mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-600">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-slate-900 transition-colors font-medium cursor-pointer"
            >
              Home
            </button>
            <span className="text-slate-400">/</span>
            <button
              onClick={onBack}
              className="hover:text-slate-900 transition-colors font-medium cursor-pointer"
            >
              Regulated Sectors
            </button>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 font-semibold">{industry.title}</span>
          </div>

          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B6B38] hover:text-[#084e29] cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Sectors</span>
          </button>
        </div>
      </div>

      {/* 2. Hero Section - Capita Public Sector Productivity archetype */}
      <section className="bg-[#0D1F18] text-white py-14 sm:py-20 border-b border-emerald-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-at-tr from-emerald-900/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="w-[90%] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-1 h-6 bg-[#00D2D3] rounded-full inline-block" />
                <span className="bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs sm:text-sm font-semibold px-3 py-1 rounded-md tracking-wide">
                  Regulated Sector Solutions
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white leading-tight mb-4">
                {industry.title}
              </h1>

              <p className="text-lg sm:text-xl text-emerald-100 font-normal leading-relaxed mb-6 max-w-2xl">
                {industry.subtitle}
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mb-8">
                {industry.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenConsultation}
                  className="bg-[#C026D3] hover:bg-[#A21CAF] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all flex items-center gap-2 shadow-lg cursor-pointer"
                >
                  <span>Book Sector Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={COMPANY_INFO.phoneHref}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs sm:text-sm px-5 py-3 rounded-full transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Visual Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-900 group">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-80 sm:h-96 object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-md flex items-center gap-2.5">
                  {getIndustryIcon(industry.id)}
                  <span className="text-xs font-bold text-slate-900">Regulated Practice</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Compliance & Security Assured</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Designed around UK data governance, operational uptime, and enterprise service management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Content: Capita Multi-Section Layout with Sticky Sidebar */}
      <div className="w-[90%] mx-auto pt-12 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Body (8 Cols) */}
          <div className="lg:col-span-8 space-y-12 sm:space-y-16">
            
            {/* Section A: Sector Context & Operational Realities */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-1 h-5 bg-emerald-500 rounded-full inline-block" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Sector Overview & Mandates
                </h2>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight mb-4">
                Navigating complex transformation in {industry.title}
              </h3>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed mb-8">
                {industry.overview && industry.overview.length > 0 ? (
                  industry.overview.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))
                ) : (
                  <p>
                    Organizations in this sector require technology delivery partners capable of understanding statutory mandates, operational continuity, and complex multi-stakeholder landscapes. 3XTech provides specialized project governance, 24/7 responsive engineering, and secure managed networking built to meet regulatory thresholds.
                  </p>
                )}
              </div>

              {/* Key Challenges Solved Grid */}
              <div className="bg-slate-50 rounded-xl p-5 sm:p-6 border border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-4 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  Key Challenges Solved by 3XTech
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {industry.challengesSolved.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section B: Strategic Focus Areas (Capita-style 4-Pillar Grid) */}
            {industry.strategicFocus && industry.strategicFocus.length > 0 && (
              <section>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-1 h-5 bg-[#00D2D3] rounded-full inline-block" />
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Strategic Focus Areas
                  </h2>
                </div>
                <h3 className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight mb-6">
                  Core pillars of our sector delivery model
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {industry.strategicFocus.map((focus, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0B6B38] font-bold text-xs flex items-center justify-center mb-3">
                        0{idx + 1}
                      </div>
                      <h4 className="text-base font-semibold text-slate-900 mb-2">
                        {focus.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {focus.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Section C: Applied 3XTech Capabilities for this Sector */}
            {industry.solutionsApplied && industry.solutionsApplied.length > 0 && (
              <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-1 h-5 bg-[#C026D3] rounded-full inline-block" />
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Services Applied
                  </h2>
                </div>
                <h3 className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight mb-6">
                  How our four core practices support {industry.title}
                </h3>

                <div className="space-y-4">
                  {industry.solutionsApplied.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6"
                    >
                      <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-slate-900 mb-2">
                        {getServiceIcon(
                          item.serviceTitle.toLowerCase().includes('project')
                            ? 'project-management'
                            : item.serviceTitle.toLowerCase().includes('support')
                            ? 'technical-support'
                            : item.serviceTitle.toLowerCase().includes('network')
                            ? 'managed-network'
                            : 'consulting'
                        )}
                        <span>{item.serviceTitle}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 mb-3">
                        {item.role}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.outcomes.map((out, oIdx) => (
                          <span
                            key={oIdx}
                            className="bg-slate-100 text-slate-700 text-[11px] font-medium px-2.5 py-1 rounded-md flex items-center gap-1"
                          >
                            <Check className="w-3 h-3 text-emerald-600" />
                            {out}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Section D: Regulatory & Compliance Frameworks */}
            {industry.complianceFramework && industry.complianceFramework.length > 0 && (
              <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-1 h-5 bg-emerald-500 rounded-full inline-block" />
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Compliance & Standards
                  </h2>
                </div>
                <h3 className="text-xl sm:text-2xl font-normal text-slate-900 tracking-tight mb-4">
                  Governed under strict industry benchmarks
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Every technical engagement conforms to established sector standards, audited processes, and UK data protection mandates.
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {industry.complianceFramework.map((comp, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 bg-emerald-50 text-[#0B6B38] border border-emerald-200 text-xs font-semibold px-3.5 py-1.5 rounded-full"
                    >
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      {comp}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column: Sticky Action Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Consultation Card */}
            <div className="bg-[#0D1F18] text-white rounded-2xl p-6 shadow-xl border border-emerald-900 sticky top-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Sector Advisory
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                Speak with a {industry.title.split(' ')[0]} specialist
              </h3>
              
              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Discuss your technology roadmap, compliance hurdles, or managed infrastructure requirements with our practice leads.
              </p>

              <button
                onClick={onOpenConsultation}
                className="w-full bg-[#C026D3] hover:bg-[#A21CAF] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mb-5"
              >
                <span>Request Scoping Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="space-y-3 pt-4 border-t border-emerald-900/80 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Direct Line:</span>
                  <a href={COMPANY_INFO.phoneHref} className="font-semibold text-white hover:text-emerald-400">
                    {COMPANY_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Support Desk:</span>
                  <a href={COMPANY_INFO.supportPhoneHref} className="font-semibold text-white hover:text-emerald-400">
                    {COMPANY_INFO.supportPhone}
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400">WhatsApp Desk:</span>
                  <a
                    href={COMPANY_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#25D366] hover:underline flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Chat Online
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Email:</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="font-semibold text-slate-200 hover:text-white">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Other Regulated Sectors Switcher */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                Other Regulated Sectors
              </h4>

              <div className="space-y-2">
                {otherIndustries.map(other => (
                  <button
                    key={other.id}
                    onClick={() => onSelectIndustry(other)}
                    className="w-full text-left p-2.5 rounded-lg border border-slate-100 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="shrink-0">
                        {getIndustryIcon(other.id)}
                      </div>
                      <span className="text-xs font-semibold text-slate-800 group-hover:text-[#0B6B38]">
                        {other.title}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0B6B38] group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
