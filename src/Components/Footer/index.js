import './Footer.css';

export default function Footer() {
    return (
      <footer className="mt-5">
        <div className="mt-5 pt-5 pb-5 footer bg-dark ">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-xs-12 about-company">
                <h2 className="text-light">FullstackEletro</h2>
                <p className="pr-5 text-light">RECODE PRO 2020 </p>
                <p><a href=""> Projeto Brayan</a></p>
              </div>
              <div className="col-lg-3 col-xs-12 linkes">
                <h4 className="mt-lg-0 mt-sm-3 text-light">Redes Sociais</h4>
                <ul className="m-0 p-0">
                  <li><a href="recode.com.br">Facebook</a></li>
                  <li><a href="recode.com.br">Instagram</a></li>
                  <li><a href="recode.com.br">Twitter</a></li>
                  
                </ul>
              </div>
              <div className="col-lg-4 col-xs-12 location">
                <h4 className="mt-lg-0 mt-sm-4 text-light"><a href="lojas">Nossas Lojas</a></h4>
                <p className="text-light" >Rio de Janeiro</p>
                <p className="text-light" >São Paulo</p>
                <p className="text-light" >Santa Catarina</p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col copyright text-center">
                <p className=""><small className="text-light">© 2020. Recode Pro</small></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
