# 🚗 Car Finder Web App

A responsive and modern web application to help users explore and discover cars by searching, filtering, and browsing car details. Built with **React.js** and **TailwindCSS**, it features a clean UI, real-time UI updates, wishlist management via LocalStorage, and dynamic filtering.

## 🌟 Features

- 🔍 **Search & Filter**: Easily search for cars and apply filters like price range, brand, or fuel type.
- 📄 **Car Details View**: View detailed information about selected cars.
- ❤️ **Wishlist**: Add or remove cars from your wishlist (LocalStorage).
- ⚡ **Real-time UI Updates**: Instant interface updates on filter/search changes.
- 📱 **Responsive Design**: Mobile-friendly and optimized across devices.
- 💨 **TailwindCSS Styling**: Clean and consistent design powered by utility-first CSS.

---

## 🚀 Tech Stack

- **Frontend**: React.js, TailwindCSS
- **State Management**: React hooks + LocalStorage 
- **Icons**: React Icons  

---

## 📁 Project Structure

```
src/
├── components/
│   ├── CarCard.jsx
│   ├── FilterBar.jsx
│   ├── Header.jsx
│   └── Pagination.jsx
├── pages/
│   ├── CarDetails.jsx
│   ├── Home.jsx
│   └── Wishlist.jsx
├── utils/
│   └── localStorageUtils.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/adity672roy/cars-website.git
cd cars-website
npm install
```

### Run the App

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

---

## Wishlist in LocalStorage

Cars added to the wishlist are stored in LocalStorage, so they persist across browser sessions. This can be accessed and updated in the `Wishlist` component.
