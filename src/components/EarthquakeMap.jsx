import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icons (required for Vite)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const USGS_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';

export default function EarthquakeMap() {
  const [quakes, setQuakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(USGS_URL)
      .then(r => {
        if (!r.ok) throw new Error('Network error');
        return r.json();
      })
      .then(data => {
        console.log('Fetched data:', data); // ← you will see this in console
        setQuakes(data.features);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Simple magnitude → size & color
  const radius = mag => Math.max(5, mag * 4);
  const color = mag => {
    if (mag >= 5) return '#d73027';
    if (mag >= 4) return '#fc8d59';
    if (mag >= 3) return '#fee08b';
    return '#91cf60';
  };

  return (
    <div style={{ height: '100vh', position: 'relative' }}>
<MapContainer
  center={[20, 0]}
  zoom={2}
  minZoom={2}
  maxZoom={10}
  maxBounds={[[-85, -180], [85, 180]]}
  maxBoundsViscosity={1.0}
  worldCopyJump={false}
  noWrap={true}
  style={{ height: '100%', width: '100%' }}
>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; OpenStreetMap contributors'
    noWrap={true}
  />

  {/* ---- all your <Marker …> stay exactly the same ---- */}
  {quakes.map(q => {
    const [lng, lat] = q.geometry.coordinates;
    const p = q.properties;
    return (
      <Marker
        key={q.id}
        position={[lat, lng]}
        icon={L.divIcon({
          className: '',
          html: `<div style="
            background:${color(p.mag)};
            width:${radius(p.mag)}px;
            height:${radius(p.mag)}px;
            border-radius:50%;
            border:2px solid white;
            box-shadow:0 0 6px rgba(0,0,0,.5);
          "></div>`,
          iconSize: [radius(p.mag), radius(p.mag)],
          iconAnchor: [radius(p.mag) / 2, radius(p.mag) / 2],
        })}
      >
        <Popup>
          <div style={{ fontSize: '0.9rem' }}>
            <strong>Magnitude:</strong> {p.mag?.toFixed(1)}<br />
            <strong>Location:</strong> {p.place}<br />
            <strong>Time:</strong> {new Date(p.time).toLocaleString()}
          </div>
        </Popup>
      </Marker>
    );
  })}
</MapContainer>

      {loading && <div className="loading">Loading earthquakes…</div>}
      {error && <div className="error">Error: {error}</div>}
    </div>
  );
}