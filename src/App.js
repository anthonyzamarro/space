import './App.css';
import { Routes, Route } from "react-router-dom"
import Page from "./components/page/Page"


function App() {
  return (
    <main className="App">
      <Routes>
        <Route path='/' element={<Page page="home" type="1"/>} />
        <Route path='destination' element={<Page page="destination" type="2"/>} />
        <Route path='crew' element={<Page page="crew" type="1"/>} />
        <Route path='technology' element={<Page page="technology" type="1"/>} />
      </Routes>
    </main>
  );
}

export default App;
