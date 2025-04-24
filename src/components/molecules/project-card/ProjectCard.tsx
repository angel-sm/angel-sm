import Badge from "../../atoms/badge/Badge";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

const technologies = [
  "React",
  "Node js",
  "Postgres",
  "AWS",
  "Go",
  "Mongo",
  "React",
  "Node js",
  "Postgres",
  "AWS",
  "Go",
  "Mongo",
];

// https://picsum.photos/800/400
const ProjectCard = () => {
  return (
    <article className="h-[100%] bg-blue-100 overflow-hidden relative">
      <div className="h-full w-[100%]">
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnF6NHR2ZmZkMjNwNmxjZXh0MXl1a2gzbHg0OW13ejgzZHI0eTU5dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JIX9t2j0ZTN9S/giphy.gif"
          alt="Project Image"
          className="h-full w-full"
        />
      </div>
      <div className="absolute top-0 flex flex-col items-start justify-between h-[100%]">
        <div className="p-6">
          <h3 className="text-3xl font-bold text-[#fff]">Project Name</h3>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex text-[#fff] gap-3">
            <a className="flex items-end gap-1 bg-stone-50/50 p-1 px-2 rounded-md hover:bg-stone-400 cursor-pointer">
              <IconBrandGithub />
              <span className="text-sm">Source</span>
            </a>
            <a className="flex items-end gap-1 bg-stone-50/50 p-1 px-2 rounded-md hover:bg-stone-400 cursor-pointer">
              <IconExternalLink />
              <span className="text-sm">Test</span>
            </a>
          </div>
          <p className="text-[#fff] text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <div className="flex flex-wrap gap-1">
            {technologies.map((technology, index) => (
              <Badge key={index} text={technology} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
