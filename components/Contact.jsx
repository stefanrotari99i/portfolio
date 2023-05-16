const Contact = ({ contact }) => {
    return (
        <div>
            {contact.map((contact, index) => (
                <div key={index}>
                    <div>{contact.title}</div>
                    <div>{contact.value}</div>
                </div>
            ))}
        </div>
    );
};

export default Contact;
