import React from 'react';
import '../styles/Piano.css'
import { usePianoStore } from '../states/PianoStoreProvider'
import allActions from '../actions'

const Piano = () => {
    const { state, dispatch } = usePianoStore();
    function handleKeyPress(value){
        dispatch(allActions.PianoActions.addLog(value));

    }
    return (
        <ul className="set">
            <li className="white b" onClick={() => handleKeyPress('C')}>C</li>
            <li className="black as"></li>
            <li className="white a" onClick={() => handleKeyPress('D')}>D</li>
            <li className="black gs"></li>
            <li className="white g" onClick={() => handleKeyPress('E')}>E</li>
            <li className="black fs"></li>
            <li className="white f" onClick={() => handleKeyPress('F')}>F</li>
            <li className="white e" onClick={() => handleKeyPress('G')}>G</li>
            <li className="black ds"></li>
            <li className="white d" onClick={() => handleKeyPress('A')}>A</li>
            <li className="black cs"></li>
            <li className="white c" onClick={() => handleKeyPress('B')}>B</li>
        </ul>
    )
}

export default Piano;