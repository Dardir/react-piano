import React from 'react';
import Row from 'react-bootstrap/Row'
import Piano from './Piano'
import PianoLogger from './PianoLogger'
import PianoFeeder from './PianoFeeder'
import '../styles/PianoApp.css';

const PianoApp = () => {
    return (
        <div>
            <Row className='roundedborder'>
                <Piano />
            </Row>
            <Row className='roundedborder'>
                <PianoLogger />
            </Row>
            <Row className='roundedborder'>
                <PianoFeeder />
            </Row>
        </div>
    )
}

export default PianoApp;