import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import goods from './api/goods.json';
import { GoodsTable } from './components/GoodsTable';

export const App = () => {
  const [title, setTitle] = useState('');

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        {title ? `${title} is selected` : 'No goods selected'}

        <button
          onClick={() => setTitle('')}
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
        />
      </h1>

      <GoodsTable goods={goods} title={title} setTitle={setTitle} />
    </main>
  );
};
