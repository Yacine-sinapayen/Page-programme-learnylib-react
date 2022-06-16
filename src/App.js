import './App.css';
import Header from './Components/Header/Header';
import Teaser from './Components/Teaser/Teaser';
import Button from './Components/Button/Button';
import Description from './Components/Description/Description';
import Goals from './Components/Goals/Goals';
import Plan from './Components/Plan/Plan';
import TeachersContainer from './Components/Teachers/TeachersContainer/TeachersContainer';
import data from './Data/dentaire/chirurgie-muco'



function App() {

  return (
    <>
      <Header data={data}/>
      <Teaser  data={data} />
      <Button />
      <Description data={data} />
      <Goals data={data}/>
      <Plan data={data} />
      <Button />
      <TeachersContainer data={data} />
    </>
  );
}

export default App;
