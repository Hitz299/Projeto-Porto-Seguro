
import { StyledInput } from "../../style/styled-conta";
import { StyleContainerEntrada } from "../../style/styledGeral";

export default function FormularioLogin() {
  return (
     <>
        <form>
            <StyleContainerEntrada>
               
                <label htmlFor="email">Email</label>
                <StyledInput type="email" placeholder="Digite seu Email"/>
            </StyleContainerEntrada>
            <StyleContainerEntrada>
                
                <label htmlFor="senha">Senha</label>
                <StyledInput type="password" placeholder="Digite sua senha"/>
            </StyleContainerEntrada>
          
        </form>
     
     </>
  )
}
