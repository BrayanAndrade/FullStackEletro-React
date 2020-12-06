import { Navbar, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './Menu.css';

 function BaseMenu(props) {
     const {location} = props
    return (
        <Navbar className="navbar-dark" bg="dark" expand="lg" fixed="top">
            <div className="container">
            <Navbar.Brand as={Link}  to="/inicio">
                FullStackEletro
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="item-menu" />
            <Navbar.Collapse id="item-menu">
                <Nav activeKey={location.pathname} className="ml-auto mr-5">
               
                    <Nav.Item>
                        <Nav.Link as={Link}  to="/produtos"> Produtos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link}  to="/contato"> Contato</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link}  to="/pedidos"> Pedidos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/lojas"> Nossas Lojas</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

const Menu = withRouter(BaseMenu);

export default Menu