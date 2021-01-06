
import Header from './Header'
import  Head from 'next/head';
//import mapboxgl from 'mapbox-gl'
//const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

//mapboxgl.accessToken = 'sk.eyJ1IjoidmlqYXkxMzE5NCIsImEiOiJja2pjaXhjeGYyMHRzMndydTVnaHdib2NsIn0.O_1MRlv16cncxIW9elMM_A';
/*const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
});*/
const Layout = ({children}) => {
    return (
        <div >
    <Head>
    
<link href='https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css'
 rel='stylesheet' />
 <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v2.0.1/mapbox-gl.css' rel='stylesheet' />

   
    </Head>
        <div className="header-page">
         <Header />   
        </div> 
        {children}
        </div>
    )
}

export default Layout
