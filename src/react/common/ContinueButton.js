import { Button } from 'react-bootstrap'

export default function ContinueButton(props){
    if(props.disabled){
        return (
            <div className="d-grid gap-2">
                <Button variant="dark" className="mx-4" disabled>Continua</Button>
            </div>
        )
    } else {
        return (
            <div className="d-grid gap-2">
                <Button variant="dark" className="mx-4" onClick={props.onClick}>Continua</Button>
            </div>
        )
    }
}
