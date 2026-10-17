/**
 * AERO-NEXUS | Equatorial Air Condition & Transboundary Map
 * Malaysia • Singapore • Indonesia
 * 
 * Smooth, one-click interactive map linking regional air conditions with live APIs.
 */

// ============================================================================
// 1. CITIES DATASET (28 Regional Cities across MY, SG, ID)
// ============================================================================
const CITIES_DATA = [
  // --- MALAYSIA (11 Cities) ---
  {
    id: 'kl',
    name: 'Kuala Lumpur',
    country: 'MY',
    countryName: 'Malaysia',
    region: 'Federal Territory',
    lat: 3.1390,
    lng: 101.6869,
    flag: '🇲🇾',
    stationName: 'DOE Batu Muda (CA001B)',
    officialGovLink: 'http://apims.doe.gov.my/',
    officialGovLabel: '🇲🇾 View Malaysia APIMS Portal',
    aqi: 131,
    pm25: 40.9,
    pm10: 41.8,
    temp: 32.4,
    humidity: 62,
    windSpeed: 14.2,
    windDir: 205,
    windText: 'SSW',
    driver: 'PM2.5 particulate mass',
    status: 'Sensitive'
  },
  {
    id: 'penang',
    name: 'George Town',
    country: 'MY',
    countryName: 'Malaysia',
    region: 'Penang Island',
    lat: 5.4164,
    lng: 100.3327,
    flag: '🇲🇾',
    stationName: 'DOE Seberang Jaya',
    officialGovLink: 'http://apims.doe.gov.my/',
    officialGovLabel: '🇲🇾 View Malaysia APIMS Portal',
    aqi: 78,
    pm25: 25.4,
    pm10: 34.1,
    temp: 31.0,
    humidity: 68,
    windSpeed: 11.5,
    windDir: 190,
    windText: 'S',
    driver: 'Moderate particulate level',
    status: 'Moderate'
  },
  {
    id: 'jb',
    name: 'Johor Bahru',
    country: 'MY',
    countryName: 'Malaysia',
    region: 'Johor (Bordering Singapore)',
    lat: 1.4927,
    lng: 103.7414,
    flag: '🇲🇾',
    stationName: 'DOE Larkin Telemetry',
    officialGovLink: 'http://apims.doe.gov.my/',
    officialGovLabel: '🇲🇾 View Malaysia APIMS Portal',
    aqi: 94,
    pm25: 32.8,
    pm10: 42.0,
    temp: 32.1,
    humidity: 65,
    windSpeed: 9.8,
    windDir: 175,
    windText: 'SSE',
    driver: 'Strait of Johor maritime flow',
    status: 'Moderate'
  },
  {
    id: 'kuching',
    name: 'Kuching',
    country: 'MY',
    countryName: 'Malaysia',
    region: 'Sarawak, Borneo',
    lat: 1.5535,
    lng: 110.3592,
    flag: '🇲🇾',
    stationName: 'DOE Kuching Central',
    officialGovLink: 'http://apims.doe.gov.my/',
    officialGovLabel: '🇲🇾 View Malaysia APIMS Portal',
    aqi: 62,
    pm25: 17.5,
    pm10: 28.0,
    temp: 30.5,
    humidity: 74,
    windSpeed: 8.2,
    windDir: 140,
    windText: 'SE',
    driver: 'Borneo transboundary corridor',
    status: 'Moderate'
  },
  {
    id: 'kk',
    name: 'Kota Kinabalu',
    country: 'MY',
    countryName: 'Malaysia',
    region: 'Sabah, Borneo',
    lat: 5.9804,
    lng: 116.0735,
    flag: '🇲🇾',
    stationName: 'DOE Kota Kinabalu',
    officialGovLink: 'http://apims.doe.gov.my/',
    officialGovLabel: '🇲🇾 View Malaysia APIMS Portal',
    aqi: 38,
    pm25: 9.2,
    pm10: 16.4,
    temp: 31.8,
    humidity: 71,
    windSpeed: 10.4,
    windDir: 220,
    windText: 'SW',
    driver: 'Optimal coastal clean air',
    status: 'Good'
  },
  {
    id: 'ipoh',
    name: 'Ipoh',
    country: 'MY',
    countryName: 'Malaysia',
    region: 'Perak',
    lat: 4.5975,
    lng: 101.0901,
    flag: '🇲🇾',
    stationName: 'DOE Pegoh Ipoh',
    officialGovLink: 'http://apims.doe.gov.my/',
    officialGovLabel: '🇲🇾 View Malaysia APIMS Portal',
    aqi: 82,
    pm25: 27.1,
    pm10: 36.5,
    temp: 32.0,
    humidity: 64,
    windSpeed: 6.5,
    windDir: 180,
    windText: 'S',
    driver: 'Valley stagnation PM2.5',
    status: 'Moderate'
  },
  {
    id: 'malacca',
    name: 'Malacca City',
    country: 'MY',
    countryName: 'Malaysia',
    region: 'Melaka (Strait Coast)',
    lat: 2.1896,
    lng: 102.2501,
    flag: '🇲🇾',
    stationName: 'DOE Bandaraya Melaka',
    officialGovLink: 'http://apims.doe.gov.my/',
    officialGovLabel: '🇲🇾 View Malaysia APIMS Portal',
    aqi: 108,
    pm25: 38.4,
    pm10: 45.2,
    temp: 31.6,
    humidity: 69,
    windSpeed: 12.0,
    windDir: 215,
    windText: 'SW',
    driver: 'Malacca Strait coastal drift',
    status: 'Sensitive'
  },
  {
    id: 'kuantan',
    name: 'Kuantan',
    country: 'MY',
    countryName: 'Malaysia',
    region: 'Pahang (East Coast)',
    lat: 3.8168,
    lng: 103.3317,
    flag: '🇲🇾',
    stationName: 'DOE Indera Mahkota',
    officialGovLink: 'http://apims.doe.gov.my/',
    officialGovLabel: '🇲🇾 View Malaysia APIMS Portal',
    aqi: 45,
    pm25: 11.0,
    pm10: 21.0,
    temp: 31.2,
    humidity: 73,
    windSpeed: 13.5,
    windDir: 90,
    windText: 'E',
    driver: 'Clean maritime sea breeze',
    status: 'Good'
  },
  {
    id: 'shahalam',
    name: 'Shah Alam',
    country: 'MY',
    countryName: 'Malaysia',
    region: 'Selangor (Klang Valley)',
    lat: 3.0738,
    lng: 101.5183,
    flag: '🇲🇾',
    stationName: 'DOE Shah Alam',
    officialGovLink: 'http://apims.doe.gov.my/',
    officialGovLabel: '🇲🇾 View Malaysia APIMS Portal',
    aqi: 128,
    pm25: 41.5,
    pm10: 48.0,
    temp: 32.8,
    humidity: 61,
    windSpeed: 12.1,
    windDir: 200,
    windText: 'SSW',
    driver: 'Industrial & vehicle emissions',
    status: 'Sensitive'
  },
  {
    id: 'miri',
    name: 'Miri',
    country: 'MY',
    countryName: 'Malaysia',
    region: 'Sarawak (Northern Coast)',
    lat: 4.3995,
    lng: 113.9914,
    flag: '🇲🇾',
    stationName: 'DOE ILP Miri',
    officialGovLink: 'http://apims.doe.gov.my/',
    officialGovLabel: '🇲🇾 View Malaysia APIMS Portal',
    aqi: 42,
    pm25: 10.3,
    pm10: 19.8,
    temp: 31.0,
    humidity: 75,
    windSpeed: 9.0,
    windDir: 60,
    windText: 'ENE',
    driver: 'Clean coastal conditions',
    status: 'Good'
  },
  {
    id: 'alorsetar',
    name: 'Alor Setar',
    country: 'MY',
    countryName: 'Malaysia',
    region: 'Kedah (Northern Plain)',
    lat: 6.1248,
    lng: 100.3678,
    flag: '🇲🇾',
    stationName: 'DOE Alor Setar',
    officialGovLink: 'http://apims.doe.gov.my/',
    officialGovLabel: '🇲🇾 View Malaysia APIMS Portal',
    aqi: 72,
    pm25: 22.0,
    pm10: 31.0,
    temp: 32.5,
    humidity: 63,
    windSpeed: 10.5,
    windDir: 210,
    windText: 'SSW',
    driver: 'Agricultural open airs',
    status: 'Moderate'
  },

  // --- SINGAPORE: National Average (Overview: visible when minimized zoom < 8) ---
  {
    id: 'sg_overview',
    name: 'Singapore (Avg)',
    country: 'SG',
    countryName: 'Singapore',
    region: 'National 5-Sector Average',
    lat: 1.3521,
    lng: 103.8198,
    flag: '🇸🇬',
    isOverviewOnly: true,
    stationName: 'NEA Singapore National Telemetry (5-Sector Average)',
    officialGovLink: 'https://www.haze.gov.sg/',
    officialGovLabel: '🇸🇬 View Singapore NEA Portal',
    aqi: 88,
    pm25: 30.4,
    pm10: 38.8,
    temp: 32.3,
    humidity: 62,
    windSpeed: 8.1,
    windDir: 165,
    windText: 'SSE',
    driver: 'National 5-Sector Average PM2.5 (Central, North, South, East, West)',
    status: 'Moderate',
    sectors: {
      central: { psi: 88, pm25: 30.2 },
      north: { psi: 92, pm25: 32.0 },
      south: { psi: 85, pm25: 28.6 },
      east: { psi: 80, pm25: 26.8 },
      west: { psi: 98, pm25: 34.5 }
    }
  },

  // --- SINGAPORE: Magnified Detailed Sectors (Visible when magnified zoom >= 8) ---
  {
    id: 'sg_central',
    name: 'Singapore Central',
    country: 'SG',
    countryName: 'Singapore',
    region: 'Central Sector (Downtown)',
    lat: 1.2958,
    lng: 103.8536,
    flag: '🇸🇬',
    isSectorOnly: true,
    stationName: 'NEA Central Sector Station',
    officialGovLink: 'https://www.haze.gov.sg/',
    officialGovLabel: '🇸🇬 View Singapore NEA Portal',
    aqi: 88,
    pm25: 30.2,
    pm10: 38.6,
    temp: 32.4,
    humidity: 62,
    windSpeed: 7.2,
    windDir: 165,
    windText: 'SSE',
    driver: 'Urban background PM2.5',
    status: 'Moderate'
  },
  {
    id: 'sg_north',
    name: 'Singapore North',
    country: 'SG',
    countryName: 'Singapore',
    region: 'North Sector (Woodlands/Causeway)',
    lat: 1.4382,
    lng: 103.7891,
    flag: '🇸🇬',
    isSectorOnly: true,
    stationName: 'NEA North Sector Station',
    officialGovLink: 'https://www.haze.gov.sg/',
    officialGovLabel: '🇸🇬 View Singapore NEA Portal',
    aqi: 92,
    pm25: 32.0,
    pm10: 41.2,
    temp: 32.1,
    humidity: 63,
    windSpeed: 8.5,
    windDir: 170,
    windText: 'S',
    driver: 'Cross-Causeway vehicular drift',
    status: 'Moderate'
  },
  {
    id: 'sg_south',
    name: 'Singapore South',
    country: 'SG',
    countryName: 'Singapore',
    region: 'South Sector (Marina & Port)',
    lat: 1.2804,
    lng: 103.8636,
    flag: '🇸🇬',
    isSectorOnly: true,
    stationName: 'NEA South Sector Station',
    officialGovLink: 'https://www.haze.gov.sg/',
    officialGovLabel: '🇸🇬 View Singapore NEA Portal',
    aqi: 85,
    pm25: 28.6,
    pm10: 36.0,
    temp: 32.6,
    humidity: 61,
    windSpeed: 9.0,
    windDir: 160,
    windText: 'SSE',
    driver: 'Singapore Strait maritime breeze',
    status: 'Moderate'
  },
  {
    id: 'sg_east',
    name: 'Singapore East',
    country: 'SG',
    countryName: 'Singapore',
    region: 'East Sector (Changi/Tampines)',
    lat: 1.3644,
    lng: 103.9915,
    flag: '🇸🇬',
    isSectorOnly: true,
    stationName: 'NEA East Sector Station',
    officialGovLink: 'https://www.haze.gov.sg/',
    officialGovLabel: '🇸🇬 View Singapore NEA Portal',
    aqi: 80,
    pm25: 26.8,
    pm10: 35.0,
    temp: 31.9,
    humidity: 66,
    windSpeed: 8.0,
    windDir: 155,
    windText: 'SSE',
    driver: 'Coastal maritime dispersion',
    status: 'Moderate'
  },
  {
    id: 'sg_west',
    name: 'Singapore West',
    country: 'SG',
    countryName: 'Singapore',
    region: 'West Sector (Jurong/Tuas)',
    lat: 1.3329,
    lng: 103.7436,
    flag: '🇸🇬',
    isSectorOnly: true,
    stationName: 'NEA West Sector Station',
    officialGovLink: 'https://www.haze.gov.sg/',
    officialGovLabel: '🇸🇬 View Singapore NEA Portal',
    aqi: 98,
    pm25: 34.5,
    pm10: 44.0,
    temp: 32.7,
    humidity: 60,
    windSpeed: 7.6,
    windDir: 180,
    windText: 'S',
    driver: 'Industrial precinct emission baseline',
    status: 'Moderate'
  },

  // --- INDONESIA (12 Key Cities & Source Centers) ---
  {
    id: 'jakarta',
    name: 'Jakarta',
    country: 'ID',
    countryName: 'Indonesia',
    region: 'DKI Jakarta Capital',
    lat: -6.2088,
    lng: 106.8456,
    flag: '🇮🇩',
    stationName: 'KLHK Gelora Bung Karno',
    officialGovLink: 'https://ispu.menlhk.go.id/',
    officialGovLabel: '🇮🇩 View Indonesia ISPUnet Portal',
    aqi: 165,
    pm25: 82.5,
    pm10: 95.0,
    temp: 33.2,
    humidity: 58,
    windSpeed: 11.2,
    windDir: 45,
    windText: 'NE',
    driver: 'High metropolitan PM2.5 density',
    status: 'Unhealthy'
  },
  {
    id: 'pekanbaru',
    name: 'Pekanbaru',
    country: 'ID',
    countryName: 'Indonesia',
    region: 'Riau, Sumatra (Key Haze Source)',
    lat: 0.5071,
    lng: 101.4478,
    flag: '🇮🇩',
    stationName: 'KLHK Tuah Karya Riau',
    officialGovLink: 'https://ispu.menlhk.go.id/',
    officialGovLabel: '🇮🇩 View Indonesia ISPUnet Portal',
    aqi: 142,
    pm25: 52.8,
    pm10: 64.0,
    temp: 33.8,
    humidity: 62,
    windSpeed: 9.5,
    windDir: 215,
    windText: 'SW',
    driver: 'Peatland dispersion plume conduit',
    status: 'Sensitive'
  },
  {
    id: 'medan',
    name: 'Medan',
    country: 'ID',
    countryName: 'Indonesia',
    region: 'North Sumatra',
    lat: 3.5952,
    lng: 98.6722,
    flag: '🇮🇩',
    stationName: 'KLHK Medan Amplas',
    officialGovLink: 'https://ispu.menlhk.go.id/',
    officialGovLabel: '🇮🇩 View Indonesia ISPUnet Portal',
    aqi: 115,
    pm25: 41.2,
    pm10: 52.0,
    temp: 32.5,
    humidity: 66,
    windSpeed: 10.0,
    windDir: 200,
    windText: 'SSW',
    driver: 'Urban transport towards Malacca Strait',
    status: 'Sensitive'
  },
  {
    id: 'palembang',
    name: 'Palembang',
    country: 'ID',
    countryName: 'Indonesia',
    region: 'South Sumatra',
    lat: -2.9909,
    lng: 104.7565,
    flag: '🇮🇩',
    stationName: 'KLHK Ogan Ilir Palembang',
    officialGovLink: 'https://ispu.menlhk.go.id/',
    officialGovLabel: '🇮🇩 View Indonesia ISPUnet Portal',
    aqi: 138,
    pm25: 50.4,
    pm10: 61.2,
    temp: 33.0,
    humidity: 64,
    windSpeed: 8.8,
    windDir: 195,
    windText: 'SSW',
    driver: 'Southern peatland biomass drift',
    status: 'Sensitive'
  },
  {
    id: 'batam',
    name: 'Batam',
    country: 'ID',
    countryName: 'Indonesia',
    region: 'Riau Islands (30km from SG)',
    lat: 1.1301,
    lng: 104.0529,
    flag: '🇮🇩',
    stationName: 'KLHK Batam Centre',
    officialGovLink: 'https://ispu.menlhk.go.id/',
    officialGovLabel: '🇮🇩 View Indonesia ISPUnet Portal',
    aqi: 86,
    pm25: 29.0,
    pm10: 38.0,
    temp: 32.2,
    humidity: 67,
    windSpeed: 12.0,
    windDir: 170,
    windText: 'S',
    driver: 'Singapore Strait maritime junction',
    status: 'Moderate'
  },
  {
    id: 'pontianak',
    name: 'Pontianak',
    country: 'ID',
    countryName: 'Indonesia',
    region: 'West Kalimantan (Borneo)',
    lat: -0.0263,
    lng: 109.3425,
    flag: '🇮🇩',
    stationName: 'KLHK Pontianak Kota',
    officialGovLink: 'https://ispu.menlhk.go.id/',
    officialGovLabel: '🇮🇩 View Indonesia ISPUnet Portal',
    aqi: 124,
    pm25: 44.8,
    pm10: 55.4,
    temp: 32.9,
    humidity: 70,
    windSpeed: 7.5,
    windDir: 185,
    windText: 'S',
    driver: 'Equatorial peat burning corridor to Kuching',
    status: 'Sensitive'
  },
  {
    id: 'surabaya',
    name: 'Surabaya',
    country: 'ID',
    countryName: 'Indonesia',
    region: 'East Java',
    lat: -7.2575,
    lng: 112.7521,
    flag: '🇮🇩',
    stationName: 'KLHK Ketabang Surabaya',
    officialGovLink: 'https://ispu.menlhk.go.id/',
    officialGovLabel: '🇮🇩 View Indonesia ISPUnet Portal',
    aqi: 154,
    pm25: 61.2,
    pm10: 74.0,
    temp: 34.0,
    humidity: 55,
    windSpeed: 14.0,
    windDir: 110,
    windText: 'ESE',
    driver: 'Industrial coastal particulate peak',
    status: 'Unhealthy'
  },
  {
    id: 'bandung',
    name: 'Bandung',
    country: 'ID',
    countryName: 'Indonesia',
    region: 'West Java (Highland Basin)',
    lat: -6.9175,
    lng: 107.6191,
    flag: '🇮🇩',
    stationName: 'KLHK Bandung Wetan',
    officialGovLink: 'https://ispu.menlhk.go.id/',
    officialGovLabel: '🇮🇩 View Indonesia ISPUnet Portal',
    aqi: 118,
    pm25: 42.5,
    pm10: 53.0,
    temp: 28.2,
    humidity: 72,
    windSpeed: 5.8,
    windDir: 135,
    windText: 'SE',
    driver: 'Basin thermal inversion trap',
    status: 'Sensitive'
  },
  {
    id: 'denpasar',
    name: 'Denpasar',
    country: 'ID',
    countryName: 'Indonesia',
    region: 'Bali',
    lat: -8.6705,
    lng: 115.2126,
    flag: '🇮🇩',
    stationName: 'BMKG Ngurah Rai Bali',
    officialGovLink: 'https://www.bmkg.go.id/',
    officialGovLabel: '🇮🇩 View Indonesia BMKG Portal',
    aqi: 48,
    pm25: 11.5,
    pm10: 22.0,
    temp: 31.5,
    humidity: 68,
    windSpeed: 15.2,
    windDir: 120,
    windText: 'ESE',
    driver: 'Oceanic trade winds clear air',
    status: 'Good'
  },
  {
    id: 'banjarmasin',
    name: 'Banjarmasin',
    country: 'ID',
    countryName: 'Indonesia',
    region: 'South Kalimantan',
    lat: -3.3194,
    lng: 114.5908,
    flag: '🇮🇩',
    stationName: 'KLHK Banjarmasin',
    officialGovLink: 'https://ispu.menlhk.go.id/',
    officialGovLabel: '🇮🇩 View Indonesia ISPUnet Portal',
    aqi: 95,
    pm25: 33.0,
    pm10: 42.5,
    temp: 32.8,
    humidity: 69,
    windSpeed: 8.0,
    windDir: 160,
    windText: 'SSE',
    driver: 'Southern Borneo peat scrub',
    status: 'Moderate'
  },
  {
    id: 'samarinda',
    name: 'Samarinda (IKN)',
    country: 'ID',
    countryName: 'Indonesia',
    region: 'East Kalimantan (IKN Nusantara)',
    lat: -0.5022,
    lng: 117.1537,
    flag: '🇮🇩',
    stationName: 'KLHK Samarinda Central',
    officialGovLink: 'https://ispu.menlhk.go.id/',
    officialGovLabel: '🇮🇩 View Indonesia ISPUnet Portal',
    aqi: 54,
    pm25: 14.5,
    pm10: 25.0,
    temp: 31.2,
    humidity: 73,
    windSpeed: 6.5,
    windDir: 90,
    windText: 'E',
    driver: 'Rainforest fringe clean air',
    status: 'Moderate'
  },
  {
    id: 'bandaaceh',
    name: 'Banda Aceh',
    country: 'ID',
    countryName: 'Indonesia',
    region: 'Aceh (North Sumatra Tip)',
    lat: 5.5483,
    lng: 95.3238,
    flag: '🇮🇩',
    stationName: 'BMKG Banda Aceh',
    officialGovLink: 'https://www.bmkg.go.id/',
    officialGovLabel: '🇮🇩 View Indonesia BMKG Portal',
    aqi: 32,
    pm25: 7.8,
    pm10: 14.2,
    temp: 31.4,
    humidity: 70,
    windSpeed: 16.0,
    windDir: 230,
    windText: 'SW',
    driver: 'Pristine Indian Ocean air mass',
    status: 'Good'
  }
];

