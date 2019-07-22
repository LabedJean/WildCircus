import './Card4.css'

import React, { Component } from 'react'
import {Button} from 'reactstrap'
import Link from 'react-router-dom'

import TrapezistesCard from '../../assets/images/TrapezistesCard.jpg'
import Clown from '../../assets/images/Clown.jpg'
import CracheurCard from '../../assets/images/CracheurCard.jpg'
import DompteurCard from '../../assets/images/DompteurCard.jpg'

const prettifyDate = (birthdateString) => {
  if (birthdateString) {
    let murricanBirthdate = birthdateString.split('T')[0].split('-')
    let prettyBirthdate = murricanBirthdate[2] + '/' + murricanBirthdate[1] + '/' + murricanBirthdate[0]
    return prettyBirthdate
  }
  else return 'Non spécifiée'
}

export default class Card4 extends Component {

  
    render() {
      
        return (

           
        <div className='CardsContainer4'>
            <div className="CardBeer">
            <p className="card-header" >{this.props.pseudo} </p>
              <div className="card-body">
                <img className="card-img" alt='beer img' src={this.props.picture} />
               
              </div>
              <p className="Work">{this.props.work} </p>
              <p className="card-footer"> 10$</p>
              <p className="card-footer-realname"> Real name : {this.props.name} {this.props.firstname} </p>
              <p className="card-footer-date"> Date: {prettifyDate(this.props.date)} </p>
              <button class='detailsButton'>More Details</button>
              <button class='buyButton'>Buy Ticket</button>
          </div>
          </div>

        )
    }
}
