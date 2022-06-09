import katie from './img/image 12.png';

import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Card
        img={katie}
        rating='5.0'
        reviewCount='(6)'
        country='•USA'
        title='Life Lessons with Katie Zaferees'
        price={136}
      />
    </div>
  );
}

export default App;
