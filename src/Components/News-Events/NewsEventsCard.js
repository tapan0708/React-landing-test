import "./NewsEvents.css";

function NewsEventsCard({ cardData }) {
  return (
    <div className="card-width events-card bg-white">
      <div className="mb-3">
        <img
          src={cardData.imgPath}
          alt="eventImg"
          className="w-100 imgHeight"
        />
      </div>
      <div className="p-2">
        <h4>{cardData.title}</h4>
        <p className="text-warning">{cardData.type}</p>
        <p className="text-overflow">{cardData.desc}</p>
      </div>
    </div>
  );
}

export default NewsEventsCard;