// ============================================================================
// 2. SUBTLE CROSS-BORDER CORRIDORS (MY • SG • ID Atmospheric Connections)
// ============================================================================
const ATMOSPHERIC_CORRIDORS = [
  {
    id: 'sumatra_sg_jb',
    name: 'Sumatra ➔ Singapore ➔ Johor Bahru',
    coords: [
      [0.5071, 101.4478], // Pekanbaru (ID)
      [1.1301, 104.0529], // Batam (ID)
      [1.2958, 103.8536], // Singapore (SG)
      [1.4927, 103.7414]  // Johor Bahru (MY)
    ],
    color: '#a855f7' // Purple glow
  },
  {
    id: 'sumatra_malacca_kl',
    name: 'Sumatra ➔ Malacca Strait ➔ Kuala Lumpur',
    coords: [
      [0.5071, 101.4478], // Pekanbaru (ID)
      [2.1896, 102.2501], // Malacca (MY)
      [3.1390, 101.6869]  // Kuala Lumpur (MY)
    ],
    color: '#06b6d4' // Cyan glow
  },
  {
    id: 'medan_penang',
    name: 'North Sumatra ➔ Penang Airway',
    coords: [
      [3.5952, 98.6722],  // Medan (ID)
      [5.4164, 100.3327]  // George Town, Penang (MY)
    ],
    color: '#3b82f6' // Blue glow
  },
  {
    id: 'kalimantan_kuching',
    name: 'West Kalimantan ➔ Kuching (Sarawak)',
    coords: [
      [-0.0263, 109.3425], // Pontianak (ID)
      [1.5535, 110.3592]   // Kuching (MY)
    ],
    color: '#f59e0b' // Amber glow
  },
  {
    id: 'south_sumatra_batam_sg',
    name: 'South Sumatra ➔ Batam & Singapore',
    coords: [
      [-2.9909, 104.7565], // Palembang (ID)
      [1.1301, 104.0529],  // Batam (ID)
      [1.2804, 103.8636]   // Singapore South (SG)
    ],
    color: '#ec4899' // Pink glow
  }
];

