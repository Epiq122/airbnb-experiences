import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

function App() {
  const cardData = data.map((data) => {
    return (
      <Card
        key={data.id}
        {...data}
        // item = {data}
        // img={data.coverImg}
        // rating={data.stats.rating}
        // review={data.stats.reviewCount}
        // title={data.title}
        // location={data.location}
        // price={data.price}
        // openSpots={data.openSpots}
      />
    );
  });
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <section className='cards-list'>{cardData}</section>
    </div>
  );
}

export default App;
