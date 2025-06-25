import React from "react";
import logo from "../assets/Logo.JPG"; // adjust the path as needed

const testimonials = [
  {
    name: 'Keien Musik',
    feedback:
      'YoJa is an incredible platform. I used to suffer from severe back pain, but after practicing with YoJa, it’s completely gone. My posture has improved, and my yoga practice is better than ever.',
    img: logo,
  },
  {
    name: 'Aria Bloom',
    feedback:
      'Thanks to YoJa, my flexibility has improved significantly. It’s become a daily part of my routine and I feel more balanced physically and mentally.',
    img: logo,
  },
  {
    name: 'Liam Ray',
    feedback:
      'YoJa helped me relieve my stress and build a stronger mind-body connection. Highly recommend it to anyone looking to improve their lifestyle!',
    img: logo,
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-10">Testimonials</h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4 md:px-20">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white border border-cyan-300/30 rounded-2xl shadow-lg shadow-cyan-700/30 w-full max-w-xs p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="h-20 w-20 object-cover rounded-full"
              />
              <h3 className="text-xl font-semibold text-cyan-800">{testimonial.name}</h3>
            </div>
            <p className="text-gray-700 text-base text-left">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
