import './Colaborador.css';
import {useState} from "react";


const Colaborador = ({ nome, imagem, cargo, corDeFundo}) => {

    const [imagemValida, setImagemValida] = useState(true) // Estado inicial da imagem com verdadeiro
    const imageError = () => {
        setImagemValida(false) // Caso a imagem não for encontrada, o estado será mudado para false e a imagem padrão de defeito será carregada
    }


    return(
      <div className='colaborador'>
          <div className='cabecalho' style={{backgroundColor: corDeFundo} }>
              {
                  imagemValida ?
                      <img onError={imageError}
                           src={imagem}
                           alt={nome} />
                      :
                      <img onError={imageError}
                           src="https://static.thenounproject.com/png/5034901-200.png"
                           alt="Imagem Inválida" />
              }

          </div>
          <div className='colaborador_rodape'>
              <h4>{nome}</h4>
              <h5>{cargo}</h5>
          </div>
      </div>
    );
}

export default Colaborador;

