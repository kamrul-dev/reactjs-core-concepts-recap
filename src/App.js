import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <District name="NoaKhali" speical="Bivag"></District>
      <District name='Brahmonbaria' speical='Joddha Akbar'></District>
      <District name='Cumilla' speical="Moyna moti"></District>
    </div>
  );
}

const districtStyle = {
  backgroundColor: 'lightblue',
  margin: '20px',
  borderRadius: '20px',
  padding: '20px'

}

function District(props) {
  const [power, setPower] = useState(1);
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.speical}</p>
      <h3>Power: {power}</h3>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  )
}

export default App;
