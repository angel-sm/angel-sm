import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

const Social = () => {
  const socials = [
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
    {
      icon: <IconMail />,
      social: "iamangelsm97@gmail.com",
      link: "mailto:iamangelsm97@gmail.com",
    },
  ];

  return (
    <section className="section ">
      <h2 className="section-title mb-4">Social</h2>
      <div className="flex flex-col gap-3 items-center ">
        {socials.map((social) => (
          <a
            href={social.link}
            target="_blank"
            className="flex gap-2 items-center"
          >
            {social.icon}
            {social.social}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Social;
