const MeSection = () => {
  const paragraphs = [
    "Hi! I’m <b className='text-[#FF3366]'>Jose Ángel Sánchez Morales</b>, a Full Stack Developer with over 6 years of experience building web applications.",
    "I've had the pleasure of collaborating with companies like <b>Solemti</b>, <b>Evers</b>, and <b>Nomada Software House</b>, contributing to exciting and challenging projects such as <b>Monopiolio</b>, <b>Alertándote</b>, <b>Roundtable</b> and more.",
  ];

  return (
    <section className="section my-[25vh]">
      <h2 className="section-title">About Me</h2>
      {paragraphs.map((text) => (
        <p
          className="text-base/6 font-normal mt-4"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
      ))}
    </section>
  );
};

export default MeSection;
