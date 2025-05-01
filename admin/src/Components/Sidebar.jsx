import React from 'react';
import { Home, Users, Settings, Hotel,TicketsPlane, LoaderPinwheel, NotepadText, Table, Table2, Play, File  } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-64  shadow h-full ">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-stone-500">Bean</h1>
        <nav className="space-y-8 text-stone-500 ">
          <a href="/" className="flex items-center p-2 text-stone-500 hover:bg-stone-700 rounded">
            <Home className="w-5 h-5 mr-2" /> Dashboard
          </a>
          <a href="/drinks" className="flex items-center p-2 text-stone-500 hover:bg-stone-700 rounded">
            <Play  className="w-5 h-5 mr-2" /> Drinks
          </a>
        
          
                <a href="/orders" className="flex items-center p-2 text-stone-500 hover:bg-stone-700 rounded">
            <NotepadText  className="w-5 h-5 mr-2" /> Orders
          </a>
      

        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
