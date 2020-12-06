<?php  
    include("./ClassConexao.php");

    class ClassProdutos extends ClassConexao{

        
        public function exibeProdutos()
        {
            $BFetch=$this->conectaDB()->prepare("select * from produtos");
            $BFetch->execute();

            $J=[];
            $I=0;

            while($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)){
                $J[$I]=[
                    "id"=>$Fetch['id'],
                    "categoria"=>$Fetch['categoria'],
                    "descricao"=>$Fetch['descricao'],
                    "preco"=>$Fetch['preco'],
                    "preco_venda"=>$Fetch['preco_venda'],
                    "imagem"=>$Fetch['imagem']
                ];
                $I++;
            }

            header("Access-Control-Allow-Origin:*");
            header("Content-type: application/json");
            echo json_encode($J);
        }
    }
?>