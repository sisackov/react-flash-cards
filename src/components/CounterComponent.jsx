import React from 'react';
import './styles/CounterComponent.css';
import { buttonImageMap } from '../data/Constants';

class CounterComponent extends React.Component {
    constructor(props) {
        super(props);
        const { counter, label, color, } = props;
        this.state = {
            counter: counter,
            imageSrc: buttonImageMap[label],
            className: `counter-span counter-span--${color}`,
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.counter !== this.props.counter) {
            this.setState({
                counter: this.props.counter,
            });
        }
    }

    render() {
        const { counter, imageSrc, className, } = this.state;
        return (
            <div className='counter-container'>
                <img
                    className={`counter-image`}
                    src={imageSrc}
                    alt={this.props.label}
                />
                <span className={className}>
                    {counter}
                </span>
            </div>
        );
    }
}

export default CounterComponent;
