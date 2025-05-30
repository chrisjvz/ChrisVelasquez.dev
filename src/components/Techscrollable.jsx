// Basically saves me a ton of lines of import statements
const globImportTechSvgs = import.meta.glob('../assets/scrollables/*.svg', {
  query: '?react',
  eager: true
})
// Extract only the functions from the imported stuff
const loadedIcons = Object.values(globImportTechSvgs);
// NOTE: Shoutout https://cruip.com/create-an-infinite-horizontal-scroll-animation-with-tailwind-css/


/*
 * */
function TechScrollable() {
  return (
    <div className="card w-full inline-flex flex-nowrap overflow-hidden md:order-7 md:row-span-2 lg:row-span-1 lg:order-auto lg:col-start-2 lg:row-start-12">
      <ul className="flex items-center justify-start animate-infinite-scroll">
        {/* Make the array twice as long then create the list items 
        */}
        {loadedIcons.concat(loadedIcons).map((Icon, index) => (
          <li key={index} className="mx-4">
            <Icon.default className="size-12 md:size-8" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TechScrollable
