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
].map((item, index) => ({
  id: index + 1,
  name: item,
}));

export const App = () => {
  const [state, setState] = useState({
    activeId: 9,
    dataCy: 'RemoveButton',
    classNameTr: 'has-background-success-light',
    classNameBtn: 'is-info',
    value: '-',
  });

  const handleClick = id => {
    setState(prevState => ({
      ...prevState,
      activeId: prevState.activeId === id ? null : id,
      dataCy: prevState.activeId === id ? 'AddButton' : 'RemoveButton',
      classNameTr:
        prevState.activeId === id ? '' : 'has-background-success-light',
      classNameBtn: prevState.activeId === id ? '' : 'is-info',
      value: prevState.activeId === id ? '+' : '-',
    }));
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {state.activeId ? (
          <>
            {goods.find(item => item.id === state.activeId).name} is selected
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() =>
                setState(prevState => ({ ...prevState, activeId: null }))
              }
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>

      {goods.map(item => (
        <table key={item.id} className="table">
          <tbody>
            <tr
              data-cy="Good"
              className={state.activeId === item.id ? state.classNameTr : ''}
            >
              <td>
                <button
                  onClick={() => handleClick(item.id)}
                  data-cy={
                    state.activeId === item.id ? state.dataCy : 'AddButton'
                  }
                  type="button"
                  className={`button ${state.activeId === item.id ? state.classNameBtn : ''}`}
                >
                  {state.activeId === item.id ? state.value : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {item.name}
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </main>
  );
};
