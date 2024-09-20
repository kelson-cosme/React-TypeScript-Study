import { useState } from "react";
import { useNavigate } from "react-router-dom"


import { InputLogin } from "./components/InputLogin";

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

    //-----------------------------------
    //Utilizando o UseCallback
    // const getUser = useCallback ( () => {
    //     console.log(email)
    //     console.log(senha)
    // }, [email, senha])


    return(
        //Criando componentes customizados
        // -----------------------------------
        <div>
            <h1>Página de login</h1>
            <button onClick={handleClick}>Voltar a principal</button>

            <p>tamanho do email: {email.length}</p>

            <form action="">

                <InputLogin 
                    label="Email"
                    type="email"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                />                

                <InputLogin 
                    label="Senha"
                    type="password"
                    value={senha}
                    onChange={newValue => setSenha(newValue)}
                    onPressEnter={() => alert("Pressionou Enter")}
                />    
               


                <button type="button" onClick={getUser}>Entrar</button>
            </form>

        </div>
    )
}