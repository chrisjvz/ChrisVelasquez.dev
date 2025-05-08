
function ProjectViewer({ background, projectlink }) {
  return (
    <div className="card ">
      <a href={projectlink} className="flex w-full h-full" target="_blank">
        <img src={background} className="object-cover opacity-60 transition-opacity duration-150 hover:opacity-100"></img>
      </a>
    </div>
  );
}

export default ProjectViewer
