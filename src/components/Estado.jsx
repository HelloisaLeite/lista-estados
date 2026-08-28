import './Estado.css'; 

function Estado(props) {
  return (
    <div className="estado-card">

      <div className="dados">
        <h2>{props.sigla}</h2>
        <h3>{props.nome}</h3>
        <p>Região: {props.regiao}</p>
      </div>

    </div>
  )
}

export default Estado