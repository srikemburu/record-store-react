
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Records from "./components/Records"
import OneRecord from "./components/OneRecord"
import NewRecord from "./components/NewRecord"
import DeleteRecord from './components/DeleteRecord';
import UpdateRecord from './components/UpdateRecord';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Records/> } /> 
          <Route path="/:id" element={<OneRecord/> } /> 
          <Route path="/new" element={<NewRecord/> } /> 
          <Route path="/delete/:id" element={<DeleteRecord/> } />
          <Route path="/:id/update" element={<UpdateRecord/> } />
        </Routes>
      </Router>       
    </div>
  );
}

export default App
