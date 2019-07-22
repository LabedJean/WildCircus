import React, { Component } from 'react'
import Mynavbar from './NavBar/navbar'
import MyCarousel from './Carousel/carousel'
import './Homepage.css'
import Card3 from '../components/Cards/Card3'
import HomepagePicture from '../assets/images/HomepagePicture.jpg'

import AboutPicture from '../assets/images/WCLogo.png'
import HistoryPicture from '../assets/images/OldPictureCircus.jpg'
import TourPicture from '../assets/images/TourPicture.png'




export default class Homepage extends Component {
    render() {
        return (
        <div>
            <div className='BackgroundHomepage'>
                <Mynavbar/>
                <div className='HeadPictureContainer'>
                <img src={HomepagePicture}
                alt="HomePagePicture" />
                
            </div>
            <p className='WelcomeTitle'>Welcome to the Wildest Circus ever !</p> 
            <div className="AboutUsContainer">
            <img className="aboutPicture" alt="aboutpicture"
                    src={AboutPicture}
                    />
                    <p className="sectionTitle">About US</p>
                    
                    <p className="sectionText"> Fusce sodales eget tortor et dapibus. Sed a tellus at mi eleifend pellentesque. Nullam tincidunt, sem a congue tincidunt, ex nisl cursus justo, vitae ultricies urna urna laoreet ante. Ut suscipit augue eget sodales blandit. Ut a malesuada est, eu fermentum dui. Suspendisse id nulla quis ex hendrerit fermentum a non mauris. Pellentesque vel luctus nunc, eget tristique diam. Donec quis pretium nunc. Etiam volutpat volutpat neque non elementum. Aliquam libero odio, rutrum quis tristique eget, congue et est.
                    </p>
                    
            </div> 
            <div className="HistoryContainer">
                    <p className="sectionTitleHistory">History</p>
                    <img className="historyPicture" alt="aboutpicture"
                    src={HistoryPicture}
                    />
                    <p className="sectionText"> Fusce sodales eget tortor et dapibus. Sed a tellus at mi eleifend pellentesque. Nullam tincidunt, sem a congue tincidunt, ex nisl cursus justo, vitae ultricies urna urna laoreet ante. Ut suscipit augue eget sodales blandit. Ut a malesuada est, eu fermentum dui. Suspendisse id nulla quis ex hendrerit fermentum a non mauris. Pellentesque vel luctus nunc, eget tristique diam. Donec quis pretium nunc. Etiam volutpat volutpat neque non elementum. Aliquam libero odio, rutrum quis tristique eget, congue et est.
                    </p>
            </div> 
            <div className="TourContainer">
                    <p className="sectionTitle">Tour</p>
                    <img className="aboutPicture" alt="aboutpicture"
                    src={TourPicture}
                    />
                    <p className="sectionText"> Fusce sodales eget tortor et dapibus. Sed a tellus at mi eleifend pellentesque. Nullam tincidunt, sem a congue tincidunt, ex nisl cursus justo, vitae ultricies urna urna laoreet ante. Ut suscipit augue eget sodales blandit. Ut a malesuada est, eu fermentum dui. Suspendisse id nulla quis ex hendrerit fermentum a non mauris. Pellentesque vel luctus nunc, eget tristique diam. Donec quis pretium nunc. Etiam volutpat volutpat neque non elementum. Aliquam libero odio, rutrum quis tristique eget, congue et est.
                    </p>
            </div>  
            </div>
        </div>
        )
    }
}
