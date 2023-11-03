import Game from './TripsTraps.js';
function App() {
  return (
    <div>
      <h1>Trips traps trull</h1>
      <p>Mäng järgib <a href="https://react.dev/learn/tutorial-tic-tac-toe"> Reacti õpetust</a> </p>
      <p>Testimise osas on <a href="https://kentcdodds.com/blog/common-mistakes-with-react-testing-library#not-using-screen">kasutatud Kent C. Dodds blogi juhiseid</a></p>
      <Game />
    </div>
  );
}

export default App;
