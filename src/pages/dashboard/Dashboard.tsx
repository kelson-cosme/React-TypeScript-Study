import { useRef } from "react"
import { Link } from "react-router-dom"

//Botão
const Botao = () => {
    return <Link  to={"/login"}> <button style={{
        color: 'blue', 
        backgroundColor: 'green',
        border: 'none',
        padding: '20px'
        }}>
        Login</button>
    </Link>
}

function Dashboard(){

    const contadorRef = useRef({ counter: 0 })

    return(
        <div className="teste">
            <h1>Pagina Dashboard</h1>
            <Botao/>

            <button onClick={() => contadorRef.current.counter++} >Referencia</button>
            <button onClick={() => console.log(contadorRef.current.counter)}>mostrar log</button>
            <p>Contador: {contadorRef.current.counter}</p>
            
        </div>
        
    )
}

export default Dashboard