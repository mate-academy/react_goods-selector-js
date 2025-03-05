import React, { useState } from 'react';
import './App.css';

function App() {
    const goods = ['Jam', 'Bread', 'Milk', 'Butter', 'Cheese'];

    const [selectedGood, setSelectedGood] = useState('Jam');

    return (
        <div className="App">
            <h1 className="title">
                {selectedGood
                    ? `${selectedGood} is selected`
                    : 'No goods selected'}

                {selectedGood && (
                    <button
                        className="button is-warning is-small ml-2"
                        onClick={() => setSelectedGood('')}
                        data-cy="clear-button"
                    >
                        Clear selection
                    </button>
                )}
            </h1>

            <table className="table is-striped is-bordered is-fullwidth">
                <thead>
                    <tr>
                        <th>Good</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {goods.map((good) => (
                        <tr
                            key={good}
                            className={
                                good === selectedGood
                                    ? 'has-background-success-light'
                                    : ''
                            }
                        >
                            <td>{good}</td>
                            <td>
                                {selectedGood === '' && (
                                    <button
                                        className="button is-success is-small"
                                        onClick={() => setSelectedGood(good)}
                                        data-cy="add-button"
                                    >
                                        Add
                                    </button>
                                )}

                                {selectedGood === good && (
                                    <button
                                        className="button is-danger is-small"
                                        onClick={() => setSelectedGood('')}
                                        data-cy="remove-button"
                                    >
                                        Remove
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
