import React, { Component } from 'react'
import {Col, Row} from 'reactstrap'
import Mynavbar from '../components/NavBar/navbar'
import MyCarouselAnimals from '../components/Carousel/carouselAnimals'
import Card3 from '../components/Cards/Card3'
import Axios from 'axios';


 
const GetAnimalURL= "/Animals"



export default class Shows extends Component {

    constructor(props){
        super ( props)
        this.state = {
            animals:[],
            staffs:[],
        }
    }
    getAnimals(){
      Axios.get(GetAnimalURL)
      .then(response => {
          console.log(response)
      this.setState({
          animals: response.data.Animals
      })})
    }
    
    componentDidMount() {
        this.getAnimals()
        
    }
    
    render() {
        return (
            <div className='BackgroundHomepage'>
                <Mynavbar/>
                <h1 className='MainEventTitle'>Our Animals</h1>
                    <MyCarouselAnimals/>
                <Row>
                    {
                        this.state.animals.map((animal, idx)=>{
                            
                                return (
                                    <Col key={idx} xs={3}>
                                        <Card3
                                         name={animal.firstname} 
                                         genre={animal.genre} 
                                         race={animal.race} 
                                         staffName={animal.staff.firstname}
                                          staffPseudo={animal.staff.pseudonym} 
                                          picture={animal.picture}/>
                                    </Col>
                                )
                            
                            
                        })
                    }
                </Row>
                
                
            </div>
        )
    }
}
