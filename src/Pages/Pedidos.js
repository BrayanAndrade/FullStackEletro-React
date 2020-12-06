import {useState} from 'react';
import {Form, Button, Row} from 'react-bootstrap';

export default function Pedidos() {
    const [ form, setForm ] = useState({
        nome: "",
        endereco: "",
        fone: "",
        produto: "",
        valor: "",
        quantidade: "",
        preco_final: ""
        
    });


    const controleMudanca = async(evento) => {

        console.log(evento.target.value)

        setForm({ 
            ...form,
            [evento.target.id]: evento.target.value
        })
           
    }

    const controleEnvio = async (evento) => {
        evento.preventDefault();
        console.log("Enviando")
        const preco_final = parseFloat (form.valor) * parseFloat (form.quantidade);
        console.log(preco_final);
        document.getElementById("preco_final").value = `R$ ${preco_final}`;

        const json = JSON.stringify(form);

        const opcoes = {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: json
        }

        const response = await fetch ("http://localhost/fsreact/fullstackeletro/src/api/cadastro_produto.php", 
        opcoes);
        const dados = await response.json()
        console.log(dados);
    }

    return (
        <Row>
            <div className="col-lg-6 col-md-6 mx-auto">
                <Form onSubmit={controleEnvio}>
                    <h1 className="text-center">Fazer Pedidos</h1>
                    <Form.Group>
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="nome" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Endereço:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="endereco" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="fone" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Produto:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="produto" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Valor Unitario:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="valor" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Quantidade:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="quantidade" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Preco Final:</Form.Label>
                        <Form.Control disabled type="text" id="preco_final" />
                    </Form.Group>

                    <Button variant="dark" type="submit">Cadastrar</Button>
                </Form>
            </div>
        </Row>
    );
}