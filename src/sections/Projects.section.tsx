import FunFacts from "../components/molecules/fun-facts/FunFacts";
import ProjectCard from "../components/molecules/project-card/ProjectCard";

const ExperienceSection = () => {
  const ProjectList = (
    <div className="md:hidden lg:hidden">
      <ProjectCard></ProjectCard>
    </div>
  );

  const ProjectGrid = (
    <div className="grid-cols-6 grid-rows-10 gap-4 lg:grid md:grid hidden">
      <div className="bg-red-100 col-span-3 row-span-3">
        <ProjectCard />
      </div>
      <div className=" col-span-3 col-start-4 row-start-1">
        <div className=" flex items-center justify-center gap-10 h-full">
          <FunFacts />
        </div>
      </div>
      <div className="bg-red-100 col-span-3 row-span-3 col-start-4 row-start-2">
        <ProjectCard />
      </div>
      <div className="bg-red-100 col-span-3 row-span-3 col-start-1 row-start-4">
        <ProjectCard />
      </div>
      <div className="bg-red-100 col-span-3 row-span-3 col-start-4 row-start-5">
        <ProjectCard />
      </div>
      <div className="bg-red-100 col-span-3 row-span-3 col-start-1 row-start-7">
        <ProjectCard />
      </div>
      <div className="bg-red-100 col-span-3 row-span-3 col-start-4 row-start-8">
        <ProjectCard />
      </div>
    </div>
  );

  return (
    <section className="section">
      <h2 className="section-title mb-8">Projects</h2>
      {ProjectList}
      {ProjectGrid}
    </section>
  );
};

export default ExperienceSection;
