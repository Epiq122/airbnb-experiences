import katie from './images/katie-zaferes.png';
import './images/katie-zaferes.png';
import './images/wedding-photography.png';
import coverImg from './data';

import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';
function App() {
  const cardData = data.map((data) => {
    return <Card img={data.coverImg} />;
  });
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      {/* <Card
        img={katie}
        rating='5.0'
        reviewCount='(6)'
        location='•USA'
        title='Life Lessons with Katie Zaferees'
        price={136}
      /> */}
      {cardData}
    </div>
  );
}

export default App;
