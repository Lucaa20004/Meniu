import { CircleHelpIcon, HeadsetIcon, LogOutIcon, SearchIcon, SettingsIcon, UserIcon, WalletIcon } from 'lucide-react'
import React from 'react'
import { Button ,Tooltip } from "flowbite-react";
import  { useState } from 'react';
import { motion , AnimatePresence  } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Help from "./components/Help";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Subscription from "./components/Subscription";

const App = () => {
  const [activeSection, setActiveSection] = useState('');
  return (
    <Router>
    
    <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/help" element={<Help />} />
    </Routes>
    <div className=" flex flex-row bg-gray-400">
    <div class="flex flex-col h-screen w-25 bg-gray-700 items-center p-5 ">

      <Tooltip content="Money" placement="right"  className="p-4 flex items-center justify-center" style="light">
              <Link to="/subscription" className="flex items-center justify-center p-4 bg-gray-400 m-5 rounded-3xl hover:rounded-2xl tranistion duration-400 hover:cursor-pointer ring-2 text-white hover:bg-gray-600"><WalletIcon/></Link>
      </Tooltip>

      <Tooltip content="Profile" placement="right"  className="p-4 flex items-center justify-center" style="light">
              <button onClick={() => setActiveSection('user')} className="flex items-center justify-center p-4 bg-gray-400 m-5 rounded-3xl hover:rounded-2xl tranistion duration-400 hover:cursor-pointer ring-2 text-white hover:bg-gray-600"><UserIcon/></button>
      </Tooltip>

      <Tooltip content="Settings" placement="right"  className="p-4 flex items-center justify-center" style="light"> 
              <button onClick={() => setActiveSection('settings')} className="flex items-center justify-center p-4 bg-gray-400 m-5 rounded-3xl hover:rounded-2xl tranistion duration-400 hover:cursor-pointer ring-2 text-white hover:bg-gray-600"><SettingsIcon/></button>
      </Tooltip>

      <Tooltip content="Help" placement="right"  className="p-4 flex items-center justify-center" style="light">
              <Link  to="/help"  className="flex items-center justify-center p-4 bg-gray-400 m-5 rounded-3xl hover:rounded-2xl tranistion duration-400 hover:cursor-pointer ring-2 text-white hover:bg-gray-600"><CircleHelpIcon/></Link>
      </Tooltip>
      
      

    </div>
    <div className="flex justify-center items-center h-screen w-full bg-gray-400">
      <AnimatePresence>
        {activeSection === 'money' && (
          <motion.div
          key="money"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeInOut"}}
          layout={false}
          className="flex justify-center items-center h-screen w-full"
          >
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-col items-center justify-center h-200 w-130 bg-white m-7 rounded-3xl hover:bg-gray-800 transition duration-400 ease-in-out hover:scale-110 hover:ring-3 hover:text-cyan-600">
                <div className="flex items-center justify-center w-130 h-30 rounded-t-3xl">
                  Titlu
                </div>
                <div className="flex items-center justify-center w-120 h-140 ">
                  beneficii
                </div>
                <div className="flex items-center justify-center w-130 h-40 rounded-b-3xl">
                  <button className="h-20 w-100 rounded-2xl text-white bg-cyan-600 hover:cursor-pointer text-2xl hover:bg-cyan-700 transition duration-300">
                    Select
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center h-200 w-130 bg-white m-7 rounded-3xl hover:bg-gray-800 transition duration-400 ease-in-out hover:scale-110 hover:cursor-pointer hover:ring-3 hover:text-cyan-600">
               <div className="flex items-center justify-center w-130 h-30 rounded-t-3xl">
                  Titlu
                </div>
                <div className="flex items-center justify-center w-120 h-140 ">
                  beneficii
                </div>
                <div className="flex items-center justify-center w-130 h-40 rounded-b-3xl">
                  <button className="h-20 w-100 rounded-2xl text-white bg-cyan-600 hover:cursor-pointer text-2xl hover:bg-cyan-700 transition duration-300">
                    Select
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center h-200 w-130 bg-white m-7 rounded-3xl hover:bg-gray-800 transition duration-400 ease-in-out hover:scale-110 hover:cursor-pointer hover:ring-3 hover:text-cyan-600">
                <div className="flex items-center justify-center w-130 h-30 rounded-t-3xl">
                  Titlu
                </div>
                <div className="flex items-center justify-center w-120 h-140 ">
                  beneficii
                </div>
                <div className="flex items-center justify-center w-130 h-40 rounded-b-3xl">
                  <button className="h-20 w-100 rounded-2xl text-white bg-cyan-600 hover:cursor-pointer text-2xl hover:bg-cyan-700 transition duration-300">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      
      </AnimatePresence>
    </div>
   </div>
   </Router>
  )
}

export default App