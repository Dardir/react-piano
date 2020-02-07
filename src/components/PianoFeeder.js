import React, { useState, useEffect } from 'react';
import { usePianoStore } from '../states/PianoStoreProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faPlay } from '@fortawesome/free-solid-svg-icons'
import Media from 'react-bootstrap/Media'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import useValidateMusic from '../hooks/useValidateMusic'
import Alert from 'react-bootstrap/Alert'
import '../styles/PianoFeeder.css'

const PianoFeeder = () => {
    const { dispatch } = usePianoStore();
    const [musicStr, setMusicStr] = useState("");
    const musicArray = (musicStr === "") ? [] : musicStr.split(",");
    const [isEnabled, isError] = useValidateMusic(musicArray);

    const handleInput = (value) => {
        if (value === "") {
            setMusicStr(value);
        }
        else if (value.length === 1) {
            setMusicStr(value.toUpperCase());
        } else if (value.slice(-1) === ",") {
            setMusicStr(value.slice(0, value.length - 1));
        } else {
            var newValue = [value.slice(0, value.length - 1).toUpperCase(), ",", value.slice(value.length - 1).toUpperCase()].join('');
            setMusicStr(newValue);
        }
    }



    return (
        <Media>
            <FontAwesomeIcon icon={faMusic} size="lg" pull="left" />
            <Media.Body>

                <h5>Compose Your Music</h5>
                <Form>
                    <Form.Group controlId="formMusicNotes" style={{ width: "310%" }}>
                        <Form.Label>Music Note</Form.Label>
                        <Form.Control as="textarea" rows="3" value={musicStr} onChange={(e) => handleInput(e.target.value)} />
                        <Form.Text className="text-muted">
                            Please enter music letters as shown on the piano and hit Play
                        </Form.Text>
                    </Form.Group>
                    <Button variant="outline-danger" type="submit" disabled={!isEnabled}>
                        <FontAwesomeIcon icon={faPlay} size="lg" pull="left" /> Play
                    </Button>

                        {(isError) ? <Alert variant='danger' className= "shifting" >
                            Please Enter Valid Music Letter!
                    </Alert> : ""}


                </Form>
            </Media.Body>
        </Media>
    )
}

export default PianoFeeder;