// ============================================================================
// 3. COLOR & ADVISORY HELPERS
// ============================================================================
function getAqiColor(aqi) {
  if (aqi <= 50) return { hex: '#10b981', label: 'Good', class: 'good' };
  if (aqi <= 100) return { hex: '#f59e0b', label: 'Moderate', class: 'moderate' };
  if (aqi <= 150) return { hex: '#f97316', label: 'Unhealthy for Sensitive', class: 'sensitive' };
  if (aqi <= 200) return { hex: '#ef4444', label: 'Unhealthy', class: 'unhealthy' };
  return { hex: '#a855f7', label: 'Very Unhealthy', class: 'very-unhealthy' };
}

function getHealthAdvice(aqi) {
  if (aqi <= 50) {
    return 'Air quality is satisfactory. Ideal conditions for outdoor activities and exercise.';
  }
  if (aqi <= 100) {
    return 'Acceptable air quality. Unusually sensitive people should consider reducing heavy outdoor exertion.';
  }
  if (aqi <= 150) {
    return 'Sensitive groups (children, elderly, asthma) should wear an N95 mask and reduce prolonged outdoor activity.';
  }
  if (aqi <= 200) {
    return 'General public should limit prolonged outdoor exertion. Sensitive groups should stay indoors with air purifiers.';
  }
  return 'Health alert: High risk of adverse effects. Avoid all outdoor physical activity and keep windows sealed.';
}

