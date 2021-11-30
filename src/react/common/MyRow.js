import { Row, Col } from 'react-bootstrap'

export default function MyRow(props){
  return (
    <Row className="justify-content-center">
      <Col sm={4} className="text-center">
        {props.children}
      </Col>
    </Row>
  )
}