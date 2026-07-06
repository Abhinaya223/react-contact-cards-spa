function ContactCard({ contact }) {
  return (
    <div className="contact-card">
      <h2>{contact.name}</h2>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
    </div>
  );
}

export default ContactCard;