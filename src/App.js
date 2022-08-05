import './App.scss';
import Sidebar from './component/Sidebar';

function App() {
  return (
    <div className='main__conteneur'>
      {/* sidebar  */}
      <Sidebar />
      <div className='main'>Main</div>

    </div>
  );
}

export default App;
