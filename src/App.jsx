import Player from './components/Player.jsx';
import Challenge from './components/Challenge.jsx'


function App() {


  return (
    <>
      <Player />
      <div id="challenges">
        <Challenge level="easy" targetTime="1" />
        <Challenge level="medium" targetTime="5" />
        <Challenge level="Hard" targetTime="10" />
        <Challenge level="Only Pros" targetTime="15" />
      </div>
    </>
  );
}

export default App;
