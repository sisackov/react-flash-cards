import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header.jsx';
import FlashCards from './FlashCardsCarousel';
import CardsList from './CardsList';

class App  extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
            isError: false,
        };
    }

    render() {
    return (
        <div className='container'>
            <BrowserRouter>
                <Header />
                <Switch>
                    {/* Switch renders the first match only */}
                    <Route path='/' exact component={FlashCards} />
                    <Route path='/manage' exact component={CardsList} />
                </Switch>
            </BrowserRouter>
        </div>
    );
    }
};

export default App;
