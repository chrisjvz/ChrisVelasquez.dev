
/* All options inherit this objects properties */
const globalOpts = {
  hour12: true,
  timeZoneName: "short",
  hour: "numeric",
  minute: "2-digit"
}

// Site visitors
const visitorOpts = {
  __proto__: globalOpts,
}

// My local Time
const PSTopts = {
  __proto__: globalOpts,
  timeZone: "America/Los_Angeles",
}
// Guatemala Time
const CSTopts = {
  __proto__: globalOpts,
  timeZone: "America/Guatemala",
}
// UTC Time
const UTCopts = {
  hour12: false,
  timeZone: "UTC",
  __proto__: globalOpts,
}

// TODO: ADD functionality for real time updating
function LocalTime() {
  const nowLocal = new Date().toLocaleTimeString("en-US", PSTopts);
  const nowVisitor = new Date().toLocaleTimeString("en-US", visitorOpts);
  const nowGuate = new Date().toLocaleTimeString("en-US", CSTopts);
  const nowUTC = new Date().toLocaleTimeString("en-US", UTCopts);

  return (
    <div className="card flex-col overflow-hidden">
      <p> My time {nowLocal}</p>
      <p> Visitor {nowVisitor}</p>
      <p> UTC {nowUTC}</p>
      <p> Guatemala {nowGuate}</p>

    </div>
  );
}

export default LocalTime
