import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  changeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCounty = () => {
    const {activeCapitalId} = this.state
    const activeCountry = countryAndCapitalsList.find(
      eachItem => eachItem.id === activeCapitalId,
    )
    return activeCountry
  }

  render() {
    const {activeCapitalId} = this.state
    const {country} = this.getCounty()
    return (
      <div className="app-container">
        <div className="capitals-card-container">
          <h1 className="main-heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              value={activeCapitalId}
              onChange={this.changeCapital}
              className="select-capital"
            >
              {countryAndCapitalsList.map(eachItem => (
                <option
                  value={eachItem.id}
                  className="option"
                  key={eachItem.id}
                >
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="note">is capital of which country</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
