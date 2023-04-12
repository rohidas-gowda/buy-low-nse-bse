import React from 'react';
import Abrasives from './Abrasives';
import Agriculture from './Agriculture';
import AirConditioners from './AirConditioners';
import Airlines from './Airlines';
import AluminiumAndAluminiumProducts from './AluminiumAndAluminiumProducts';
import AmusementParksRecreationClub from './AmusementParksRecreationClub';
import Header from './Header';

function Sectors() {
  return (
    <div>
    <Header />
    <div className='grid gap-4 grid-cols-4'>
        <Abrasives />
        <Agriculture />
        <AirConditioners />
        <Airlines />
        <AluminiumAndAluminiumProducts />
        <AmusementParksRecreationClub />
    </div>
    </div>
  )
}

export default Sectors