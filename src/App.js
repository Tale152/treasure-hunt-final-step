import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col } from 'react-bootstrap'
import crown from './res/crown.png'

function App() {
  return (
    <Row className="justify-content-center">
        <Col md={2} className="text-center text-md-right">
          <img src={crown} alt="Kings quest" width="256" height="256"/>
        </Col>
    </Row>
  )
}

export default App
