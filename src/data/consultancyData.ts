export interface OpportunityItem {
  id: string;
  index: string;
  title: string;
  shortDesc: string;
  categoryTag: string;
  audience: ('all' | 'students' | 'professionals' | 'international')[];
  image: string;
  imageAlt: string;
  highlights: string[];
  detailedOverview: string;
  keyAreas: {
    label: string;
    detail: string;
  }[];
  consultationQuestions: string[];
  formInterestValue: string;
}

export interface CollaborationPartner {
  id: string;
  index: string;
  name: string;
  monogram: string;
  badge: string;
  category: string;
  tagline: string;
  description: string;
  programmeHighlights: string[];
  idealFor: string;
  locationOrMode: string;
  formInterestValue: string;
}

export interface JourneyStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  whatHappens: string[];
}

export const HERO_CONTENT = {
  eyebrow: 'INTERNATIONAL EDUCATION & CAREER CONSULTANCY',
  headlinePart1: 'Your Dreams.',
  headlinePart2: 'Your Education.',
  headlinePart3: 'Your Future.',
  subheadline:
    'Helping you discover the right universities, global education opportunities, and career-building programmes.',
  primaryCta: 'Explore Programmes',
  secondaryCta: 'Get Free Guidance',
  mainImage:
    'https://images.pexels.com/photos/39192310/pexels-photo-39192310.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
  mainImageAlt:
    'Graduates celebrating in gowns in front of a historic university building',
  secondaryImage:
    'https://images.pexels.com/photos/34115522/pexels-photo-34115522.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
  secondaryImageAlt:
    'Historic university courtyard and classical architecture',
};

export const ABOUT_CONTENT = {
  eyebrow: '01 // ABOUT ASHWARYA ENTERPRISE',
  headline: 'Personalised Educational Advisory Led by Aishwarya Singh',
  leadParagraph:
    'Choosing the right university, international destination, or professional programme is one of the most defining decisions in a student’s or working professional’s life. Ashwarya Enterprise was created to replace overwhelming options with calm, honest, and individualised clarity.',
  secondaryParagraph:
    'Led by Aishwarya Singh, Ashwarya Enterprise works closely with learners and professionals to understand their academic background, career ambitions, and personal preferences—helping them navigate higher education, study abroad pathways in destinations such as Malta and Dubai, and industry-aligned upskilling programmes.',
  pillars: [
    {
      number: '01',
      title: 'Personalised Guidance',
      description:
        'Thoughtful, one-on-one consultations centered on your unique academic background, strengths, and long-term goals rather than one-size-fits-all recommendations.',
    },
    {
      number: '02',
      title: 'Higher Education Opportunities',
      description:
        'Structured exploration of undergraduate, postgraduate, MBA, and international study pathways across respected institutions and global hubs.',
    },
    {
      number: '03',
      title: 'Career Development',
      description:
        'Forward-looking focus on employability and professional growth through industry-focused upskilling courses and strategic academic choices.',
    },
  ],
};

