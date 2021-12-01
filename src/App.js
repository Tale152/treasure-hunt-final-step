import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import Header from './react/common/Header'
import LandingPage from './react/LandingPage'
import MidPage from './react/MidPage'

const options = {
    timeout: 3000,
    position: positions.TOP_CENTER
}

export default function App() {

    const [stage, setStage] = useState(0)

    return (
        <AlertProvider template={AlertTemplate} {...options}>
          <Header />
          <div id="content">
            {renderStage(stage, setStage)}
          </div>
        </AlertProvider>
    )
}

function renderStage(stage, setStage){
    if(stage === 0){
        return <LandingPage onUnlock={() => setStage(stage + 1)}/>
    } else if (stage === 1){
        return <MidPage onUnlock={() => setStage(stage + 1)}/>
    } else {
        return <p>stage 2</p>
    }
}
