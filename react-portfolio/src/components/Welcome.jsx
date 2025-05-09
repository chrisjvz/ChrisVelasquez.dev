import hobbes from "../assets/catbrero.png"

/* Svgs can be imported as react components like so*/
import LinkedinIcon from "../assets/svgs/linkedin-icon.svg?react"
import GithubIcon from "../assets/svgs/github-icon.svg?react"
import YoutubeIcon from "../assets/svgs/youtube-icon.svg?react"

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

              socials.map((Icon, index) => (
                <a key={index} href="">
                  <button key={index} className="size-full p-0"> <Icon className="size-full fill-neutral-300 " />

                  </button>
                </a>
              ))
            }

          </div>


        </div>
        <img src={hobbes} className="max-h-[300px] w-auto z-0 content-center"></img>
      </div>
    </div>
  );
}
// TODO: Add links to map with react elements
const socials = [
  LinkedinIcon,
  GithubIcon,
  YoutubeIcon
];
export default Welcome
