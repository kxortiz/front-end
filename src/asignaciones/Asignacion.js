import './asignacion.css'

function Asignacion (props){
            return(
                <div className="box">
                    <h2>{props.nombre}</h2>
                    <p>fecha: {props.fecha}</p>
                    <p>observacion: {props.observacion}</p>

                    <p></p>
                </div>
            );
        }

export default Asignacion;
