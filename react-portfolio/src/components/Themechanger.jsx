// TODO:
// Each circle on click should change the styles of the site wide elements
function ThemeChanger() {
  return (
    <div className="card px-0 md:row-span-1">
      <div className="flex flex-row justify-evenly">
        <button className="rounded-full border-2 h-12 w-18" onClick={() => setTheme({ theme: 'base' })} > Base </button>
        <button className="rounded-full border-2 h-12 w-18" onClick={() => setTheme({ theme: 'lakers' })}> Lakers</button>
        <button className="rounded-full border-2 h-12 w-18" onClick={() => setTheme({ theme: 'dodgers' })}> Dodgers</button>
        <button className="rounded-full border-2 h-12 w-18" onClick={() => setTheme({ theme: 'tritons' })}> UCSD</button>
      </div>
    </div >
  );
}

function setTheme({ theme }) {
  return document.documentElement.setAttribute("data-theme", theme);
}


export default ThemeChanger
