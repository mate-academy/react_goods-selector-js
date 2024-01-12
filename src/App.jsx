import "bulma/css/bulma.css";
import "./App.scss";
import { useState } from "react";

export const goods = [
  "Dumplings",
  "Carrot",
  "Eggs",
  "Ice cream",
  "Apple",
  "Bread",
  "Fish",
  "Honey",
  "Jam",
  "Garlic",
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState("Jam");

  function removeGood() {
    setSelectedGood("");
  }

  function addGood(good) {
    setSelectedGood(good);
  }

  const elements = goods.map((good) => {
    const selected = selectedGood === good;

    return (
      <tr
        key={good}
        data-cy="Good"
        className={selected ? "has-background-success-light" : ""}
      >
        <td>
          <button
            data-cy={selected ? "RemoveButton" : "AddButton"}
            type="button"
            className={selected ? "button is-info" : "button"}
            onClick={selected ? () => removeGood(good) : () => addGood(good)}
          >
            {selected ? "-" : "+"}
          </button>
        </td>
        <td data-cy="GoodTitle" className="is-vcentered">
          {good}
        </td>
      </tr>
    );
  });

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? (
          <>
            {`${selectedGood} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={removeGood}
            />
          </>
        ) : (
          "No goods selected"
        )}
      </h1>

      <table className="table">
        <tbody>{elements}</tbody>
      </table>
    </main>
  );
};
