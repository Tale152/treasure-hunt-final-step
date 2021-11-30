import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import crown from './res/crown.png'

function App() {
  return (
    <div>
      <Row className="justify-content-center">
        <Col sm={4} md={6} className="text-center">
          <img src={crown} alt="Kings quest" width="256" height="256"/>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm={4} className="text-center text-md-right">
          <h1>Kings quest</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm={4} className="text-center text-md-right">
          <Form>
            <Form.Group controlId="form.firstKey" className="mx-2 my-4">
              <Form.Control type="password" placeholder="Inserisci la chiave corretta" className="text-center"/>
            </Form.Group>
            <Form.Group controlId="form.secondKey" className="mx-2 my-4">
              <Form.Control type="password" placeholder="Inserisci la chiave corretta" className="text-center"/>
            </Form.Group>
            <Form.Group controlId="form.thirdKey" className="mx-2 my-4">
              <Form.Control type="password" placeholder="Inserisci la chiave corretta" className="text-center"/>
            </Form.Group>
            <Form.Group controlId="form.fourthKey" className="mx-2 my-4">
              <Form.Control type="password" placeholder="Inserisci la chiave corretta" className="text-center"/>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm={4} className="text-center text-md-right d-grid gap-2">
          <Button variant="dark" className="mx-4">Continua</Button>
        </Col>
      </Row>
    </div>
    
  )
}

export default App
