import "./NewsEvents.css";
import NewsEventsCard from "./NewsEventsCard";
import "./../Common.css";

function NewsEvents() {
  const newsEventsData = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet.",
      type: "Category",
      imgPath: "Assets/eventImg.jpg",
      desc: "fugiat possimus nam alias necessitatibus. Hic eveniet reprehenderit delectus exercitationem eos blanditiis rerum sed atque numquam. Inlitia illo id quod dolores aut consectetur nisi. Eos voluptatibusatque eum earum reiciendis sit dolorum animi ad explicabo",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet.",
      type: "Category",
      imgPath: "Assets/eventsImg2.jpg",
      desc: "fugiat possimus nam alias necessitatibus. Hic eveniet reprehenderit delectus exercitationem eos blanditiis rerum sed atque numquam. Inlitia illo id quod dolores aut consectetur nisi. Eos voluptatibusatque eum earum reiciendis sit dolorum animi ad explicabo",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet.",
      type: "Category",
      imgPath: "Assets/eventsImg3.jpg",
      desc: "fugiat possimus nam alias necessitatibus. Hic eveniet reprehenderit delectus exercitationem eos blanditiis rerum sed atque numquam. Inlitia illo id quod dolores aut consectetur nisi. Eos voluptatibusatque eum earum reiciendis sit dolorum animi ad explicabo",
    },
  ];

  return (
    <div className="bg-color-light container-padding">
      <div className="d-flex flex-column gap-3 text-center content-container mb-4">
        <h5 className="opacity-50">
          <span className="border-bottom-heading">DON'T MISS</span>
        </h5>
        <h1>Our News And Events</h1>
        <p className="contentWidth mx-auto">
          eat sint quo dolorem consequatur et voluptatum perspiciatis. Est
          distinctio voluptas et minima adipisci aut molestiae sunt. Se dolorem
          consequatur et voluptatum perspiciatis. Est distinctio voluptas et
        </p>
      </div>
      <div className="d-flex justify-content-center gap-5 flex-wrap">
        {newsEventsData.map((item) => (
          <NewsEventsCard cardData={item} />
        ))}
      </div>
    </div>
  );
}

export default NewsEvents;
