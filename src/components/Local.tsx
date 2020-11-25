import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import './../styles/components/local.scss';
import 'leaflet/dist/leaflet.css';
import { Icon, LatLngTuple } from 'leaflet';
import { FaMapMarkerAlt } from 'react-icons/fa';

function Local() {
    const position: LatLngTuple = [-24.9569075, -53.4658602];
    return (
        <>
            <div className="map">
                <MapContainer
                    center={position}
                    zoom={13}
                    style={{
                        height: '100%',
                    }}
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
            <div className="row descricao-maps align-items-center">
                <div className="col-auto icon">
                    <FaMapMarkerAlt />
                </div>
                <div className="col">
                    <div className="row endereco">
                        Rua Presidente Bernardes, 2009
                    </div>
                    <div className="row descricao">Trabalho</div>
                </div>
            </div>
        </>
    );
}

export default Local;