export const OPPORTUNITIES_DATA: OpportunityItem[] = [
  {
    id: 'study-abroad',
    index: '01',
    title: 'Study Abroad',
    shortDesc:
      'Explore international education opportunities, including Malta and Dubai.',
    categoryTag: 'GLOBAL MOBILITY • MALTA & DUBAI',
    audience: ['all', 'students', 'international'],
    image:
      'https://images.pexels.com/photos/16569718/pexels-photo-16569718.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    imageAlt: 'Historic Mediterranean architecture of Valletta, Malta',
    highlights: [
      'Malta & European Study Pathways',
      'Dubai International Campus Hub',
      'Global Exposure & Cross-Cultural Learning',
    ],
    detailedOverview:
      'Studying abroad opens doors to international perspectives, diverse professional networks, and globally recognised academic environments. Ashwarya Enterprise provides dedicated guidance for students looking to pursue international education in vibrant destinations including Malta and Dubai.',
    keyAreas: [
      {
        label: 'Malta Study Opportunities',
        detail:
          'English-speaking Mediterranean European destination offering business and higher education pathways in a rich historical and international setting.',
      },
      {
        label: 'Dubai Study Opportunities',
        detail:
          'Dynamic global commercial hub connecting students with modern international campuses, business ecosystems, and multicultural career exposure.',
      },
      {
        label: 'Destination & Programme Alignment',
        detail:
          'Personalised guidance to help you compare destinations, curriculum structure, and admission readiness.',
      },
    ],
    consultationQuestions: [
      'Which destination—Malta, Dubai, or another international hub—best aligns with my academic and career plans?',
      'What are the academic eligibility requirements and intake timelines?',
      'How do I prepare my application profile for international business schools?',
    ],
    formInterestValue: 'Study Abroad (Malta & Dubai)',
  },
  {
    id: 'higher-education',
    index: '02',
    title: 'Higher Education',
    shortDesc:
      'Discover undergraduate, postgraduate, and MBA programmes.',
    categoryTag: 'ACADEMIC DEGREES • UG / PG / MBA',
    audience: ['all', 'students', 'professionals'],
    image:
      'https://images.pexels.com/photos/5940844/pexels-photo-5940844.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    imageAlt: 'University students collaborating on academic research in a library',
    highlights: [
      'Undergraduate (Bachelor’s) Tracks',
      'Postgraduate (Master’s) Specialisations',
      'MBA & Executive Business Programmes',
    ],
    detailedOverview:
      'Whether you are stepping into university for your undergraduate degree, deepening your expertise through a postgraduate programme, or advancing into management with an MBA, we help you evaluate academic pathways that support your ambitions.',
    keyAreas: [
      {
        label: 'Undergraduate Programmes',
        detail:
          'Foundational degree options across business, management, commerce, technology, and interdisciplinary studies for school completers.',
      },
      {
        label: 'Postgraduate Programmes',
        detail:
          'Advanced master’s pathways designed for graduates aiming to build specialised domain knowledge and academic credentials.',
      },
      {
        label: 'MBA Pathways',
        detail:
          'Strategic business administration programmes tailored for aspiring leaders, entrepreneurs, and career-advancing professionals.',
      },
    ],
    consultationQuestions: [
      'Which undergraduate or postgraduate specialisation suits my academic strengths?',
      'Should I pursue a general MBA or a specialised business master’s programme?',
      'What flexible or full-time formats are available for my current stage?',
    ],
    formInterestValue: 'Higher Education (UG, PG & MBA)',
  },
  {
    id: 'professional-upskilling',
    index: '03',
    title: 'Professional Upskilling',
    shortDesc:
      'Explore industry-focused courses and career development opportunities.',
    categoryTag: 'CAREER ACCELERATION • UPSKILLING',
    audience: ['all', 'professionals', 'students'],
    image:
      'https://images.pexels.com/photos/8199134/pexels-photo-8199134.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    imageAlt: 'Professionals and students engaged in a modern seminar discussion',
    highlights: [
      'Industry-Aligned Curriculum',
      'Designed for Working Professionals & Graduates',
      'Practical Career Development Focus',
    ],
    detailedOverview:
      'In a rapidly evolving professional landscape, continuous learning is essential. Ashwarya Enterprise helps working professionals and ambitious graduates identify industry-focused upskilling programmes that build relevant, real-world capabilities.',
    keyAreas: [
      {
        label: 'Industry-Focused Courses',
        detail:
          'Structured programmes developed around contemporary industry demands in business, technology, finance, analytics, and management.',
      },
      {
        label: 'Working Professional Flexibility',
        detail:
          'Learning pathways that allow you to upgrade your credentials and capabilities alongside your professional commitments.',
      },
      {
        label: 'Career Transition & Growth',
        detail:
          'Guidance on selecting programmes that bridge the gap between your current role and your next career milestone.',
      },
    ],
    consultationQuestions: [
      'Which upskilling programme aligns best with my current work experience?',
      'How can I balance an industry-focused course alongside a full-time job?',
      'What programmes are available through collaborations like Hero Vired?',
    ],
    formInterestValue: 'Professional Upskilling Courses',
  },
  {
    id: 'career-admission-guidance',
    index: '04',
    title: 'Career & Admission Guidance',
    shortDesc:
      'Receive personalised support in choosing suitable educational pathways.',
    categoryTag: '1-ON-1 ADVISORY • ADMISSION SUPPORT',
    audience: ['all', 'students', 'professionals', 'international'],
    image:
      'https://images.pexels.com/photos/28463790/pexels-photo-28463790.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    imageAlt: 'Warm academic study library with globe centerpiece and reading lamps',
    highlights: [
      'Individual Profile & Goal Assessment',
      'Programme & Institution Shortlisting',
      'Step-by-Step Application Clarity',
    ],
    detailedOverview:
      'Making the right educational choice begins with understanding where you are today and where you aspire to be. Aishwarya Singh provides approachable, one-on-one career and admission guidance so you can move forward with confidence.',
    keyAreas: [
      {
        label: 'Academic & Career Mapping',
        detail:
          'An honest conversation about your educational background, interests, and long-term career objectives.',
      },
      {
        label: 'Pathway Comparison',
        detail:
          'Objective evaluation of domestic vs. international study, degree programmes vs. professional upskilling tracks.',
      },
      {
        label: 'Admission Next-Step Support',
        detail:
          'Clear guidance on documentation readiness, eligibility checks, and enrollment steps for your chosen programme.',
      },
    ],
    consultationQuestions: [
      'I am unsure whether to pursue higher studies immediately or focus on upskilling—how do I decide?',
      'What documents and preparation do I need to begin my admission process?',
      'Can I book a free initial guidance conversation with Aishwarya Singh?',
    ],
    formInterestValue: 'Career & Admission Guidance',
  },
];

