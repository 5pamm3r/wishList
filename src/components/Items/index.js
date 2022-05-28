import { DeleteButton } from "../DeleteButton";
import "./Items.css";

function Items(props) {
  return (
    <div
      className={`items__container `}
    >
      <div
        className={`item__check ${props.completed && "item__check-completed"} ${
          props.categories === "personal" ? "item__check-personal" : "item__check-business"
        }`}
        onClick={props.onComplete}
      >
        <img
          src="https://img.icons8.com/external-tanah-basah-detailed-outline-tanah-basah/48/ffffff/external-check-user-interface-tanah-basah-detailed-outline-tanah-basah.png"
          alt="check icon"
        />
      </div>
      <p className={`item__p ${props.completed && "item__p-completed"}`}>
        {props.text}
      </p>{" "}
      {/*Si el item recibe una prop completed, agrega la clase item__p-completed */}
      <DeleteButton onDelete={props.onDelete} />
    </div>
  );
}

export { Items };
