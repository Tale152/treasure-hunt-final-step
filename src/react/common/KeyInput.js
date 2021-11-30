import Form from 'react-bootstrap/Form'

export default function KeyInput(props){
    return (
        <Form.Group controlId={props.id} className="mx-2 my-4">
            <Form.Control
                type="text"
                placeholder="Inserite la chiave corretta"
                className="text-center"
                onChange={e => props.onChange(e.target.value)}
            />
        </Form.Group>
    )
}
