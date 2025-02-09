import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

const Button = ({
  name,
  onClick,
  buttonDataCy = 'AddButton',
  buttonClassName,
}) => (
  <button
    data-cy={buttonDataCy}
    type="button"
    className={`button ${buttonClassName}`}
    onClick={onClick}
  >
    {name}
  </button>
);

// 📌 Trow Component (Handles Individual Rows)
const Trow = ({ children, isSelected }) => (
  <tr
    data-cy="Good"
    className={isSelected ? 'has-background-success-light' : ''}
  >
    {children}
  </tr>
);

export const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(8);

  const handleClick = index => {
    setSelectedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedIndex !== null
          ? `${goods[selectedIndex]} is selected`
          : 'No goods selected'}
        {selectedIndex !== null && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedIndex(null)}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good, index) => (
            <Trow key={good} good={good} isSelected={selectedIndex === index}>
              <td>
                <Button
                  buttonClassName={selectedIndex === index ? 'is-info' : ''}
                  buttonDataCy={
                    selectedIndex === index ? 'RemoveButton' : 'AddButton'
                  }
                  name={selectedIndex === index ? '-' : '+'}
                  onClick={() => handleClick(index)}
                />
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </Trow>
          ))}
        </tbody>
      </table>
    </main>
  );
};

/* <tr data-cy="Good">
<td>
  <button data-cy="AddButton" type="button" className="button">
    +
  </button>
</td>

<td data-cy="GoodTitle" className="is-vcentered">
  Dumplings
</td>
</tr>

<tr data-cy="Good" className="has-background-success-light">
<td>
  <button
    data-cy="RemoveButton"
    type="button"
    className="button is-info"
  >
    -
  </button>
</td>

<td data-cy="GoodTitle" className="is-vcentered">
  Jam
</td>
</tr>

<tr data-cy="Good">
<td>
  <button data-cy="AddButton" type="button" className="button">
    +
  </button>
</td>

<td data-cy="GoodTitle" className="is-vcentered">
  Garlic
</td>
</tr> */
