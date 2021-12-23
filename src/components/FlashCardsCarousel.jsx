import React from 'react';

class FlashCardsCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
            isError: false,
        };
    }

    // componentDidMount() {

    render() {
        return (
            <div className='container'>
                <h1>This is my landing page</h1>
            </div>
        );
    }
}

export default FlashCardsCarousel;
