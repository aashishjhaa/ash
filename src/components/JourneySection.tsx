import React, { useState } from 'react';
import {
  MessageSquareHeart,
  Compass,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { JOURNEY_STEPS, GOAL_MATCHER_PROFILES } from '../data/consultancyData';

interface JourneySectionProps {
  onStartJourneyWithProfile: (interestValue: string, suggestedPrompt: string) => void;
}

export const JourneySection: React.FC<JourneySectionProps> = ({
  onStartJourneyWithProfile,
}) => {
  const [selectedProfileId, setSelectedProfileId] = useState<string>(
    GOAL_MATCHER_PROFILES[0].id
  );

  const activeProfile =
    GOAL_MATCHER_PROFILES.find((p) => p.id === selectedProfileId) ||
    GOAL_MATCHER_PROFILES[0];

  const stepIcons = [
    <MessageSquareHeart key="s1" className="w-5 h-5 text-[#0369A1]" />,
    <Compass key="s2" className="w-5 h-5 text-[#0369A1]" />,
    <CheckCircle2 key="s3" className="w-5 h-5 text-[#0369A1]" />,
  ];

  return (
    <section
      id="journey"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#FAF9F5] border-b border-[#E2E8F0] scroll-mt-20"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] mb-4">
            <span className="text-[11px] font-mono-index font-semibold uppercase tracking-[0.14em] text-[#0369A1]">
              04 // SIMPLE &amp; REASSURING PROCESS
            </span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold text-[#0B192C] leading-[1.12] tracking-[-0.015em]">
            Your Journey Starts Here
          </h2>

          <p className="text-base sm:text-lg text-[#334155] mt-3.5 leading-relaxed">
            Exploring higher education, study abroad opportunities, or career upskilling doesn’t have to feel complicated. We guide you through three clear, supportive steps.
          </p>
        </div>

        {/* 3-Step Horizontal Architectural Timeline */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-8">
          {/* Desktop Connecting Dashed Line */}
          <div
            className="hidden lg:block absolute top-14 left-[16%] right-[16%] h-[1.5px] border-t-2 border-dashed border-[#CBD5E1] z-0"
            aria-hidden="true"
          />

          {JOURNEY_STEPS.map((step, index) => (
            <div
              key={step.stepNumber}
              className="relative z-10 bg-white rounded-[22px] border border-[#E2E8F0] hover:border-[#C5A059] p-7 sm:p-8 transition-all duration-300 shadow-[0_12px_30px_-14px_rgba(11,25,44,0.06)] flex flex-col justify-between group"
            >
              <div>
                {/* Step Number & Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B192C] text-[#DFBD7C] border border-[#C5A059]/50 flex items-center justify-center font-serif-display text-2xl font-semibold shadow-sm group-hover:scale-105 transition-transform">
                      {step.stepNumber}
                    </div>
                    <div>
                      <span className="text-[10.5px] font-mono-index uppercase tracking-[0.15em] text-[#64748B] block">
                        STEP {step.stepNumber} OF 03
                      </span>
                      <span className="text-xs font-medium text-[#0369A1]">
                        {step.subtitle}
                      </span>
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-[#F0F5FA] border border-[#BAE6FD]/60 flex items-center justify-center shrink-0">
                    {stepIcons[index]}
                  </div>
                </div>

                {/* Step Title & Description */}
                <h3 className="font-serif-display text-2xl sm:text-[1.7rem] font-semibold text-[#0B192C] leading-snug mb-3">
                  {index + 1}. {step.title}
                </h3>

                <p className="text-sm sm:text-[15px] text-[#334155] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Reassuring Checklist */}
              <div className="pt-5 border-t border-[#E2E8F0]">
                <span className="text-[10.5px] font-mono-index uppercase tracking-[0.13em] text-[#64748B] block mb-3">
                  WHAT TO EXPECT
                </span>
                <ul className="space-y-2">
                  {step.whatHappens.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-xs sm:text-sm text-[#0B192C]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Goal Matcher Helper */}
        <div className="mt-12 sm:mt-16 rounded-[24px] bg-white border border-[#E2E8F0] p-6 sm:p-8 lg:p-10 shadow-[0_14px_34px_-15px_rgba(11,25,44,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono-index uppercase tracking-[0.13em] text-[#0369A1] mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>INTERACTIVE STEP 1 STARTER</span>
              </div>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#0B192C] leading-snug">
                Where Would You Like Your Journey to Begin?
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
                Select the goal that best describes you right now to see how Aishwarya Singh can tailor your consultation.
              </p>

              <div className="mt-5 flex flex-col gap-2">
                {GOAL_MATCHER_PROFILES.map((prof) => (
                  <button
                    key={prof.id}
                    type="button"
                    onClick={() => setSelectedProfileId(prof.id)}
                    className={`text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-medium border transition-all cursor-pointer flex items-center justify-between ${
                      selectedProfileId === prof.id
                        ? 'bg-[#0B192C] text-white border-[#0B192C] shadow-xs'
                        : 'bg-[#FAF9F5] text-[#334155] border-[#E2E8F0] hover:border-[#C5A059]/60 hover:text-[#0B192C]'
                    }`}
                  >
                    <span>{prof.label}</span>
                    <span
                      className={`text-[10px] font-mono-index px-2 py-0.5 rounded-md ${
                        selectedProfileId === prof.id
                          ? 'bg-[#C5A059]/25 text-[#DFBD7C]'
                          : 'bg-[#E2E8F0]/70 text-[#475569]'
                      }`}
                    >
                      {prof.profileType}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Personalized Preview & 1-Click Start */}
            <div className="lg:col-span-7 rounded-2xl bg-[#F0F5FA] border border-[#BAE6FD]/80 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#BAE6FD]/70">
                  <span className="text-xs font-mono-index uppercase tracking-[0.13em] text-[#0369A1] font-semibold">
                    RECOMMENDED CONSULTATION FOCUS
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white text-[#0B192C] text-xs font-semibold border border-[#BAE6FD]">
                    {activeProfile.recommendedInterest}
                  </span>
                </div>

                <h4 className="font-serif-display text-2xl font-semibold text-[#0B192C] mt-5">
                  How We Will Guide You:
                </h4>
                <p className="text-sm sm:text-base text-[#334155] mt-2 leading-relaxed">
                  {activeProfile.summary}
                </p>

                <div className="mt-5 p-4 rounded-xl bg-white border border-[#E2E8F0]">
                  <span className="text-[10.5px] font-mono-index uppercase tracking-[0.13em] text-[#64748B] block mb-1">
                    PRE-FILLED ENQUIRY NOTE FOR AISHWARYA
                  </span>
                  <p className="text-xs sm:text-sm text-[#0B192C] italic">
                    “{activeProfile.suggestedPrompt}”
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#BAE6FD]/70">
                <span className="text-xs text-[#475569]">
                  Takes less than a minute • Personalised 1-on-1 response
                </span>

                <button
                  type="button"
                  onClick={() =>
                    onStartJourneyWithProfile(
                      activeProfile.recommendedInterest,
                      activeProfile.suggestedPrompt
                    )
                  }
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0B192C] hover:bg-[#132A4A] text-white text-xs sm:text-sm font-medium border border-[#C5A059]/50 transition-all shadow-sm cursor-pointer group"
                >
                  <span>Start Step 1 With This Goal</span>
                  <ArrowRight className="w-4 h-4 text-[#DFBD7C] transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
