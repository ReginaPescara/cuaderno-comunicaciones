import Boton from './componentes/inputHome.jsx'
import Burger from './componentes/burger.jsx'
function Home (){
    return(
    <div className='contenedor'><div className='nav'><Burger/></div><><Boton texto="Comunicaciones generales" /><Boton texto="Retiros" /></>
    </div>
    )
}