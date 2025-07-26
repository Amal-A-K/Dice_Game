# 🎲 Responsive Dice Game

A modern, fully responsive dice game built with React and Vite. Test your luck by guessing the dice roll and rack up points in this engaging web application!

## 🌟 Features

- **🎯 Interactive Gameplay**: Select a number and roll the dice to score points
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🎨 Modern UI**: Clean, intuitive interface with smooth animations
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🎪 Engaging Interactions**: Hover effects, transitions, and micro-animations
- **📋 Game Rules**: Built-in rules display for easy understanding

## 🎮 How to Play

1. **Select a Number**: Choose any number from 1 to 6
2. **Roll the Dice**: Click on the dice image to roll
3. **Score Points**: 
   - If your selected number matches the dice, you gain points equal to the dice value
   - If you guess wrong, 2 points are deducted from your score
4. **Reset & Repeat**: Use the reset button to start fresh or continue playing

## 🚀 Live Demo

[View Live Demo](https://dice-game-nine-inky-78.vercel.app/) <!-- Replace with your actual deployment URL -->

## 📱 Responsive Design

The game is fully optimized for all screen sizes:

- **Desktop**: Full-featured layout with side-by-side components
- **Tablet**: Responsive stacking with optimized touch targets
- **Mobile**: Mobile-first design with enlarged buttons and intuitive navigation

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Next-generation frontend tooling
- **Styled Components** - CSS-in-JS styling solution
- **JavaScript ES6+** - Modern JavaScript features
- **CSS3** - Advanced styling with Flexbox and Grid
- **Responsive Design** - Mobile-first approach with media queries

## 🏗️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Amal-A-K/Dice_Game.git
   cd dice-game
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🎨 Key Features Implemented

### Responsive Design
- **Fluid Typography**: Uses `clamp()` for scalable text across all devices
- **Flexible Layouts**: CSS Flexbox and Grid for adaptive layouts
- **Touch-Friendly**: Optimized button sizes and touch targets for mobile
- **Media Queries**: Breakpoints at 768px (tablet) and 480px (mobile)

### Modern React Patterns
- **Functional Components**: Using React hooks (useState)
- **Component Composition**: Modular, reusable components
- **Styled Components**: Scoped styling with dynamic props
- **State Management**: Efficient state handling for game logic

### User Experience
- **Smooth Animations**: CSS transitions and transforms
- **Interactive Feedback**: Hover states and click animations
- **Error Handling**: User-friendly error messages
- **Accessibility**: Proper semantic HTML and ARIA attributes

## 📁 Project Structure

```
src/
├── Components/
│   ├── StartGame.jsx      # Landing page component
│   ├── GamePlay.jsx       # Main game interface
│   ├── NumberSelector.jsx # Number selection component
│   ├── TotalScore.jsx     # Score display component
│   ├── RoleDice.jsx       # Dice rolling component
│   └── Rules.jsx          # Game rules component
├── styled/
│   └── Button.js          # Reusable button components
├── App.jsx                # Main app component
├── App.css                # Global styles
└── main.jsx               # App entry point
```

## 🎯 Game Logic

The game implements a simple but engaging scoring system:
- **Correct Guess**: +dice value points
- **Wrong Guess**: -2 points
- **Score Tracking**: Persistent score throughout the session
- **Reset Functionality**: Start fresh anytime

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**AMAL A K** - [GitHub](https://github.com/Amal-A-K) | [LinkedIn](https://www.linkedin.com/in/amal-a-k-3ab219218/)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing-fast build tool
- Styled Components for elegant CSS-in-JS solution

---

⭐ **Star this repository if you found it helpful!** ⭐
