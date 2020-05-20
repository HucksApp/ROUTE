
import React, { Component } from 'react'
import MyMapComponent from './MyMapComponent'
import geocode from './Directions/Geocode'
import { BrowserRouter, Route, withRouter, Link } from 'react-router-dom'
import { bounceInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';


import '../styles/form.css'

 class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
                    data:{
                        fromAddress:"",
                        toAddress:"",
                        country:"",
                        gendata:{
                            loc1:"",
                            loc2:""
                        }

                    }
                    
        }
    }




    handlechange = (e)=>{
            const copyData = { ...this.state.data }
            copyData[ e.target.id ] = e.target.value
            this.setState({ data: copyData })
    }

 handleSubmit = () =>{

      const loc1 =  geocode(this.state.data.fromAddress,this,'loc1')
      const loc2 =  geocode(this.state.data.toAddress, this, 'loc2')


    }



  render() {


const styles = {
    bounceInUp: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounceInUp, 'bounceInUp')
    }
}



    return (
      <div>
      <BrowserRouter>
         <div className="input_cover" >
            
            <input id="country" type="text" onChange={this.handlechange} placeholder="COUNTRY" required />
        </div>
         <div className="input_cover">
           
            <input id="fromAddress" onChange={this.handlechange} type="text" placeholder="From Address" required />
        </div>
         <div className="input_cover">
            
            <input id="toAddress" onChange={this.handlechange} type="text" placeholder="To Address" required />
        </div>
        
        <div>
        <Link to="/map" ><button type="submit" onClick={this.handleSubmit}> CHECK</button></Link>
        </div>
        
        <Route path="/map">

        <StyleRoot>
        <div style={styles.bounceInUp} >
        <MyMapComponent locatn = {this.state.data.gendata} />
        </div>
        </StyleRoot>

        </Route>
        </BrowserRouter>

      </div>
    )
  }
}

export default Form;
