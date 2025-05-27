import { contactData } from "./Data";
function Contactme() {
  return (
    <div className="card md:row-span-3">
      <div className="flex w-full h-full flex-col" >
        <h1 className="text-3xl pb-2">  Let's collaborate! </h1>
        <h6 className="!text-text-primary text-sm underline underline-offset-2 pb-1 font-semibold"> Contact Details </h6>
        <p className="italic font-light"> chris.velasquez511@gmail.com </p>

        <h6 className="!text-text-primary text-sm pt-4 underline underline-offset-2 font-semibold"> Socials </h6>
        <ul>
          {contactData.map(contact => (
            <li key={contact.id}> <a href={contact.link}>{contact.site}</a> </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export default Contactme
