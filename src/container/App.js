import { Component } from 'react'
import './App.css';
import 'tachyons'
import CardList from '../components/CardList/CardList'
import SearchField from '../components/SearchField/SearchField'
import CardType from '../components/CardType/CardType'
import Scroll from '../components/Scroll/Scroll'

class App extends Component {
  constructor() {
    super()

    this.state = {
      Cards: [],
      SearchField : '',
      CardType : 1
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ Cards: users }))
  }

  searchCard = (event) => {
    this.setState({ SearchField: event.target.value })
  }

  selectCardType = (event) => {
    console.log(event.target.selectedIndex + 1 )
    this.setState({ CardType: event.target.selectedIndex + 1 })
  }

  render() {
    const filteredCard = this.state.Cards.filter(card => {
      return card.name.toLowerCase().includes( this.state.SearchField )
    })
    return (
      <div className="App">
        <h1>CARD GENERATOR</h1>
        <div className='h4 pa3 ma3'>
            <SearchField searchCard={this.searchCard}/>
            <CardType selectCardType={this.selectCardType}/>
        </div>
        <Scroll>
          <CardList Cards={ filteredCard } CardType={ this.state.CardType }/>
        </Scroll>
      </div>
    );
  }
}

export default App;
