import HeroSection from "@/components/home/HeroSection";
import TopBar from "../components/TopBar";
import AboutMe from "@/components/home/AboutMe";
import ShowCaseTabs from "@/components/home/ShowCaseTabs";
import ShowCasePanel from "@/components/home/ShowCasePanel";
import devPortfolios from "@/models/dev_portfolios";

function Home() {
  return (
    <div className="absolute">
      <div className="w-screen bg-primary-900/50 pb-40">
        <TopBar />
        <HeroSection />
        <AboutMe />
        {/* Portfolio */}
        {devPortfolios.map((d, index) => (
          <ShowCasePanel
            className={index > 0 ? "mt-12" : ""}
            key={d.projectId}
            portfolio={d}
          />
        ))}
      </div>
      <ShowCaseTabs />
    </div>
  );
}

export default Home;
