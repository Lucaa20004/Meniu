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
  return (
    <Router>
    <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/help" element={<Help />} />
    </Routes>
    <div className=" flex flex-col h-screen w-full bg-white">
      <div className="bg-gray-400 h-screen w-full flex items-center justify-center">
            acasa
      </div>

      <div class="flex flex-row bg-gray-700 items-center p-5 w-full justify-center">
       <Tooltip content="Money" placement="bottom"  className="p-4 flex items-center justify-center" style="light">
              <Link to="/subscription" className="flex items-center justify-center p-4 bg-gray-400 m-5 mx-20 rounded-3xl hover:rounded-2xl tranistion duration-400 hover:cursor-pointer ring-2 text-white hover:bg-gray-600"><WalletIcon size={64} /></Link>
       </Tooltip>

        <Tooltip content="Profile" placement="bottom"  className="p-4 flex items-center justify-center" style="light">
              <Link to="/profile" className="flex items-center justify-center p-4 bg-gray-400 m-5 mx-20 rounded-3xl hover:rounded-2xl tranistion duration-400 hover:cursor-pointer ring-2 text-white hover:bg-gray-600"><UserIcon size={64}/></Link>
        </Tooltip>

        <Tooltip content="Settings" placement="bottom"  className="p-4 flex items-center justify-center" style="light"> 
              <Link to="/settings" className="flex items-center justify-center p-4 bg-gray-400 m-5 mx-20 rounded-3xl hover:rounded-2xl tranistion duration-400 hover:cursor-pointer ring-2 text-white hover:bg-gray-600"><SettingsIcon size={64}/></Link>
        </Tooltip>

        <Tooltip content="Help" placement="bottom"  className="p-4 flex items-center justify-center" style="light">
              <Link  to="/help"  className="flex items-center justify-center p-4 bg-gray-400 m-5 mx-20 rounded-3xl hover:rounded-2xl tranistion duration-400 hover:cursor-pointer ring-2 text-white hover:bg-gray-600"><CircleHelpIcon size={64}/></Link>
        </Tooltip>
      </div>

   </div>
   </Router>
  )
}

export default App