import { useState } from "react";
import { useNavigate } from "react-router-dom"

export const Login = () => {

    const navigate = useNavigate();

    function handleClick(){
        navigate('/pagina-inicial')
    }

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function getUser(){
        console.log(email)
        console.log(senha)
    }

    return(
        <div>
            <h1>Página de login</h1>
            <button onClick={handleClick}>Voltar a principal</button>

            <p>tamanho do email: {email.length}</p>

            <form action="">
                <label htmlFor="">
                    <span>Email</span>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}  />
                </label>

                <label htmlFor="">
                    <span>Senha</span>
                    <input type="password" value={senha} onChange={e => setSenha(e.target.value)}  />
                </label>

                <button type="button" onClick={getUser}>Entrar</button>
            </form>

        </div>
    )
}