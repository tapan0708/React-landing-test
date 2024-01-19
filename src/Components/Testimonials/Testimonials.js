import TestimonialCard from "./TestimonialCard";
import "./../Common.css";

function Testimonials() {
  const testimonialsData = [
    {
      id: 1,
      starsCount: 5,
      title: "A great Find",
      desc: "est placeat sint quo dolorem consequatur et voluptatum perspiciatis distinctio voluptas et minima adipisci aut molestiae sunt.",
      name: "Divi",
    },
    {
      id: 2,
      starsCount: 3,
      title: "Fabulous Food and flawless service",
      desc: "est placeat sint quo dolorem consequatur et voluptatum perspiciatis distinctio voluptas et minima adipisci aut molestiae sunt.",
      name: "Blooom",
    },
    {
      id: 3,
      starsCount: 4,
      title: "Another Successfull experince",
      desc: "est placeat sint quo dolorem consequatur et voluptatum perspiciatis distinctio voluptas et minima adipisci aut molestiae sunt.",
      name: "Extra",
    },
    {
      id: 4,
      starsCount: 2,
      title: "speachless",
      desc: "est placeat sint quo dolorem consequatur et voluptatum perspiciatis distinctio voluptas et minima adipisci aut molestiae sunt.",
      name: "Monarch",
    },
  ];

  return (
    <div className="container-padding">
      <div className="text-center">
        <h5 className="opacity-50 mb-4">
          <span className="border-bottom-heading">TESTIMONIALS</span>
        </h5>
        <h1 className="mb-3">What people are saying</h1>
      </div>
      <div className="row">
        {testimonialsData.map((item, index) => (
          <TestimonialCard testimonialsData={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