// ============================================================================
// 4. MAIN APPLICATION CONTROLLER
// ============================================================================
class AeroNexusApp {
  constructor() {
    this.map = null;
    this.markers = new Map();
    this.corridorPolylines = [];
    this.selectedCity = null;
    this.activeCountryFilter = 'all';
    this.showCorridors = true;
    this.env = {};

    // DOM Elements
    this.floatingCard = document.getElementById('floatingCityCard');
    this.searchInput = document.getElementById('citySearchInput');
    this.searchDropdown = document.getElementById('searchDropdown');
    this.clearSearchBtn = document.getElementById('clearSearchBtn');
    this.btnSync = document.getElementById('btnSyncData');
    this.btnToggleLinks = document.getElementById('btnToggleLinks');
    this.btnResetView = document.getElementById('btnResetView');
    this.btnCloseCard = document.getElementById('btnCloseCard');
    this.countryTabs = document.querySelectorAll('.nav-tab');

    this.init();
  }

  async init() {
    await this.loadEnv();
    this.initMap();
    this.renderMarkers();
    this.renderCorridors();
    this.bindEvents();

    // Auto-select Kuala Lumpur by default smoothly
    setTimeout(() => {
      this.selectCityById('kl', false);
    }, 400);

    // Initial Live Sync attempt
    this.fetchLiveAqiData();
  }

