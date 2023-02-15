import './App.css';
import { Routes, Route } from 'react-router-dom';
import Add from './pages/Add';
import Edit from './pages/Edit';
import Students from './pages/Students';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Students />}/>
        <Route path='/add' element={<Add />}/>
        <Route path='/edit/:id' element={<Edit />}/>
      </Routes>
    </div>
  );
}

export default App;
