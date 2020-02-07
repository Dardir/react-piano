import React, {useRef, useEffect} from 'react';
import '../styles/Piano.css'
import { usePianoStore } from '../states/PianoStoreProvider'
import allActions from '../actions'

const Piano = () => {
    const { state, dispatch } = usePianoStore();
    const refMap = {
        "C":useRef(null),
        "D":useRef(null),
        "E":useRef(null),
        "F":useRef(null),
        "G":useRef(null),
        "A":useRef(null),
        "B":useRef(null),
    }

    useEffect(() => {
        let counter = 1;
        let noteLength = state.pianoFeeder.length;
        if(state.pianoFeeder.length >0){
            refMap[state.pianoFeeder[0]].current.style.background = "#ffcccb";
        }
        let interval = setInterval(nxt,1000);
        function nxt() {
            if (counter < noteLength) {
                for(let i=0;i< noteLength;i++){
                    refMap[state.pianoFeeder[i]].current.style.background = "white";
                }
                refMap[state.pianoFeeder[counter]].current.style.background = "#ffcccb";
                counter++;
            } else {
                for(let i=0;i< noteLength;i++){
                    refMap[state.pianoFeeder[i]].current.style.background = "white";
                }
                clearInterval(interval);
                dispatch(allActions.PianoActions.clearPlay());
            }
          }
        
      },[state.pianoFeeder,refMap,dispatch]);

    function handleKeyPress(value){
        dispatch(allActions.PianoActions.addLog(value));

    }
    return (
        <ul className="set">
            <li className="white b" onClick={() => handleKeyPress('C')} ref={refMap["C"]}>C</li>
            <li className="black as"></li>
            <li className="white a" onClick={() => handleKeyPress('D')} ref={refMap["D"]}>D</li>
            <li className="black gs"></li>
            <li className="white g" onClick={() => handleKeyPress('E')} ref={refMap["E"]}>E</li>
            <li className="black fs"></li>
            <li className="white f" onClick={() => handleKeyPress('F')} ref={refMap["F"]}>F</li>
            <li className="white e" onClick={() => handleKeyPress('G')} ref={refMap["G"]}>G</li>
            <li className="black ds"></li>
            <li className="white d" onClick={() => handleKeyPress('A')} ref={refMap["A"]}>A</li>
            <li className="black cs"></li>
            <li className="white c" onClick={() => handleKeyPress('B')} ref={refMap["B"]}>B</li>
        </ul>
    )
}

export default Piano;