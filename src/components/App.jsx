import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header.jsx';
import FlashCards from './FlashCardsCarousel';
import CardsList from './CardsList';
import { javascriptFlashCards as flashCards } from '../data/Constants';
import {
    getFromLocalStorage,
    initStorage,
    saveToLocalStorage,
} from '../data/utils.js';
import './styles/App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
            isError: false,
        };
    }

    componentDidMount() {
        initStorage();
        const cards = getFromLocalStorage('cards') || flashCards;
        this.setState({
            data: cards,
            isLoading: false,
        });
        saveToLocalStorage('cards', cards);
    }

    handleCardDelete = (card) => {
        const { data } = this.state;
        const newData = data.filter((item) => item.id !== card.id);
        this.setState({
            data: newData,
        });
        saveToLocalStorage('cards', newData);
    };

    handleCardEdit = (card) => {
        const { data } = this.state;
        const newData = data;
        const index = data.findIndex((item) => item.id === card.id);
        newData[index] = card;
        this.setState({
            data: newData,
        });
        saveToLocalStorage('cards', newData);
    };

    render() {
        return (
            <div className='app'>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        {/* Switch renders the first match only */}
                        <Route path='/' exact>
                            <FlashCards data={this.state.data} />
                        </Route>
                        <Route path='/manage' exact>
                            <CardsList
                                data={this.state.data}
                                handleEdit={this.handleCardEdit}
                                handleDelete={this.handleCardDelete}
                            />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
