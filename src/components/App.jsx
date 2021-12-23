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
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            updateNotifier: 0,
            isLoading: true,
            isError: false,
        };
    }

    componentDidMount() {
        initStorage();
        const cards = getFromLocalStorage('cards') || flashCards;
        this.setState({
            data: cards,
            updateNotifier: Math.random(),
            isLoading: false,
        });
        saveToLocalStorage('cards', cards);
    }

    handleCardDelete = (card) => {
        console.log('card: ', card);
        const { data } = this.state;
        const newData = data.filter((item) => item.id !== card.id);
        this.setState({
            data: newData,
            updateNotifier: Math.random(),
        });
        saveToLocalStorage('cards', newData);
    };

    handleCardEdit = (card, isNew) => {
        const { data } = this.state;
        const newData = data;
        if (isNew) {
            card.id = uuidv4();
            newData.push(card);
        } else {
            const index = data.findIndex((item) => item.id === card.id);
            newData[index] = card;
        }
        this.setState({
            data: newData,
            updateNotifier: Math.random(),
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
                                updateNotifier={this.state.updateNotifier}
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
