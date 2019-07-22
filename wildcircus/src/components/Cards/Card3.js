import './Card3.css'

import React, { Component } from 'react'
import {Button} from 'reactstrap'
import Link from 'react-router-dom'

import TrapezistesCard from '../../assets/images/TrapezistesCard.jpg'
import Tour from '../../assets/images/TourPicture.png'
import CracheurCard from '../../assets/images/CracheurCard.jpg'
import DompteurCard from '../../assets/images/DompteurCard.jpg'
import logo from '../../assets/images/WCLogo.png'
import oldPicture from '../../assets/images/OldPictureCircus.jpg'



export default class Card3 extends Component {
    render() {
        return (
          <div>
          <div className='CardsContainerShow'>
          <div className="CardBeer">
          <p className="card-header" >{this.props.name} </p>
            <div className="card-body">
              <img className="card-img" alt='beer img' src={this.props.picture} />
              
            </div>
            <p className="Work">{this.props.genre} </p>
            <p className="card-footer">race: {this.props.race}</p>
            <p className="card-footer-realname"> {this.props.firstname} </p>
            <p className="card-footer-staff"> Compagnon : {this.props.staffName} </p>
            <p className="card-footer-aka"> Aka: {this.props.staffPseudo} </p>
            <button class='detailsButton'>More Details</button>
            <button class='buyButton'>Buy Ticket</button>
        </div>
        </div>
        </div>
        )
    }
}
