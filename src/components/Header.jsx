import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar variant='dark' bg='dark' expand='lg'>
      <Container>
        <Navbar.Brand>
          R$ 10.000,00
          <Form.Select
            style={{ display: 'inline-block', maxWidth: '120px', margin: '0 10px' }}
          >
            <option>Conta 1</option>
            <option>Conta 2</option>
            <option>Conta 3</option>
            <option>Conta 4</option>
          </Form.Select>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav ms-auto'>
          <Nav className='ms-auto'>
            <Nav.Link as={Link} to='/'>
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to='/transactions'>
              Transações
            </Nav.Link>
            <Nav.Link as={Link} to='/goals'>
              Metas
            </Nav.Link>
            <NavDropdown title='Configurações' id='basic-nav-dropdown'>
              <NavDropdown.Item as={Link} to='/accounts'>
                Contas
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/transaction_types'>
                Tipo de Transação
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/transaction_categories'>
                Categorias de Transação
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
