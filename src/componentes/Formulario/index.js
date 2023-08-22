import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import {useState} from "react";
import botao from "../Botao";

const Formulario = (props) => {



    /* // Exemplo de uso da método ".map()"

        times.map((time) => {
            console.log(time.toUpperCase())
        })
    */

    // UseState - Método para deixar as mudanças no formuário resposivas e reativas a qualquer alteração
    // UseState é um conceito parecido com os Getters e Setters -> [getNome, setNome] = useState(estadoIncial)
    //                                                                Ler    Escrever               Início
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    // 'time' é a variavel que vai armazenar o estado.
    // 'setTime' é afunção que permite atualizar estado.
    // 'useState('')' é a inicialização do estado da variável 'time', no caso, como vazio -> ('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')

        console.log('Form foi submetido!');

        props.aoColaboradorCadastrado({ // Ao passar o parâmetro 'Colaborador', as propriedades serão passadas para um objeto, que será passado para dentro da lista de colaboradores
            nome,
            cargo,
            imagem,
            time
        })
    }



    return (<section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    // Atribuinda à propriedade 'valor' (que no caso é o value desse 'CampoTexto') o estado/variável 'nome'.
                    valor={nome}
                    // Passando os parâmetros da função 'aoAlterado' (que no caso é a propriedade 'onChange' do componente 'CampoTexto') e alterando/setando o novo estado da variável 'nome'
                    aoAlterado={valor => setNome(valor) /* Isso é a mesma coisa que isso: function(valor){setNome(valor)}*/}
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"/>
                <CampoTexto
                    valor={cargo} // O value da caixa de texto é igual ao valor do estado 'cargo'.
                    aoAlterado={valor => setCargo(valor)} // Quando ocorrer qualquer alteração na caixa de texto, atualize o estado 'cargo' para o valor (value) que está contido na caixa de texto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"/>
                <CampoTexto
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    setTime={valor => setTime(valor)}
                    label="Time"
                    itens={props.times}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>);
};

export default Formulario;
