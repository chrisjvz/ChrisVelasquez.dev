
function ProjectViewer({ background, projectlink }) {
  return (
    <div className="border-2 border-red-500 col-span-1 row-span-1">
      <a href={projectlink} className="flex w-full h-full" target="_blank">
        <img src={background} className="object-cover opacity-60 transition-opacity duration-150 hover:opacity-100"></img>
      </a>
      <p> Project Viewer </p>
    </div>
  );
}

export default ProjectViewer
