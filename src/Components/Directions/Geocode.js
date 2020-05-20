

import Geocode from "react-geocode";


const geocode = ( val,obj,field  ) => {

    Geocode.setApiKey('AIzaSyBG_U7llCBV6Q-OdBP5Sa_VhyuGuyL6Fzk');
    Geocode.setLanguage('en');
    Geocode.enableDebug();

    Geocode.fromAddress(val).then(

        res => {
            const { lat, lng } = res.results[0].geometry.location;
            console.log(lat, lng)
            const copyData = { ...obj.state.data }
        copyData.gendata[field] = {lat, lng}
        
        obj.setState({ data: copyData },()=>{
            console.log(obj.state)
        })
    
            
        },
        err => {
            console.log(err)
        }

    );


}


export default geocode;