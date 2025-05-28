// TODO:
// Each circle on click should change the styles of the site wide elements
function ThemeChanger() {
  return (
    <div className="card px-0 md:row-span-1">
      <div className="flex flex-row justify-around">
        <button className="rounded-full border-2 h-12 w-12 border-[#00bc7d] bg-[#00211f]" onClick={() => setTheme({ theme: 'base' })} >

        </button>
        <button className="rounded-full border-2 h-12 w-12 border-[#fdb927] bg-[#552583]" onClick={() => setTheme({ theme: 'lakers' })}> </button>
        <button className="rounded-full border-2 h-12 w-12 border-[#ffffff] bg-[#005a9c]" onClick={() => setTheme({ theme: 'dodgers' })}> </button>
        <button className="rounded-full border-2 h-12 w-12 border-[#c69214] bg-[#182b49]" onClick={() => setTheme({ theme: 'tritons' })}> </button>
      </div>
    </div >
  );
}

function setTheme({ theme }) {
  return document.documentElement.setAttribute("data-theme", theme);
}


export default ThemeChanger
