import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

import { useAccounts } from '../context/Context';

export default function Header() {
  const [balance, setBalance] = useState(0);
  const { accounts } = useAccounts();

  useEffect(() => {
    if (accounts.length > 0) {
      setBalance(+accounts[0].balance);
    }
  }, [accounts]);

  return (
    <Navbar
      variant='dark'
      bg='dark'
      expand='lg'
      style={{ marginBottom: '0.5rem' }}
    >
      <Container>
        <Navbar.Brand>
          {balance.toFixed(2)}
          <Form.Select
            style={{
              display: 'inline-block',
              maxWidth: '120px',
              margin: '0 10px',
            }}
            value={balance}
            onChange={(e) => setBalance(+e.target.value)}
          >
            {!accounts.length > 0
              ? ''
              : accounts.map((account, index) => {
                  return (
                    <option key={index} value={account.balance}>
                      {account.name}
                    </option>
                  );
                })
            }
            <option value={51}>teste</option>
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
            <NavDropdown title='Detalhes' id='basic-nav-dropdown'>
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
