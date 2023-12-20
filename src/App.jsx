import 'bulma/css/bulma.css';
import './App.scss';
import React, { useState } from 'react';

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

export const App = () => {
  const [prev, setPrev] = useState(9);
  const [prevTr, setPrevTr] = useState(-9);
  const [selectedGood, setSelectedGood] = useState('Jam');

  function setActive(good, title, elem, elemTr) {
    const element = elem;
    const elementTr = elemTr;
    const changedTitle = title;

    element.setAttribute('data-cy', 'RemoveButton');
    elementTr.classList.add('has-background-success-light');
    element.classList.add('is-info');
    element.innerHTML = '-';
    changedTitle.classList.remove('hide');
    changedTitle.innerHTML = `${good} is selected`;
  }

  function setInactive(title, prevelem, prevelemTr) {
    const prevElement = prevelem;
    const prevElementTr = prevelemTr;
    const changedTitle = title;

    prevElement.setAttribute('data-cy', 'AddButton');
    prevElement.innerHTML = '+';
    prevElement.classList.remove('is-info');
    prevElementTr.classList.remove('has-background-success-light');
    changedTitle.innerHTML = 'No goods selected';
  }

  function onClick(good, index) {
    const element = document.getElementById(index + 1);
    const elementTr = document.getElementById(-index - 1);
    const prevElement = document.getElementById(prev);
    const prevElementTr = document.getElementById(prevTr);
    const title = document.getElementById('goodTitle');

    if (prev !== index + 1) {
      setInactive(title, prevElement, prevElementTr);
      setActive(good, title, element, elementTr);
      setSelectedGood(good);
    } else if (element.innerHTML === '-') {
      setInactive(title, prevElement, prevElementTr);
      setSelectedGood('');
    } else if (element.innerHTML === '+') {
      setActive(good, title, element, elementTr);
      setSelectedGood(good);
    }

    setPrev(index + 1);
    setPrevTr(-index - 1);
  }

  return (
    <main className="section container">
      <h1
        className="title is-flex is-align-items-center"
      >
        <span id="goodTitle">Jam is selected</span>
        {
          selectedGood !== '' && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              id="button-clear"
              onClick={() => {
                const prevElement = document.getElementById(prev);
                const prevElementTr = document.getElementById(prevTr);
                const title = document.getElementById('goodTitle');

                setInactive(title, prevElement, prevElementTr);
                setSelectedGood('');
              }}
            />
          )
        }
      </h1>

      <table className="table">
        <tbody>
          {
          goods.map((good, index) => (

            good !== 'Jam'
              ? (
                <tr
                  data-cy="Good"
                  id={-index - 1}
                >
                  <td>
                    <button
                      data-cy="AddButton"
                      type="button"
                      id={index + 1}
                      className="button"
                      onClick={() => {
                        onClick(good, index);
                      }}
                    >
                      +
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              )
              : (
                <tr
                  data-cy="Good"
                  id={-index - 1}
                  className="has-background-success-light"
                >
                  <td>
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      id={index + 1}
                      className="button is-info"
                      onClick={() => {
                        onClick(good, index);
                      }}
                    >
                      -
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              )
          ))
          }
        </tbody>
      </table>
    </main>
  );
};
