import './Departamento.css'

function Departamento (props){
            return(
                <div className="read">
                    <h2>{props.nombre}</h2>
                    <p>descripcion: {props.descripcion}</p>

                    <p></p>
                </div>
            );
        }

export default Departamento;
