import "./Items.css";
import "./../Common.css";

function ItemsContent() {
  return (
    <div className="bg-color-light custom-py">
      <div className="d-flex flex-column gap-3 align-items-center content-width mx-auto text-center">
        <h5 className="opacity-50">
          <span className="border-bottom-heading">ONLY THE BEST</span>
        </h5>
        <h1>Fresh Ingredients, Tasty Meals</h1>
        <p className="opacity-50">
          Lorem ipsum dolor sit amet. Et voluptates expedita sed ullam ratione
          est placeat sint quo dolorem consequatur et voluptatum perspiciatis.
          Est distinctio voluptas et minima adipisci aut molestiae sunt. Se
        </p>
        <button className="px-4 py-1 bg-warning border-none text-white">
          VIEW ITEMS
        </button>
      </div>
    </div>
  );
}

export default ItemsContent;
