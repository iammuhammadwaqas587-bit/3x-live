import React, { useState, useEffect } from 'react';
import { PageId, ServiceItem, IndustryItem, InsightArticle } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhoWeAreSection } from './components/WhoWeAreSection';
import { WhatWeOfferSection } from './components/WhatWeOfferSection';
import { IndustriesSection } from './components/IndustriesSection';
import { InsightsSection } from './components/InsightsSection';
import { AboutSection } from './components/AboutSection';
import { AboutCompanySection } from './components/AboutCompanySection';
import { ForBusinessesAndGovSection } from './components/ForBusinessesAndGovSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { ConsultationEstimator } from './components/ConsultationEstimator';
import { Footer } from './components/Footer';
import { FloatingContactWidget } from './components/FloatingContactWidget';
import { ConsultationModal } from './components/ConsultationModal';
import { SearchModal } from './components/SearchModal';
import { SingleServicePage } from './components/SingleServicePage';
import { ServicesPage } from './components/ServicesPage';
import { IndustriesPage } from './components/IndustriesPage';
import { SingleIndustryPage } from './components/SingleIndustryPage';
import { InsightsPage } from './components/InsightsPage';
import { SingleBlogPage } from './components/SingleBlogPage';
import { COMPANY_INFO, SERVICES_DATA, INDUSTRIES_DATA, INSIGHTS_DATA } from './data/contentData';
import { ArrowRight, Phone, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);
  const [selectedIndustryDetail, setSelectedIndustryDetail] = useState<IndustryItem | null>(null);
  const [selectedInsightDetail, setSelectedInsightDetail] = useState<InsightArticle | null>(null);

  // Helper: Parse current pathname into page and detail slug
  const parseCurrentPath = (): { page: PageId; detailId?: string } => {
    const pathname = window.location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
    
    // Check for direct root
    if (pathname === '/' || pathname === '') {
      return { page: 'home' };
    }
    
    // Check specific subpaths
    const parts = pathname.split('/').filter(Boolean);
    const first = parts[0];
    const second = parts[1];

    if (first === 'about') {
      return { page: 'about' };
    }
    if (first === 'contact') {
      return { page: 'contact' };
    }
    if (first === 'solutions' || first === 'services') {
      return { page: 'solutions', detailId: second };
    }
    if (first === 'industries' || first === 'sectors') {
      return { page: 'industries', detailId: second };
    }
    if (first === 'insights' || first === 'blog' || first === 'briefings') {
      return { page: 'insights', detailId: second };
    }

    // Direct slug fallback (e.g. /project-management, /financial-services, etc.)
    if (SERVICES_DATA.some(s => s.id === first)) {
      return { page: 'solutions', detailId: first };
    }
    if (INDUSTRIES_DATA.some(i => i.id === first)) {
      return { page: 'industries', detailId: first };
    }
    if (INSIGHTS_DATA.some(a => a.id === first)) {
      return { page: 'insights', detailId: first };
    }

    return { page: 'home' };
  };

  // Synchronize state and dynamic SEO tags based on path
  const syncRouteFromPath = () => {
    const { page, detailId } = parseCurrentPath();
    setCurrentPage(page);

    let docTitle = '3XTECH Solution Services | Project Management, Tech Support, Managed Network & Consulting';
    let docDesc = '3XTech Ltd delivers Expert Project Management, Responsive Technical Support, Managed Network Services, and Consulting Services across the UK and internationally.';

    if (page === 'solutions') {
      if (detailId) {
        const found = SERVICES_DATA.find(s => s.id === detailId || s.category === detailId);
        setSelectedServiceDetail(found || null);
        if (found) {
          docTitle = `${found.title} | 3XTECH Solution Services`;
          docDesc = found.tagline || found.description;
        }
      } else {
        setSelectedServiceDetail(null);
        docTitle = 'Solutions & Services | 3XTECH Solution Services';
        docDesc = 'Enterprise Project Management, Technical Support, Managed Networks, and Strategic Consulting.';
      }
      setSelectedIndustryDetail(null);
      setSelectedInsightDetail(null);
    } else if (page === 'industries') {
      if (detailId) {
        const found = INDUSTRIES_DATA.find(i => i.id === detailId);
        setSelectedIndustryDetail(found || null);
        if (found) {
          docTitle = `${found.title} Solutions | 3XTECH Solution Services`;
          docDesc = found.subtitle || found.description;
        }
      } else {
        setSelectedIndustryDetail(null);
        docTitle = 'Regulated Sectors & Industries | 3XTECH Solution Services';
        docDesc = 'Enterprise IT solutions tailored for Financial Services, Public Sector, Telecoms, Healthcare, and Logistics.';
      }
      setSelectedServiceDetail(null);
      setSelectedInsightDetail(null);
    } else if (page === 'insights') {
      if (detailId) {
        const found = INSIGHTS_DATA.find(a => a.id === detailId);
        setSelectedInsightDetail(found || null);
        if (found) {
          docTitle = `${found.title} | 3XTECH Insights`;
          docDesc = found.summary;
        }
      } else {
        setSelectedInsightDetail(null);
        docTitle = 'Executive Briefings & Insights | 3XTECH Solution Services';
        docDesc = 'In-depth operational benchmarks, architectural blueprints, and technology governance strategies.';
      }
      setSelectedServiceDetail(null);
      setSelectedIndustryDetail(null);
    } else if (page === 'about') {
      setSelectedServiceDetail(null);
      setSelectedIndustryDetail(null);
      setSelectedInsightDetail(null);
      docTitle = 'About 3XTech Ltd | UK IT Services & Enterprise Solutions';
      docDesc = '3XTech Ltd provides IT services in cloud, development and infrastructure. Based in Potters Bar, Hertfordshire.';
    } else if (page === 'contact') {
      setSelectedServiceDetail(null);
      setSelectedIndustryDetail(null);
      setSelectedInsightDetail(null);
      docTitle = 'Contact 3XTECH Solution Services | Direct Consultation';
      docDesc = 'Connect with 3XTECH via direct phone 0207 101 3630, 24/7 support desk, or WhatsApp.';
    } else {
      setSelectedServiceDetail(null);
      setSelectedIndustryDetail(null);
      setSelectedInsightDetail(null);
    }

    // Update document title and meta description dynamically for SEO
    document.title = docTitle;
    const metaDescTag = document.querySelector('meta[name="description"]');
    if (metaDescTag) {
      metaDescTag.setAttribute('content', docDesc);
    }
  };

  // Listen to popstate (browser back/forward) & initial mount
  useEffect(() => {
    // If arriving with a legacy hash, rewrite to clean URL immediately
    if (window.location.hash) {
      const legacyHash = window.location.hash.replace('#', '');
      const cleanPath = legacyHash === 'home' ? '/' : `/${legacyHash}`;
      window.history.replaceState(null, '', cleanPath);
    }

    syncRouteFromPath();

    const handlePopState = () => {
      syncRouteFromPath();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Keyboard shortcut for search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigateTo = (page: PageId, detailId?: string) => {
    let targetPath = '/';
    if (page === 'home') {
      targetPath = '/';
    } else if (page === 'solutions') {
      targetPath = detailId ? `/solutions/${detailId}` : '/solutions';
    } else if (page === 'industries') {
      targetPath = detailId ? `/industries/${detailId}` : '/industries';
    } else if (page === 'insights') {
      targetPath = detailId ? `/insights/${detailId}` : '/insights';
    } else if (page === 'about') {
      targetPath = '/about';
    } else if (page === 'contact') {
      targetPath = '/contact';
    }

    // Push state without reloading and update state
    window.history.pushState(null, '', targetPath);
    syncRouteFromPath();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-fuchsia-600 selection:text-white">
      {/* Static Header on Top - per user requirement: "rember header will remain stattic on top" */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      {/* Main Page Routing Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* Capita-style Hero */}
            <Hero
              onNavigate={navigateTo}
              onOpenConsultation={() => setConsultationOpen(true)}
            />

            {/* Who We Are Section - 3XTech Ltd Cloud, Development & Infrastructure */}
            <WhoWeAreSection
              onNavigate={navigateTo}
              onOpenConsultation={() => setConsultationOpen(true)}
            />

            {/* What We Offer Section - Network, Cloud, Development, Project Management */}
            <WhatWeOfferSection
              onNavigate={navigateTo}
              onSelectService={(s) => navigateTo('solutions', s.id)}
              onOpenConsultation={() => setConsultationOpen(true)}
            />

            {/* Interactive Transformation Value Estimator */}
            <ConsultationEstimator
              onOpenConsultation={() => setConsultationOpen(true)}
            />

            {/* Regulated Industry Sectors */}
            <IndustriesSection
              onOpenConsultation={() => setConsultationOpen(true)}
              onNavigate={navigateTo}
            />

            {/* Thought Leadership & Research Insights */}
            <InsightsSection
              onOpenConsultation={() => setConsultationOpen(true)}
              onNavigate={navigateTo}
              onSelectInsight={(art) => navigateTo('insights', art.id)}
            />

            {/* About 3XTECH Snapshot */}
            <AboutSection
              onOpenConsultation={() => setConsultationOpen(true)}
            />

            {/* Frequently Asked Questions */}
            <FAQSection
              onOpenConsultation={() => setConsultationOpen(true)}
            />

            {/* Interactive Contact & Scoping Section */}
            <ContactSection />
          </>
        )}

        {currentPage === 'solutions' && (
          <div className="pt-0">
            {selectedServiceDetail ? (
              <SingleServicePage
                service={selectedServiceDetail}
                onBack={() => navigateTo('solutions')}
                onSelectService={(s) => navigateTo('solutions', s.id)}
                onOpenConsultation={() => setConsultationOpen(true)}
                onNavigate={navigateTo}
              />
            ) : (
              <>
                <ServicesPage
                  onSelectService={(s) => navigateTo('solutions', s.id)}
                  onOpenConsultation={() => setConsultationOpen(true)}
                  onNavigate={navigateTo}
                />
                <ConsultationEstimator
                  onOpenConsultation={() => setConsultationOpen(true)}
                />
              </>
            )}
            <ContactSection />
          </div>
        )}

        {currentPage === 'industries' && (
          <div className="pt-0">
            {selectedIndustryDetail ? (
              <SingleIndustryPage
                industry={selectedIndustryDetail}
                onBack={() => navigateTo('industries')}
                onSelectIndustry={(ind) => navigateTo('industries', ind.id)}
                onNavigate={navigateTo}
                onOpenConsultation={() => setConsultationOpen(true)}
              />
            ) : (
              <IndustriesPage
                onOpenConsultation={() => setConsultationOpen(true)}
                onNavigate={navigateTo}
                onSelectIndustry={(ind) => navigateTo('industries', ind.id)}
              />
            )}
            <ContactSection />
          </div>
        )}

        {currentPage === 'insights' && (
          <div className="pt-0">
            {selectedInsightDetail ? (
              <SingleBlogPage
                article={selectedInsightDetail}
                onBack={() => navigateTo('insights')}
                onSelectInsight={(art) => navigateTo('insights', art.id)}
                onNavigate={navigateTo}
                onOpenConsultation={() => setConsultationOpen(true)}
              />
            ) : (
              <InsightsPage
                onSelectInsight={(art) => navigateTo('insights', art.id)}
                onNavigate={navigateTo}
                onOpenConsultation={() => setConsultationOpen(true)}
              />
            )}
            <ContactSection />
          </div>
        )}

        {currentPage === 'about' && (
          <div className="pt-0">
            <div className="bg-[#0D1F18] text-white py-14 px-0 sm:px-2 border-b border-emerald-950">
              <div className="w-[90%] mx-auto">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-4 bg-emerald-400 rounded-full inline-block" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    About 3XTech
                  </span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-normal sm:font-semibold tracking-tight text-white max-w-4xl leading-tight">
                  UK technology consultants focused on practical IT outcomes.
                </h1>
                <p className="text-slate-300 text-base sm:text-lg mt-4 max-w-3xl font-normal leading-relaxed">
                  3XTech Ltd provides IT services in cloud, development and infrastructure. Based in Potters Bar, Hertfordshire, we work with organisations that need dependable systems, clearer data and better digital services.
                </p>
              </div>
            </div>
            {/* Section 1: About Company (matching second section on homepage) */}
            <AboutCompanySection onNavigate={setCurrentPage} />

            {/* Section 2: For businesses and government (matching reference layout) */}
            <ForBusinessesAndGovSection onNavigate={setCurrentPage} />

            {/* Section 3: Purpose & Values */}
            <AboutSection
              onOpenConsultation={() => setConsultationOpen(true)}
              isStandalonePage={true}
            />

            {/* Section 4: Frequently Asked Questions */}
            <FAQSection
              onOpenConsultation={() => setConsultationOpen(true)}
            />

            <ContactSection />
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="pt-0">
            <div className="bg-[#0D1F18] text-white py-12 px-0 sm:px-2 border-b border-emerald-950">
              <div className="w-[90%] mx-auto">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-4 bg-[#C026D3] rounded-full inline-block" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Direct Inquiries & Headquarters
                  </span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-normal sm:font-semibold tracking-tight text-white">
                  Contact 3XTECH Solution Services
                </h1>
                <p className="text-slate-300 text-base sm:text-lg mt-3 max-w-2xl font-normal leading-relaxed">
                  Direct telephone: {COMPANY_INFO.phone} • Instant WhatsApp desk • {COMPANY_INFO.address}
                </p>
              </div>
            </div>
            <ContactSection isStandalonePage={true} />
          </div>
        )}
      </main>

      {/* Capita-style Corporate Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      {/* Floating Contact Widget on Bottom-Right per explicit prompt:
          "there should be a floating contac button on right bottom clicking on which will open two options , 
          one whatsapp floating icon and one phone icon, enabling users to choose their preferred method of communication. 
          and this button will be shited to cross icon to close the options for a seamless user experience. 
          +44 7999 500254 use this number for whatsapp and phone" */}
      <FloatingContactWidget />

      {/* Strategic Consultation / Blueprint Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={navigateTo}
      />
    </div>
  );
}
