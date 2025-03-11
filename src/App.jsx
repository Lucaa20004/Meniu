import { CircleHelpIcon, HeadsetIcon, LogOutIcon, SearchIcon, SettingsIcon, UserIcon, WalletIcon } from 'lucide-react'
import React from 'react'
import { Button ,Tooltip } from "flowbite-react";
import  { useState } from 'react';
import { motion , AnimatePresence  } from 'framer-motion';

const App = () => {
  const [activeSection, setActiveSection] = useState('');
  return (
    <div className=" flex flex-row bg-gray-400">
    <div class="flex flex-col h-screen w-25 bg-gray-700 items-center p-5 ">
      <Tooltip content="Money" placement="right"  className="p-4 flex items-center justify-center" style="light">
              <button onClick={() => setActiveSection('money')} className="flex items-center justify-center p-4 bg-gray-400 m-5 rounded-3xl hover:rounded-2xl tranistion duration-400 hover:cursor-pointer ring-2 text-white hover:bg-gray-600"><WalletIcon/></button>
      </Tooltip>

      <Tooltip content="Profile" placement="right"  className="p-4 flex items-center justify-center" style="light">
              <button onClick={() => setActiveSection('user')} className="flex items-center justify-center p-4 bg-gray-400 m-5 rounded-3xl hover:rounded-2xl tranistion duration-400 hover:cursor-pointer ring-2 text-white hover:bg-gray-600"><UserIcon/></button>
      </Tooltip>

      <Tooltip content="Settings" placement="right"  className="p-4 flex items-center justify-center" style="light"> 
              <button onClick={() => setActiveSection('settings')} className="flex items-center justify-center p-4 bg-gray-400 m-5 rounded-3xl hover:rounded-2xl tranistion duration-400 hover:cursor-pointer ring-2 text-white hover:bg-gray-600"><SettingsIcon/></button>
      </Tooltip>

      <Tooltip content="Help" placement="right"  className="p-4 flex items-center justify-center" style="light">
              <button onClick={() => setActiveSection('help')} className="flex items-center justify-center p-4 bg-gray-400 m-5 rounded-3xl hover:rounded-2xl tranistion duration-400 hover:cursor-pointer ring-2 text-white hover:bg-gray-600"><CircleHelpIcon/></button>
      </Tooltip>
      
      <button className="flex align-baseline items-center justify-center p-4 bg-gray-400 m-240 rounded-3xl hover:rounded-2xl tranistion duration-400 hover:cursor-pointer ring-2 text-white hover:bg-gray-600"><LogOutIcon/></button>

    </div>
    <div className="flex justify-center items-center h-screen w-full bg-gray-400">
      <AnimatePresence>
        {activeSection === 'money' && (
          <motion.div
          key="money"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          layout={false}
          className="flex justify-center items-center h-screen w-full"
          >
            <div className="flex flex-row items-center justify-center">
              <div className="flex items-center justify-center h-200 w-130 bg-white m-7 rounded-3xl hover:bg-gray-800 transition duration-400 ease-in-out hover:scale-110 hover:cursor-pointer hover:ring-2 hover:text-cyan-600">

              </div>
              <div className="flex items-center justify-center h-200 w-130 bg-white m-7 rounded-3xl hover:bg-gray-800 transition duration-400 ease-in-out hover:scale-110 hover:cursor-pointer hover:ring-2 hover:text-cyan-600">

              </div>
              <div className="flex items-center justify-center h-200 w-130 bg-white m-7 rounded-3xl hover:bg-gray-800 transition duration-400 ease-in-out hover:scale-110 hover:cursor-pointer hover:ring-2 hover:text-cyan-600">
                
              </div>
            </div>
          </motion.div>
        )}
        {activeSection === 'help' && (
          <motion.div
          key="help"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 , ease: "easeInOut"}}
          style={{
            position: "absolute", 
            top: "10%", 
            left: "12%", 
            transform: "translate(-50%, -50%)", // Centrează pe orizontală și verticală
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)", // Configurează coloanele
            gridGap: "160px", // Adaugă spațiu între elemente
            justifyItems: "center", // Centrează elementele pe orizontală în grid
            alignItems: "center", // Centrează elementele pe verticală în grid
          }}          
           
          >
          <div className="flex flex-col justify-center w-100 h-130 bg-blue-300 rounded-2xl shadow-cyan-950/50 shadow-lg hover:cursor-pointer transition duration-400 hover:shadow-cyan-950 hover:ring-2 text-cyan-950/50">
          <div className="flex items-center justify-center h-80 w-100 ">
            <div className="flex items-center justify-center bg-white h-70 w-70 rounded-full ring-6">
             <img src="https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=600" className="h-70 w-70 rounded-full"></img>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-50 w-100 bg-gray-500 rounded-b-2xl">
            <div className="flex items-center justify-center text-white h-13 w-100 rounded-2xl text-2xl">Diana</div>
            <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">  Contact</div>
            <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 m-4 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Hire</div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-100 h-130 bg-orange-300 rounded-2xl shadow-cyan-950/50 shadow-lg hover:cursor-pointer transition duration-400 hover:shadow-cyan-950 hover:ring-2 text-cyan-950/50">
         <div className="flex items-center justify-center h-80 w-100 ">
            <div className="flex items-center justify-center bg-white h-70 w-70 rounded-full ring-6">
             <img src="https://images.pexels.com/photos/36843/lion-panthera-leo-lioness-animal-world.jpg?auto=compress&cs=tinysrgb&w=600" className="h-70 w-70 rounded-full"></img>
           </div>
         </div>
          <div className="flex flex-col items-center justify-center h-50 w-100 bg-gray-500 rounded-b-2xl">
            <div className="flex items-center justify-center text-white h-13 w-100 rounded-2xl text-2xl">Tudor</div>
            <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Contact</div>
            <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 m-4 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Hire</div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-100 h-130 bg-pink-300 rounded-2xl shadow-cyan-950/50 shadow-lg hover:cursor-pointer transition duration-400 hover:shadow-cyan-950 hover:ring-2 text-cyan-950/50">
          <div className="flex items-center justify-center h-80 w-100 ">
            <div className="flex items-center justify-center bg-white h-70 w-70 rounded-full ring-6">
              <img src="https://images.pexels.com/photos/18167822/pexels-photo-18167822/free-photo-of-close-up-of-a-cat.jpeg?auto=compress&cs=tinysrgb&w=600" className="h-70 w-70 rounded-full"></img>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-50 w-100 bg-gray-500 rounded-b-2xl">
            <div className="flex items-center justify-center text-white h-13 w-100 rounded-2xl text-2xl">Buruian</div>
            <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Contact</div>
            <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 m-4 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Hire</div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-100 h-130 bg-green-300 rounded-2xl shadow-cyan-950/50 shadow-lg hover:cursor-pointer transition duration-400 hover:shadow-cyan-950 hover:ring-2 text-cyan-950/50">
          <div className="flex items-center justify-center h-80 w-100 ">
            <div className="flex items-center justify-center bg-white h-70 w-70 rounded-full ring-6">
              <img src="https://images.pexels.com/photos/67552/giraffe-tall-mammal-africa-67552.jpeg?auto=compress&cs=tinysrgb&w=600" className="h-70 w-70 rounded-full"></img>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-50 w-100 bg-gray-500 rounded-b-2xl">
            <div className="flex items-center justify-center text-white h-13 w-100 rounded-2xl text-2xl">Luca</div>
            <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Contact</div>
            <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 m-4 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Hire</div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-100 h-130 bg-purple-300 rounded-2xl shadow-cyan-950/50 shadow-lg hover:cursor-pointer transition duration-400 hover:shadow-cyan-950 hover:ring-2 text-cyan-950/50">
          <div className="flex items-center justify-center h-80 w-100 ">
            <div className="flex items-center justify-center bg-white h-70 w-70 rounded-full ring-6">
              <img src="https://images.pexels.com/photos/236622/pexels-photo-236622.jpeg?auto=compress&cs=tinysrgb&w=600" className="h-70 w-70 rounded-full"></img>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-50 w-100 bg-gray-500 rounded-b-2xl">
            <div className="flex items-center justify-center text-white h-13 w-100 rounded-2xl text-2xl">Alexia</div>
            <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Contact</div>
            <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 m-4 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Hire</div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-100 h-130 bg-amber-300 rounded-2xl shadow-cyan-950/50 shadow-lg hover:cursor-pointer transition duration-400 hover:shadow-cyan-950 hover:ring-2 text-cyan-950/50">
          <div className="flex items-center justify-center h-80 w-100 ">
            <div className="flex items-center justify-center bg-white h-70 w-70 rounded-full ring-6">
              <img src="https://images.pexels.com/photos/86405/penguin-funny-blue-water-86405.jpeg?auto=compress&cs=tinysrgb&w=600" className="h-70 w-70 rounded-full"></img>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-50 w-100 bg-gray-500 rounded-b-2xl">
            <div className="flex items-center justify-center text-white h-13 w-100 rounded-2xl text-2xl">Biris</div>
            <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Contact</div>
            <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 m-4 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Hire</div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-100 h-130 bg-red-300 rounded-2xl shadow-cyan-950/50 shadow-lg hover:cursor-pointer transition duration-400 hover:shadow-cyan-950 hover:ring-2 text-cyan-950/50">
          <div className="flex items-center justify-center h-80 w-100 ">
            <div className="flex items-center justify-center bg-white h-70 w-70 rounded-full ring-6">
              <img src="https://images.pexels.com/photos/31027922/pexels-photo-31027922/free-photo-of-captivating-close-up-of-burrowing-owl-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600" className="h-70 w-70 rounded-full"></img>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-50 w-100 bg-gray-500 rounded-b-2xl">
            <div className="flex items-center justify-center text-white h-13 w-100 rounded-2xl text-2xl">Billy</div>
            <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Contact</div>
            <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 m-4 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Hire</div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-100 h-130 bg-lime-300 rounded-2xl shadow-cyan-950/50 shadow-lg hover:cursor-pointer transition duration-400 hover:shadow-cyan-950 hover:ring-2 text-cyan-950/50">
          <div className="flex items-center justify-center h-80 w-100 ">
            <div className="flex items-center justify-center bg-white h-70 w-70 rounded-full ring-6">
              <img src="https://images.pexels.com/photos/106686/pexels-photo-106686.jpeg?auto=compress&cs=tinysrgb&w=600" className="h-70 w-70 rounded-full"></img>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-50 w-100 bg-gray-500 rounded-b-2xl">
            <div className="flex items-center justify-center text-white h-13 w-100 rounded-2xl text-2xl">Matei</div>
            <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Contact</div>
            <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 m-4 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Hire</div>
          </div>
        </div>
        </motion.div>

        )}
      </AnimatePresence>
      
        
        
        
      
    
    </div>
   </div>
    
  )
}

export default App