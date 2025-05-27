import grad from "../assets/grad pic.png"

import { buttonIcons } from "./Data";
function Welcome() {
  return (
    // controls entire widget in encompasing main
    <div className="card flex flex-row p-2 md:col-span-3 md:row-span-4">
      <div className="grid grid-cols-2 grid-rows-auto md:grid-rows-2 ">

        {/* Text */}
        <div className="flex flex-col col-span-1 row-span-1 order-2 pl-2 md:max-w-[400px] ">

          <h6 className=" font-light text-sm text-text-secondary pb-1 "> Hey there! </h6>

          <p className="text-sm/5 font-normal">
            <span>
              I'm <b> Christian Velasquez</b>, an Engineer and Software Developer
              with a focus on Embedded Systems and Low-Level development.
            </span>

            <span className="block mt-5">
              Feel free to look around my site, reach out with career opportunities,
              or just to say hi!
            </span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-4 pt-2 col-span-2 max-h- row-span-1 order-3 md:col-span-1 ">
          {
            buttonIcons.map(data => (
              <a key={data.id} href={data.resourceLink} target="_blank" className="">
                <button key={data.id} className="basic-button" >
                  <data.component className="size-full fill-text-primary p-2" />
                </button>
              </a>
            ))
          } </div>

        {/* Image */}
        <img src={grad} className="col-span-1 row-span-1 w-auto order-1 mask-x-from-75% mask-y-from-90% md:row-span-2 md:max-h-[400px] "></img>
      </div>
    </div>
  );
}
export default Welcome
