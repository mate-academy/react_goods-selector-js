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

const goodsForRender = goods.map((good, index) => {
  return { id: index + 1, product: good };
});

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  function clearSelection() {
    const selectedRow = document.querySelector('.has-background-success-light');

    selectedRow.className = '';
    setSelectedGood('');
  }

  const title = selectedGood.length ? (
    <h1 className="title is-flex is-align-items-center">
      {selectedGood} is selected
      <button
        data-cy="ClearButton"
        type="button"
        className="delete ml-3 is-info"
        onClick={clearSelection}
      />
    </h1>
  ) : (
    <h1 className="title is-flex is-align-items-center">No goods selected</h1>
  );

  function goodStyles(good) {
    if (good === selectedGood) {
      return {
        buttonValue: '-',
        buttonClass: 'button is-info has-background-link',
        trClass: 'has-background-success-light',
        goodCellClass: 'is-vcentered has-text-dark',
        dataCy: 'RemoveButton',
      };
    }

    return {
      buttonValue: '+',
      buttonClass: 'button',
      trClass: '',
      goodCellClass: 'is-vcentered',
      dataCy: 'AddButton',
    };
  }

  function handleButtonClick(e) {
    const currentRow = e.target.closest('tr');
    const goodName = e.target.closest('td').nextSibling.textContent;

    return currentRow.className === 'has-background-success-light'
      ? clearSelection()
      : setSelectedGood(goodName);
  }

  return (
    <main className="section container">
      {title}

      <table className="table">
        <tbody>
          {goodsForRender.map(good => {
            const { id, product } = good;
            const filling = goodStyles(product);

            return (
              <tr data-cy="Good" key={id} className={filling.trClass}>
                <td>
                  <button
                    onClick={handleButtonClick}
                    data-cy={filling.dataCy}
                    type="button"
                    className={filling.buttonClass}
                  >
                    {filling.buttonValue}
                  </button>
                </td>

                <td data-cy="GoodTitle" className={filling.goodCellClass}>
                  {product}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
