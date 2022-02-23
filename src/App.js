import './App.css';
import Header from './Components/Header/Header';
import Teaser from './Components/Teaser/Teaser';
import Button from './Components/Button/Button';
import Description from './Components/Description/Description';
import Goals from './Components/Goals/Goals';
import Plan from './Components/Plan/Plan';
import Teachers from './Components/Teachers/Teachers';

function App() {
  return (
    <>
      <Header />
      <Teaser />
      {/* <Button /> */}
      <Description />
      <Goals />
      <Plan />
      {/* <Teachers /> */}
    </>
  );
}

export default App;
