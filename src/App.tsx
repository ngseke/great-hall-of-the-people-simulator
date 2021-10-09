import {
  BrowserRouter as Router,
} from 'react-router-dom'
import Voter from './components/Voter'

export default function App () {
  return (
    <Router>
      <Voter/>
    </Router>
  )
}
