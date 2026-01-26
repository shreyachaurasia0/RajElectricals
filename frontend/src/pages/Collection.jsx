import React ,{useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title'
import ProductItem from '../components/ProductItem';
import { motion } from "framer-motion";

const Collection = () => {

  const {products , search , showSearch} = useContext(ShopContext);
  const [showFilter , setShowFilter] = useState(true);
  const [filterProducts , setFilterProducts] = useState([]);
  const [category , setCategory] =  useState([]);
  const [ subCategory , setSubCategory] = useState([]);
  const [sortType , setSortType] = useState('relavant');

  const toggleCategory = (e) => {

    if(category.includes(e.target.value)){
       setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {

    if(subCategory.includes(e.target.value)){
       setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) )
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }
    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy);
  }


  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b) => (a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b) => (b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  }


  
  useEffect(()=>{
    applyFilter();
  }, [category, subCategory , search , showSearch,products])

  useEffect(()=>{
    sortProduct();
  }, [sortType])


  return (
  <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-25  w-full max-w-7xl mx-auto'>
      
      {/* Filter Options */}
      <div className='min-w-60 bg-white p-4 shadow rounded '>
        <p onClick={()=> setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2 text-black'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter? 'rotate-90':''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/*Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Kitchen Appliances'} onChange={toggleCategory}/> Kitchen Appliances
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Heating Appliances'} onChange={toggleCategory}/> Heating Appliances
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Cooling Appliances'} onChange={toggleCategory}/> Cooling Appliances
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Home & Cleaning'} onChange={toggleCategory}/> Home & Cleaning
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Personal Care'} onChange={toggleCategory}/> Personal Care
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Lighting & Electricals'} onChange={toggleCategory}/> Lighting & Electricals
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Hardware & Spare Parts'} onChange={toggleCategory}/> Hardware & Spare Parts
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Iron & Fabric Care'} onChange={toggleCategory}/> Iron & Fabric Care
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'CCTV Camera'} onChange={toggleCategory}/> CCTV Camera
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Others'} onChange={toggleCategory}/> Others
                </p>
            </div>
        </div>
        {/*SubCategory */}
         <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>Type</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Rice Cooker'} onChange={toggleSubCategory}/> Rice Cooker
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Mixer Grinder'} onChange={toggleSubCategory}/> Mixer Grinder
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Meat Grinder'} onChange={toggleSubCategory}/> Meat Grinder
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Pressure Cooker'} onChange={toggleSubCategory}/> Pressure Cooker
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Grinder Jar'} onChange={toggleSubCategory}/> Grinder Jar
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Electric Kettle'} onChange={toggleSubCategory}/> Electric Kettle
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Egg Boiler'} onChange={toggleSubCategory}/> Egg Boiler
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Casserole'} onChange={toggleSubCategory}/> Casserole
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Gas Stove'} onChange={toggleSubCategory}/> Gas Stove
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Induction'} onChange={toggleSubCategory}/> Induction
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Immersion Heater'} onChange={toggleSubCategory}/> Immersion Heater
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Un-coil Heater'} onChange={toggleSubCategory}/> Un-coil Heater
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Heater Rod'} onChange={toggleSubCategory}/> Heater Rod
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Oil filled Heater'} onChange={toggleSubCategory}/> Oil filled Heater
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Minor Heater'} onChange={toggleSubCategory}/> Minor Heater
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Bowl Element'} onChange={toggleSubCategory}/> Bowl Element
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Wall Fan'} onChange={toggleSubCategory}/> Wall Fan
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Pedestal Fan'} onChange={toggleSubCategory}/> Pedestal Fan
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Table Fan'} onChange={toggleSubCategory}/> Table Fan
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Exhaust Fan'} onChange={toggleSubCategory}/> Exhaust Fan
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Wiper'} onChange={toggleSubCategory}/> Wiper
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Mop'} onChange={toggleSubCategory}/> Mop
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Broom Stick'} onChange={toggleSubCategory}/> Broom Stick
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Trimmer'} onChange={toggleSubCategory}/> Trimmer
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Coffee Mug'} onChange={toggleSubCategory}/> Coffee Mug
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Steel Tiffin'} onChange={toggleSubCategory}/> Steel Tiffin
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Flask'} onChange={toggleSubCategory}/> Flask
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Straightener'} onChange={toggleSubCategory}/> Straightener
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Bottle'} onChange={toggleSubCategory}/> Bottle
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'LED Bulb 9W'} onChange={toggleSubCategory}/> LED Bulb 9W
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Inverter LED Bulb'} onChange={toggleSubCategory}/> Inverter LED Bulb
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'LED Fitting'} onChange={toggleSubCategory}/> LED Fitting
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Tube Light'} onChange={toggleSubCategory}/> Tube Light
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Holder'} onChange={toggleSubCategory}/> Holder
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'6A Socket'} onChange={toggleSubCategory}/> 6A Socket
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'6A Multi Plug'} onChange={toggleSubCategory}/> 6A Multi Plug
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'9 Way Plate'} onChange={toggleSubCategory}/> 9 Way Plate
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Hackshaw Blade'} onChange={toggleSubCategory}/> Hackshaw Blade
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Screw 1'} onChange={toggleSubCategory}/> Screw 1
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Hammer'} onChange={toggleSubCategory}/> Hammer
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Drill Machine'} onChange={toggleSubCategory}/> Drill Machine
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Drill Beats 5mm'} onChange={toggleSubCategory}/> Drill Beats 5mm
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Carbon brush'} onChange={toggleSubCategory}/> Carbon brush
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Casing'} onChange={toggleSubCategory}/> Casing
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'M/S Wire 1.5mm (coil)'} onChange={toggleSubCategory}/> M/S Wire 1.5mm (coil)
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'School Project Parts'} onChange={toggleSubCategory}/> School Project Parts
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Dry Iron'} onChange={toggleSubCategory}/> Dry Iron
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Steam Iron'} onChange={toggleSubCategory}/> Steam Iron
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Gutkha'} onChange={toggleSubCategory}/> Gutkha
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Charger'} onChange={toggleSubCategory}/> Charger
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Filer Candle'} onChange={toggleSubCategory}/> Filter Candle
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Switch'} onChange={toggleSubCategory}/> Switch
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Gyeser'} onChange={toggleSubCategory}/> Gyeser
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'SS Combined'} onChange={toggleSubCategory}/> SS Combined
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Two Pintop'} onChange={toggleSubCategory}/> Two Pintop
                </p>
                
            </div>
        </div>
      </div>
      {/*Right Side */}
      <div className='flex-1'>
        <motion.div className='flex justify-between text-xl sm:text-3xl mb-4 pt-4'
               initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
        >
            <Title text1 ={'ALL'} text2 = {'COLLECTIONS'} />
            {/*Product Sort */}
            <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 bg-white text-sm px-2'>
              <option value="relavant">Sort by: Relavant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
        </motion.div>
        {/* Map Products */}

  <div className='grid bg-white gap-5 pt-5 p-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 w-full'>
          {
            filterProducts.map((item) => (
              <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay:  0.1 }}
              >
                <ProductItem name={item.name} id={item._id} price={item.price} image={item.image}/>
              </motion.div>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Collection
