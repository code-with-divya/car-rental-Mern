import React, { useState } from 'react';
import './contact.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        subject: '',
        email: '',
        message: '',
    })

    const [email, setemail] = useState("")
    const [subject, setsubject] = useState("")
    const [message, setmessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9999/sendmail', { email, subject, message });
            alert("Mail send Successfully !!!")

            navigate("/home")

            // Handle success (e.g., show a success message)
        } catch (error) {
            console.log('Error sending email:', error);
            // Handle error (e.g., show an error message)
        }
    };

    return (
        <div className="contact-container">
            <h2 className="contact-title">Contact Us</h2>
            <div className="contact-box">
                <div className="contact-form" onSubmit={handleSubmit}>
                    <h3>Feedback</h3>
                    <form>
                        <label>Email</label>
                        <input type="email" placeholder="yourmail@example.com"
                            onChange={(e) => { setemail(e.target.value) }} />

                        <label>Subject</label>
                        <input type="text"
                            onChange={(e) => { setsubject(e.target.value) }} placeholder="Enter subject" />

                        <label>Message</label>
                        <textarea rows="5"
                            onChange={(e) => { setmessage(e.target.value) }} placeholder="Write your message here..."></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
                <div className="contact-details">
                    <h3>Contact Details</h3>
                    <p>
                     Khed,Pune, Maharashtra 413701
                    </p>
                    <p>
                        +91 9900099990
                    </p>
                    <p>
                        Cardrental@gmail.com
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
