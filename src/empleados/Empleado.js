import './empleado.css'


function Empleado (props){
            return(
                <div className="caja">
                    <h2>{props.nombre}</h2>
                    <p>Apellido: {props.apellido}</p>
                    <p>Cedula: {props.cedula}</p>
                    <p>Direccion: {props.direccion}</p>
                    <p>edad: {props.edad}</p>
                    <p>telefono: {props.telefono}</p>

                    <p></p>
                </div>
            );
        }

export default Empleado;
