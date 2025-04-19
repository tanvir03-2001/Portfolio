/* eslint-disable @next/next/no-img-element */
"use client";

const testimonials = [
  {
    name: "MR. Mike Smith",
    title: "Designer at Apple",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    feedback:
      "A wonderful experience from start to finish. The final product exceeded our expectations!",
    project: "UI/UX Development",
    date: "Mar 2, 2023 - Jun 18, 2023",
    stars: 5,
  },
  {
    name: "MS. Jane Doe",
    title: "CTO at Google",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    project: "Dashboard Design",
    date: "Feb 10, 2023 - May 5, 2023",
    stars: 4,
  },

  {
    name: "MS. Anna Bell",
    title: "Manager at Amazon",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback:
      "Truly professional and easy to work with. Highly recommend for any creative project!",
    project: "Website Revamp",
    date: "Apr 12, 2023 - Aug 1, 2023",
    stars: 5,
  },
  {
    name: "MR. Ryan Clark",
    title: "Developer at Tesla",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    feedback:
      "Quick delivery and amazing design quality. Will definitely work together again!",
    project: "Mobile App Redesign",
    date: "May 22, 2023 - Sep 9, 2023",
    stars: 4,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-1 text-yellow-500 text-sm sm:text-base">
      {"★".repeat(count)}
      {"☆".repeat(5 - count)}
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full md:w-[48%] text-left">
      <div className="flex items-start gap-4 mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 object-cover rounded-md"
        />
        <div>
          <h4 className="font-semibold text-base sm:text-lg text-gray-900">
            {testimonial.project}
          </h4>
          <p className="text-xs sm:text-sm text-gray-500">{testimonial.date}</p>
        </div>
      </div>
      <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
        {testimonial.feedback}
      </p>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-sm sm:text-base">
            {testimonial.name}
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            {testimonial.title}
          </p>
        </div>
        <StarRating count={testimonial.stars} />
      </div>
    </div>
  );
}

export default function TestimonialSlider() {
  return (
    <section className="bg-gray-100 text-gray-800">
      <div className="container mx-auto py-12 px-4 md:px-20">
        <h3 className="text-indigo-500 text-sm sm:text-base font-semibold uppercase mb-2">
          Testimonials
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
          My Clients Feedback
        </h2>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-6 md:justify-center">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
