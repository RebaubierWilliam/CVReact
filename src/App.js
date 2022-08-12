import './App.scss';
import Sidebar from './component/Sidebar';
import Header from './component/Header';
import Portrait from './component/Portrait';

function App() {
  return (
    <div className='main__conteneur'>
      <Portrait/>
      <Header/>
      <Sidebar />
      <div className='center__conteneur'>Main</div>

    </div>
  );
}

export default App;
