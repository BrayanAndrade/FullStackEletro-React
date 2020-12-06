import React from 'react';
import { Form, Button, Row } from 'react-bootstrap';



export default function Contato() {
  return (

    <div className="container-fluid">
      <h1 className="bg-secondary pt-3 pb-3 text-center text-white">Contato</h1>
      <p className="text-center">Entre em contato com a nossa equipe</p>


      <div className="col-lg-6 col-md-6 mx-auto">
        <Form>

          <Form.Group>
            <Form.Label>Nome:</Form.Label>
            <Form.Control type="text" id="nome" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Mensagem:</Form.Label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" type="text" id="mensagem" />
          </Form.Group>

          <Button variant="primary" type="submit">Enviar</Button>
        </Form>
      </div>

      <div className="lojas text-center mt-5">

        <div className="container">
          <div className='row mb-5'>
            <div className='col mb-5'>
              <h2 className="text-danger">Email</h2>
              <h4 className="text-secondary">Fullstackeletro@contato.com</h4>


            </div>
            <div className='col mb-5'>
              <h2 className="text-success">Whatsapp</h2>
              <h4 className="text-secondary">+55 21 9999-9999</h4>


            </div>
            <div className='col mb-5'>
              <h2 className="text-primary">Ligue</h2>
              <h4 className="text-secondary">+55 21 9999-9999</h4>

            </div>
          </div>
        </div>
      </div>

    </div>



  );

}
