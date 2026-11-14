# IP Address Tracker

A responsive IP Address Tracker built with React and TypeScript that allows users to search for IPv4 addresses and domain names, retrieve geolocation information, and visualize locations on an interactive map.

## Features

- Search for IPv4 addresses and domain names.
- Retrieve geolocation data using the IPify Geolocation API.
- Display IP information, including IP address, city, country, and timezone.
- View the Internet Service Provider (ISP) associated with an IP address.
- Visualize geographical locations on an interactive map using React Leaflet.
- Automatically update the map based on search results.
- Handle loading and error states during API requests.
- Responsive interface optimized for mobile, tablet, and desktop screens.

## Built With

- **React** – UI development
- **TypeScript** – Type safety
- **Tailwind CSS** – Styling and responsive design
- **Zustand** – Global state management
- **TanStack Query** – API data fetching and caching
- **React Leaflet** – Interactive maps
- **Leaflet** – Map rendering
- **IPify Geolocation API** – IP address and domain geolocation
- **pnpm** – Package management
- **Vite** – Development environment

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)
- An API key from [IPify](https://geo.ipify.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jzzmiiinn/IP-Address-Tracker.git
   ```

2. Navigate to the project directory:

   ```bash
   cd IP-Address-Tracker
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Create a `.env.local` file in the project root and add your IPify API key:

   ```env
   VITE_IPIFY_API_KEY=your_api_key
   ```

5. Start the development server:

   ```bash
   pnpm dev
   ```

6. Open the local URL provided by Vite in your browser.

## Environment Variables

The project requires an IPify API key to retrieve geolocation information.

| Variable | Description |
|---|---|
| `VITE_IPIFY_API_KEY` | Your IPify Geolocation API key |

**Note:** Never commit your actual environment configuration files or expose credentials unnecessarily. Vite environment variables prefixed with `VITE_` are included in the client-side bundle, so they should not be treated as private secrets.

## API Reference

This project uses the [IPify Geolocation API](https://geo.ipify.org/docs) to retrieve geolocation information for IPv4 addresses and domain names.

The API provides information such as:

- IP address
- Country and city
- Geographic coordinates
- Timezone
- Internet Service Provider (ISP)

## Project Structure

```text
ip-address-tracker-master/
├── design/
│   ├── active-states.jpg
│   ├── desktop-design.jpg
│   └── mobile-design.jpg
├── public/
├── src/
│   ├── api/
│   │   └── ipApi.ts
│   ├── assets/
│   │   ├── favicon-32x32.png
│   │   ├── icon-arrow.svg
│   │   ├── icon-location.svg
│   │   ├── pattern-bg-desktop.png
│   │   └── pattern-bg-mobile.png
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── InfoItem.tsx
│   │   ├── IpInfoPanel.tsx
│   │   ├── MapView.tsx
│   │   └── SearchForm.tsx
│   ├── hooks/
│   │   └── useIpInfo.ts
│   ├── store/
│   │   └── ipStore.ts
│   ├── types/
│   │   └── ip.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── README.md
├── style-guide.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### Folder Overview

- **api/** – Handles API requests to the IPify Geolocation API.
- **assets/** – Contains images, icons, and other static assets.
- **components/** – Contains reusable UI components.
- **hooks/** – Contains custom React hooks for managing API data fetching.
- **store/** – Manages global application state using Zustand.
- **types/** – Contains TypeScript interfaces and type definitions.
- **design/** – Contains the original Frontend Mentor design references.

## Acknowledgements

- [Frontend Mentor](https://www.frontendmentor.io/) for the project challenge and design.
- [IPify](https://www.ipify.org/) for providing the geolocation API.
- [OpenStreetMap](https://www.openstreetmap.org/) for map data.
- [React Leaflet](https://react-leaflet.js.org/) for integrating interactive maps with React.

---

Built as part of my frontend development journey.
