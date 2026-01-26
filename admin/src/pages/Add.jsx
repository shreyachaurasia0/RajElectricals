import React ,{useState} from 'react'
import {assets} from "../assets/admin_assets/assets";
import axios from 'axios'
import {backendUrl} from '../App'
import {toast} from 'react-toastify'

const Add = ({token}) => {

  const [image1 , setImage1] = useState(false)
  const [image2 , setImage2] = useState(false)
  const [image3 , setImage3] = useState(false)
  const [image4 , setImage4] = useState(false)
  const [loading , setLoading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const [name , setName] = useState("");
  const [description , setDescription] = useState("");
  const [price , setPrice] = useState("");
  const [category , setCategory] = useState("Kitchen Appliances");
  const [subCategory , setSubCategory] = useState("Mixer Grinder");
  const [bestseller , setBestseller] = useState(false);

  // new fields for detailed product info
  const [specifications, setSpecifications] = useState("");
  const [features, setFeatures] = useState("");
  const [warranty, setWarranty] = useState("1 Year");
  const [brand, setBrand] = useState("");
  // new per-product delivery charge
  const [deliveryCharge, setDeliveryCharge] = useState(0);

  // Compress image before upload
  const compressImage = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          
          // Reduce dimensions if too large
          if (width > 1200) {
            height = (height * 1200) / width;
            width = 1200;
          }
          
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          
          canvas.toBlob((blob) => {
            resolve(new File([blob], file.name, { type: 'image/jpeg' }));
          }, 'image/jpeg', 0.9); // 90% quality for better results
        };
      };
    });
  };

  const onImageChange = async (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const compressedFile = await compressImage(file);
        setImage(compressedFile);
      } catch (error) {
        setImage(file);
      }
    }
  };

  const onSubmitHandler = async (e) =>{
    e.preventDefault();
    setLoading(true);
    setUploadProgress(0);

    try{
        const formData = new FormData()

        formData.append("name" , name)
        formData.append("description" , description)
        formData.append("price" , price)
        formData.append("category" , category)
        formData.append("subCategory" , subCategory)
        formData.append("bestseller" , bestseller)

        // append new fields
        formData.append("specifications", specifications);
        formData.append("features", features);
        formData.append("warranty", warranty);
        formData.append("brand", brand);
        formData.append("deliveryCharge", deliveryCharge);

        image1 && formData.append("image1" , image1)
        image2 && formData.append("image2" , image2)
        image3 && formData.append("image3" , image3)
        image4 && formData.append("image4" , image4)

        const response = await axios.post(backendUrl + "/api/product/add" , formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`
            },
            onUploadProgress: (progressEvent) => {
              const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
              setUploadProgress(progress);
            }
          }
        )
        console.log(response.data)
        if(response.data.success){
          toast.success(response.data.message);
          setName('')
          setDescription('')
          setSpecifications('')
          setFeatures('')
          setWarranty('1 Year')
          setBrand('')
          setDeliveryCharge(0)
          setImage1(false)
          setImage2(false)
          setImage3(false)
          setImage4(false)
          setPrice('')
          setBestseller(false)
        }else{
          toast.error(response.data.message)
        }

    }catch(error){
      console.log(error);
      toast.error(error.message || 'Failed to add product')
    }finally{
      setLoading(false)
      setUploadProgress(0)
    }
  }

  return (
    <form onSubmit = {onSubmitHandler} className ='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2'>Upload Page</p>
        <div className='flex gap-4'>
          <label htmlFor="image1">
          <img className = 'w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}  />
          <input onChange = {(e) => onImageChange(e, setImage1)} type="file" id="image1" hidden />
          </label>
          <label htmlFor="image2">
          <img className = 'w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}/>
          <input onChange = {(e) => onImageChange(e, setImage2)} type="file" id="image2" hidden />
          </label>
          <label htmlFor="image3">
          <img className = 'w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} />
          <input onChange = {(e) => onImageChange(e, setImage3)} type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4">
          <img className = 'w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} />
          <input onChange = {(e) => onImageChange(e, setImage4)} type="file" id="image4" hidden />
          </label>
        </div>
      </div>
      <div className='w-full'>
        <p className='mb-2'> Product name </p>
        <input onChange= {(e) => setName(e.target.value)} value = {name} className='border border-gray-300 px-3 py-2 w-full rounded mt-2' type="text" placeholder='Enter product name' required />
      </div>
      <div className='w-full'>
        <p className='mb-2'> Product description </p>
        <textarea onChange= {(e) => setDescription(e.target.value)} value = {description} className='border border-gray-300 px-3 py-2 w-full rounded mt-2' type="text" placeholder='Write Product Description here...' required />
      </div>
      
      {/* Specifications */}
      <div className='w-full'>
        <p className='mb-2'> Product Specifications </p>
        <textarea onChange={(e) => setSpecifications(e.target.value)} value={specifications} className='border border-gray-300 px-3 py-2 w-full rounded mt-2' placeholder='Color: Black | Material: Glass | Power: 2000W | Dimension: 39 x 33 x 10.5 cm' />
      </div>

      {/* Features */}
      <div className='w-full'>
        <p className='mb-2'> Key Features </p>
        <textarea onChange={(e) => setFeatures(e.target.value)} value={features} className='border border-gray-300 px-3 py-2 w-full rounded mt-2' placeholder='Fast Heating | Energy Efficient | Durable Design' />
      </div>

      {/* Brand & Warranty */}
      <div className='flex gap-4 w-full'>
        <div className='flex-1'>
          <p className='mb-2'>Brand</p>
          <input onChange={(e) => setBrand(e.target.value)} value={brand} className='w-full px-3 py-2' type="text" placeholder='Brand name' />
        </div>
        <div className='w-40'>
          <p className='mb-2'>Warranty</p>
          <input onChange={(e) => setWarranty(e.target.value)} value={warranty} className='w-full px-3 py-2' type="text" placeholder='1 Year' />
        </div>
        <div className='w-40'>
          <p className='mb-2'>Delivery Charge</p>
          <input
            onChange={(e) => setDeliveryCharge(e.target.value)}
            value={deliveryCharge}
            className='w-full px-3 py-2'
            type="number"
            min="0"
            step="0.01"
            placeholder='0.00'
          />
        </div>
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Product Category</p>
            <select onChange={(e) => setCategory(e.target.value)} className = 'w-full px-3 py-2 mb-3'>
              <option value= "Kitchen Appliances">Kitchen Appliances</option>
              <option value= "Heating Appliances">Heating Appliances</option>
              <option value= "Cooling Appliances">Cooling Appliances</option>
              <option value= "Home & Cleaning">Home & Cleaning</option>
              <option value= "Personal Care">Personal Care</option>
              <option value= "Lighting & Electricals">Lighting & Electricals</option>
              <option value= "Hardware & Spare Parts">Hardware & Spare Parts</option>
              <option value= "Iron & Fabric Care">Iron & Fabric Care</option>
              <option value= "CCTV Camera">CCTV Camera</option>
            </select>
        </div>
        <div>
          <p className='mb-2'>Product SubCategory</p>
            <select onChange={(e) => setSubCategory(e.target.value)} className = 'w-full px-3 py-2 mb-3'>
              <option value= "Rice Cooker">Rice Cooker</option>
              <option value= "Mixer Grinder">Mixer Grinder</option>
              <option value= "Meat Grinder">Meat Grinder</option>
              <option value= "Pressure Cooker">Pressure Cooker</option>
              <option value= "Grinder Jar">Grinder Jar</option>
              <option value= "Electric Kettle">Electric Kettle</option>
              <option value= "Egg Boiler">Egg Boiler</option>
              <option value= "Casserole">Casserole</option>
              <option value= "Gas Stove">Gas Stove</option>
              <option value= "Induction">Induction</option>
              <option value= "Immersion Heater">Immersion Heater</option>
              <option value= "Un-coil Heater">Un-coil Heater</option>
              <option value= "Heater Rod">Heater Rod</option>
              <option value= "Oil filled Heater">Oil filled Heater</option>
              <option value= "Minor Heater">Minor Heater</option>
              <option value= "Bowl Element">Bowl Element</option>
              <option value= "Wall Fan">Wall Fan</option>
              <option value= "Pedestal Fan">Pedestal Fan</option>
              <option value= "Table Fan">Table Fan</option>
              <option value= "Exhaust Fan">Exhaust Fan</option>
              <option value= "Wiper">Wiper</option>
              <option value= "Mop">Mop</option>
              <option value= "Broom Stick">Broom Stick</option>
              <option value= "Trimmer">Trimmer</option>
              <option value= "Coffee Mug">Coffee Mug</option>
              <option value= "Steel Tiffin">Steel Tiffin</option>
              <option value= "Flask">Flask</option>
              <option value= "Straightener">Straightener</option>
              <option value= "Bottle">Bottle</option>
              <option value= "LED Bulb 9W">LED Bulb 9W</option>
              <option value= "Inverter LED Bulb">Inverter LED Bulb</option>
              <option value= "LED Fitting">LED Fitting</option>
              <option value= "Tube Light">Tube Light</option>
              <option value= "Holder">Holder</option>
              <option value= "6A Socket">6A Socket</option>
              <option value= "6A Multi Plug">6A Multi Plug</option>
              <option value= "9 Way Plate">9 Way Plate</option>
              <option value= "Hackshaw Blade">Hackshaw Blade</option>
              <option value= "Screw 1">Screw 1</option>
              <option value= "Hammer">Hammer</option>
              <option value= "Drill Machine">Drill Machine</option>
              <option value= "Drill Beats 5mm">Drill Beats 5mm</option>
              <option value= "Carbon brush">Carbon brush</option>
              <option value= "Casing ">Casing </option>
              <option value= "M/S Wire 1.5mm (coil)">M/S Wire 1.5mm (coil)</option>
              <option value= "School Project Parts">School Project Parts</option>
              <option value= "Dry Iron">Dry Iron</option>
              <option value= "Steam Iron">Steam Iron</option>
              <option value= "Gutkha">Gutkha</option>
              <option value= "Charger">Charger</option>
              <option value= "Filter Candle">Filter Candle</option>
              <option value= "Switch">Switch</option>
              <option value= "Gyeser">Gyeser</option>
              <option value= "SS Combined">SS Combined</option>
              <option value= "Two Pintop">Two Pintop</option>
              <option value= "Camera">Camera</option>
            </select>
        </div>
        <div>
          <p className='mb-2'> Product Price</p>
          <input onChange= {(e) => setPrice(e.target.value)} value = {price} className ='w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder='250' />
        </div>
      </div>
      <div className ='flex gap-2 mt-2'>
        <input onChange= {(e) => setBestseller(prev => !prev)} checked = {bestseller}  type="checkbox" id='bestseller' />
        <label className='cursor-pointer' htmlFor="bestseller">Add to Bestseller</label>
      </div>
      <button 
        type="submit" 
        disabled={loading}
        className ={`w-28 py-3 mt-4 flex items-center justify-center gap-2 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-800'} text-white`}
      >
        {loading ? (
          <>
            <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
            {uploadProgress > 0 ? `${uploadProgress}%` : 'Adding...'}
          </>
        ) : (
          'ADD'
        )}
      </button>
    </form>
  )
}

export default Add
