import BlobProfile from "../assets/blob_profile";
import avatar from "../assets/iam.png";
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconMailFilled,
} from "@tabler/icons-react";

const Presentation = () => {
  
  const socials = [
    {
      icon: <IconMailFilled className="text-stone-700 hover:text-stone-900" />,
      social: "iamangelsm97@gmail.com",
      link: "mailto:iamangelsm97@gmail.com",
    },
    {
      icon: <IconBrandGithubFilled className="text-stone-700 hover:text-stone-900" />,
      social: "/angel-sm",
      link: "https://github.com/angel-sm",
    },
    {
      icon: <IconBrandLinkedinFilled className="text-stone-700 hover:text-stone-900" />,
      social: "/joseangelsm",
      link: "https://www.linkedin.com/in/joseangelsm/",
    },
  ];

  const Socials = (
    <div className="flex items-center justify-center py-4 gap-3">
      {socials.map((social, index) => (
        <a key={index} href={social.link} target="_blank" className="">
          {social.icon}
        </a>
      ))}
      <a
        href="https://res.cloudinary.com/saponestore/image/upload/v1745518324/cv-jose-angel-sm_zla5mc.pdf"
        download="cv-jose-angel-sm.pdf"
        target="_blank"
        className="bg-stone-700 text-[#fff] px-1  rounded-md text-sm cursor-pointer hover:bg-stone-900"
      >
        cv
      </a>
    </div>
  );

  return (
    <section className="text-center mt-[6rem] lg:flex items-center justify-between md:flex items-center justify-between">
      <div className="lg:flex flex-col">
        <h1 className="text-[#FF3366] text-5xl font-[900] lg:text-8xl">
          JOSE ANGEL
        </h1>
        <h2>Sr. Fullstack Developer</h2>
        <div className="hidden lg:block md:block">{Socials}</div>
      </div>

      <div className="sm:hidden">{Socials}</div>

      <div className="relative -z-1">
        <BlobProfile />
        <img
          src={avatar}
          alt="avatar"
          className="lg:max-w-[500px] md:max-w-[500px]"
        />
      </div>
    </section>
  );
};

export default Presentation;
