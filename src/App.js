import { Route, Routes } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile/Profile';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Profile/>}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
