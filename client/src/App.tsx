import NavBar from './components/navbar/NavBar';
import { useViewport } from './hooks/useViewport';
import BottomAppBar from './components/bottomBar/BottomBar';
import './App.css';
import ModalBox from './components/modal/Modal';

function App() {
  const { viewPort } = useViewport();

  return (
    <div className="App">
      <NavBar />
      <ModalBox />
      {viewPort < 680 ? <BottomAppBar /> : null}
    </div>
  );
}

export default App;
