import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import LandingPage from "./react/landingPage/LandingPage"

const options = {
    timeout: 4000,
    position: positions.TOP_CENTER
}

export default function App() {

    const [stage, setStage] = useState(0)

    return (
        <AlertProvider template={AlertTemplate} {...options}>
          {renderStage(stage, setStage)}
        </AlertProvider>
    )
}

function renderStage(stage, setStage){
    if(stage === 0){
        return <LandingPage onUnlock={() => setStage(stage + 1)}/>
    } else if (stage === 1){
        return <p>stage 1</p>
    } else {
        return <p>stage 2</p>
    }
}
