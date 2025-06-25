import 'bulma/css/bulma.css';
import './App.scss';

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
  const [selectedGood, setSelectedGood] = useState('Jam');

  const handleSelectedGood = (good) => {
    setSelectedGood(good);
  };

  const handleClearSelection = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      {setSelectedGood === '' ? (
        <h1
          className="title is-flex is-align-items-center"
          data-cy="NoGoodsSelected"
        >
          No goods selected
        </h1>
      ) : (
        <h1
          className="title is-flex is-align-items-center"
          data-cy="SelectedGood"
        >
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleClearSelection}
            aria-label='CLear'
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {good.map((good) => (
            <tr
              data-cy="Good"
              key={good}
              className={selectedGood === good ? 'has-background-success-light' : ''}
            >
              <td>
                {selectedGood === good ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-danger"
                    onClick={handleClearSelection}
                    aria-label={`Clear ${good}`}
                  >
                    -
                  </button>
                ) : (
                  selectedGood === '' && (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button is-info"
                      onClick={() => handleSelectedGood(good)}
                      aria-label={`Add ${good}`}
                    >
                      +
                    </button>
                  )
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default App;
