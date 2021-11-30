import 'bootstrap/dist/css/bootstrap.css'

import { positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import LandingPage from "./react/landingPage/LandingPage"

const options = {
  timeout: 4000,
  position: positions.TOP_CENTER
}

function App() {
  return <AlertProvider template={AlertTemplate} {...options}><LandingPage /></AlertProvider>
}

export default App
