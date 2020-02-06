import React from 'react';
import '../styles/Piano.css'

const Piano = () => {
    return (
        <ul className="set">
            <li className="white b" value='C'>C</li>
            <li className="black as"></li>
            <li className="white a" value='D'>D</li>
            <li className="black gs"></li>
            <li className="white g" value='E'>E</li>
            <li className="black fs"></li>
            <li className="white f" value='F'>F</li>
            <li className="white e" value='G'>G</li>
            <li className="black ds"></li>
            <li className="white d" value='A'>A</li>
            <li className="black cs"></li>
            <li className="white c" value='B'>B</li>
        </ul>
    )
}

export default Piano;