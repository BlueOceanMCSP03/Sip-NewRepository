import React from 'react';
import style from './Drink_Search.module.css';
import Bar from '../Navigation/Bar'
import history from '../../Routing/history';

import { compose, withProps, lifecycle } from 'recompose';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from 'react-google-maps';
import { SearchBox } from 'react-google-maps/lib/components/places/SearchBox';
import config from '../../../../config.js';

const _ = require('lodash');


const MapWithASearchBox = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${config.apiKey}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    lifecycle({
        componentWillMount() {
            const refs = {}
            
            this.setState({
                bounds: null,
                center: {
                    lat: 30.2657, lng: -97.7497
                },
                markers: [],
                places: [],
                onMapMounted: ref => {
            refs.map = ref;
        },
        onBoundsChanged: () => {
            this.setState({
                bounds: refs.map.getBounds(),
                center: refs.map.getCenter(),
            })
        },
        onSearchBoxMounted: ref => {
            refs.searchBox = ref;
        },
        onPlacesChanged: () => {
            const places = refs.searchBox.getPlaces();
            const bounds = new google.maps.LatLngBounds();
            
            // console.log(places)
            
            places.forEach(place => {
                if (place.geometry.viewport) {
                    bounds.union(place.geometry.viewport)
                } else {
                    bounds.extend(place.geometry.location)
                }
                
                const distance = (lat1, lon1, lat2, lon2, unit) => {
                    if ((lat1 == lat2) && (lon1 == lon2)) {
                        return 0;
                    }
                    else {
                        var radlat1 = Math.PI * lat1/180;
                        var radlat2 = Math.PI * lat2/180;
                        var theta = lon1-lon2;
                        var radtheta = Math.PI * theta/180;
                        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
                        if (dist > 1) {
                            dist = 1;
                        }
                        dist = Math.acos(dist);
                        dist = dist * 180/Math.PI;
                        dist = dist * 60 * 1.1515;
                        if (unit=="K") { dist = dist * 1.609344 }
                        if (unit=="N") { dist = dist * 0.8684 }
                        return dist;
                    }
                }
                
                let storeLat = place.geometry.viewport.Za.i
                let storeLng = place.geometry.viewport.Ua.i

                // const storeDistance = distance(this.state.center.lat, this.state.center.lng, storeLat, storeLng);

                // return storeDistance;

            //   if (place.types.includes('cafe')) {
            //       this.state.shopList.push({
            //         name: place.name,
            //         address: place.formatted_address,
            //         rating: place.rating,
            //         distance: distance(this.state.center.lat, this.state.center.lng, storeLat, storeLng),
                //     photo: typeof place.photos !== 'undefined'
                //             ? place.photos[0].getUrl({'maxWidth': 100, 'maxHeight': 100}) : ''
                // })
            //   }

            //   const storeListResults = () => {
            //     let results = storeList.map((store) => {
            //         <li>{store.name}</li>
            //     })
            //     return (
            //         <ul>{results}</ul>
            //     )
            //   }
            //   ReactDOM.render(storeListResults(), document.getElementById('storeResults'))

            // return(
                
                // <li className={style.shopResult} onClick={() => history.push("/Shop")}>
                //     {store.name}
                // </li>
                // ReactDOM.render(<div>{storeList.map((store, index) => {<div key={index}><img src={store.photo}/><br/><div className="storeName">{store.name}</div><br/><div className="storeAddress">{store.address}</div></div>})}</div>, document.getElementById('storeResults'))

            // )
            });
              console.log(places)

            const nextMarkers = places.map(place => ({
              position: place.geometry.location,
            }));
            const nextCenter = _.get(nextMarkers, '0.position', this.state.center);
  
            this.setState({
              center: nextCenter,
              markers: nextMarkers,
              places: places,
            });
          },
        })
      },
    }),
    withScriptjs,
    withGoogleMap
  )(props =>
    <div className={style.mapResults}>
    <GoogleMap
      ref={props.onMapMounted}
      defaultZoom={17}
      center={props.center}
      onIdle={props.onIdle}
    >
      <SearchBox
        ref={props.onSearchBoxMounted}
        bounds={props.bounds}
        controlPosition={google.maps.ControlPosition.TOP_LEFT}
        onPlacesChanged={props.onPlacesChanged}
      >
        <input
          type="text"
          placeholder="Search"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `30%`,
            height: `32px`,
            marginTop: `27px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
          }}
        />
      </SearchBox>
      {props.markers.map((marker, index) =>
        <Marker key={index} position={marker.position} />
      )}
    </GoogleMap>
    <div className={style.shopResults} id="storeResults">
      {props.places.map((e, i) => <div key={i} className={style.shopResult} onClick={() => history.push("/Shop")}>{e.name}<br/>{e.formatted_address}<br/></div>)}
        </div>
    </div>
  );

const Drink_Search = () => (

    <div className={style.body}>
        <div>
            <h1>Nearby</h1>
            <label className={style.optionTextStyle}>Search By Choice</label>
            <br></br>
            <input type="checkbox"></input>
            <label className={style.optionTextStyle}>Mocha</label>
            <br></br>
            <input type="checkbox"></input>
            <label className={style.optionTextStyle}>Cappucino</label>
            <br></br>
            <input type="checkbox"></input>
            <label className={style.optionTextStyle}>Tea</label>
            <br></br>
            <input type="checkbox"></input>
            <label className={style.optionTextStyle}>Latte</label>
            <br></br>
        </div>
        <div className="map">
                  <MapWithASearchBox />
        </div>
        <Bar />
    </div>
);



export default Drink_Search;