
import { ContactCard } from "../Components/ContactCard";
import { contact } from "../Data/contact";

export const Contact = () => {
  return (
    <section>
      <div className="container">
        <ContactCard
          phone={contact.phone}
          email={contact.email}
          address={contact.address}
          linkedin={contact.linkedin}
        />
      </div>
    </section>
  );
};
