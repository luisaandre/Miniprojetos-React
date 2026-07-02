export default function App() {
  return (
    <div className="app">
      <div className="header">
        <img src="/react.webp" alt="Logo"></img>
        <h1>React</h1>
        <p>A biblioteca para interfaces de usuário web e nativas.</p>
        <div className="botoes">
          <button>Aprenda React</button>
          <button>Referência da API</button>
        </div>
        <hr></hr>
      </div>

      <div className="sessao-1">
        <h2>Crie interfaces de usuário de componentes</h2>
        <p>React permite que você construa interfaces de usuário a partir de pedaços individuais chamados componentes.</p>
        <hr></hr>
      </div>

      <div className="sessao-2">
        <h2>Escreva componentes com código e marcação</h2>
        <p>Componentes React são funções JavaScript. A sintaxe de marcação é chamada de JSX. É uma extensão da sintaxe JavaScript popularizada pelo React.</p>
      </div>

      <div className="proximos-passos">
        <h2>Próximos passos</h2>
          <ul>
            <li>Uso de dados dinâmicos no JSX</li>
            <li>Criação de novos componentes</li>
            <li>Estilização de componentes</li>
            <li>Reutilização de componentes</li>
            <li>Uso de props e children</li>
            <li>Uso de eventos do JavaScript</li>
          </ul>
      </div>

    </div>
  )
}