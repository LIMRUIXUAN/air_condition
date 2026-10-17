# AERO-NEXUS ASEAN | Equatorial Atmospheric & Air Quality Matrix
### Real-Time Air Quality & Transboundary Atmospheric Map for Malaysia 🇲🇾, Singapore 🇸🇬, and Indonesia 🇮🇩

[![Live Demo](https://img.shields.io/badge/Status-Live%20Sensors%20Active-10b981?style=for-the-badge&logo=satellite)](http://localhost:3000)
[![Coverage](https://img.shields.io/badge/Coverage-Malaysia%20%E2%80%A2%20Singapore%20%E2%80%A2%20Indonesia-06b6d4?style=for-the-badge)](http://localhost:3000)
[![PWA](https://img.shields.io/badge/PWA-Mobile%20Weather%20App%20Ready-8b5cf6?style=for-the-badge&logo=apple)](http://localhost:3000)

A sleek, futuristic dark-mode atmospheric command center and mobile weather app that connects **Malaysia, Singapore, and Indonesia** in real time, featuring interactive cartography, animated cross-border haze corridors, and verified government telemetry.

---

## 🌟 Key Features

- **One-Click Instant Preview**: Tap any city marker or search by name to smoothly fly in and view live AQI, PM2.5, PM10, temperature, humidity, wind vectors, and health recommendations.
- **Dynamic Zoom-Responsive Clustering (LOD)**:
  - **Overview / Minimized View (`zoom < 8`)**: Singapore displays **one clean average badge** (`Singapore (Avg)`), preventing badge overlaps with Johor Bahru (North) and Batam (South).
  - **Magnified / Detailed View (`zoom >= 8`)**: Automatically breaks open into the **5 normal NEA sector stations** (Central, North, South, East, West).
- **Subtle Cross-Border Atmospheric Corridors**:
  - Animated glowing geodesic conduits showing equatorial wind dispersion:
    - *Sumatra ➔ Singapore ➔ Johor Bahru* (Malacca & Singapore Strait flow)
    - *Sumatra ➔ Malacca ➔ Klang Valley (Kuala Lumpur)*
    - *North Sumatra ➔ Penang Airway*
    - *West Kalimantan ➔ Kuching (Sarawak)*
    - *South Sumatra ➔ Batam & Singapore*
- **Real-World Verified Sources & Telemetry**:
  - Direct live feeds from **Open-Meteo Air Quality & Weather API**
  - Live Singapore **data.gov.sg NEA PSI API** telemetry
  - Optional support for **WAQI (aqicn.org)** and **OpenWeatherMap**
  - Direct verified links to official portals:
    - 🇲🇾 Malaysia DOE APIMS (Air Pollutant Index Management System)
    - 🇸🇬 Singapore NEA Haze & PSI Portal
    - 🇮🇩 Indonesia KLHK ISPUnet & BMKG
    - 🛰️ ASEAN Specialised Meteorological Centre (ASMC)
- **Mobile Weather App Experience (PWA)**:
  - Native bottom-sheet drawer with drag handle.
  - Web App Manifest and custom icons (`icon-192.png`, `icon-512.png`).
  - Add to Home Screen on iOS / Android to use in full screen without address bars.

---

## 📱 Mobile Preview & Deployment

### Run Locally
```bash
python -m http.server 3000
```
Then visit `http://localhost:3000` in your browser.

To view on your phone on the same Wi-Fi, open:
```
http://<your-pc-ip>:3000
```

### Deploy to Vercel (1-Click)
```bash
npx vercel --prod
```

### Deploy to Netlify
Drag and drop this repository folder onto [https://app.netlify.com/drop](https://app.netlify.com/drop).

### Deploy to GitHub Pages
1. Go to your repository on GitHub: **Settings ➔ Pages**.
2. Select **Source: Deploy from branch (`main`)** ➔ **Save**.

---

## 🔑 Environment Configuration (`.env`)

Copy `.env.example` to `.env`:
```env
# CARTO Basemaps API Key (Optional: for authenticated CARTO rastertiles)
CARTO_API_KEY=your_carto_api_key

# WAQI (World Air Quality Index / aqicn.org) API Token (Optional)
WAQI_API_KEY=your_waqi_api_token

# OpenWeatherMap API Key (Optional)
OPENWEATHER_API_KEY=your_openweather_api_key
```

*Note: The app includes automated fallbacks to free Open-Meteo and Singapore NEA endpoints, so it works seamlessly even if keys are omitted.*

---

## 🛠️ Tech Stack

- **Frontend**: Semantic HTML5, CSS3 Glassmorphism, Vanilla ES6+ JavaScript
- **Cartography**: Leaflet.js with CartoDB Dark Matter retina basemaps
- **APIs**: Open-Meteo Global Air Quality, Singapore NEA `data.gov.sg`, WAQI, OpenWeatherMap

---

## 📄 License

MIT License. Created for Southeast Asian transboundary air quality monitoring.
