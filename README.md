# Earthquake Visualizer

**Live Demo**: [https://5fspxp-5173.csb.app/](https://5fspxp-5173.csb.app/)  
**GitHub Repo**: [https://github.com/rahul420206/Earthquake-Visualizer](https://github.com/rahul420206/Earthquake-Visualizer)

---

## Goal

> **User Need**: *Casey, a geography student, wants to visualize recent earthquake activity around the world to understand seismic patterns.*

**Solution**:  
A **real-time, interactive world map** that displays **today's earthquakes** using the **USGS Earthquake API**, with:
- Markers sized and colored by **magnitude**
- Clickable popups showing **location, time, and magnitude**
- Full-screen, responsive design
- No repeated world maps
- No black/gray bars on the sides

---

## Screenshots

### Full World View (Zoomed Out)
![Full map showing one world, no blank space](https://raw.githubusercontent.com/rahul420206/Earthquake-Visualizer/main/Screenshot (185).png)

### Earthquake Details Popup
![Click any marker to see magnitude, location, and time](https://raw.githubusercontent.com/rahul420206/Earthquake-Visualizer/main/Screenshot (186).png)

---

## Tech Stack

| Technology        | Purpose |
|-------------------|--------|
| **React + Vite**  | Fast development, modern JSX |
| **Leaflet + react-leaflet** | Lightweight, interactive maps |
| **USGS GeoJSON API** | Real-time earthquake data (no auth) |
| **Plain CSS**     | Minimal, clean styling — no frameworks |

---

## Project Structure

```bash
Earthquake-Visualizer/
├── index.html              # Vite entry point
├── package.json
├── vite.config.js          # React + Vite config
├── src/
│   ├── main.jsx            # React app bootstrap
│   ├── App.jsx             # Layout + header
│   ├── components/
│   │   └── EarthquakeMap.jsx  # Map, data fetching, markers
│   └── styles.css          # Full-screen fix & loading UI
└── public/
    └── vite.svg            # Favicon

Features

Real-time Data: Fetches all_day.geojson from USGS
Interactive Map: Zoom, pan, click markers
Magnitude Visualization:

Size: radius = mag × 4
Color:

Red: ≥ 5.0
Orange: 4.0 – 4.9
Yellow: 3.0 – 3.9
Green: < 3.0




Popups: Magnitude, place, time (local format)
Responsive: Works on mobile & desktop
Error Handling: Loading state + network error message
One World Only: No wrapping, no blank space


Key Fixes Implemented





























IssueFixRepeated world mapsnoWrap={true} + maxBoundsBlack/gray side barsCSS: width: 100vw, height: 100vh, ocean backgroundJSX in .js fileRenamed index.js → main.jsxDuplicate index.htmlRemoved public/index.htmlStackBlitz preview not shareableSwitched to CodeSandbox static deploy

How It Works

main.jsx → mounts React app
App.jsx → renders header + <EarthquakeMap />
EarthquakeMap.jsx:

Fetches USGS data on mount
Renders Leaflet map with MapContainer
Loops through earthquakes → creates Marker with custom divIcon
Shows Popup on click


styles.css → forces full-screen map with ocean background


Deployment
Deployed on: CodeSandbox (static, permanent URL)
Steps:

Pushed code to GitHub
Imported via: codesandbox.io/s/github
Auto-detected Vite + React
Live URL: https://5fspxp-5173.csb.app/

Works in:

Incognito mode
Mobile devices
Any browser, anywhere


Run Locally
bashgit clone https://github.com/rahul420206/Earthquake-Visualizer.git
cd Earthquake-Visualizer
npm install
npm run dev
Open: http://localhost:5173

API Used
texthttps://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson

Public, no key
Updated every minute
GeoJSON format


Submission Summary


LevelDelivered
Level 1 (50%)AI-assisted development + clear problem-solving
Level 2 (30%)Fully working, deployed, shareable app
Level 3 (20%)Clean, readable, well-structured code

Future Improvements (Optional)

Filter by magnitude/time
Search by country
Dark mode
Earthquake history slider


Built with care — simple, fast, functional.
Perfect for geography students like Casey.