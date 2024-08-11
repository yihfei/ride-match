import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RideOption from './components/RideOption';
import RideOptionsList from './components/RideOptionsList';
import styles from './App.module.css';

const rideOptions = [
  { service: 'Grab', type: 'Standard', price: 12.50, eta: 5 },
  { service: 'Gojek', type: 'Premium', price: 15.00, eta: 7 },
  { service: 'ComfortDelGro', type: 'Standard', price: 13.00, eta: 6 },
];

const App = () => {
  return (
    <div>
      <h1>Ride Options</h1>
      <RideOptionsList rideOptions={rideOptions} />
    </div>
  );
};


export default App
