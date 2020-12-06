import React from 'react';
import './Tabela.css'


export default class Tabela extends React.Component{
  constructor(){
    super();
    this.state=({
        db: [],
        selecionar: ""
    });
    this.exibirProdutos();
    this.exibir = this.exibir.bind(this)
}

exibirProdutos(){
    fetch("http://localhost/fsreact/fullstackeletro/src/api/")
    .then((response)=>response.json())
    .then((responseJson)=>
    {
        this.setState({
            db: responseJson
        });
        console.log(this.state.db);
    })
}

    exibir (e) {
      // console.log(this.state.selecionar) 
  
      this.setState({
        bd: [],
        selecionar: e.target.value
      
      });
      console.log(this.state.selecionar)
      // console.log(e.target.value)
    }

    componentDidMount(){
      console.log(this.state.selecionar)
      console.log(this.state.db)
    }


    render(){
        return(
          <div className="pag-produto">
              

              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-2">
                    <h2 className="text-center">Categorias</h2>
                      <ul className="list-group text-center">
                      <button className="list-group-item list-group-item-action" value="" onClick={this.exibir} >Todos os Produtos</button>
                      <button className="list-group-item list-group-item-action" value="geladeira" onClick={this.exibir} >Geladeira</button>
                      <button className="list-group-item list-group-item-action" onClick={this.exibir} value="fogao">Fogão</button>
                      <button className="list-group-item list-group-item-action" onClick={this.exibir} value="microondas">Microondas</button>
                      <button className="list-group-item list-group-item-action" onClick={this.exibir} value="lava-roupa">Lava Roupas</button>
                      <button className="list-group-item list-group-item-action" onClick={this.exibir} value="lava-loucas">Lava Louças</button>
                      <button className="list-group-item list-group-item-action" onClick={this.exibir} value="console">Console</button>
                      <button className="list-group-item list-group-item-action" onClick={this.exibir} value="ferro-de-passar">Ferro de Passar</button>
                      <button className="list-group-item list-group-item-action" onClick={this.exibir} value="som">Hometheater</button>
                      <button className="list-group-item list-group-item-action" onClick={this.exibir} value="fritadeira">Air Fryer</button>
                      <button className="list-group-item list-group-item-action" onClick={this.exibir} value="liquidificador">Liquidificador</button>
                      <button className="list-group-item list-group-item-action" onClick={this.exibir} value="sanduicheira">Sanduicheira</button>
                      <button className="list-group-item list-group-item-action" onClick={this.exibir} value="mixer">Mixer</button>
                      </ul>
                    </div>
                
                
              <div className="col-sm-10">
                
                
              {this.state.db.map(
                   row=>  {
                     console.log(this.state.selecionar)
                    if(this.state.selecionar === ""){

                      return (
                        <div className="boxproduto" id={row.categoria}>
                      <div className="produto text-center">
                        {<img src={require(`${row.imagem}`).default} className="rounded mx-auto d-block" width={150} />}
                        <p className=" mt-5">{row.descricao}</p>
                        <p className="text-danger">R${row.preco}</p>
                        <p className="text-dark text-center">R${row.preco_venda}</p>
                        
                      </div>
                    </div>

                      );

                   }
                   
                   else if(this.state.selecionar === row.categoria){
                      return(
                        <div className="boxproduto" id={row.categoria}>
                        <div className="produto text-center">
                          {<img src={require(`${row.imagem}`).default} className="rounded mx-auto d-block" width={150} />}
                          <p className=" mt-5">{row.descricao}</p>
                          <p className="text-danger">R${row.preco}</p>
                          <p className="text-dark text-center">R${row.preco_venda}</p>
                          
                        </div>
                      </div>

                      );
                   }
                    
                  }                  
              )}
                  

                </div>
              </div>
            </div>
          </div>
        );
    }
}