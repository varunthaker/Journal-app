import star from "../../../src/assets/star.svg";
import filledstar from "../../../src/assets/filledstar.svg";

const Entrylist = () => {
  return (
    <div>
      <p>date</p>
      <h3>Title</h3>
      <p>Description</p>
      <button>
        <img src={star} alt="star" />
      </button>
      <button>
        <img src={filledstar} alt="filledStar" />
      </button>
    </div>
  );
};

export default Entrylist;
