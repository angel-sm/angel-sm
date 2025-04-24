import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconMenu2,
  IconMoon,
  IconSun,
  IconX,
} from "@tabler/icons-react";

import "./menu.css";

const Menu: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setShow(!show);
  };

  const sections = [
    { name: "Home", link: "#" },
    { name: "Me", link: "#" },
    { name: "Projects", link: "#" },
  ];

  const socials = [
    {
      icon: <IconMail />,
      social: "iamangelsm97@gmail.com",
      link: "mailto:iamangelsm97@gmail.com",
    },
    {
      icon: <IconBrandGithub />,
      social: "/angel-sm",
      link: "https://github.com/angel-sm",
    },
    {
      icon: <IconBrandLinkedin />,
      social: "/joseangelsm",
      link: "https://www.linkedin.com/in/joseangelsm/",
    },
  ];

  const LargeMenu = (
    <>
      <ul className="flex gap-4 itemx-center jusitfy-center">
        {sections.map((section) => (
          <li
            key={section.name}
            className="text-slate-500 hover:text-slate-900"
          >
            <a href={section.link}>{section.name}</a>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <div className="menu flex align-center">
      <div className="hidden lg:block">{LargeMenu}</div>

      <button className="btn z-10 lg:hidden">
        <IconMenu2 onClick={handleToggleMenu} />
      </button>
      <motion.div
        animate={{ opacity: show ? 1 : 0 }}
        className={clsx(
          "absolute w-full h-dvh top-0 left-0 bg-white z-50",
          !show && "hidden"
        )}
      >
        <div className="controller">
          <div className="h-[8vh] flex justify-end items-center">
            <button type="button">
              <IconX onClick={handleToggleMenu} />
            </button>
          </div>
          <ul className="pt-5">
            {sections.map((section) => (
              <li
                key={section.name}
                className="text-slate-500 hover:text-slate-900 mt-3"
              >
                <a href={section.link}>{section.name}</a>
              </li>
            ))}
          </ul>
          <ul className="pt-3">
            {socials.map((social) => (
              <li className="mt-3">
                <a
                  key={social.social}
                  target="_blank"
                  href={social.link}
                  className="menu-item-with-icon text-slate-500 hover:text-slate-900"
                >
                  {social.icon}
                  {social.social}
                </a>
              </li>
            ))}
          </ul>
          <ul className="pt-6">
            <li className="flex justify-between items-center">
              <span>Theme</span>
              <div className="flex justify-end gap-5">
                <IconMoon />
                <IconSun />
              </div>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Menu;
