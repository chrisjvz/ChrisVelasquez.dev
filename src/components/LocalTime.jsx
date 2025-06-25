import { useState, useEffect } from 'react';
/* All options inherit this objects properties */
const globalOpts = {
  hour12: true,
  timeZoneName: "short",
  hour: "numeric",
  minute: "2-digit"
}

// Site visitors
const visitorOpts = {
  __proto__: globalOpts,
}

// My local Time
const PSTopts = {
  __proto__: globalOpts,
  timeZone: "America/Los_Angeles",
}
// Guatemala Time
const CSTopts = {
  __proto__: globalOpts,
  timeZone: "America/Guatemala",
}

// UTC Time
const UTCopts = {
  hour12: false,
  timeZone: "UTC",
  __proto__: globalOpts,
}

function LocalTime() {
  const [index, setIndex] = useState(0);
  const [formattedTimes, setFormattedTimes] = useState([
    new Date().toLocaleTimeString("en-US", PSTopts),
    new Date().toLocaleTimeString("en-US", visitorOpts),
    new Date().toLocaleTimeString("en-US", UTCopts),
    new Date().toLocaleTimeString("en-US", CSTopts)
  ]);

  function updateTimeArrays() {
    const now = new Date();


    const nowTimes = [
      new Date().toLocaleTimeString("en-US", PSTopts),
      new Date().toLocaleTimeString("en-US", visitorOpts),
      new Date().toLocaleTimeString("en-US", UTCopts),
      new Date().toLocaleTimeString("en-US", CSTopts)
    ];
    setFormattedTimes(nowTimes);

  }

  function carouselGoNext() {
    if (index >= 3) {
      return setIndex(0);
    }
    return setIndex(index + 1);
  }

  useEffect(() => {
    updateTimeArrays();
    // call update every min 
    const interval = setInterval(() => {
      updateTimeArrays();
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="card p-2 md:order-3 md:row-span-3 md:py-5 lg:row-span-2 lg:order-auto lg:col-start-2 lg:row-start-10 lg:flex lg:flex-col lg:justify-between lg:py-7 " onClick={() => carouselGoNext()}>
      <div className="carousel-container text-2xl overflow-hidden pb-3 lg:text-3xl"  >
        {formattedTimes.map((timez, idx) => (
          <p key={idx} className="carousel-item transition-tranform duration-500" style={{ transform: `translate(-${index * 100}%` }} >  {timez}</p>
        ))}
      </div>
      <div className="flex flex-row justify-center pt-2 lg:pt-0">
        <div className="flex flex-row items-center gap-2 h-4 ">
          {formattedTimes.map((_, i) => (
            <span
              key={i}

              className={`rounded-full bg-primary border-2 border-secondary transition-all duration-300 ${index === i ? "h-4 w-4 md:size-6 lg:size-7" : "h-2 w-2 md:size-3 lg:size-4"}`}
            />
          ))}
        </div>
      </div>

    </div >
  );
}


export default LocalTime
