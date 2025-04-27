import { IconCode, IconCup, IconDeviceLaptop } from "@tabler/icons-react";
import AnimatedNumber from "../../atoms/animated-number/AnimatedNumber";

const FunFacts = () => {
  const Info = [
    {
      icon: <IconCup />,
      title: "Cups of coffe",
      subtitle: <AnimatedNumber from={0} to={100} duration={10} />,
      extra: "+",
    },
    {
      icon: <IconCode />,
      title: "Lines of code",
      subtitle: <AnimatedNumber from={0} to={800} duration={10} />,
      extra: "+",
    },
    {
      icon: <IconDeviceLaptop />,
      title: "Projects",
      subtitle: <AnimatedNumber from={0} to={5} duration={10} />,
    },
  ];

  return Info.map((info, index) => (
    <div key={index} className="flex flex-col items-center">
      <div className="text-4xl">{info.icon}</div>
      <div className="flex flex-col mt-3 gap-1">
        <div className="text-xs">{info.title}</div>
        <div className="text-lg">{info.extra ?? null}{info.subtitle}</div>
      </div>
    </div>
  ));
};

export default FunFacts;
