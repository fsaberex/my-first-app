import './App.css';
import Movie from './components/Movie';
import Genre from './components/Genre';
import Container from './components/Container';

function App() {
  return (
    <div className="App-header">
      <Movie></Movie>
      <Genre></Genre>
      <Container></Container>
    </div>
  );
}

export default App;
