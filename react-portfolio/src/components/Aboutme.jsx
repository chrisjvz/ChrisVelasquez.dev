function AboutMe() {
  return (
    <div className="card text-sm/5 md:order-2 md:row-span-10 md:col-span-2 lg:col-span-1 lg:row-span-9 lg:col-start-4 lg:row-start-1">
      <div className="flex w-full h-full flex-col gap-2 md:gap-1 lg:text-base/7">
        <h1 className="text-3xl text-text-secondary text-center pb-1 md:text-2xl md:pb-0 lg:pb-2"> About me </h1>
        <p className="md:pb-1 lg:pb-4">
          Hey, I'm Chris, an Embedded Software Engineer from California with a <b>B.S. Computer Engineering</b> from
          UC San Diego. Go Tritons!
        </p>
        <span className=""> My primary tools of choice include: </span>
        <ul className="list-disc list-inside text-base md:text-sm/4 lg:text-lg lg:pb-4">
          <li> C/C++</li>
          <li> STM32 / ESP32</li>
          <li> Python</li>
          <li> Linux</li>
          <li> Vim</li>
          <li> Git</li>
        </ul>

        <p className="pt-1 ">
          I genuinely enjoy taking deep dives into new tools and technologies
          with the goal of widening my knowledge base and discovering novel ways to
          tackle challenging problems!
        </p>
        <p>
          Beyond coding, I'm passionate about homelabbing, videography, youtube,
          fitness, volleyball and walking my cat.
        </p>

      </div>
    </div>
  );
}

export default AboutMe
