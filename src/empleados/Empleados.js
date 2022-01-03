import Empleado from "./Empleado";

const data = [
    {nombre:"Kevin", apellido:"Ortiz", cedula:"0105672190", direccion:"Checa", edad:"19", telefono:"0979336240"},
    {nombre:"Xavier", apellido:"Ortiz", cedula:"0105672190", direccion:"Checa", edad:"19", telefono:"0979336240"},
    {nombre:"Jose", apellido:"Molina", cedula:"0105672190", direccion:"Checa", edad:"19", telefono:"0979336240"},
    {nombre:"Jose", apellido:"Molina", cedula:"0105672190", direccion:"Checa", edad:"19", telefono:"0979336240"},
    {nombre:"Jose", apellido:"Molina", cedula:"0105672190", direccion:"Checa", edad:"19", telefono:"0979336240"},
    {nombre:"Jose", apellido:"Molina", cedula:"0105672190", direccion:"Checa", edad:"19", telefono:"0979336240"},
    {nombre:"Jose", apellido:"Molina", cedula:"0105672190", direccion:"Checa", edad:"19", telefono:"0979336240"},
    
 
]



function Empleados(){
    return(
        <div>
      <h1>Empleados</h1>
      {data.map(
          empleado =>(
                
            <Empleado 

                nombre={empleado.nombre}
                apellido={empleado.apellido}
                cedula={empleado.cedula}
                direccion={empleado.direccion}
                edad={empleado.edad}
                telefono={empleado.telefono}
            />
          )
      )
      }
    </div>
    
       
          )
}

export default Empleados;
