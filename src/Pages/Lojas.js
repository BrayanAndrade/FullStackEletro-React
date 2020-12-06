import React from 'react';


export default function Lojas() {
    return (
      
        <div className="container-fluid">
            <div className="lojas">
                    <h1 className="bg-secondary pt-3 pb-3 text-center text-white">NOSSAS LOJAS</h1>
                    <div className="container">
                    <div className='row pt-5 pb-5 mt-5'>
                        <div className='col mb-5'>
                            <h3 className="text-primary">Rio de Janeiro</h3>
                            <p>Avenida Presidente Vargas, 5000</p>
                            <p>10º andar</p>
                            <p>Centro</p>
                            <p>(21)9999-9999</p>

                        </div>
                        <div className='col mb-5'>
                            <h2 className="text-primary">São Paulo</h2>
                            <p>Avenida Paulista, 950</p>
                            <p>3º andar</p>
                            <p>Jardins</p>
                            <p>(11)1111-9222</p>

                        </div>
                        <div className='col mb-5'>
                            <h2 className="text-primary">Santa Catarina</h2>
                            <p>Rua major vila, 370</p>
                            <p>2º andar</p>
                            <p>Vila Mariana</p>
                            <p>(41)5555-5555</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>       
    );
}