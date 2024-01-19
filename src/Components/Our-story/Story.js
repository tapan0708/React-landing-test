import "./Story.css";
import "./../Common.css";

function Story() {
  return (
    <div className="d-flex justify-content-between story-container gap-3 container-padding">
      <div className="story-content d-flex flex-column gap-4">
        <h5 className="opacity-50">
          <span className="border-bottom-heading">OUR STORY</span>
        </h5>
        <h1>Welcome to Royal</h1>
        <p className="text-overflow">
          Satisfy your cravings with a culinary journey at our food haven!
          Immerse yourself in a tantalizing world where each dish is a work of
          art. From savory delights that burst with flavor to sweet sensations
          that melt in your mouth, our menu is a symphony of taste designed to
          elevate your dining experience. Our chefs, passionate about their
          craft, meticulously create each dish using the finest ingredients.
          Whether you're indulging in our signature entrees or discovering new
          favorites, every bite is a celebration of taste. Join us for a
          gastronomic adventure that promises not just a meal but a memorable
          experience. Welcome to a place where food is not just sustenance but a
          delightful journey for your senses. 🍽️✨ #CulinaryDelights
          #GourmetExperience #SavorTheFlavor
        </p>
        <p>
          you're indulging in our signature entrees or discovering new
          favorites, every bite is a celebration of taste. Join us for a
          gastronomic adventure that promises not just a meal but a memorable
          experience. Welcome to a place where food is not just sustenance but a
          delightful journey for your senses. 🍽️✨ #CulinaryDelights
          #GourmetExperience #SavorTheFlavor
        </p>
      </div>
      <div className="text-center mx-auto img-visibility">
        <img
          src="Assets/ourStory.jpg"
          alt="story-img"
          className="w-100 h-100"
        />
      </div>
    </div>
  );
}

export default Story;
