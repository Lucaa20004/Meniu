import React from 'react'
import Help from "./Help";
import Profile from "./Profile";
import Settings from "./Settings";
import Subscription from "./Subscription";
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

function Animated() {

  const location = useLocation();
  return (
    

    <AnimatePresence>
        <Navbar />
        <Routes location={location} key={location.pathname}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/help" element={<Help />} />
        </Routes>

    </AnimatePresence>
  )
}

export default Animated