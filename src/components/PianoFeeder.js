import React from 'react';
import { usePianoStore } from '../states/PianoStoreProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faPlay } from '@fortawesome/free-solid-svg-icons'
import Media from 'react-bootstrap/Media'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const PianoFeeder = () => {
    const { dispatch } = usePianoStore();
    return (
        <Media>
            <FontAwesomeIcon icon={faMusic} size="lg" pull="left" />
            <Media.Body>

                <h5>Compose Your Music</h5>
                <Form>
                    <Form.Group controlId="formBasicEmail" style={{width: "310%"}}>
                        <Form.Label>Music Note</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                        <Form.Text className="text-muted">
                            Please enter music letters as shown on the piano and hit Play
                        </Form.Text>
                    </Form.Group>
                    <Button variant="outline-danger" type="submit">
                        <FontAwesomeIcon icon={faPlay} size="lg" pull="left" /> Play
                    </Button>
                </Form>
            </Media.Body>
        </Media>
            )
          }
          
export default PianoFeeder;