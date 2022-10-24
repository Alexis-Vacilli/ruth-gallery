import React, {useState} from 'react'
import './App.scss';
import { Home, Navbar, Sidebar } from './components';

function App() {
  const [toggle, settoggle] = useState(false);
  const handleToggle = (e) => {
    e.preventDefault();
    return settoggle(!toggle)
  }
  return (
    <div className="App">
      {toggle && <Sidebar handleToggle={handleToggle}/>}
      <Navbar handleToggle={handleToggle}/>
      <Home />
    </div>
  );
}

export default App;
