import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

const clearButton = (setCurrentSelected) => (
  <button 
      data-cy="ClearButton" 
      type="button" 
      
      onClick={() => 
      {
        setCurrentSelected('')
      }}
      className ="delete ml-3"
      />
)

const RemoveButton = ({setCurrentSelected}) => (
  <button 
    data-cy="RemoveButton" 
    type="button" 
    className= {classNames("button", 'is-info')}
    onClick = {() => setCurrentSelected('')
      }
      >
      -
    </button>
)

const AddButton = ( {good,setCurrentSelected}) => (
  <button 
              data-cy="AddButton" 
              type="button" 
              className= {classNames("button", )}
              onClick = {() => {
                
                return setCurrentSelected(good)
               
              }
              }
              >
                +
              </button>
)

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
  const [currentSelected, setCurrentSelected] = useState('Jam');

  return (<main className="section container">
    
    <h1 className="title is-flex is-align-items-center">
      {currentSelected? `${currentSelected} is selected`: 'No goods selected' }
    
      {currentSelected ? clearButton(setCurrentSelected) : null}
    </h1>
      <table className="table">
        <tbody>
          {goods.map((good) => (
            <tr 
            data-cy="Good"
            key ={good}
            
            className= {classNames( {"has-background-success-light" : currentSelected === good})}
            >
            <td>

            {currentSelected !== good ? (
                  <AddButton good={good} setCurrentSelected={setCurrentSelected} />
                ) : (
                  <RemoveButton setCurrentSelected={setCurrentSelected} />
                )}
              
            </td>
           
          <td 
          data-cy="GoodTitle"
          className = "is-vcentered">
            {good}
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    
  </main>)
}

