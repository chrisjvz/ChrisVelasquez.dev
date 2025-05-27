function AboutMe() {
  /* TODO: Tailwind css here for styling */
  return (
    <div className="card md:row-span-6 text-sm/5">
      <div className="flex w-full h-full flex-col gap-2">
        <h1 className=" text-3xl text-text-secondary pb-1"> About me </h1>
        <p className="">
          <span >
            Hey, I'm Chris, an embedded software engineer from California with a <b>B.S. Computer Engineering</b> from
            UC San Diego. Go Tritons!
          </span>
        </p>
        <span className=""> My primary tools of choice include: </span>
        <ul className="list-disc list-inside text-base">
          <li> C/C++</li>
          <li> STM32 / ESP32</li>
          <li> Python</li>
          <li> Linux</li>
          <li> Vim</li>
          <li> Git</li>
        </ul>

        <p className="pt-1">
          At the end of the day, creating and developing software is more than just
          a hobby for me. I love taking deep dives into new tools, tech, and utilities
          with the goal of widening my knowledge base and discovering novel ways to
          tackle challenging problems!
        </p>
        <p>
          Beyond coding, I'm passionate about homelabbing, videography, youtube,
          volleyball, fitness, and walking my cat.
        </p>

      </div>
    </div>
  );
}

export default AboutMe
