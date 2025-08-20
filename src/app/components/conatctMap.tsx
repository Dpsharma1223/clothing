"use client";

import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";

const ContactMap = () => {
  return (
    <section className="w-full bg-white py-6">
      <div className="2xl:container 2xl:mx-auto">
      <div className="w-full h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509505!2d144.9537353153168!3d-37.81627927975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAwLjYiUyAxNDTCsDU3JzE0LjAiRQ!5e0!3m2!1sen!2sau!4v1632822849999!5m2!1sen!2sau"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Info boxes */}
      <div className="bg-white pt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-center">
          
          {/* Our Store */}
          <div className="max-w-3xs text-sm">
            <MapPin className="mx-auto mb-4 text-gray-800" size={40} />
            <h3 className="uppercase font-medium mb-2">Our Store</h3>
            <p className="text-dark-grey">184 Main Rd E, St Albans VIC 3021,<br/> Australia</p>
          </div>

          {/* Contact Info */}
          <div className="text-sm">
            <Phone className="mx-auto mb-4 text-gray-800" size={40} />
            <h3 className="uppercase font-medium mb-2">Contact Info</h3>
            <p className="text-dark-grey">Telephone: 703.172.3412</p>
            <p className="text-dark-grey">E-mail: hello@example.com</p>
          </div>

          {/* Business Hours */}
          <div className="text-sm">
            <Clock className="mx-auto mb-4 text-gray-800" size={40} />
            <h3 className="uppercase font-medium mb-2">Business Hours</h3>
            <p className="text-dark-grey">Monday – Sunday:</p>
            <p className="text-dark-grey">09:00 am – 20:00 pm</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ContactMap;
