'use client'

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petName: "",
    petBreed: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          petName: "",
          petBreed: "",
          message: "",
        });
      } else {
        setStatus("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-xl text-gray-500">Book an appointment or get in touch with us</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
            <dl className="mt-8 space-y-6">
              <div className="flex">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-gray-900">+91 7019855494</span>
                </dd>
              </div>
              <div className="flex">
                <dt className="sr-only">Email</dt>
                <dd className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-gray-900">groomcity02@gmail.com</span>
                </dd>
              </div>
              <div className="flex">
                <dt className="sr-only">Location</dt>
                <dd className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-gray-900">Serving All of Bangalore</span>
                </dd>
              </div>
            </dl>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="petName"
              value={formData.petName}
              onChange={handleChange}
              placeholder="Pet Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="petBreed"
              value={formData.petBreed}
              onChange={handleChange}
              placeholder="Pet Breed"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
            <p className="text-center text-sm text-gray-500 mt-4">{status}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
