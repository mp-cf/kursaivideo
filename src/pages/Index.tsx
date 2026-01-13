import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { CourseContent } from "@/components/CourseContent";
import { Benefits } from "@/components/Benefits";
import { TeaserSection } from "@/components/TeaserSection";
import { EmailSignup } from "@/components/EmailSignup";
import { Footer } from "@/components/Footer";
import { WaitlistModal } from "@/components/WaitlistModal";

const Index = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      <CourseContent />
      <Benefits />
      <TeaserSection />
      <EmailSignup />
      <Footer />
      <WaitlistModal open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
    </div>
  );
};

export default Index;
