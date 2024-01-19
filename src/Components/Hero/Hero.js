import "./Hero.css";
import "./../Common.css";

function Hero() {
  return (
    <div className="banner">
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="d-flex flex-column gap-3 banner-content text-center mx-auto">
          <h1 className="fs-1 text-white">Only Quality Food</h1>
          <p className="px-4 opacity-50 text-white text-overflow text-size-medium">
            🍽️✨ Welcome to Flavor Haven – where every bite tells a delicious
            story! Immerse yourself in a world of culinary delights crafted to
            perfection. Explore a symphony of global flavors, from exquisite
            sushi creations and gourmet burgers to artisanal pizzas and decadent
            desserts. Our expert chefs pour passion into every dish, delivering
            hot and fresh masterpieces straight from our kitchen to your table.
            Join our foodie community, and embark on a journey of indulgence
            with exclusive offers. With nationwide delivery available, your
            gastronomic adventure begins now. Indulge, savor, and celebrate the
            joy of good food at Flavor Haven! 🎉🌮 #FlavorHaven #TasteTheJoy
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button className="banner-btn px-3 py-1 text-white bg-transparent text-size-small viewBgHover">
              VIEW MENU
            </button>
            <button className="banner-btn px-3 py-1 text-white bg-warning border-none text-size-small">
              RESERVATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
