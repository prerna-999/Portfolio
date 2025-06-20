

import { CertificateCard } from "../Components/CertificateCard";
import { certificatesDetails } from "../Data/certificatesDetails";

export const Certificates = () => {
  return (
    <section className="certificates">
      <div className="container">
        <h2>Certificates</h2>
        <div>
          {certificatesDetails.map((cert, index) => (
            <CertificateCard
              key={index}
              name={cert.name}
              category={cert.category}
              issuedBy={cert.issuedBy}
              year={cert.year}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
