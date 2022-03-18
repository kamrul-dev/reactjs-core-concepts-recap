import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getByTitle } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
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

// load the data from jsonplaceholder api and create component
function LoadPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, [])
  return (
    <div>
      <h1>Posts: {posts.length}</h1>
      {
        posts.map(post => <Post
          title={post.title}
          body={post.body}
          key={post.id}
        ></Post>)
      }
    </div>
  )
}

// create post component
function Post(props) {
  return (
    <div style={{ backgroundColor: 'lightgray', margin: '20px', border: '4px solid lightsalmon' }}>
      <h2>Title: {props.title}</h2>
      <p>Body: {props.body}</p>
    </div>
  )
}

export default App;
