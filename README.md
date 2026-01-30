# React Goods Selector (JS)

Aplicação em React que renderiza uma lista de produtos em formato de tabela, permitindo selecionar apenas um item por vez ou limpar a seleção.

[DEMO LINK](https://Igor-hrm.github.io/react_goods-selector-js/)

---

## Sobre o projeto

Este projeto utiliza React e o framework CSS **Bulma** para criar uma tabela interativa de produtos.
O usuário pode selecionar um produto, visualizar o estado da seleção e limpar a escolha quando desejar.

Toda a lógica foi implementada dentro do componente `App`, conforme solicitado pelo desafio.

---

## Tecnologias utilizadas

- React
- JavaScript
- Bulma CSS
- GitHub Pages

---

## Funcionalidades implementadas

- Renderização dinâmica da lista de produtos em uma tabela
- Controle de estado com `useState`
- Seleção de apenas **um produto por vez**
- Destaque visual do produto selecionado
- Exibição dinâmica do título conforme o estado da seleção
- Botões contextuais para adicionar, remover ou limpar a seleção

---

## Regras de funcionamento

- O estado `selectedGood` é armazenado no `App`
- Valor inicial do estado: **Jam**
- Quando um produto está selecionado:
  - O título exibe: `Jam is selected`
  - A linha correspondente recebe a classe `has-background-success-light`
  - Apenas o botão **Remove** é exibido para o item selecionado
- Quando nenhum produto está selecionado:
  - O título exibe: `No goods selected`
  - O botão **Clear** não é exibido
  - Todos os produtos mostram o botão **Add**

---

## Conceitos praticados

- Estado no React (`useState`)
- Renderização condicional
- Manipulação de eventos
- Classes dinâmicas
- Uso de framework CSS (Bulma)
- Regras de UI baseadas em estado

---

## Como rodar o projeto localmente

1. Clone o repositório:

```bash
git clone https://github.com/Igor-hrm/react_goods-selector-js.git
```