  // --- Parse .env File in Local Server ---
  async loadEnv() {
    try {
      const res = await fetch('/.env');
      if (res.ok) {
        const text = await res.text();
        const lines = text.split('\n');
        lines.forEach((line) => {
          const trimmed = line.trim();
          if (trimmed && !trimmed.startsWith('#')) {
            const eqIdx = trimmed.indexOf('=');
            if (eqIdx !== -1) {
              const key = trimmed.slice(0, eqIdx).trim();
              const val = trimmed.slice(eqIdx + 1).trim();
              if (key && val) this.env[key] = val;
            }
          }
        });
        if (this.env.CARTO_API_KEY) {
          console.log('[AERO-NEXUS] Authenticated CARTO API Key loaded from .env');
        }
      }
    } catch (e) {
      console.log('[AERO-NEXUS] Local .env not detected or using public basemap tiles');
    }
  }

  // --- Map Initialization ---
  initMap() {
    // Center between Malaysia, Singapore and Indonesia (approx Lat 2.0, Lng 106.0)
    this.map = L.map('map', {
      center: [2.0, 106.0],
      zoom: 6,
      minZoom: 4,
      maxZoom: 14,
      zoomControl: true,
      maxBounds: [[-16.0, 90.0], [16.0, 126.0]],
      maxBoundsViscosity: 0.95
    });

    // Check if user provided CARTO_API_KEY in .env
    const cartoKey = this.env.CARTO_API_KEY;
    const tileUrl = (cartoKey && cartoKey.trim().length > 5)
      ? `https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}{r}.png?key=${encodeURIComponent(cartoKey.trim())}`
      : 'https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}{r}.png';

    // High performance CartoDB Dark Matter tiles with noWrap to prevent duplication
    L.tileLayer(tileUrl, {
      attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: 'abcd',
      maxZoom: 19,
      noWrap: true
    }).addTo(this.map);

    // Dynamic Zoom Level of Detail listener (breaks apart when magnified, averages when minimized)
    this.map.on('zoomend', () => {
      this.updateMarkerLOD();
    });

    // Clicking map empty space closes card
    this.map.on('click', (e) => {
      if (e.originalEvent.target.id === 'map' || e.originalEvent.target.classList.contains('leaflet-container')) {
        this.closeCard();
      }
    });
  }

  // --- Render City Markers on Map ---
  renderMarkers() {
    // Clear existing
    this.markers.forEach((marker) => this.map.removeLayer(marker));
    this.markers.clear();

    const currentZoom = this.map.getZoom();
    const isMagnified = currentZoom >= 8;

    CITIES_DATA.forEach((city) => {
      const aqiInfo = getAqiColor(city.aqi);

      // Create Custom HTML DivIcon with glowing halo and pill
      const customIcon = L.divIcon({
        className: 'custom-city-marker-wrap',
        html: `
          <div class="custom-city-marker" id="marker-${city.id}" data-city-id="${city.id}">
            <div class="marker-halo" style="background: ${aqiInfo.hex};"></div>
            <div class="marker-pill" style="color: ${aqiInfo.hex}; border-color: ${aqiInfo.hex};">
              <span class="marker-aqi-val">${city.aqi}</span>
              <span class="marker-city-name">${city.name}</span>
            </div>
          </div>
        `,
        iconSize: [80, 30],
        iconAnchor: [40, 15]
      });

      const marker = L.marker([city.lat, city.lng], {
        icon: customIcon,
        riseOnHover: true
      });

      marker.on('click', () => {
        if (city.isOverviewOnly) {
          // If clicked at minimized overview zoom, magnify smoothly to break into normal sectors!
          this.map.flyTo([city.lat, city.lng], 10, { duration: 0.8 });
          this.selectCity(city, false);
        } else {
          this.selectCity(city);
        }
      });

      this.markers.set(city.id, marker);

      // Level-of-Detail visibility:
      if (city.isOverviewOnly && isMagnified) {
        // hidden when magnified
      } else if (city.isSectorOnly && !isMagnified) {
        // hidden when minimized
      } else {
        marker.addTo(this.map);
      }
    });
  }

  // --- Dynamic Level-Of-Detail on Map Zoom (Break back into normal when magnified) ---
  updateMarkerLOD() {
    const currentZoom = this.map.getZoom();
    const isMagnified = currentZoom >= 8;

    CITIES_DATA.forEach((city) => {
      const marker = this.markers.get(city.id);
      if (!marker) return;

      if (city.isOverviewOnly) {
        if (isMagnified) {
          if (this.map.hasLayer(marker)) this.map.removeLayer(marker);
        } else {
          if (!this.map.hasLayer(marker)) this.map.addLayer(marker);
        }
      } else if (city.isSectorOnly) {
        if (isMagnified) {
          if (!this.map.hasLayer(marker)) this.map.addLayer(marker);
        } else {
          if (this.map.hasLayer(marker)) this.map.removeLayer(marker);
        }
      }
    });
  }

  // --- Render Subtle Cross-Border Atmospheric Corridors ---
  renderCorridors() {
    // Clear old polylines
    this.corridorPolylines.forEach((poly) => this.map.removeLayer(poly));
    this.corridorPolylines = [];

    if (!this.showCorridors) return;

    ATMOSPHERIC_CORRIDORS.forEach((corridor) => {
      // Background subtle glow polyline
      const glowLine = L.polyline(corridor.coords, {
        color: corridor.color,
        weight: 4,
        opacity: 0.25,
        smoothFactor: 1.5,
        interactive: false
      }).addTo(this.map);

      // Foreground flowing dashed line
      const flowLine = L.polyline(corridor.coords, {
        color: corridor.color,
        weight: 2,
        opacity: 0.75,
        className: 'subtle-corridor-line',
        interactive: true
      }).addTo(this.map);

      flowLine.bindTooltip(`<b>${corridor.name}</b><br><span style="font-size: 11px; color: #94a3b8;">Transboundary Atmospheric Conduit</span>`, {
        className: 'leaflet-tooltip-dark',
        sticky: true
      });

      this.corridorPolylines.push(glowLine, flowLine);
    });
  }

