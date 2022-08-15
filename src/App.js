import './App.scss';
import Sidebar from './component/Sidebar';
import Header from './component/Header';
import Portrait from './component/Portrait';
import Center from './component/Center';

function App() {
  return (
    <div className='main__conteneur'>
      <Portrait/>
      <Header/>
      <Sidebar />
      <Center />
    </div>
  );
}

export default App;
