import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goodsFromServer = [
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
  const [sortFiled, setSortField] = useState('');
  const [reversed, setReversed] = useState(false);
  let visibleGoods = [...goodsFromServer].sort((good1, good2) => {
    switch (sortFiled) {
      case 'alph':
        return good1.localeCompare(good2);

      case 'lngth':
        return good1.length - good2.length;

      case '':
        return 0;

      default:
        return 0;
    }
  });

  if (reversed) {
    visibleGoods = visibleGoods.toReversed();
  }

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={
            sortFiled === 'alph' ? 'button is-info' : 'button is-info is-light'
          }
          onClick={() => setSortField('alph')}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={
            sortFiled === 'lngth'
              ? 'button is-success'
              : 'button is-success is-light'
          }
          onClick={() => setSortField('lngth')}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={
            reversed ? 'button is-warning' : 'button is-warning is-light'
          }
          onClick={() => setReversed(!reversed)}
        >
          Reverse
        </button>
        {(sortFiled !== '' || reversed) && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => {
              setReversed(false);
              setSortField('');
            }}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {visibleGoods.map(good => (
          <li data-cy="Good" key={good}>
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
