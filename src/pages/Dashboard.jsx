import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import ExpensesByCategory from '../components/ExpensesByCategory';
import Overview from '../components/Overview';

export default function Dashboard() {
  return (
    <>
      <Container>
        <Row>
          <Col style={{ marginBottom: '1rem' }}>
            <h2>Dashboard</h2>
          </Col>
        </Row>
        <Row>
          <Col md='5' style={{ marginBottom: '0.5rem' }}>
            <Card border='secondary' style={{ height: '35vh' }}>
              <Card.Header>Visão Geral</Card.Header>
              <Card.Body>
                <Overview />
              </Card.Body>
            </Card>
          </Col>
          <Col md='7' style={{ marginBottom: '0.5rem' }}>
            <Card border='secondary' style={{ height: '35vh' }}>
              <Card.Header>Despesas por categoria</Card.Header>
              <Card.Body>
                <ExpensesByCategory />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md='7' style={{ marginBottom: '0.5rem' }}>
            <Card border='secondary' style={{ height: '35vh' }}>
              <Card.Header>Metas</Card.Header>
              <Card.Body>
                <Card.Title>Secondary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md='5' style={{ marginBottom: '0.5rem' }}>
            <Card border='secondary' style={{ height: '35vh' }}>
              <Card.Header>Suas Contas</Card.Header>
              <Card.Body>
                <Card.Title>Secondary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
