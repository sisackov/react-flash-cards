import React from 'react';

class InputTextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            isError: false,
        };
        this.stateKey = props.stateKey;
        this.validator = props.inputValidator;
    }

    componentDidUpdate(prevProps) {
        if (prevProps.inputValue !== this.props.inputValue) {
            this.setState({
                term: this.props.inputValue,
            });
        }
    }

    onFocusOut = (e) => {
        e.preventDefault();
        if (this.validator && !this.validator(this.state.term)) {
            this.inputRef.current.style.borderColor = 'red';
        } else {
            this.props.inputFocusOut(this.props.inputName, this.state.term);
        }
    };

    render() {
        return (
            <div className='field'>
                <label className='field-label'>{this.props.label}</label>
                <textarea
                    className='field-input'
                    value={this.state.term}
                    onChange={(e) => this.setState({ term: e.target.value })}
                    onBlur={this.onFocusOut}
                />
            </div>
        );
    }
}

export default InputTextArea;
