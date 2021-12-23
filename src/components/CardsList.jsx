import React from 'react';
import Modal from './Modal';
import CardForm from './CardForm';
import './styles/CardsList.css';
import ButtonComponent from './ButtonComponent';

class CardsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            selectedItem: { question: '', answer: '' },
            showModal: false,
            isLoading: true,
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.updateNotifier !== this.props.updateNotifier) {
            //TODO better way to do this?
            this.setState({
                data: this.props.data,
            });
        }
    }

    handleEdit = (item) => {
        this.setState({
            selectedItem: item,
            showModal: true,
        });
    };

    handleDelete = (item) => {
        this.props.handleDelete(item);
    };

    handleFormSave = (item, isNew) => {
        this.props.handleEdit(item, isNew);
        this.setState({
            showModal: false,
        });
    };

    handleCreateClick = () => {
        this.setState({
            selectedItem: { question: '', answer: '' },
            showModal: true,
        });
    };

    render() {
        return (
            <div className='cards-list'>
                <ButtonComponent
                    label='Create New Card'
                    parentClickHandler={this.handleCreateClick}
                />
                <div className='todo-cards-container'>
                    {this.state.data.map((item) => (
                        <div key={item.id} className='todo-card'>
                            <div className='todo-card-header'>
                                <h3>{item.question}</h3>
                                <p>{item.answer}</p>
                            </div>
                            <div className='todo-card-footer'>
                                <button onClick={() => this.handleEdit(item)}>
                                    Edit
                                </button>
                                <button onClick={() => this.handleDelete(item)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <Modal
                    show={this.state.showModal}
                    handleClose={() => this.setState({ showModal: false })}
                >
                    <CardForm
                        item={this.state.selectedItem}
                        handleSave={this.handleFormSave}
                    />
                </Modal>
            </div>
        );
    }
}

export default CardsList;
