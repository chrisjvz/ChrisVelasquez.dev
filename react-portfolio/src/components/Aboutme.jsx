function AboutMe() {
  /* TODO: Tailwind css here for styling */
  return (
    <div className="card md:row-span-6 ">
      <div className="flex w-full h-full flex-col">
        <h1> About me </h1>
        <p>
          <span>
            Hi, I'm Chris, an embedded software engineer from California.
          </span>

          <span> My primary tools of choice include: </span>

        </p>
        <ul className="list-disc list-inside">
          <li> C/C++</li>
          <li> STM32/ESP32</li>
          <li> Python</li>
          <li> Linux</li>
          <li> Vim</li>
          <li> Git</li>
        </ul>

        <p>
          <span>
            At the end of the day, creating and developing software is more than just
            a hobby for me. I love taking deep dives into new tools, tech, and utilities
            with the goal of widening my knowledge base and discovering novel ways to
            tackle challenging problems!
          </span>

          <span>
            Beyond coding, I'm passionate about homelabbing, videography, youtube,
            volleyball, fitness, and maybe a MOBA or two.

          </span>
        </p>


      </div>
    </div>
  );
}

export default AboutMe
