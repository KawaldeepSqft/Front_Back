import React, { useEffect } from "react";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import CtaButton from "./CtaButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data, e) => {
    try {
      const res = await fetch("https://backend-b3n8.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success(result.message || "Message sent successfully!");
        reset(); // clear form
      } else {
        toast.error(result.message || "Failed to submit form");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error("Server error. Please try again later.");
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="text-[#7A6960]">
      <h1 data-aos="fade-right" className="text-3xl font-semibold text-center">
        Contact
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Reach out for a new project or just say hello
      </p>

      <div className="lg:flex gap-6">
        {/* Left: Info & Map */}
        <div
          data-aos="fade-up"
          className="lg:w-[40%] px-10 py-5 shadow-xl border-t-[3px] border-b-[3px] border-orange-600 mb-7 lg:mb-0"
        >
          <div className="flex gap-3 mt-3 mb-12">
            <div className="rounded-full h-fit bg-orange-100 p-2 text-orange-600 text-2xl">
              <IoLocationOutline />
            </div>
            <div>
              <h2 className="lg:text-xl font-semibold">Address</h2>
              <p className="text-sm text-slate-800">
                A108 Adam Street, New York, NY 535022
              </p>
            </div>
          </div>

          <div className="flex gap-3 mb-12">
            <div className="rounded-full h-fit bg-orange-100 p-2 text-orange-600 text-2xl">
              <IoCallOutline />
            </div>
            <div>
              <h2 className="lg:text-xl font-semibold">Call Us</h2>
              <p className="text-sm text-slate-800">+1 5589 55488 55</p>
            </div>
          </div>

          <div className="flex gap-3 mb-12">
            <div className="rounded-full h-fit bg-orange-100 p-2 text-orange-600 text-2xl">
              <TfiEmail />
            </div>
            <div>
              <h2 className="lg:text-xl font-semibold">Email Us</h2>
              <p className="text-sm text-slate-800">info@example.com</p>
            </div>
          </div>

          <div className="lg:w-full lg:h-72">
            <iframe
              width="100%"
              height="100%"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14010.76256980872!2d77.22260515427726!3d28.60905606083753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2db961be393%3A0xf6c7ef5ee6dd10ae!2sIndia%20Gate%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1717776828829!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div
          data-aos="fade-up"
          data-aos-duration="1600"
          className="lg:w-[60%] px-10 py-5 shadow-xl border-t-[3px] border-b-[3px] border-orange-600"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex gap-6">
              <div className="md:w-[50%]">
                <label htmlFor="name">Name</label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                  className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border-orange-600 outline-none"
                />
              </div>

              <div className="md:w-[50%]">
                <label htmlFor="phone">Phone</label>
                <input
                  {...register("phone", { required: true })}
                  type="number"
                  id="phone"
                  placeholder="9234567890"
                  className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border-orange-600 outline-none"
                />
              </div>
            </div>

            <div className="md:w-full">
              <label htmlFor="subject">Subject</label>
              <input
                {...register("subject", { required: true })}
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border-orange-600 outline-none"
              />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                {...register("message", { required: true })}
                id="message"
                placeholder="Enter your message"
                className="w-full h-60 p-3 my-3 rounded border border-zinc-300 focus:border-orange-600 outline-none resize-none"
              ></textarea>
            </div>

            <div className="flex justify-center m-3">
              <CtaButton name={"Send Message"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
