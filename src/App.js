import 'bootstrap/dist/css/bootstrap.css'
import { Button } from 'react-bootstrap'
import MyRow from './MyRow'
import Form from 'react-bootstrap/Form'
import crown from './res/crown.png'

function App() {
  return (
    <div>
      <MyRow>
        <img src={crown} alt="Kings quest" width="256" height="256"/>
      </MyRow>
      <MyRow>
        <h1>Kings quest</h1>
      </MyRow>
      <MyRow>
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
      </MyRow>
      <MyRow>
        <div className="d-grid gap-2">
          <Button variant="dark" className="mx-4">Continua</Button>
        </div>
      </MyRow>
    </div>
    
  )
}

export default App