export const DESTINATION_SPOTLIGHTS = [
  {
    id: 'malta',
    name: 'Malta',
    region: 'Mediterranean Europe',
    tagline: 'European Academic Heritage in an English-Speaking Mediterranean Hub',
    image:
      'https://images.pexels.com/photos/16569718/pexels-photo-16569718.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    description:
      'Malta combines a respected European higher education framework with an welcoming, English-speaking environment. Ideal for students exploring international business schools and European study pathways.',
    keyPoints: [
      'English as an official language of instruction and daily life',
      'European higher education standards & international business exposure',
      'Home to respected institutions including EIE European Business School pathways',
    ],
  },
  {
    id: 'dubai',
    name: 'Dubai',
    region: 'United Arab Emirates',
    tagline: 'A Global Business & Innovation Crossroads for Ambitious Learners',
    image:
      'https://images.pexels.com/photos/15478316/pexels-photo-15478316.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    description:
      'Dubai offers close proximity, world-class modern infrastructure, and a thriving international corporate environment—making it a premier destination for higher education and business studies.',
    keyPoints: [
      'Vibrant international education zones and global campus presence',
      'Exposure to multinational commerce, finance, hospitality, and technology sectors',
      'Dynamic multicultural student community with global connectivity',
    ],
  },
];

export const COLLABORATIONS_DATA: CollaborationPartner[] = [
  {
    id: 'eie-business-school',
    index: '01',
    name: 'EIE European Business School',
    monogram: 'eie',
    badge: 'FEATURED EDUCATION & RECRUITMENT COLLABORATION',
    category: 'International Higher Education & European Business Pathways',
    tagline: 'Connecting Learners with European Business Education & Global Academic Pathways',
    description:
      'Featured in Ashwarya Enterprise’s education and recruitment profile, EIE European Business School offers learners access to international business education, management studies, and European academic pathways including study opportunities connected to Malta.',
    programmeHighlights: [
      'Undergraduate & Postgraduate Business Pathways',
      'MBA & Executive Management Programmes',
      'European Academic Exposure & Study Abroad Focus',
      'Personalised Application & Admission Guidance via Ashwarya Enterprise',
    ],
    idealFor:
      'Students and graduates aspiring to earn business and management qualifications with European and international academic exposure.',
    locationOrMode: 'International & European Study Pathways (Including Malta)',
    formInterestValue: 'EIE European Business School Programmes',
  },
  {
    id: 'hero-vired',
    index: '02',
    name: 'Hero Vired',
    monogram: 'HV',
    badge: 'FEATURED EDUCATION & RECRUITMENT COLLABORATION',
    category: 'Industry-Aligned Professional Upskilling & Career Programmes',
    tagline: 'Career-Focused Upskilling Built for the Modern Industry Landscape',
    description:
      'Featured in Ashwarya Enterprise’s collaboration portfolio, Hero Vired delivers industry-focused learning programmes designed to help working professionals and ambitious graduates develop practical, job-relevant skills for career advancement.',
    programmeHighlights: [
      'Industry-Focused Upskilling Programmes',
      'Career Acceleration for Working Professionals',
      'Contemporary Business, Finance, Tech & Analytics Domains',
      'Dedicated Course Selection Guidance via Ashwarya Enterprise',
    ],
    idealFor:
      'Working professionals, career switchers, and graduates seeking hands-on, industry-relevant upskilling to accelerate their career growth.',
    locationOrMode: 'Career-Focused Professional Learning & Upskilling',
    formInterestValue: 'Hero Vired Upskilling Programmes',
  },
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    stepNumber: '01',
    title: 'Share Your Goals',
    subtitle: 'Begin with an open, pressure-free conversation',
    description:
      'Connect with Aishwarya Singh to share your current academic stage or professional role, your fields of interest, and whether you are considering higher education, study abroad in Malta or Dubai, or career upskilling.',
    whatHappens: [
      'Discuss your educational background and career aspirations',
      'Share your preferred study format or international destination',
      'Ask any initial questions in a welcoming, supportive setting',
    ],
  },
  {
    stepNumber: '02',
    title: 'Explore Suitable Programmes',
    subtitle: 'Review curated options tailored to your profile',
    description:
      'Based on your goals, we help you explore relevant undergraduate, postgraduate, MBA, international study, or professional upskilling programmes—including pathways with EIE European Business School and Hero Vired.',
    whatHappens: [
      'Shortlist programmes that genuinely match your objectives',
      'Understand curriculum focus, eligibility, and programme structure',
      'Compare study abroad, degree, and upskilling options clearly',
    ],
  },
  {
    stepNumber: '03',
    title: 'Get Guidance on Your Next Steps',
    subtitle: 'Move forward with clarity and structured support',
    description:
      'Once you identify the right educational pathway, receive personalised guidance on admission preparation, application steps, and planning your academic or professional transition.',
    whatHappens: [
      'Clear checklist for application and admission requirements',
      'Dedicated support throughout your programme selection journey',
      'Confidence in making an informed decision for your future',
    ],
  },
];

