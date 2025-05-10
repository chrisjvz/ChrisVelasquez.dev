import hobbes from "../assets/catbrero.png"

import { buttonIcons } from "./Data";

function Welcome() {
  return (
    // controls entire widget in encompasing main
    <div className="card md:col-span-3 md:row-span-4">
      <div className="flex w-full h-full justify-between ">
        <div className="flex flex-col md:max-w-[400px] ">
          <div className="h-full">
            {
              // Holds inner text blob and widgets
            }
            <h6 className="font-light text-sm text-slate-500 pb-1 "> Welcome </h6>
            <p className="text-sm/5 font-normal">
              <span>
                Hey! I'm <b> Christian Velasquez</b>, an engineer and software developer
                with a focus on embedded systems and low-level development.
              </span>

              <span className="block mt-4">
                Feel free to reach out with any career opportunities, project ideas,
                or just to say hi!
              </span>
            </p>
          </div>
          <div className="flex flex-row gap-4 min-w-[16rem]">
            {
              buttonIcons.map(data => (
                <a key={data.id} href={data.resourceLink} target="_blank">
                  <button key={data.id} className="p-0">
                    <data.component className="size-full stroke-amber-400 fill-neutral-300 " />
                  </button>
                </a>
              ))
            } </div>


        </div>
        <img src={hobbes} className="max-h-[300px] w-auto z-0 content-center "></img>
      </div>
    </div>
  );
}
export default Welcome
