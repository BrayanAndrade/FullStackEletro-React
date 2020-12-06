import React from 'react';
import Tabela from './Tabela'

class Produtos extends React.Component{

    constructor(){
        super();
        this.state=({
            db: []
            
        });
        this.exibirProdutos();
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



    render(){
        return(
          <div>
              <Tabela arrayprodutos={this.state.db}/>
        </div>
        );
    }
}
export default Produtos;