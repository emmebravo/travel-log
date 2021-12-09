import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';

const dataMap = data.map((item) => {
  return <Card key={item.title} item={item} />;
});

function App() {
  return (
    <div className='app'>
      <Navbar />
      {dataMap}
    </div>
  );
}

export default App;
