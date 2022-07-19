
import './App.css';
import SideBar from './components/SideBar';
import Feed from './components/Feed'
import Widgets from './components/Widgets';
function App() {
  return (
    <div className="App">
        <div className='Sidebar'>
            <SideBar/>
        </div>
        <div className='Feed'>
         <Feed/>
        </div>
        <div className="Widgets">
<Widgets/>
        </div>
    </div>
  );
}

export default App;
