import React, { useState } from 'react';
import {
  Globe2,
  GraduationCap,
  Briefcase,
  Compass,
  ArrowRight,
  MapPin,
  Check,
  BookOpen,
} from 'lucide-react';
import {
  OPPORTUNITIES_DATA,
  DESTINATION_SPOTLIGHTS,
  OpportunityItem,
} from '../data/consultancyData';

interface OpportunitiesSectionProps {
  onSelectOpportunity: (interestValue: string, suggestedMessage?: string) => void;
  onOpenModal: (opportunity: OpportunityItem) => void;
}

export const OpportunitiesSection: React.FC<OpportunitiesSectionProps> = ({
  onSelectOpportunity,
  onOpenModal,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<
    'all' | 'students' | 'professionals' | 'international'
  >('all');
  const [activeDestination, setActiveDestination] = useState<'malta' | 'dubai'>('malta');

  const filterButtons: {
    id: 'all' | 'students' | 'professionals' | 'international';
    label: string;
  }[] = [
    { id: 'all', label: 'All Four Pillars' },
    { id: 'students', label: 'For Students & Graduates' },
    { id: 'professionals', label: 'For Working Professionals' },
    { id: 'international', label: 'International Mobility' },
  ];

  const filteredOpportunities = OPPORTUNITIES_DATA.filter((item) =>
    item.audience.includes(selectedFilter)
  );

  const getIcon = (id: string) => {
    switch (id) {
      case 'study-abroad':
        return <Globe2 className="w-5 h-5 text-[#0369A1]" />;
      case 'higher-education':
        return <GraduationCap className="w-5 h-5 text-[#0369A1]" />;
      case 'professional-upskilling':
        return <Briefcase className="w-5 h-5 text-[#0369A1]" />;
      default:
        return <Compass className="w-5 h-5 text-[#0369A1]" />;
    }
  };

  const currentSpotlight =
    DESTINATION_SPOTLIGHTS.find((d) => d.id === activeDestination) ||
    DESTINATION_SPOTLIGHTS[0];

  return (
    <section
      id="opportunities"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#F0F5FA] border-b border-[#E2E8F0] scroll-mt-20"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] mb-4">
              <span className="text-[11px] font-mono-index font-semibold uppercase tracking-[0.14em] text-[#0369A1]">
                02 // ACADEMIC &amp; CAREER PATHWAYS
              </span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold text-[#0B192C] leading-[1.12] tracking-[-0.015em]">
              Explore Our Opportunities
            </h2>
            <p className="text-base sm:text-lg text-[#334155] mt-3.5 leading-relaxed">
              Curated educational and career pathways designed to help students and working professionals take confident, well-informed steps forward.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-white/80 backdrop-blur-xs p-1.5 rounded-2xl border border-[#E2E8F0] self-start lg:self-auto">
            {filterButtons.map((btn) => (
              <button
                key={btn.id}
                type="button"
                onClick={() => setSelectedFilter(btn.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedFilter === btn.id
                    ? 'bg-[#0B192C] text-white shadow-xs'
                    : 'text-[#475569] hover:text-[#0B192C] hover:bg-[#F0F5FA]'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2x2 Architectural Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8">
          {filteredOpportunities.map((item) => (
            <article
              key={item.id}
              className="group relative bg-white rounded-[22px] border border-[#E2E8F0] hover:border-[#C5A059] transition-all duration-300 shadow-[0_14px_34px_-12px_rgba(11,25,44,0.06)] hover:shadow-[0_24px_48px_-12px_rgba(11,25,44,0.13)] hover:-translate-y-1 flex flex-col overflow-hidden"
            >
              {/* Top Meta Header */}
              <div className="px-6 sm:px-8 pt-6 sm:pt-7 pb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono-index text-xs font-semibold px-2.5 py-1 rounded-md bg-[#0B192C] text-[#DFBD7C]">
                    {item.index}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[11px] font-semibold uppercase tracking-[0.11em] text-[#0369A1]">
                    {item.categoryTag}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-[#F0F5FA] border border-[#BAE6FD]/60 flex items-center justify-center group-hover:bg-[#E0F2FE] transition-colors shrink-0">
                  {getIcon(item.id)}
                </div>
              </div>

              {/* Editorial Campus / Pathway Photography Frame */}
              <div className="px-6 sm:px-8">
                <div className="relative h-48 sm:h-52 rounded-2xl overflow-hidden bg-[#0B192C] border border-[#E2E8F0]">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/65 via-transparent to-transparent" />
                  <button
                    type="button"
                    onClick={() => onOpenModal(item)}
                    className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-[#0B192C]/85 hover:bg-[#0B192C] backdrop-blur-md border border-[#C5A059]/50 text-[11px] font-medium text-[#FAF9F5] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#DFBD7C]" />
                    <span>Explore Pathway Dossier</span>
                  </button>
                </div>
              </div>

              {/* Card Main Content */}
              <div className="px-6 sm:px-8 pt-6 pb-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-display text-2xl sm:text-[1.75rem] font-semibold text-[#0B192C] group-hover:text-[#1E3A8A] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#334155] mt-2 leading-relaxed font-medium">
                    {item.shortDesc}
                  </p>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-2.5 leading-relaxed">
                    {item.detailedOverview}
                  </p>

                  {/* Key Highlights List */}
                  <ul className="mt-5 pt-4 border-t border-[#E2E8F0]/80 space-y-2">
                    {item.highlights.map((hl) => (
                      <li
                        key={hl}
                        className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#0B192C]"
                      >
                        <span className="w-4 h-4 rounded-full bg-[#E0F2FE] text-[#0369A1] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                        </span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Row */}
                <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenModal(item)}
                    className="text-xs sm:text-sm font-medium text-[#475569] hover:text-[#0B192C] underline underline-offset-4 decoration-[#CBD5E1] hover:decoration-[#C5A059] transition-colors cursor-pointer"
                  >
                    View Pathway Details
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      onSelectOpportunity(
                        item.formInterestValue,
                        `Hello Aishwarya, I would like to explore ${item.title} (${item.shortDesc})`
                      )
                    }
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B192C] hover:bg-[#132A4A] text-white text-xs sm:text-sm font-medium border border-[#C5A059]/40 transition-all cursor-pointer group/btn"
                  >
                    <span>Enquire About {item.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#DFBD7C] transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Interactive Study Abroad Destination Spotlight: Malta & Dubai */}
        <div className="mt-12 sm:mt-16 rounded-[24px] bg-white border border-[#E2E8F0] p-6 sm:p-8 lg:p-10 shadow-[0_16px_36px_-15px_rgba(11,25,44,0.06)]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-7 border-b border-[#E2E8F0]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono-index uppercase tracking-[0.14em] text-[#0369A1] mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>FEATURED STUDY ABROAD DESTINATIONS</span>
              </div>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#0B192C]">
                International Education Spotlight: Malta &amp; Dubai
              </h3>
            </div>

            {/* Destination Switcher Tabs */}
            <div className="inline-flex p-1.5 rounded-2xl bg-[#F0F5FA] border border-[#BAE6FD]/60 self-start">
              <button
                type="button"
                onClick={() => setActiveDestination('malta')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  activeDestination === 'malta'
                    ? 'bg-[#0B192C] text-white shadow-xs'
                    : 'text-[#334155] hover:text-[#0B192C]'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#DFBD7C]" />
                <span>Study in Malta</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveDestination('dubai')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  activeDestination === 'dubai'
                    ? 'bg-[#0B192C] text-white shadow-xs'
                    : 'text-[#334155] hover:text-[#0B192C]'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                <span>Study in Dubai</span>
              </button>
            </div>
          </div>

          {/* Active Destination Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-7">
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#0B192C] border border-[#E2E8F0]">
                <img
                  src={currentSpotlight.image}
                  alt={`${currentSpotlight.name} international study destination`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] font-mono-index uppercase tracking-widest text-[#DFBD7C] block">
                      {currentSpotlight.region}
                    </span>
                    <span className="font-serif-display text-2xl font-semibold">
                      {currentSpotlight.name}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-medium border border-white/20">
                    Study Abroad Hub
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h4 className="font-serif-display text-xl sm:text-2xl font-semibold text-[#0B192C]">
                  {currentSpotlight.tagline}
                </h4>
                <p className="text-sm sm:text-base text-[#334155] mt-2.5 leading-relaxed">
                  {currentSpotlight.description}
                </p>

                <div className="mt-5 grid grid-cols-1 gap-2.5">
                  {currentSpotlight.keyPoints.map((pt) => (
                    <div
                      key={pt}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0B192C] bg-[#FAF9F5] px-4 py-2.5 rounded-xl border border-[#E2E8F0]"
                    >
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E2E8F0]">
                <span className="text-xs text-[#64748B]">
                  Interested in exploring {currentSpotlight.name} programmes and admission requirements?
                </span>
                <button
                  type="button"
                  onClick={() =>
                    onSelectOpportunity(
                      'Study Abroad (Malta & Dubai)',
                      `Hello Aishwarya, I am interested in exploring Study Abroad opportunities in ${currentSpotlight.name}.`
                    )
                  }
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E0F2FE] hover:bg-[#BAE6FD]/70 text-[#0369A1] text-xs sm:text-sm font-semibold border border-[#BAE6FD] transition-colors cursor-pointer"
                >
                  <span>Enquire About {currentSpotlight.name} Pathways</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
