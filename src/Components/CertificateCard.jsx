
export const CertificateCard = ({ name, category, issuedBy, year }) => {
  return (
    <div className="container">
      <div className="certificate-Card">
        <h3>{name}</h3>
        <p><strong>Category:</strong> {category}</p>
        <p><strong>Issued By:</strong> {issuedBy}</p>
        <p><strong>Year:</strong> {year}</p>
      </div>
    </div>
  );
};
