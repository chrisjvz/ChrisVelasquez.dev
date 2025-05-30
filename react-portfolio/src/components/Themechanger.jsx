
function ThemeChanger({ setThemeState }) {
  // Setter function passed in as a prop used here for lifting state
  function setTheme({ theme }) {
    localStorage.setItem("data-theme", theme);
    setThemeState(theme);
    document.documentElement.setAttribute("data-theme", theme);
  }

  return (
    <div className="card px-0 md:order-8 md:row-span-2 md:py-4 lg:row-span-1 lg:order-auto lg:col-start-4 lg:row-start-12">
      <div className="flex flex-row justify-around ">
        <button className="rounded-full border-2 size-12 border-[#00bc7d] bg-[#00211f] md:size-8" onClick={() => setTheme({ theme: 'base' })} ></button>
        <button className="rounded-full border-2 size-12 border-[#fdb927] bg-[#552583] md:size-8" onClick={() => setTheme({ theme: 'lakers' })}> </button>
        <button className="rounded-full border-2 size-12 border-[#ffffff] bg-[#005a9c] md:size-8" onClick={() => setTheme({ theme: 'dodgers' })}> </button>
        <button className="rounded-full border-2 size-12 border-[#c69214] bg-[#182b49] md:size-8" onClick={() => setTheme({ theme: 'tritons' })}> </button>
      </div>
    </div >
  );
}



export default ThemeChanger
