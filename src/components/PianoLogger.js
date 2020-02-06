import React from 'react';
import { usePianoStore } from '../states/PianoStoreProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import Media from 'react-bootstrap/Media'


const PianoLogger = () => {
    const { state } = usePianoStore();
    const displayLogContent = () => {
        let logStr = "";
        let count =0;
        state.pianoLogger.forEach((element) => {
            if(count === 112){
                count = 0;
                logStr+="\n";
            }else{
                count += 2;
            }
            (logStr === "") ? logStr += element : logStr += ',' + element;
        });
        return logStr;
    }
    return (
        <Media>
            <FontAwesomeIcon icon={faBook} size="lg" pull="left"/>
            <Media.Body>
                
                    <h5>Key Pressed Log</h5>
                    <p>
                        {displayLogContent()}
                    </p>
            </Media.Body>
        </Media>
    )
}

export default PianoLogger;