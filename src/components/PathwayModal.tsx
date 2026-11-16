import React, { useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, HelpCircle, Sparkles } from 'lucide-react';
import { OpportunityItem } from '../data/consultancyData';

interface PathwayModalProps {
  opportunity: OpportunityItem | null;
  onClose: () => void;
  onEnquirePathway: (interestValue: string, suggestedMessage: string) => void;
}

export const PathwayModal: React.FC<PathwayModalProps> = ({
  opportunity,
  onClose,
  onEnquirePathway,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (opportunity) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [opportunity, onClose]);

  if (!opportunity) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B192C]/75 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-pathway-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[24px] bg-[#FAF9F5] border border-[#C5A059]/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] text-[#0B192C]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Hero Banner inside Modal */}
        <div className="relative h-48 sm:h-56 bg-[#0B192C] overflow-hidden">
          <img
            src={opportunity.image}
            alt={opportunity.imageAlt}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/45 to-transparent" />

          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0B192C]/80 hover:bg-[#0B192C] text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute bottom-5 left-6 right-6">
            <span className="inline-block px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0369A1] text-[10.5px] font-mono-index font-semibold uppercase tracking-[0.13em] mb-2">
              PATHWAY DOSSIER // {opportunity.index} • {opportunity.categoryTag}
            </span>
            <h3
              id="modal-pathway-title"
              className="font-serif-display text-2xl sm:text-3xl font-semibold text-white"
            >
              {opportunity.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <p className="text-base font-medium text-[#0B192C] leading-relaxed">
              {opportunity.shortDesc}
            </p>
            <p className="text-sm text-[#334155] mt-2 leading-relaxed">
              {opportunity.detailedOverview}
            </p>
          </div>

          {/* Key Focus Areas */}
          <div>
            <div className="text-[11px] font-mono-index uppercase tracking-[0.14em] text-[#0369A1] font-semibold mb-3">
              KEY AREAS OF GUIDANCE
            </div>
            <div className="space-y-3">
              {opportunity.keyAreas.map((area) => (
                <div
                  key={area.label}
                  className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#0B192C]">
                      {area.label}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#475569] mt-0.5 leading-relaxed">
                      {area.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Common Questions Discussed in Consultation */}
          <div className="rounded-2xl bg-[#F0F5FA] border border-[#BAE6FD]/80 p-5">
            <div className="flex items-center gap-2 text-xs font-mono-index uppercase tracking-[0.13em] text-[#0369A1] font-semibold mb-3">
              <HelpCircle className="w-4 h-4 text-[#0369A1]" />
              <span>QUESTIONS WE CAN EXPLORE IN YOUR CONSULTATION</span>
            </div>
            <ul className="space-y-2">
              {opportunity.consultationQuestions.map((q) => (
                <li
                  key={q}
                  className="text-xs sm:text-sm text-[#0B192C] flex items-start gap-2"
                >
                  <span className="text-[#C5A059] font-bold">•</span>
                  <span>“{q}”</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-[#64748B]">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Personalised 1-on-1 guidance by Aishwarya Singh</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl border border-[#CBD5E1] text-xs sm:text-sm font-medium text-[#475569] hover:text-[#0B192C] hover:bg-white transition-colors cursor-pointer"
              >
                Close
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onEnquirePathway(
                    opportunity.formInterestValue,
                    `Hello Aishwarya, I would like personalised guidance on ${opportunity.title} (${opportunity.shortDesc})`
                  );
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B192C] hover:bg-[#132A4A] text-white text-xs sm:text-sm font-medium border border-[#C5A059]/60 transition-all cursor-pointer"
              >
                <span>Get Free Guidance on {opportunity.title}</span>
                <ArrowRight className="w-4 h-4 text-[#DFBD7C]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
