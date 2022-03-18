import logo from './logo.svg';
import './App.css';

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
  backgroundColor: 'gray',
  margin: '20ox',
  borderRadius: '20px'

}

function District(props) {
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.speical}</p>
    </div>
  )
}

export default App;
