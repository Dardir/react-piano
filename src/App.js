import React,{useState} from 'react';
import PianoApp from './components/PianoApp'
import Container from 'react-bootstrap/Container'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const App = () => {
  const [pianos, setPianos] = useState([<PianoApp/>]);
  return (
    <Container>
      <Button variant="outline-primary" type="submit" onClick={() => setPianos([...pianos, <PianoApp/>])}>
        <FontAwesomeIcon icon={faPlus} size="lg" pull="left" /> Add Piano
      </Button>

      {pianos}
    </Container>
  )
}

export default App;
