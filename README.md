# 🎬 Netflix GPT

A modern, feature-rich Netflix clone with intelligent movie search capabilities powered by TMDB API. Built with React, Redux Toolkit, and Firebase Authentication.

![Netflix GPT Banner](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.9.0-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-12.3.0-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

### 🔐 Authentication
- **Firebase Authentication** - Secure user registration and login
- **Protected Routes** - Automatic redirection based on auth state
- **Profile Management** - Custom user avatars and display names
- **Session Persistence** - Stay logged in across browser sessions

### 🎥 Movie Browsing
- **Dynamic Movie Categories**
  - Now Playing
  - Popular Movies
  - Top Rated
  - Upcoming Releases
- **Infinite Scroll** - Smooth horizontal scrolling movie lists
- **Auto-playing Trailers** - Background video on main banner
- **Responsive Design** - Optimized for all screen sizes

### 🔍 Intelligent Search
- **Real-time Search Suggestions** - Instant movie recommendations as you type
- **Advanced Filtering** - Search across TMDB's extensive database
- **Visual Search Results** - Grid layout with movie posters
- **Quick Preview** - Click suggestions for instant details

### 🌐 Internationalization
- **Multi-language Support**
  - English
  - Hindi
  - Spanish
- **Dynamic Language Switching** - Change language on the fly

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Firebase Account** - For authentication
- **TMDB API Key** - For movie data

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/netflix-gpt.git
   cd netflix-gpt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root directory:
   ```env
   # TMDB API Configuration
   REACT_APP_TMDB_KEY=your_tmdb_bearer_token_here

   # Firebase Configuration
   REACT_APP_FIREBASE_API_KEY=your_api_key_here
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id_here
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id_here
   REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id_here
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🔑 API Keys Setup

### TMDB API Key

1. Visit [TMDB](https://www.themoviedb.org/)
2. Create an account or log in
3. Go to **Settings** → **API**
4. Request an API key
5. Copy the **Bearer Token** (not the API key)
6. Add it to your `.env` file as `REACT_APP_TMDB_KEY`

### Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable **Authentication** → **Email/Password**
4. Go to **Project Settings** → **General**
5. Scroll to **Your apps** → **Web app**
6. Copy the configuration values
7. Add them to your `.env` file

## 📁 Project Structure

```
netflix-gpt/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Body.js              # Router configuration
│   │   ├── Browse.js            # Main browse page
│   │   ├── GptSearch.js         # Search interface
│   │   ├── GptSearchBar.js      # Search input component
│   │   ├── GptMovieSuggestions.js  # Search suggestions
│   │   ├── Header.js            # Navigation header
│   │   ├── Login.js             # Authentication page
│   │   ├── MainContainer.js     # Hero section
│   │   ├── SecondaryContainer.js   # Movie lists
│   │   ├── VideoBackground.js   # Trailer player
│   │   ├── VideoTitle.js        # Movie info overlay
│   │   ├── MovieList.js         # Horizontal movie list
│   │   └── MovieCard.js         # Individual movie card
│   ├── hooks/
│   │   ├── useNowPlayingMovies.js
│   │   ├── usePopularMovies.js
│   │   ├── useTopRatedMovies.js
│   │   ├── useUpcomingMovies.js
│   │   └── useMovieTrailer.js
│   ├── utils/
│   │   ├── appStore.js          # Redux store
│   │   ├── userSlice.js         # User state
│   │   ├── moviesSlice.js       # Movies state
│   │   ├── gptSlice.js          # Search state
│   │   ├── configSlice.js       # Config state
│   │   ├── constants.js         # API constants
│   │   ├── firebase.js          # Firebase config
│   │   ├── validate.js          # Form validation
│   │   └── languageConstants.js # i18n strings
│   ├── App.js
│   ├── index.js
│   └── index.css
├── .env.example
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - UI library
- **React Router DOM 7.9.3** - Client-side routing
- **Redux Toolkit 2.9.0** - State management
- **React Redux 9.2.0** - React bindings for Redux

### Styling
- **Tailwind CSS 4.0.0** - Utility-first CSS framework
- **PostCSS** - CSS preprocessing
- **Custom Scrollbar Styles** - Enhanced UX

### Backend & Services
- **Firebase 12.3.0** - Authentication & hosting
- **TMDB API** - Movie data and metadata

### Development Tools
- **React Scripts 5.0.1** - Build tooling
- **Testing Library** - Component testing
- **ESLint** - Code linting

## 🎨 Features in Detail

### Authentication Flow
- Email/password registration with validation
- Secure login with Firebase Auth
- Automatic profile creation with avatar
- Protected route guards
- Persistent sessions

### Movie Data Management
- Custom React hooks for data fetching
- Redux state management for global access
- Efficient caching to minimize API calls
- Error handling and loading states

### Search Functionality
- Debounced search for performance
- Real-time suggestions dropdown
- Click-to-select functionality
- Full search results grid
- Movie poster previews

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interfaces
- Adaptive layouts

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Run tests with coverage:
```bash
npm test -- --coverage
```

## 📦 Build for Production

Create an optimized production build:
```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

## 🚢 Deployment

### Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase:
   ```bash
   firebase init
   ```

4. Deploy:
   ```bash
   npm run build
   firebase deploy
   ```

### Other Platforms
- **Vercel**: Connect GitHub repo and deploy
- **Netlify**: Drag and drop build folder
- **AWS S3**: Upload build folder to S3 bucket

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards
- Use ESLint for code quality
- Follow React best practices
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
