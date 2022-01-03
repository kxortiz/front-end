import Asignacion from "./Asignacion";

const data = [
    {fecha:"20/07/2021", observacion:"al departamento de sistemas"},
    {fecha:"25/07/2021", observacion:"Salida de sistemas"},
    {fecha:"29/10/2021", observacion:"Asenso a gerente de sistemas"},
    {fecha:"03/01/2021", observacion:"finalizacion del contrato"},
    
 
]
function Asignaciones(){
    return(
      <div>
        <div  style={{maxWidth: "33%"}}>

          <h1 style={{textAlign: "center"}}>Asignaciones</h1>
        </div>
        {data.map(
            asignacion =>(
                  
              <Asignacion 

                  fecha={asignacion.fecha}
                  observacion={asignacion.observacion}

                  
              />
            )
        )
        }
    </div>
    
       
          )
}

export default Asignaciones;

