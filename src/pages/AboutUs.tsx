import React from "react";

// Bicycle shop component
const AboutUs: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <section id="mission" className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold text-teal-600 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8">
            At Bicycle Shop, our mission is to offer high-quality bicycles for
            every type of rider. Whether you're a commuter, a mountain biking
            enthusiast, or a competitive racer, we have a bike for you. We
            strive to deliver exceptional service, expert advice, and a
            community-focused experience. Join us in making cycling an
            accessible and enjoyable activity for all!
          </p>
          <div className="text-xl text-teal-600 font-semibold">
            Why Choose Us?
          </div>
          <ul className="list-disc text-left mx-auto mt-4 max-w-xl text-gray-700 space-y-2">
            <li>Wide selection of bicycles for all skill levels</li>
            <li>Friendly and knowledgeable staff</li>
            <li>Committed to sustainability and eco-friendly practices</li>
            <li>Fast and reliable maintenance services</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-teal-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold text-teal-600 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We’d love to hear from you! Whether you have questions about our
            bikes or need support with an order, feel free to reach out to us.
          </p>
          <div className="space-y-4">
            <p className="text-gray-700">
              Email:{" "}
              <span className="text-teal-600">ruhitbaidya01@gmail.com</span>
            </p>
            <p className="text-gray-700">
              Phone: <span className="text-teal-600">+88 01742772705</span>
            </p>
            <p className="text-gray-700">
              Address:{" "}
              <span className="text-teal-600">Sreemangal, Moulvibazar.</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
