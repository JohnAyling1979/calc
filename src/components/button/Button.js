import './Button.css';

function Button(props) {
    const { setEquation, value } = props;

    const onClick = () => {

        setEquation(current => {
            if (!isNaN(+value)) {
                return current + `${value}`;
            }

            if (value === 'Back') {
                let newEquation = null;
                if (current.slice(-1) === ' ') {
                    newEquation = current.slice(0, -3);
                } else {
                    newEquation = current.slice(0, -1);
                }

                return newEquation;
            }

            if (['/', '*', '+', '-'].includes(value)) {
                if (current.slice(-1) === ' ') {
                    return current;
                }

                if (current === '') {
                    return `0 ${value} `;
                }

                return current + ` ${value} `;
            }

            if (value === '=') {
                try {
                    return `${eval(current)}`;
                } catch {
                    return 'E';
                }
            }

            return current;
        })
    }
    return (
        <button className='button' onClick={onClick}>{value}</button>
    );
}

export default Button;