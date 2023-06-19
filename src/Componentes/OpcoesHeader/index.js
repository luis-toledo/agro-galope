import "./style.css";

const opcoes  = ['Sobre', 'Serviços', 'Mais'];

function OpcoesHeader() {
  return (
    <ul className="opcoes">
      {opcoes.map((texto) => (
        <li className="opcao">
          <p>{texto}</p>
        </li>
      ))}
    </ul>
  );
}

export default OpcoesHeader;
