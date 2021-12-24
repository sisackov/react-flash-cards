import React from 'react';
import CounterComponent from './CounterComponent';
import ButtonComponent from './ButtonComponent';
import './styles/FlashCardsCarousel.css';
import FlashCard from './FlashCard';

class FlashCardsCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            currentCard: {},
            correct: 0,
            wrong: 0,
            completed: 0,
            isRevealed: false,
            isError: false,
        };
    }

    componentDidMount() {
        this.setState({
            data: this.props.data,
            currentCard: this.props.data[0],
        });
        console.log('this.state.data: ', this.state.data);
        console.log('this.state.props: ', this.props);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            this.setState({
                data: this.props.data,
                currentCard: this.props.data[0],
            });
        }
    }

    handleNextClick = () => {
        const { currentCard, data } = this.state;
        const newCardIndex =
            data.findIndex((card) => card.id === currentCard.id) + 1;
        if (newCardIndex < data.length) {
            this.setState({
                currentCard: data[newCardIndex],
                isRevealed: false,
            });
        }
        //TODO else show end of cards message
    };

    handleRevealCardClick = () => {
        this.setState({
            isRevealed: true,
        });
    };

    handleCorrect = () => {
        const { correct, completed } = this.state;
        this.setState({
            correct: correct + 1,
            completed: completed + 1,
        });
        this.handleNextClick();
    };

    handleWrong = () => {
        const { wrong, completed } = this.state;
        this.setState({
            wrong: wrong + 1,
            completed: completed + 1,
        });
        this.handleNextClick();
    };

    render() {
        return (
            <div className='carousel-container'>
                <h5>
                    {`Completed ${this.state.completed} / ${this.state.data.length}`}
                </h5>
                <div className='button-row'>
                    <CounterComponent
                        counter={this.state.correct}
                        label='correct'
                        color='green'
                    />
                    <CounterComponent
                        counter={this.state.wrong}
                        label='wrong'
                        color='red'
                    />
                </div>
                {this.state.currentCard && (
                    <FlashCard
                        card={this.state.currentCard}
                        isRevealed={this.state.isRevealed}
                    />
                )}
                <div className='button-row'>
                    <ButtonComponent
                        label='Next'
                        parentClickHandler={this.handleNextClick}
                    />
                    <ButtonComponent
                        label='Reveal Card'
                        parentClickHandler={this.handleRevealCardClick}
                    />
                </div>
                <div></div>
                {this.state.isRevealed && (
                    <div className='revealed-options-container'>
                        <h3>Did you get it right?</h3>
                        <div className='button-row'>
                            <ButtonComponent
                                label='Yes'
                                parentClickHandler={this.handleCorrect}
                            />
                            <ButtonComponent
                                label='No'
                                parentClickHandler={this.handleWrong}
                            />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default FlashCardsCarousel;
