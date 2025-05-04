import hobbes from "../assets/catbrero.png"

/* Svgs can be imported as react components like so*/
import LinkedinIcon from "../assets/svgs/linkedin-icon.svg?react"
import GithubIcon from "../assets/svgs/github-icon.svg?react"
import YoutubeIcon from "../assets/svgs/youtube-icon.svg?react"

function Welcome() {
  return (
    // controls entire widget in encompasing main
    <div className="col-span-3 row-span-2 ">
      <div className="flex w-full h-full justify-around">
        <div className="flex flex-col md:max-w-[400px]">
          <div>
            {
              // Holds inner text blob and widgets
            }
            <h6> Welcome </h6>
            <p >
              <span>
                Hi, I'm <b> Christian Velasquez </b>, an engineer and software developer
                with a focus on embedded systems and low-level development.
              </span>

              <span className="block mt-2">
                Feel free to reach out with any project ideas in mind, career opportunities,
                or just to say hi!
              </span>
            </p>
            <div className="flex flex-row gap-2">
              <a href=""><button className="max-h-45" > <GithubIcon className="h-full w-full stroke-gray-700 fill-stone-200 " /></button></a>
              <a href=""><button className="flex"> <LinkedinIcon className="h-full w-full stroke-gray-700 fill-stone-200" /></button></a>
              <a href=""><button className="flex"> <YoutubeIcon className="h-full w-full stroke-gray-700 fill-stone-200" /></button></a>
              <a href=""><button className="flex"> <YoutubeIcon className="h-full w-full stroke-gray-700 fill-stone-200" /></button></a>
              <a href=""><button className="flex"> <YoutubeIcon className="h-full w-full stroke-gray-700 fill-stone-200" /> </button></a>
            </div>


          </div>
        </div>
        <img src={hobbes} className="max-h-[300px] w-auto "></img>
      </div>
    </div>
  );
}

export default Welcome
