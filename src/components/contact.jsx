import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs
            .sendForm(
                "service_986cf9c",
                "template_gt8mmef",
                form.current,
                "jVe5OY5OCF-c8ppvN"
            )
            .then(
                (result) => {
                    console.log("Email sent successfully:", result);
                    setStatus('success');
                    alert("Message sent successfully!");
                },
                (error) => {
                    console.error("Detailed error:", error);
                    setStatus('error');
                    alert(`Failed to send message: ${error.text}`);
                }
            );

        e.target.reset();
    };

    return (
        <div>
            <div className="bg-[url('/src/assets/images/contacttop.webp')] bg-cover bg-center h-[300px] flex items-center justify-center">
                <h1 className='font-bold text-4xl md:text-5xl text-amber-50'>CONTACT</h1>
            </div>

            <div className='px-4 py-8 max-w-7xl mx-auto'>
                <h2 className='text-2xl font-bold mb-6 text-center'>SEND US YOUR MESSAGE</h2>

                <div className='flex flex-col lg:flex-row gap-8'>
                    <div className="w-full lg:w-1/2 h-[300px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0584384950716!2d-7.536426624503595!3d33.60378817332928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdb2f812837f%3A0xbbcfc74fbc11b2d9!2sLionsGeek!5e0!3m2!1sfr!2sma!4v1748956568052!5m2!1sfr!2sma"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                            className="rounded-md shadow-sm w-full h-full"
                        ></iframe>
                    </div>

                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className='w-full lg:w-1/2 bg-white shadow-md rounded-lg p-6 flex flex-col gap-4'
                    >
                        <input
                            className='border border-gray-300 p-3 rounded focus:outline-none focus:ring focus:border-blue-300'
                            type="text"
                            name="user_name"
                            placeholder="Name"
                            required
                        />
                        <input
                            className='border border-gray-300 p-3 rounded focus:outline-none focus:ring focus:border-blue-300'
                            type="email"
                            name="user_email"
                            placeholder="Email"
                            required
                        />
                        <input
                            className='border border-gray-300 p-3 rounded focus:outline-none focus:ring focus:border-blue-300'
                            type="number"
                            name="number"
                            placeholder="Phone"
                            required
                        />
                        <textarea
                            className='border border-gray-300 p-3 rounded h-32 resize-none focus:outline-none focus:ring focus:border-blue-300'
                            name="message"
                            placeholder="Message"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-black text-white py-3 px-6 rounded-full hover:bg-red-600 transition w-1/2 sm:w-1/3"
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? 'Sending...' : 'Send'}
                        </button>

                        {status === 'error' && <p className="text-red-500">Failed to send message. Please try again.</p>}
                        {status === 'success' && <p className="text-green-500">Message sent successfully!</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;