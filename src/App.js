import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";

import { BrowserRouter as Router } from "react-router-dom";

import { motion } from 'framer-motion'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    </div>
  );
}

export default App;
