import React, { Component } from 'react'
import {Col, Row} from 'reactstrap'
import Mynavbar from '../NavBar/navbar'
import MyCarousel from '../Carousel/carousel'
import './Shows.css'
import Card4 from '../../components/Cards/Card4'
import Axios from 'axios';
import DompteurCard from '../../assets/images/DompteurCard.jpg'

 
const GetShowURL= "/shows"
const GetStaffURL = "/staffs"


export default class Shows extends Component {

    constructor(props){
        super ( props)
        this.state = {
            shows:[],
            staffs:[],
        }
    }
    getStaffs(){
      Axios.get(GetStaffURL)
      .then(response => {
          console.log(response)
      this.setState({
          staffs: response.data.Staffs
      })})
    }
    
    getShows(){
        Axios.get(GetShowURL)
        .then(response => {
            console.log(response)
        this.setState({
            shows: response.data.Shows
        })})
    }
    //    getShows() {Axios.get(getShows)
    //    .then (response =>{
    //        console.log(response)
    //    }
    componentDidMount() {
        this.getShows()
        
    }
    
    render() {
        return (
            <div className='BackgroundHomepage'>
                <Mynavbar/>
                <h1 className='MainEventTitle'>Top Shows</h1>
                    <MyCarousel/>
                <h1 className='MainEventTitle'>Main Events</h1>
                <Row className="RowTamere">
                    {
                        this.state.shows.map((show, idx)=>{
                            
                                return (
                                    <div className="warptamere" key={idx} >
                                        <Card4 
                                        picture={show.staff.picture}
                                        name={show.staff.name} 
                                        work={show.staff.work} 
                                        firstname={show.staff.firstname} 
                                        pseudo={show.staff.pseudonym} 
                                        date={show.date} />
                                    </div>
                                )
                            
                            
                        })
                    }
                </Row>
                
                
            </div>
        )
    }
}
