import React, { useState } from "react";
import Map from "./BoldMap/BoldMap";
import Marker from "./Marker/Marker";



export default function GMap({ placeDetails }) {
 
    const [placeIndex, setPlaceIndex] = useState(0);
    const [bound, setBound] = useState({});
    console.log(placeDetails)
    return (
        <div>
            { placeDetails &&
            <Map
                zoom={10}
                center={{ lat: placeDetails.location.coordinates[0], lng: placeDetails.location.coordinates[1] }}
                events={{ onBoundsChangerd: arg => setBound(arg) }}
            >

                <Marker
                    key={0}
                    position={{ lat: placeDetails.location.coordinates[0], lng: placeDetails.location.coordinates[1] }}
                    events={{
                    }}
                />

            </Map>
}
        </div>
    );
}
