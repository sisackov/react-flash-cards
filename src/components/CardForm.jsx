import React, { Fragment } from 'react';
import InputText from './InputText';
import InputTextArea from './InputTextArea';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {},
            isNew: true,
            question: '',
            answer: '',
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.item.question !== this.props.item.question) {
            console.log('prevProps: ', prevProps);
            console.log('this.props: ', this.props);

            const { question, answer } = this.props.item;
            this.setState({
                item: this.props.item,
                isNew: !question,
                question: question,
                answer: answer || '',
            });
        }
    }

    handleInputUpdate = (fieldName, text) => {
        this.setState({
            [fieldName]: text,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { item, isNew, question, answer } = this.state;
        if (question && answer) {
            item.question = question;
            item.answer = answer;
            this.props.handleSave(item, isNew);
        } //TODO validate or show error
    };

    render() {
        return (
            <Fragment>
                <h1>{`${this.state.isNew ? 'New' : 'Update'} Card`}</h1>
                <form onSubmit={this.handleSubmit}>
                    <InputTextArea
                        inputName='question'
                        label='Question'
                        inputValue={this.state.question}
                        inputValidator={(text) => text.length}
                        inputFocusOut={this.handleInputUpdate}
                    />
                    <InputTextArea
                        inputName='answer'
                        label='Answer'
                        inputValue={this.state.answer}
                        inputValidator={(text) => text.length}
                        inputFocusOut={this.handleInputUpdate}
                    />
                    <div className='field'>
                        <button
                            type='button'
                            className='field-button'
                            onClick={this.handleSubmit}
                        >
                            Save
                        </button>
                    </div>
                </form>
            </Fragment>
        );
    }
}

export default TodoForm;
