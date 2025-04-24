import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import AWS from "../assets/aws.icon";
import Docker from "../assets/docker.icon";
import FastAPI from "../assets/fastapi.icon";
import Git from "../assets/git.icon";
import Go from "../assets/go.icon";
import Graphql from "../assets/graphql.icon";
import Mongodb from "../assets/mongo.icon";
import Nestjs from "../assets/nest.icon";
import Nodejs from "../assets/node.icon";
import Postgresql from "../assets/postgresql.icon";
import Python from "../assets/python.icon";
import ReactIcon from "../assets/react.icon";
import Redis from "../assets/redis.icon";
import Stripe from "../assets/stripe.icon";
import Tailwind from "../assets/tailwind.icon";
import Terraform from "../assets/terraform.icon";
import Typescript from "../assets/typescript.icon";
import Vue from "../assets/vue.icon";
import { useEffect } from "react";

const SkillSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { slidesToScroll: 1, containScroll: "trimSnaps", loop: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  const icons = [
    <AWS />,
    <Docker />,
    <FastAPI />,
    <Git />,
    <Go />,
    <Graphql />,
    <Mongodb />,
    <Nestjs />,
    <Nodejs />,
    <Postgresql />,
    <Python />,
    <ReactIcon />,
    <Redis />,
    <Stripe />,
    <Tailwind />,
    <Terraform />,
    <Typescript />,
    <Vue />,
  ];

  const SmallSkills = (
    <section className="section">
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {icons.map((icon, index) => (
          <div className="min-w-[25%]" key={index}>
            <div className="">{icon}</div>
          </div>
        ))}
      </div>
    </section>
  );

  const LargeSkills = (
    <section className="section">
      <div className="overflow-hidden shadow-skills relative" ref={emblaRef}>
        <div className="flex">
          {icons.map((icon, index) => (
            <div className="min-w-[8%]" key={index}>
              <div className="">{icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <>
      <div className="hidden lg:block">{LargeSkills}</div>
      <div className="lg:hidden">{SmallSkills}</div>
    </>
  );
};

export default SkillSection;
