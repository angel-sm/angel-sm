import { IconCode, IconCup, IconDeviceLaptop } from "@tabler/icons-react";
import ProjectCard from "../components/molecules/project-card/ProjectCard";

const ExperienceSection = () => {
  const ProjectList = (
    <div className="md:hidden lg:hidden">
      <ProjectCard></ProjectCard>
    </div>
  );

  const Info = [
    {
      icon: <IconCup />,
      title: "Cups of coffe",
      subtitle: "-",
    },
    {
      icon: <IconCode />,
      title: "Lines of code",
      subtitle: "-",
    },
    {
      icon: <IconDeviceLaptop />,
      title: "Projects",
      subtitle: "-",
    },
  ];

  const ProjectGrid = (
    <div className=" grid-cols-8 grid-rows-12 gap-4 hidden md:grid lg:grid">
      <div className="bg-red-100 col-span-4 row-span-4">
        <ProjectCard />
      </div>
      <div className="col-span-4 col-span-4 col-start-5 p-10">
        <div className="flex w-full h-full items-center justify-between">
          {Info.map((info, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-4xl">{info.icon}</div>
              <div className="flex flex-col mt-3">
                <div className="text-sm">{info.title}</div>
                <div className="text-lg">{info.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-red-100 col-span-4 col-span-4 row-span-4 col-start-5 row-start-2">
        <ProjectCard />
      </div>
      <div className="bg-red-100 col-span-5 row-span-4 col-start-4 row-start-6">
        <ProjectCard />
      </div>
      <div className="bg-red-100 col-span-3 row-span-5 col-start-1 row-start-5">
        <ProjectCard />
      </div>
      <div className="bg-red-100 col-span-4 row-span-3 col-start-2 row-start-10">
        <ProjectCard />
      </div>
      <div className="bg-red-100 col-span-3 row-span-3 col-start-6 row-start-10">
        <ProjectCard />
      </div>
      <div className="bg-stone-100 row-span-3 col-start-1 row-start-10"></div>
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
