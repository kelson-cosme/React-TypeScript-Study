import { Link } from "react-router-dom"

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
    return(
        <div className="teste">
            <h1>Pagina Dashboard</h1>
            <Botao/>
        </div>
        
    )
}

export default Dashboard