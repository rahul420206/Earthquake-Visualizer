import EarthquakeMap from './components/EarthquakeMap';

export default function App() {
  return (
    <>
      <header style={{ background: '#222', color: 'white', padding: '0.5rem', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '1.4rem' }}>Earthquake Visualizer</h1>
      </header>
      <EarthquakeMap />
    </>
  );
}