import resume from "../assets/ChristianVelasquezResume-5-3-25.pdf"
import resImg from "../assets/catbrero.png"
function ResumeViewer() {
  return (
    <div className="border-2 col-span-1 row-span-1">
      <a href={resume} className="flex w-full h-full" target="_blank">
        <img src={resImg} className="object-cover opacity-60 transition-opacity duration-150 hover:opacity-100"></img>
      </a>
    </div>
  );
}

export default ResumeViewer
