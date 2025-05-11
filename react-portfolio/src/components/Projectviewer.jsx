
function ProjectViewer({ background, projectlink }) {
  return (
    <div className="card p-0 max-h-[250px]">
      <a href={projectlink} className="flex w-full h-full" target="_blank">
        <img src={background} className="transition-opacity duration-300 hover:opacity-60"></img>
      </a>
    </div>
  );
}

export default ProjectViewer