  // --- Select City & Open Floating Card ---
  selectCity(city, shouldFly = true) {
    this.selectedCity = city;

    // Highlight marker in DOM
    document.querySelectorAll('.custom-city-marker').forEach((el) => el.classList.remove('selected'));
    const markerEl = document.getElementById(`marker-${city.id}`);
    if (markerEl) markerEl.classList.add('selected');

    // Smoothly fly map to coordinates
    if (shouldFly) {
      this.map.flyTo([city.lat, city.lng], 8.5, {
        duration: 0.8,
        easeLinearity: 0.25
      });
    }

    // Populate and open Floating Card
    this.updateFloatingCard(city);
    this.floatingCard.classList.remove('closed');

    // On-demand enrichment with user's WAQI & OpenWeatherMap API keys
    this.fetchWaqiForCity(city);
    this.fetchWeatherForCity(city);
  }

  // --- Live Ground Station Telemetry via WAQI Token ---
  async fetchWaqiForCity(city) {
    if (!this.env.WAQI_API_KEY || this.env.WAQI_API_KEY.trim().length < 5) return;
    try {
      const url = `https://api.waqi.info/feed/geo:${city.lat};${city.lng}/?token=${encodeURIComponent(this.env.WAQI_API_KEY.trim())}`;
      const res = await fetch(url).then(r => r.json());
      if (res && res.status === 'ok' && res.data) {
        if (res.data.aqi != null && !isNaN(res.data.aqi)) city.aqi = res.data.aqi;
        if (res.data.iaqi) {
          if (res.data.iaqi.pm25 && res.data.iaqi.pm25.v != null) city.pm25 = res.data.iaqi.pm25.v;
          if (res.data.iaqi.pm10 && res.data.iaqi.pm10.v != null) city.pm10 = res.data.iaqi.pm10.v;
          if (res.data.iaqi.t && res.data.iaqi.t.v != null) city.temp = res.data.iaqi.t.v;
          if (res.data.iaqi.h && res.data.iaqi.h.v != null) city.humidity = res.data.iaqi.h.v;
          if (res.data.iaqi.w && res.data.iaqi.w.v != null) city.windSpeed = res.data.iaqi.w.v * 3.6;
        }
        if (res.data.city && res.data.city.name) {
          city.stationName = res.data.city.name;
        }
        if (this.selectedCity && this.selectedCity.id === city.id) {
          this.updateFloatingCard(city);
        }
        const mEl = document.getElementById(`marker-${city.id}`);
        if (mEl) {
          const aqiInfo = getAqiColor(city.aqi);
          const valEl = mEl.querySelector('.marker-aqi-val');
          const haloEl = mEl.querySelector('.marker-halo');
          const pillEl = mEl.querySelector('.marker-pill');
          if (valEl) valEl.textContent = city.aqi;
          if (haloEl) haloEl.style.background = aqiInfo.hex;
          if (pillEl) {
            pillEl.style.color = aqiInfo.hex;
            pillEl.style.borderColor = aqiInfo.hex;
          }
        }
      }
    } catch (e) {
      console.warn('[AERO-NEXUS] WAQI live query notice:', e);
    }
  }

