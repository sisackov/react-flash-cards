import React from 'react';
import './styles/ButtonComponent.css';
import { buttonImageMap } from '../data/Constants';

class ButtonComponent extends React.Component {
    constructor(props) {
        super(props);
        const label = this.props.label;
        this.state = {
            btnLabel: label,
            btnImage: buttonImageMap[label],
        };
    }

    render() {
        return (
            <button
                className='button-container'
                onClick={(e) => {
                    this.props.parentClickHandler(e);
                }}
            >
                {this.state.btnImage ? (
                    <img
                        className={`button-image--small`}
                        src={this.state.btnImage}
                        alt={this.state.btnLabel}
                    />
                ) : (
                    this.state.btnLabel
                )}
            </button>
        );
    }
}

export default ButtonComponent;
