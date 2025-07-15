import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import '../assets/variableCSS/Contact.css'

export const Contact = () => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(formRef.current.elements.email.value,
            formRef.current.elements.name.value)

        emailjs
            .sendForm("service_o0sf2fn", "template_m3jrd6s", formRef.current, "DXGCbr7mPUPt87wOB")
            .then(
                (result) => {
                    console.log("Email sent successfully:", result.text);
                    alert("Message sent successfully!");
                    sendAutoReply(
                        formRef.current.elements.email.value,
                        formRef.current.elements.name.value
                    );
                    e.target.reset(); // Clear form after both messages
                },
                (error) => {
                    console.error("Failed to send email:", error.text);
                    alert("Failed to send message. Please try again.");
                }
            );
    };

    const sendAutoReply = (toEmail, fromName) => {
        console.log('emial....', toEmail);
        console.log('emial....', fromName);
        emailjs
            .send(
                "service_o0sf2fn",
                "template_3ntnvxg",
                {
                    to_email: toEmail,
                    to_name: fromName, // match the variable in your template
                    from_name: "Prerna Thakur",
                    message_html: `Hello ${fromName},\n\nThank you for your message. We have received your inquiry and will respond shortly.\n\nBest regards,\nShivam Kumar`,
                },
                "DXGCbr7mPUPt87wOB"
            )
            .then(
                (result) => console.log("Auto-reply sent successfully:", result.text),
                (error) => console.error("Failed to send auto-reply:", error.text)
            );
    };

    return (
        <section className="contact">
            <div className="container">
                <div className="contact-form  ">

                    <h3 className="contact-heading">Get in touch</h3>
                    <h1 className="contact-title">
                        Contact <span className="highlight">Me</span>
                    </h1>

                    <form className="contact-form contact-input " ref={formRef} onSubmit={sendEmail}>
                        <label className="label">Name :</label>
                        <input type="text" name="name" placeholder="Enter your name" required  className="text"/>

                        <label className="label">Email :</label>
                        <input type="email" name="email" placeholder="Enter your email" required className="text" />

                        <label className="label">Message :</label>
                        <textarea name="message" placeholder="Type your message" required className="text"></textarea>

                        <input type="hidden" name="time" value={new Date().toLocaleString()} />

                        <button type="submit" className="submit-btn">
                            Submit →
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
