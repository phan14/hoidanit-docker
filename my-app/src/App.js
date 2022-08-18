import './App.scss';
import Header from './components/Header/Header';
import { Outlet, Link } from "react-router-dom";



const App = () => {
  return (
    <div className="app-container">
      <div className='header-container'>

      </div>
      <Header />
      <div className='main-container'>
        <div className='sidenav-container'>

        </div>
        <div className='app-content'>
          <Outlet />
        </div>
      </div>

      {/* <div>
        test link
        <div>
          <button> <Link to="/users">go to user page</Link>
          </button>

          <button> <Link to="/admins">go to admin page</Link>
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default App;
