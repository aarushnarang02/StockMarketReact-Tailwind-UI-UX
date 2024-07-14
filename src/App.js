import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Experts from './components/Experts';
import NewsLetter from './components/NewsLetter';
import Plans from './components/Plans';

function App() {
  return (
    <div className="App">
       <Header/>
       <Banner/>
       <Experts/>
       <NewsLetter/>
       <Plans/>
    </div>
  );
}

export default App;
