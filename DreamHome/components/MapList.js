import React from 'react';
import MapPin from './MapPin';

const MapList = ({ data }) => {
  console.log('MAPLIST', data);
  return (
    <>
      {data[0].map((town) => (
        <MapPin town={town} />
      ))}
    </>
  );
};

export default MapList;
