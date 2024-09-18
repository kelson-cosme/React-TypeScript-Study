import {useRef, useState } from "react";
import { useNavigate } from "react-router-dom"

export const Login = () => {

    const navigate = useNavigate();

    const inputSenhaRef = useRef(null)

    function handleClick(){
        navigate('/pagina-inicial')
    }

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function getUser(){
        console.log(email)
        console.log(senha)
    }

    //-----------------------------------
    //Utilizando o UseCallback
    // const getUser = useCallback ( () => {
    //     console.log(email)
    //     console.log(senha)
    // }, [email, senha])


    return(
        <div>
            <h1>Página de login</h1>
            <button onClick={handleClick}>Voltar a principal</button>

            <p>tamanho do email: {email.length}</p>

            <form action="">
                <label htmlFor="">
                    <span>Email</span>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}  
                        
                        />
                </label>

                <label htmlFor="">
                    <span>Senha</span>

                    {/* Use Ref */}
                    <input 
                        ref={inputSenhaRef}
                        type="password" 
                        value={senha} 
                        onChange={e => setSenha(e.target.value)}  
                        onKeyDown={ e => e.key === "Enter" ? alert("Teclou enter"): undefined}
                        />
                </label>

                <button type="button" onClick={getUser}>Entrar</button>
            </form>

        </div>
    )
}