export const GOAL_MATCHER_PROFILES = [
  {
    id: 'abroad-explorer',
    label: 'Studying Abroad in Malta or Dubai',
    profileType: 'Student / Graduate',
    recommendedInterest: 'Study Abroad (Malta & Dubai)',
    summary:
      'We will explore international campus options in Malta and Dubai, including European business pathways with EIE European Business School, eligibility requirements, and intake planning.',
    suggestedPrompt:
      'Hello Aishwarya, I would like guidance on Study Abroad opportunities in Malta / Dubai and suitable international programmes.',
  },
  {
    id: 'degree-seeker',
    label: 'Pursuing UG, PG, or MBA Programmes',
    profileType: 'Student / Graduate',
    recommendedInterest: 'Higher Education (UG, PG & MBA)',
    summary:
      'We will evaluate undergraduate, postgraduate, or MBA programmes aligned with your academic background and long-term career goals.',
    suggestedPrompt:
      'Hello Aishwarya, I am looking for personalised guidance on choosing the right Undergraduate / Postgraduate / MBA programme.',
  },
  {
    id: 'working-pro',
    label: 'Upskilling for Career Growth',
    profileType: 'Working Professional',
    recommendedInterest: 'Professional Upskilling Courses',
    summary:
      'We will review industry-focused professional courses—including Hero Vired programmes—designed to fit alongside your work schedule and accelerate your career.',
    suggestedPrompt:
      'Hello Aishwarya, I am a working professional interested in industry-focused upskilling programmes (such as Hero Vired) for career growth.',
  },
  {
    id: 'undecided',
    label: 'Exploring My Best Educational Options',
    profileType: 'Open Consultation',
    recommendedInterest: 'Career & Admission Guidance',
    summary:
      'Not sure which route fits best? We will start with a personalised 1-on-1 discussion to clarify your strengths and map out suitable educational pathways.',
    suggestedPrompt:
      'Hello Aishwarya, I would love to schedule a free guidance consultation to explore the best educational and career pathways for my profile.',
  },
];
