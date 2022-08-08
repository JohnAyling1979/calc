import Screen from '../screen/Screen';
import Button from '../button/Button';
import './Calculator.css'
import { useState } from 'react';

function Calculator() {
    const [equation, setEquation] = useState('');

    return (
        <div data-testid='calculator' className='calculator'>
            <div>
                <Screen display={equation || 0}/>
            </div>
            <div className='buttonContainer'>
                <Button setEquation={setEquation} value={7} />
                <Button setEquation={setEquation} value={8} />
                <Button setEquation={setEquation} value={9} />
                <Button setEquation={setEquation} value={'/'} />
            </div>
            <div className='buttonContainer'>
                <Button setEquation={setEquation} value={4} />
                <Button setEquation={setEquation} value={5} />
                <Button setEquation={setEquation} value={6} />
                <Button setEquation={setEquation} value={'*'} />
            </div>
            <div className='buttonContainer'>
                <Button setEquation={setEquation} value={1} />
                <Button setEquation={setEquation} value={2} />
                <Button setEquation={setEquation} value={3} />
                <Button setEquation={setEquation} value={'-'} />
            </div>
            <div className='buttonContainer'>
                <Button setEquation={setEquation} value={0} />
                <Button setEquation={setEquation} value={'.'} />
                <Button setEquation={setEquation} value={'Back'} />
                <Button setEquation={setEquation} value={'+'} />
            </div>
            <div className='buttonContainer'>
                <Button setEquation={setEquation} value={'='} />
            </div>
        </div>
    );
}

export default Calculator;
