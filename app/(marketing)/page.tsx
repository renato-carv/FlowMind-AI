import { Benefits } from "@/components/sections/benefits";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";

export default function Page() {
  return (
    <>
      <Hero />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Faq />
      <FinalCta />
    </>
  );
}
