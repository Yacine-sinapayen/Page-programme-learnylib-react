import './App.css';
import Header from './Components/Header/Header';
import Teaser from './Components/Teaser/Teaser';
import Button from './Components/Button/Button';
import Description from './Components/Description/Description';
import Goals from './Components/Goals/Goals';
import Plan from './Components/Plan/Plan';
import TeachersContainer from './Components/Teachers/TeachersContainer/TeachersContainer';


function App() {
  return (
    <>
      <Header />
      <Teaser />
      <Button />
      <Description />
      <Goals />
      <Plan />
      <TeachersContainer />
    </>
  );
}

export default App;
