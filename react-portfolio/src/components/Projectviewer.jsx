
function ProjectViewer({ background, projectlink, mobileDesc, mobileTitle }) {
  return (
    <div className="card p-0 max-h-[250px] relative md:order-4 md:row-span-3" >
      <a href={projectlink} className="flex w-full h-full" target="_blank">
        <img src={background} className="h-full w-full object-cover rounded-lg transition-opacity duration-300 hover:opacity-60"></img>
        {/* Mobile View for projects */}
        <span className="absolute  text-center flex flex-col justify-between w-full h-full " >
          <h3 className="px-1 rounded-lg bg-card-primary/70 text-xl "> {mobileTitle} </h3>
          <p className="px-1 rounded-lg bg-card-primary/70 md:hidden lg:block"> {mobileDesc} </p>
        </span>
      </a>
    </div>
  );
}

export default ProjectViewer
