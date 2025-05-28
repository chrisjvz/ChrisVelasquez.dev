import { useState } from 'react';
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

// TODO: ADD functionality for real time updating
function LocalTime() {
  const [index, setIndex] = useState(0);

  function carouselGoNext() {
    if (index >= 3) {
      return setIndex(0);
    }
    return setIndex(index + 1);
  }

  const times = [
    new Date().toLocaleTimeString("en-US", PSTopts),
    new Date().toLocaleTimeString("en-US", visitorOpts),
    new Date().toLocaleTimeString("en-US", UTCopts),
    new Date().toLocaleTimeString("en-US", CSTopts)
  ];
  // TODO: Add support for local storage?
  return (
    <div className="card p-3" onClick={() => carouselGoNext()}>
      <div className="carousel-container text-2xl overflow-hidden pb-3 "  >
        {times.map((timez, idx) => (
          <p key={idx} className="carousel-item transition-tranform duration-500" style={{ transform: `translate(-${index * 100}%` }} >  {timez}</p>
        ))}
      </div>
      <div className="flex flex-row justify-evenly px-30  ">
        <div className="flex flex-row items-center gap-2 h-4">
          {times.map((_, i) => (
            <span
              key={i}

              className={`rounded-full bg-primary border-2 border-secondary transition-all duration-300 ${index === i ? "h-4 w-4" : "h-2 w-2"}`}
            />
          ))}
        </div>
      </div>

    </div >
  );
}


export default LocalTime
