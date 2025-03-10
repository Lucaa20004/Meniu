import { HeadsetIcon, LogOutIcon, SearchIcon, SettingsIcon, UserIcon } from 'lucide-react'
import React from 'react'

const App = () => {
  return (
    <div className=" flex flex-row">
    <div class="flex flex-col h-screen w-25 bg-gray-700 items-center p-5 ">
      <div className="flex items-center justify-center p-4 bg-gray-400 m-5 rounded-3xl hover:rounded-2xl tranistion duration-400 hover:cursor-pointer ring-2 text-white hover:bg-gray-600"><SearchIcon/></div>
      <div className="flex items-center justify-center p-4 bg-gray-400 m-5 rounded-3xl hover:rounded-2xl tranistion duration-400 hover:cursor-pointer ring-2 text-white hover:bg-gray-600"><UserIcon/></div>
      <div className="flex items-center justify-center p-4 bg-gray-400 m-5 rounded-3xl hover:rounded-2xl tranistion duration-400 hover:cursor-pointer ring-2 text-white hover:bg-gray-600"><SettingsIcon/></div>
      <div className="flex align-baseline items-center justify-center p-4 bg-gray-400 m-265 rounded-3xl hover:rounded-2xl tranistion duration-400 hover:cursor-pointer ring-2 text-white hover:bg-gray-600"><LogOutIcon/></div>

    </div>
    <div className="grid bg-gray-400 h-screen w-full items-center justify-center grid-cols-4 place-items-center">
      <div className="flex flex-col justify-center w-100 h-130 bg-blue-300 rounded-2xl shadow-cyan-950/50 shadow-lg hover:cursor-pointer transition duration-400 hover:shadow-cyan-950 hover:ring-2 text-cyan-950/50">
        <div className="flex items-center justify-center h-80 w-100 ">
          <div className="flex items-center justify-center bg-white h-70 w-70 rounded-full ring-6">Photo</div>
        </div>
        <div className="flex flex-col items-center justify-center h-50 w-100 bg-gray-500 rounded-b-2xl">
          <div className="flex items-center justify-center text-black h-13 w-100 rounded-2xl">Diana</div>
          <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">  Contact</div>
          <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 m-4 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Hire</div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-100 h-130 bg-orange-300 rounded-2xl shadow-cyan-950/50 shadow-lg hover:cursor-pointer transition duration-400 hover:shadow-cyan-950 hover:ring-2 text-cyan-950/50">
        <div className="flex items-center justify-center h-80 w-100 ">
          <div className="flex items-center justify-center bg-white h-70 w-70 rounded-full ring-6">Photo</div>
        </div>
        <div className="flex flex-col items-center justify-center h-50 w-100 bg-gray-500 rounded-b-2xl">
          <div className="flex items-center justify-center text-black h-13 w-100 rounded-2xl">Tudor</div>
          <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Contact</div>
          <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 m-4 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Hire</div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-100 h-130 bg-pink-300 rounded-2xl shadow-cyan-950/50 shadow-lg hover:cursor-pointer transition duration-400 hover:shadow-cyan-950 hover:ring-2 text-cyan-950/50">
        <div className="flex items-center justify-center h-80 w-100 ">
          <div className="flex items-center justify-center bg-white h-70 w-70 rounded-full ring-6">Photo</div>
        </div>
        <div className="flex flex-col items-center justify-center h-50 w-100 bg-gray-500 rounded-b-2xl">
          <div className="flex items-center justify-center text-black h-13 w-100 rounded-2xl">Buruian</div>
          <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Contact</div>
          <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 m-4 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Hire</div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-100 h-130 bg-green-300 rounded-2xl shadow-cyan-950/50 shadow-lg hover:cursor-pointer transition duration-400 hover:shadow-cyan-950 hover:ring-2 text-cyan-950/50">
        <div className="flex items-center justify-center h-80 w-100 ">
          <div className="flex items-center justify-center bg-white h-70 w-70 rounded-full ring-6">Photo</div>
        </div>
        <div className="flex flex-col items-center justify-center h-50 w-100 bg-gray-500 rounded-b-2xl">
          <div className="flex items-center justify-center text-black h-13 w-100 rounded-2xl">Luca</div>
          <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Contact</div>
          <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 m-4 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Hire</div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-100 h-130 bg-purple-300 rounded-2xl shadow-cyan-950/50 shadow-lg hover:cursor-pointer transition duration-400 hover:shadow-cyan-950 hover:ring-2 text-cyan-950/50">
        <div className="flex items-center justify-center h-80 w-100 ">
          <div className="flex items-center justify-center bg-white h-70 w-70 rounded-full ring-6">Photo</div>
        </div>
        <div className="flex flex-col items-center justify-center h-50 w-100 bg-gray-500 rounded-b-2xl">
          <div className="flex items-center justify-center text-black h-13 w-100 rounded-2xl">Alexia</div>
          <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Contact</div>
          <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 m-4 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Hire</div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-100 h-130 bg-amber-300 rounded-2xl shadow-cyan-950/50 shadow-lg hover:cursor-pointer transition duration-400 hover:shadow-cyan-950 hover:ring-2 text-cyan-950/50">
        <div className="flex items-center justify-center h-80 w-100 ">
          <div className="flex items-center justify-center bg-white h-70 w-70 rounded-full ring-6">Photo</div>
        </div>
        <div className="flex flex-col items-center justify-center h-50 w-100 bg-gray-500 rounded-b-2xl">
          <div className="flex items-center justify-center text-black h-13 w-100 rounded-2xl">Biris</div>
          <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Contact</div>
          <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 m-4 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Hire</div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-100 h-130 bg-red-300 rounded-2xl shadow-cyan-950/50 shadow-lg hover:cursor-pointer transition duration-400 hover:shadow-cyan-950 hover:ring-2 text-cyan-950/50">
        <div className="flex items-center justify-center h-80 w-100 ">
          <div className="flex items-center justify-center bg-white h-70 w-70 rounded-full ring-6">Photo</div>
        </div>
        <div className="flex flex-col items-center justify-center h-50 w-100 bg-gray-500 rounded-b-2xl">
          <div className="flex items-center justify-center text-black h-13 w-100 rounded-2xl">Billy</div>
          <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Contact</div>
          <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 m-4 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Hire</div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-100 h-130 bg-lime-300 rounded-2xl shadow-cyan-950/50 shadow-lg hover:cursor-pointer transition duration-400 hover:shadow-cyan-950 hover:ring-2 text-cyan-950/50">
        <div className="flex items-center justify-center h-80 w-100 ">
          <div className="flex items-center justify-center bg-white h-70 w-70 rounded-full ring-6">Photo</div>
        </div>
        <div className="flex flex-col items-center justify-center h-50 w-100 bg-gray-500 rounded-b-2xl">
          <div className="flex items-center justify-center text-black h-13 w-100 rounded-2xl">Matei</div>
          <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Contact</div>
          <div className="flex items-center justify-center text-black bg-gray-300 h-13 w-95 m-4 rounded-2xl text-2xl hover:text-cyan-600 hover:ring-2 hover:bg-gray-700 transition duration-400">Hire</div>
        </div>
      </div>
      
    </div>
   </div>
    
  )
}

export default App