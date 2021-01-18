import React, { Children } from 'react';
import GoogleMapReact from 'google-map-react';
import Bitmoji1 from '../images/bitmoji1.png';
import Bitmoji2 from '../images/bitmoji2.png';
import Bitmoji3 from '../images/bitmoji3.png';
import Bitmoji4 from '../images/bitmoji4.png';
import Bitmoji5 from '../images/bitmoji5.png';

const Marker = ({children}) => children;

export default function Maps() {

    return(
        <div style={{color: 'white', width: '100vw', height: '90vh'}}>
            <GoogleMapReact 
                bootstrapURLKeys={{key: "AIzaSyD6h8yv6w193to5tlT1nSjDChnfX6_Ok2w"}}
                defaultCenter={{lat: 51.600118, lng: 5.226617}}
                defaultZoom={13}
            >
                <Marker key="joejoe" lat="51.600490" lng="5.224799"><img src={Bitmoji1} alt="not found" style={{width: '70px', height: '70px'}}/></Marker>
                <Marker key="joejoe" lat="51.601815" lng="5.222478"><img src={Bitmoji2} alt="not found" style={{width: '70px', height: '70px'}}/></Marker>
                <Marker key="joejoe" lat="51.600084" lng="5.226987"><img src={Bitmoji3} alt="not found" style={{width: '70px', height: '70px'}}/></Marker>
                <Marker key="joejoe" lat="51.600031" lng="5.234049"><img src={Bitmoji4} alt="not found" style={{width: '70px', height: '70px'}}/></Marker>
                <Marker key="joejoe" lat="51.606060" lng="5.226945"><img src={Bitmoji5} alt="not found" style={{width: '70px', height: '70px'}}/></Marker>
            </GoogleMapReact>
        </div>
    )
}