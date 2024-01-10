import "bulma/css/bulma.css";
import "./App.scss";
import { useState } from "react";
import classNames from "classnames";

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
  const [selectedGood, setselectedGood] = useState(goods[8]);

  return (
    <main className="section container">
      {selectedGood === "" ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setselectedGood("");
            }}
          />
        </h1>
      )}
      {/* ------------------------------------------------ */}

      {goods.map((good) => (
        <table className="table" key={good}>
          <tbody>
            <tr
              data-cy="Good"
              className={classNames({
                "has-background-success-light": selectedGood === good,
              })}
            >
              <td>
                {good !== selectedGood ? (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => {
                      setselectedGood(good);
                    }}
                  >
                    +
                  </button>
                ) : (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => {
                      setselectedGood("");
                    }}
                  >
                    -
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </main>
  );
};
