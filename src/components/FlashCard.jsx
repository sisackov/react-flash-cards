import React from 'react';
import './styles/FlashCard.css';

class FlashCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card: props.card,
            isRevealed: false,
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.card !== this.props.card) {
            this.setState({
                card: this.props.card,
            });
        } else if (prevProps.isRevealed !== this.props.isRevealed) {
            this.setState({
                isRevealed: this.props.isRevealed,
            });
        }
    }

    render() {
        return (
            <div className='flash-card'>
                {!this.state.isRevealed ? (
                    <div className='flash-card__question'>
                        <p>{this.state.card.question}</p>
                    </div>
                ) : (
                    <div className='flash-card__answer'>
                        <p>{this.state.card.answer}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default FlashCard;
