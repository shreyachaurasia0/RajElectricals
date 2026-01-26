import React ,{ useContext, useEffect} from 'react'
import { ShopContext } from '../context/ShopContext'
import { LuSearch } from "react-icons/lu";
import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const {search , setSearch , showSearch , setShowSearch} = useContext(ShopContext);
    const localtion = useLocation(); 
    const [visible , setVisible] = React.useState(false);

    useEffect(() => {
        if(localtion.pathname.includes('/collection') ){
            setVisible(true);
        }
        else setVisible(false);
    }, [localtion]);

  return showSearch && visible? (
    <div className=" flex justify-center items-center pt-30 pb-2 bg-transparent">
      <div className="relative flex items-center w-full max-w-xl bg-white rounded-full  px-4 py-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="flex-1 outline-none bg-transparent text-sm px-2 py-1"
        />
        <LuSearch className="w-5 h-5 text-gray-500 mr-2" />
        <img
          onClick={() => setShowSearch(false)}
          className="w-4 h-4 cursor-pointer ml-1"
          src={assets.cross_icon}
          alt="Close"
        />
      </div>
    </div>
  ) : null
}

export default SearchBar
