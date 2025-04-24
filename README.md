# MovieGPT 🎬

A modern, responsive Netflix-inspired movie streaming UI built with React, Redux, and Tailwind CSS. Enjoy a beautiful video background, dynamic movie lists, and a clean, user-friendly interface.

## Features

- **Responsive Design:** Works seamlessly on all screen sizes, including 1080p and mobile devices.
- **Video Background:** Eye-catching hero section with a movie trailer/video.
- **Dynamic Movie Lists:** Browse Now Playing, Popular, Upcoming, and Top Rated movies.
- **Horizontal Scroll:** Movie lists scroll horizontally for a Netflix-like experience.
- **MultiLingual Feature** gives options upto 5 languages (english,hindi,marathi,gujrati,tamil)
- **Redux State Management:** Efficient and scalable state handling.
- **Authentication Ready:** Easily extendable for login/signup features using google Firebase .
- **Modern UI:** Built with Tailwind CSS for fast, customizable styling.

## Deployment

![MovieGPT](https://movie-gpt-one-liart.vercel.app/)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
https://github.com/Kunalwaldia8/MovieGPT.git
cd NetflixGPT

# Install dependencies
npm install
# or
yarn install
```

### Running the App

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
NetflixGPT/
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Customization

- **API Integration:** Plug in your own movie API (e.g., TMDB) in the utils/hooks.
- **Branding:** Replace logos, colors, and images in the public/ and src/assets/ folders.
- **Authentication:** Integrate Firebase/Auth0 or your preferred auth provider.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

> Built with using React, Redux, and Tailwind CSS.
