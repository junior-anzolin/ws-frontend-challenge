import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import { Icon, LatLngTuple } from 'leaflet';

function Local() {
    const position: LatLngTuple = [-24.9569075, -53.4658602];
    return (
        <>
            <div className="row" style={{ height: '250px' }}>
                <MapContainer
                    center={position}
                    zoom={13}
                    style={{ height: '100%' }}
                >
                    <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker
                        position={position}
                        icon={
                            new Icon({
                                iconUrl:
                                    'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                                iconSize: [25, 35],
                            })
                        }
                    />
                </MapContainer>
            </div>
        </>
    );
}

export default Local;
