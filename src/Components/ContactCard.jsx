export const ContactCard = ({ phone, email, address, linkedin }) => {
    return (
        <div className="container">
            <h2>Contact Information</h2>
            <p><strong>Phone:</strong> <a href={`tel:${phone}`}>{phone}</a></p>
            <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
            <p><strong>Address:</strong> {address}</p>
            <p><strong>LinkedIn:</strong>{" "}<a href={linkedin} target="_blank" rel="{https://www.linkedin.com/in/prerna-thakur-16aa24305">
                View Profile
            </a>
            </p>
        </div>
    );
};

