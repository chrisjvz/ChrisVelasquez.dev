const personalLinks = {
  github: "https://github.com/AmnesiacSloth",
  linkedin: "https://www.linkedin.com/in/chrisvelasquez-24/",
  youtube: "https://www.youtube.com/@aslothcodes",
  resume: Resume,
}

//
// ----- ABOUT ME BUTTON DATA ----- //
//

/* Svg to react component imports via react-svgr?*/
import LinkedinIcon from "../assets/svgs/linkedin-icon.svg?react"
import GithubIcon from "../assets/svgs/github-icon.svg?react"
import ResumeIcon from "../assets/svgs/resume-icon.svg?react"
import Resume from "../assets/ChristianVelasquezResume-5-3-25.pdf"

export const buttonIcons = [{
  id: 0,
  component: LinkedinIcon,
  resourceLink: personalLinks.linkedin,
}, {
  id: 1,
  component: GithubIcon,
  resourceLink: personalLinks.github,
}, {
  id: 2,
  component: ResumeIcon,
  resourceLink: Resume,
}]

// 
// ----- PROJECT DATA ----- //
//

/* Image imports */
import mcuImg from "../assets/stm32.jpg"
import dsGasImg from "../assets/gasdatascience.jpg"
import portfolioSiteImg from "../assets/portfoliosite.jpeg"

const projectlinks = {
  smt32blesensor: "https://github.com/cse-190e-fall-2023/youlostit-project-1-blinkenlights-32-bit-monstas",
  portfoliowebsite: "https://github.com/AmnesiacSloth/ChrisVelasquez.dev",
  httpserver: "https://github.com/AmnesiacSloth/httpserver",
  jccprocessor: "https://github.com/AmnesiacSloth/CPU-Design",
  bingobongo: "https://github.com/AmnesiacSloth/BingoBongo",
  dimes: "https://github.com/AmnesiacSloth/Dimes",
}

export const projectData = [{
  id: 0,
  image: mcuImg,
  githublink: projectlinks.smt32blesensor,
  mobileTitle: "BLE-Enabled Device Locator",
  mobileDesc: "STM32 Microcontroller, Register-Level Firmware in C, tested using a Digital Logic Analyzer",
}, {
  id: 1,
  // TODO : ADD LINK FOR DATASCIENCE PROJECT
  image: dsGasImg,
  githublink: "",
  mobileTitle: "Russia-Ukraine Crisis Analysis",
  mobileDesc: "EDA using Python3, Jupyter Notebooks, Pandas, Scipy, and Seaborn ",

}, {
  id: 2,
  image: portfolioSiteImg,
  githublink: projectlinks.portfoliowebsite,
  mobileTitle: "Portfolio Website",
  mobileDesc: "Portfolio site built using Vite, React, Javascript, TailwindCSS and deployed on Github Pages",

}]


//
// ----- CONTACT DATA -----
//
export const contactData = [{
  id: 0,
  site: "LinkedIn",
  link: personalLinks.linkedin,
}, {
  id: 1,
  site: "Github",
  link: personalLinks.github,
}, {
  id: 2,
  site: "Youtube",
  link: personalLinks.youtube,
}]
