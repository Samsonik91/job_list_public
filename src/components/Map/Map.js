import React, {useMemo} from 'react'
import {GoogleMap, Marker, useLoadScript} from "@react-google-maps/api"
import GmapsMarker from '../../icons/gmaps_marker.png'
import {defaultTheme} from './Theme'

const Map = ({location}) => {

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API
    })

    const lat = location.lat
    const lng = location.long

    const center = useMemo(()=>({lat, lng}), [])

    if(!isLoaded) return <div>Loaded...</div>

    return (
        <GoogleMap
            zoom={10}
            center={center}
            options={{
                zoomControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
                streetViewControl: false,
                gestureHandling: 'none',
                styles: defaultTheme
            }}
            mapContainerClassName='w-full h-full bg-#2A3047 rounded-b-[0.5rem]'
        >
            <Marker position={center} options={{
                icon: GmapsMarker
            }}/>
        </GoogleMap>
    )
}

export default Map