import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { OpportunitiesSection } from './components/OpportunitiesSection';
import { CollaborationsSection } from './components/CollaborationsSection';
import { JourneySection } from './components/JourneySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PathwayModal } from './components/PathwayModal';
import { OpportunityItem } from './data/consultancyData';

export function App() {
  const [selectedInterest, setSelectedInterest] = useState<string | undefined>(
    undefined
  );
  const [selectedMessage, setSelectedMessage] = useState<string | undefined>(
    undefined
  );
  const [activeModalOpportunity, setActiveModalOpportunity] =
    useState<OpportunityItem | null>(null);

  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToGuidance = (interest?: string, message?: string) => {
    if (interest) {
      setSelectedInterest(interest);
    }
    if (message) {
      setSelectedMessage(message);
    }
    scrollToSection('#contact');
  };

  const handleExploreProgrammes = () => {
    scrollToSection('#opportunities');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#0B192C]">
      {/* Sticky Top Glassmorphic Header */}
      <Navbar
        onSelectGuidance={(interest, msg) =>
          handleNavigateToGuidance(interest, msg)
        }
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onExploreProgrammes={handleExploreProgrammes}
          onGetGuidance={(interest) => handleNavigateToGuidance(interest)}
        />

        {/* 2. About Ashwarya Enterprise */}
        <AboutSection
          onConnectWithAishwarya={(interest) =>
            handleNavigateToGuidance(interest)
          }
        />

        {/* 3. Explore Our Opportunities */}
        <OpportunitiesSection
          onSelectOpportunity={(interest, msg) =>
            handleNavigateToGuidance(interest, msg)
          }
          onOpenModal={(opportunity) => setActiveModalOpportunity(opportunity)}
        />

        {/* 4. Education & Recruitment Collaborations */}
        <CollaborationsSection
          onEnquirePartner={(interest, msg) =>
            handleNavigateToGuidance(interest, msg)
          }
        />

        {/* 5. Your Journey Starts Here (3-Step Process) */}
        <JourneySection
          onStartJourneyWithProfile={(interest, msg) =>
            handleNavigateToGuidance(interest, msg)
          }
        />

        {/* 6. Contact & Consultation */}
        <ContactSection
          preselectedInterest={selectedInterest}
          preselectedMessage={selectedMessage}
        />
      </main>

      {/* Architectural Footer */}
      <Footer
        onSelectPathway={(interest) => handleNavigateToGuidance(interest)}
      />

      {/* Interactive Pathway Dossier Modal */}
      <PathwayModal
        opportunity={activeModalOpportunity}
        onClose={() => setActiveModalOpportunity(null)}
        onEnquirePathway={(interest, msg) =>
          handleNavigateToGuidance(interest, msg)
        }
      />
    </div>
  );
}

export default App;
