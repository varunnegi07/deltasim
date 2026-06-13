import Hero from "@/components/home/Hero";
import MetricsStrip from "@/components/home/MetricsStrip";
import DualOffering from "@/components/home/DualOffering";
import CoreServices from "@/components/home/CoreServices";
import IndustriesPreview from "@/components/home/IndustriesPreview";
import WhyDeltaSim from "@/components/home/WhyDeltaSim";
import ProcessFlow from "@/components/home/ProcessFlow";
import ToolsTech from "@/components/home/ToolsTech";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <MetricsStrip />
      <DualOffering />
      <div className="container-main">
        <img
          src="/images/hero-image.png"
          alt="DeltaSim Engineering"
          className="w-full"
        />
      </div>
      <CoreServices />
      <IndustriesPreview />
      <WhyDeltaSim />
      <ProcessFlow />
      <ToolsTech />
      <FinalCTA />
    </>
  );
}