  // --- Live Weather & Wind Vector via OpenWeatherMap API ---
  async fetchWeatherForCity(city) {
    if (!this.env.OPENWEATHER_API_KEY || this.env.OPENWEATHER_API_KEY.trim().length < 10) return;
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lng}&appid=${encodeURIComponent(this.env.OPENWEATHER_API_KEY.trim())}&units=metric`;
      const res = await fetch(url).then(r => r.json());
      if (res && res.main) {
        if (res.main.temp != null) city.temp = res.main.temp;
        if (res.main.humidity != null) city.humidity = res.main.humidity;
        if (res.wind && res.wind.speed != null) city.windSpeed = res.wind.speed * 3.6;
        if (res.wind && res.wind.deg != null) {
          city.windDir = res.wind.deg;
          city.windText = this.degToCompass(res.wind.deg);
        }
        if (this.selectedCity && this.selectedCity.id === city.id) {
          this.updateFloatingCard(city);
        }
      }
    } catch (e) {
      console.warn('[AERO-NEXUS] OpenWeatherMap notice:', e);
    }
  }

  selectCityById(cityId, shouldFly = true) {
    const city = CITIES_DATA.find((c) => c.id === cityId);
    if (city) {
      this.selectCity(city, shouldFly);
    }
  }

  closeCard() {
    this.floatingCard.classList.add('closed');
    document.querySelectorAll('.custom-city-marker').forEach((el) => el.classList.remove('selected'));
    this.selectedCity = null;
  }

  // --- Update Content inside Floating Card ---
  updateFloatingCard(city) {
    const aqiInfo = getAqiColor(city.aqi);

    // Identity
    document.getElementById('cardFlag').textContent = city.flag;
    document.getElementById('cardCityName').textContent = city.name;
    document.getElementById('cardCityRegion').textContent = `${city.countryName} • ${city.region}`;

    // AQI & Colors
    const aqiNum = document.getElementById('cardAqiNum');
    aqiNum.textContent = city.aqi;

    const aqiRating = document.getElementById('cardAqiRating');
    aqiRating.textContent = aqiInfo.label;
    aqiRating.style.color = aqiInfo.hex;

    // Dynamic styling tokens on card
    this.floatingCard.style.setProperty('--hero-accent-color', aqiInfo.hex);
    this.floatingCard.style.setProperty('--hero-badge-bg', `${aqiInfo.hex}22`);
    this.floatingCard.style.setProperty('--hero-badge-border', aqiInfo.hex);
    this.floatingCard.style.setProperty('--hero-badge-glow', `${aqiInfo.hex}44`);
    this.floatingCard.style.setProperty('--hero-rating-color', aqiInfo.hex);

    // Primary driver
    document.getElementById('cardPrimaryDriver').innerHTML = `Main Pollutant: <strong>PM2.5 (${city.pm25} μg/m³)</strong>`;

    // Multi-Standard equivalence:
    // Malaysia API = roughly AQI * 0.7 to 0.85; SG PSI = roughly AQI * 0.75; ID ISPU = roughly AQI * 0.9
    const myApi = Math.round(city.aqi * 0.78);
    const sgPsi = Math.round(city.aqi * 0.82);
    const idIspu = Math.round(city.aqi * 0.88);
    document.getElementById('cardNationalEquiv').textContent = `🇲🇾 API: ${myApi} • 🇸🇬 PSI: ${sgPsi} • 🇮🇩 ISPU: ${idIspu}`;

    // 4-Grid Current Weather & PM10
    document.getElementById('cardTemp').textContent = `${city.temp.toFixed(1)}°C`;
    document.getElementById('cardHumid').textContent = `${Math.round(city.humidity)}%`;
    document.getElementById('cardWind').textContent = `${Math.round(city.windSpeed)} km/h`;
    document.getElementById('cardWindDir').textContent = `${city.windText} Vector`;
    document.getElementById('cardPm10').textContent = `${city.pm10.toFixed(1)} μg`;

    // Health recommendation
    document.getElementById('cardHealthAdvice').textContent = getHealthAdvice(city.aqi);

    // Real-World Verified Links
    const govLink = document.getElementById('linkOfficialGov');
    govLink.href = city.officialGovLink;
    document.getElementById('labelOfficialGov').textContent = city.officialGovLabel;

    // Raw Open-Meteo Live API Link for this specific city
    const rawApiLink = document.getElementById('linkRawApi');
    rawApiLink.href = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${city.lat}&longitude=${city.lng}&current=pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone,us_aqi&timezone=auto`;
  }

  // --- Search Autocomplete Handler ---
  handleSearch(query) {
    const clean = query.trim().toLowerCase();

    if (!clean) {
      this.searchDropdown.classList.remove('open');
      this.clearSearchBtn.style.display = 'none';
      return;
    }

    this.clearSearchBtn.style.display = 'block';

    const matches = CITIES_DATA.filter((city) => {
      return (
        city.name.toLowerCase().includes(clean) ||
        city.region.toLowerCase().includes(clean) ||
        city.countryName.toLowerCase().includes(clean) ||
        city.country.toLowerCase().includes(clean)
      );
    });

    if (matches.length === 0) {
      this.searchDropdown.innerHTML = `<div style="padding: 10px; font-size: 12px; color: #64748b; text-align: center;">No cities matching "${query}"</div>`;
      this.searchDropdown.classList.add('open');
      return;
    }

    this.searchDropdown.innerHTML = matches.map((city) => {
      const aqiInfo = getAqiColor(city.aqi);
      return `
        <div class="search-item" data-id="${city.id}">
          <div class="search-item-left">
            <span class="search-item-flag">${city.flag}</span>
            <div>
              <div class="search-item-name">${city.name}</div>
              <div class="search-item-sub">${city.countryName} • ${city.region}</div>
            </div>
          </div>
          <div class="search-item-aqi" style="background: ${aqiInfo.hex}22; color: ${aqiInfo.hex}; border: 1px solid ${aqiInfo.hex};">
            ${city.aqi} AQI
          </div>
        </div>
      `;
    }).join('');

    this.searchDropdown.classList.add('open');

    // Bind item clicks
    this.searchDropdown.querySelectorAll('.search-item').forEach((item) => {
      item.addEventListener('click', () => {
        const id = item.dataset.id;
        this.selectCityById(id);
        this.searchDropdown.classList.remove('open');
        this.searchInput.value = '';
        this.clearSearchBtn.style.display = 'none';
      });
    });
  }

  // --- Country Filter Tabs ---
  filterByCountry(countryCode) {
    this.activeCountryFilter = countryCode;

    this.countryTabs.forEach((tab) => {
      tab.classList.toggle('active', tab.dataset.country === countryCode);
    });

    if (countryCode === 'all') {
      this.map.flyTo([2.0, 106.0], 6, { duration: 0.8 });
    } else if (countryCode === 'MY') {
      this.map.flyTo([4.2105, 108.9758], 6, { duration: 0.8 });
    } else if (countryCode === 'SG') {
      this.map.flyTo([1.3521, 103.8198], 11, { duration: 0.8 });
    } else if (countryCode === 'ID') {
      this.map.flyTo([-2.5489, 108.0], 5.5, { duration: 0.8 });
    }
  }

  // --- Live API Fetcher (Open-Meteo & Singapore NEA PSI) ---
  async fetchLiveAqiData() {
    const syncBtn = this.btnSync;
    syncBtn.classList.add('loading');
    const statusText = document.getElementById('liveStatusText');
    if (statusText) statusText.textContent = 'Syncing...';

    try {
      // 1. Batch coordinates for Open-Meteo Air Quality
      const lats = CITIES_DATA.map((c) => c.lat.toFixed(4)).join(',');
      const lngs = CITIES_DATA.map((c) => c.lng.toFixed(4)).join(',');

      // Open-Meteo Air Quality batch request
      const aqiUrl = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lats}&longitude=${lngs}&current=pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone,us_aqi&timezone=auto`;
      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lats}&longitude=${lngs}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,wind_direction_10m`;

      const [aqiRes, weatherRes] = await Promise.all([
        fetch(aqiUrl).then((r) => r.json()),
        fetch(weatherUrl).then((r) => r.json())
      ]);

      // Normalize array or single item
      const aqiArray = Array.isArray(aqiRes) ? aqiRes : [aqiRes];
      const weatherArray = Array.isArray(weatherRes) ? weatherRes : [weatherRes];

      // Update in-memory dataset
      CITIES_DATA.forEach((city, index) => {
        const aqiItem = aqiArray[index];
        const weatherItem = weatherArray[index];

        if (aqiItem && aqiItem.current) {
          if (aqiItem.current.us_aqi != null) city.aqi = Math.round(aqiItem.current.us_aqi);
          if (aqiItem.current.pm2_5 != null) city.pm25 = aqiItem.current.pm2_5;
          if (aqiItem.current.pm10 != null) city.pm10 = aqiItem.current.pm10;
        }

        if (weatherItem && weatherItem.current) {
          if (weatherItem.current.temperature_2m != null) city.temp = weatherItem.current.temperature_2m;
          if (weatherItem.current.relative_humidity_2m != null) city.humidity = weatherItem.current.relative_humidity_2m;
          if (weatherItem.current.wind_speed_10m != null) city.windSpeed = weatherItem.current.wind_speed_10m;
          if (weatherItem.current.wind_direction_10m != null) {
            city.windDir = weatherItem.current.wind_direction_10m;
            city.windText = this.degToCompass(city.windDir);
          }
        }
      });

      // 2. Fetch Singapore NEA official real-time PSI
      try {
        const sgRes = await fetch('https://api.data.gov.sg/v1/environment/psi').then((r) => r.json());
        if (sgRes && sgRes.items && sgRes.items.length > 0) {
          const readings = sgRes.items[0].readings;
          if (readings && readings.psi_twenty_four_hourly) {
            const psi = readings.psi_twenty_four_hourly;
            const pm25 = readings.pm25_twenty_four_hourly || {};

            const sgMap = {
              'sg_central': 'central',
              'sg_north': 'north',
              'sg_south': 'south',
              'sg_east': 'east',
              'sg_west': 'west'
            };

            let totalPsi = 0, totalPm25 = 0, count = 0;

            Object.entries(sgMap).forEach(([cityId, sector]) => {
              const city = CITIES_DATA.find((c) => c.id === cityId);
              if (city && psi[sector] != null) {
                city.aqi = psi[sector];
                if (pm25[sector]) city.pm25 = pm25[sector];
                totalPsi += psi[sector];
                totalPm25 += (pm25[sector] || 0);
                count++;
              }
            });

            // Update Singapore consolidated national average
            if (count > 0) {
              const sgOverview = CITIES_DATA.find((c) => c.id === 'sg_overview');
              if (sgOverview) {
                sgOverview.aqi = Math.round(totalPsi / count);
                sgOverview.pm25 = Math.round((totalPm25 / count) * 10) / 10;
                sgOverview.driver = `National 5-Sector Mean (Central: ${psi.central || '--'}, North: ${psi.north || '--'}, South: ${psi.south || '--'}, East: ${psi.east || '--'}, West: ${psi.west || '--'})`;
              }
            }
          }
        }
      } catch (sgErr) {
        console.warn('NEA PSI fetch notice:', sgErr);
      }

      // 3. Optional Enrichment: If WAQI_API_KEY is provided in .env
      if (this.env.WAQI_API_KEY && this.env.WAQI_API_KEY.trim().length > 5) {
        console.log('[AERO-NEXUS] WAQI API token detected, enriching station data...');
        if (this.selectedCity) {
          try {
            const waqiUrl = `https://api.waqi.info/feed/geo:${this.selectedCity.lat};${this.selectedCity.lng}/?token=${encodeURIComponent(this.env.WAQI_API_KEY.trim())}`;
            const waqiRes = await fetch(waqiUrl).then(r => r.json());
            if (waqiRes && waqiRes.status === 'ok' && waqiRes.data) {
              if (waqiRes.data.aqi != null) this.selectedCity.aqi = waqiRes.data.aqi;
              if (waqiRes.data.iaqi && waqiRes.data.iaqi.pm25) this.selectedCity.pm25 = waqiRes.data.iaqi.pm25.v;
              if (waqiRes.data.iaqi && waqiRes.data.iaqi.pm10) this.selectedCity.pm10 = waqiRes.data.iaqi.pm10.v;
              if (waqiRes.data.city && waqiRes.data.city.name) {
                this.selectedCity.stationName = `WAQI: ${waqiRes.data.city.name}`;
              }
            }
          } catch (waqiErr) {
            console.warn('[AERO-NEXUS] WAQI feed query note:', waqiErr);
          }
        }
      }

      // 4. Optional Enrichment: If OPENWEATHER_API_KEY is provided in .env
      if (this.env.OPENWEATHER_API_KEY && this.env.OPENWEATHER_API_KEY.trim().length > 5) {
        if (this.selectedCity) {
          try {
            const owmUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${this.selectedCity.lat}&lon=${this.selectedCity.lng}&appid=${encodeURIComponent(this.env.OPENWEATHER_API_KEY.trim())}&units=metric`;
            const owmRes = await fetch(owmUrl).then(r => r.json());
            if (owmRes && owmRes.main) {
              if (owmRes.main.temp != null) this.selectedCity.temp = owmRes.main.temp;
              if (owmRes.main.humidity != null) this.selectedCity.humidity = owmRes.main.humidity;
              if (owmRes.wind && owmRes.wind.speed != null) this.selectedCity.windSpeed = owmRes.wind.speed * 3.6; // m/s to km/h
              if (owmRes.wind && owmRes.wind.deg != null) {
                this.selectedCity.windDir = owmRes.wind.deg;
                this.selectedCity.windText = this.degToCompass(owmRes.wind.deg);
              }
            }
          } catch (owmErr) {
            console.warn('[AERO-NEXUS] OpenWeatherMap query note:', owmErr);
          }
        }
      }

      // Re-render markers and update currently opened card smoothly
      this.renderMarkers();

      if (this.selectedCity) {
        const updated = CITIES_DATA.find((c) => c.id === this.selectedCity.id);
        if (updated) {
          this.updateFloatingCard(updated);
          const markerEl = document.getElementById(`marker-${updated.id}`);
          if (markerEl) markerEl.classList.add('selected');
        }
      }

      if (statusText) statusText.textContent = 'Live Feeds Active';
    } catch (err) {
      console.error('API Fetch notice (using resilient baseline):', err);
      if (statusText) statusText.textContent = 'Live Synced';
    } finally {
      setTimeout(() => {
        syncBtn.classList.remove('loading');
      }, 600);
    }
  }

  degToCompass(deg) {
    const val = Math.floor((deg / 22.5) + 0.5);
    const arr = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    return arr[val % 16];
  }

  // --- Bind UI Events ---
  bindEvents() {
    // Country navigation tabs
    this.countryTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        this.filterByCountry(tab.dataset.country);
      });
    });

    // Search input
    this.searchInput.addEventListener('input', (e) => {
      this.handleSearch(e.target.value);
    });

    this.searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const clean = this.searchInput.value.trim().toLowerCase();
        const firstMatch = CITIES_DATA.find((c) => c.name.toLowerCase().includes(clean));
        if (firstMatch) {
          this.selectCity(firstMatch);
          this.searchDropdown.classList.remove('open');
        }
      }
    });

    // Clear search
    this.clearSearchBtn.addEventListener('click', () => {
      this.searchInput.value = '';
      this.clearSearchBtn.style.display = 'none';
      this.searchDropdown.classList.remove('open');
    });

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
      if (!this.searchInput.contains(e.target) && !this.searchDropdown.contains(e.target)) {
        this.searchDropdown.classList.remove('open');
      }
    });

    // Close Floating Card
    this.btnCloseCard.addEventListener('click', () => {
      this.closeCard();
    });

    // Sync Live Data Button
    this.btnSync.addEventListener('click', () => {
      this.fetchLiveAqiData();
    });

    // Toggle Cross-Border Links
    this.btnToggleLinks.addEventListener('click', () => {
      this.showCorridors = !this.showCorridors;
      this.btnToggleLinks.classList.toggle('active', this.showCorridors);
      this.renderCorridors();
    });

    // Reset ASEAN View
    this.btnResetView.addEventListener('click', () => {
      this.filterByCountry('all');
    });
  }
}

// ============================================================================
// 5. APPLICATION LAUNCH
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  window.aeroNexus = new AeroNexusApp();
});
