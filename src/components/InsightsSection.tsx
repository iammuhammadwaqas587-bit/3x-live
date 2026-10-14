import React, { useState } from 'react';
import { INSIGHTS_DATA } from '../data/contentData';
import { InsightArticle, PageId } from '../types';
import { BookOpen, ArrowRight, Clock, Calendar, Share2 } from 'lucide-react';

interface InsightsSectionProps {
  onOpenConsultation: () => void;
  isStandalonePage?: boolean;
  onNavigate?: (page: PageId, detailId?: string) => void;
  onSelectInsight?: (article: InsightArticle) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({
  onOpenConsultation,
  isStandalonePage = false,
  onNavigate,
  onSelectInsight,
}) => {
  const handleCardClick = (art: InsightArticle) => {
    if (onSelectInsight) {
      onSelectInsight(art);
    } else if (onNavigate) {
      onNavigate('insights', art.id);
    }
  };

  return (
    <section id="insights-section" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="w-[90%] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2.5 mb-8 sm:mb-10">
              <span className="w-1 h-6 bg-[#00D2D3] rounded-full inline-block" />
              <span className="bg-slate-200/90 text-slate-800 text-xs sm:text-sm font-semibold px-3.5 py-1 rounded-md tracking-wide">
                Thought Leadership & Research
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal text-slate-900 tracking-tight leading-[1.18] max-w-5xl mb-4">
              Insights into the future of enterprise operations
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-4xl">
              Actionable research, market benchmarks, and architectural strategies written by 3XTECH Solution Services practitioners.
            </p>
          </div>

          {!isStandalonePage && onNavigate && (
            <div className="mt-6 md:mt-0 shrink-0">
              <button
                onClick={() => onNavigate('insights')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#C026D3] hover:text-[#A21CAF] bg-fuchsia-50 hover:bg-fuchsia-100 border border-fuchsia-200/60 px-5 py-2.5 rounded-full transition-all cursor-pointer group"
              >
                <span>Browse all blogs & reports</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>

        {/* Modular Grid of Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSIGHTS_DATA.map(art => (
            <div
              key={art.id}
              onClick={() => handleCardClick(art)}
              className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                    {art.category}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {art.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-normal text-slate-900 mb-2 leading-snug group-hover:text-[#0B6B38] transition-colors line-clamp-2">
                    {art.title}
                  </h3>

                  <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed font-normal">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 font-medium text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-[#0B6B38]" />
                  <span>{art.category}</span>
                </div>

                <span className="text-[#C026D3] font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  Read article <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
