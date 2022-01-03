import Departamento from "../Departamento/Departamento";

const data = [
  {Descripcion: "Sale del trabajo a las 13:50"},
  {Descripcion: "Sale del trabajo a las 12:50"},
  {Descripcion: "Sale del trabajo a las 13:50"},
  {Descripcion: "Sale del trabajo a las 15:50"},
  {Descripcion: "Sale del trabajo a las 14:50"},
  {Descripcion: "Sale del trabajo a las 12:50"},
   
    
 
]
function Departamentos(){
    return(
      <div>
        <div  style={{maxWidth: "33%"}}>

          <h1 style={{textAlign: "center"}}>Departamento</h1>
        </div>
        {data.map(
            asignacion =>(
                  
              <Departamento 

                
                  descripcion={asignacion.Descripcion} 
                  
              />
            )
        )
        }
    </div>
    
       
          )
}

export default Departamentos;

