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

export const App = () =>{
  const [selectedGood, setSelectedGood] = useState('Jam');

  function handleSelectedGood(goodName){
    const good = goods.find((item) => item === goodName)
    setSelectedGood(good)
  }

  function handleClearSelectedGood(){
    setSelectedGood(null)
  }

  return (
  <main className="section container">
  {
    selectedGood ?
    <h1 className="title is-flex is-align-items-center">
      {`${selectedGood} is selected`}
      <button data-cy="ClearButton" onClick={handleClearSelectedGood}  type="button" className="delete ml-3" />
    </h1>
    :
    <h1 className="title is-flex is-align-items-center">No goods selected</h1>

  }

    <table className="table">
      <tbody>
        {
          goods.map(good => (
            <tr data-cy="Good" className={`${selectedGood === good ? "has-background-success-light" : ""}`}>
              {
                good !== selectedGood ?  (<td>
                <button data-cy="AddButton" onClick={()=>handleSelectedGood(good)} type="button" className="button">
                  +
                </button>
              </td>)
              :
             ( <td>
            <button
              data-cy="RemoveButton"
              type="button"
              className="button is-info"
              onClick={handleClearSelectedGood}
            >
              -
            </button>
          </td>)
              }
            <td data-cy="GoodTitle" className={`is-vcentered `}>
              {good}
            </td>
          </tr>

          ))
        }
      </tbody>
    </table>
  </main>
);}
