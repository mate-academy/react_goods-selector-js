import 'bulma/css/bulma.css'; // Importa a biblioteca CSS Bulma para estilos prontos
import './App.scss'; // Importa nossos estilos customizados
import { useState } from 'react'; // Importa o Hook useState para gerenciar estado

// 📦 Lista de produtos disponíveis que será exibida na tabela
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

// 🎯 Componente principal da aplicação
export const App = () => {
  // 📊 ESTADO: guarda qual produto está selecionado
  // - selectedGood = valor atual (começa com 'Jam')
  // - setSelectedGood = função para atualizar o valor
  const [selectedGood, setSelectedGood] = useState('Jam');

  // ➕ Função para SELECIONAR um produto
  // Recebe o nome do produto como parâmetro
  const handleSelectGood = good => {
    setSelectedGood(good); // Atualiza o estado com o novo produto
  };

  // 🗑️ Função para LIMPAR a seleção
  // Define o estado como string vazia ''
  const handleClearSelection = () => {
    setSelectedGood('');
  };

  // 📝 Texto dinâmico do título
  // Se tem um produto selecionado: mostra "Produto is selected"
  // Se não tem: mostra "No goods selected"
  // (usa operador ternário: condição ? verdadeiro : falso)
  const titleText = selectedGood
    ? `${selectedGood} is selected`
    : 'No goods selected';

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {titleText}
        {/* Botão de LIMPAR - só aparece quando há algo selecionado */}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleClearSelection}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {/* 🔄 LOOPING: percorre cada produto da lista 'goods' */}
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              // Destaca (com cor verde) a linha do produto selecionado
              className={
                selectedGood === good ? 'has-background-success-light' : ''
              }
            >
              <td>
                {/* Verifica: é o produto selecionado? */}
                {selectedGood === good ? (
                  // SIM: Mostra o botão de REMOVER (-)
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={handleClearSelection}
                  >
                    -
                  </button>
                ) : (
                  // NÃO: Mostra o botão de ADICIONAR (+)
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => handleSelectGood(good)}
                  >
                    +
                  </button>
                )}
              </td>

              {/* Nome do produto */}
              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
