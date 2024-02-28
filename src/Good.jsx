export const Good = ({ good, selectedGood, setSelectedGood }) => {
  const curentGood = selectedGood === good;

  return (
    <tr
      data-cy="Good"
      className={curentGood ? 'has-background-success-light' : ''}
    >
      <td>
        <button
          data-cy={curentGood ? 'RemoveButton' : 'AddButton'}
          type="button"
          className={curentGood ? 'button is-info' : 'button'}
          onClick={() => {
            setSelectedGood(!curentGood && good);
          }}
        >
          {curentGood ? '-' : '+'}
        </button>
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {good}
      </td>
    </tr>
  );
};
