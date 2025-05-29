import { contactData } from "./Data";
function Contactme() {
  return (
    <div className="card md:order-8 md:row-span-6 md:col-span-1 md:px-2 lg:col-span-1 lg:row-span-3 lg:px-6">
      <div className="flex w-full h-full flex-col" >
        <h1 className="text-3xl pb-2 text-center md:text-2xl md:pb-2 ">  Contact</h1>
        <h6 className="!text-text-primary text-sm underline underline-offset-2 pb-1 font-semibold "> Email </h6>
        <p className="italic font-light md:wrap-anywhere lg:text-base"> chris.velasquez511@gmail.com </p>

        <h6 className="!text-text-primary text-sm pt-4 pb-2 underline underline-offset-2 font-semibold md:pt-1"> Socials </h6>
        <span className="md:text-sm lg:text-base flex flex-row justify-start gap-1">
          {contactData.map(contact => (
            <a className="text-text-accent" key={contact.id} href={contact.link}>{contact.site}</a>
          ))}
        </span>
      </div>
    </div>
  );
}


export default Contactme
