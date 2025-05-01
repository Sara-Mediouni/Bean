import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useSelector } from "react-redux";
const ProfilePage = () => {
  const [UserData, setUserData] = useState({})
  const user=localStorage.getItem('user')
  const countries = useSelector((state) => state.country.countries);

  const [formData, setFormData] = useState();

  const [editing, setEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const getuser=()=>{
    
    axios.get(`http://localhost:4000/api/user/getuser/${user}`)
    .then((response)=>{
      console.log(response)
      setUserData(response.data.user)
    })
    .catch((error)=>console.log("error getting user",error))
  }
  const handleEditUser=()=>{
    
    axios.put(`http://localhost:4000/api/user/updateuser/${user}`,formData)
    .then((response)=>{
      console.log(response)
      
    })
    .catch((error)=>console.log("error editing user",error))
  }
  const handleToggleEdit = () => {
    setEditing(!editing);
    if (editing) {
    
      console.log('Updated Profile:', formData);
      handleEditUser()
    }
  };
  useEffect(()=>{
   getuser();
  },[user])
  useEffect(()=>{
    console.log(UserData)
    
    setFormData(UserData)
  },[UserData])
  return (
    <div className="min-h-screen mt-30 py-10 px-6 flex justify-center items-start">
      <div className="bg-white w-full max-w-xl p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-brown-500 mb-6 text-center">My Profile</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-brown-500 font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="fullname"
              value={formData?.fullname}
              onChange={handleChange}
              readOnly={!editing}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                editing ? 'bg-white border-orange-400' : 'bg-gray-100 border-gray-300'
              }`}
            />
          </div>

          <div>
            <label className="block text-brown-500 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData?.email}
              onChange={handleChange}
              readOnly={!editing}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                editing ? 'bg-white border-orange-400' : 'bg-gray-100 border-gray-300'
              }`}
            />
          </div>

          <div>
            <label className="block text-brown-500 font-medium mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData?.phone}
              onChange={handleChange}
              readOnly={!editing}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                editing ? 'bg-white border-orange-400' : 'bg-gray-100 border-gray-300'
              }`}
            />
          </div>

          <div>
            <label className="block text-brown-500 font-medium mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formData?.address}
              onChange={handleChange}
              readOnly={!editing}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                editing ? 'bg-white border-orange-400' : 'bg-gray-100 border-gray-300'
              }`}
            />
          </div>
          
          <div>
            <label className="block text-brown-500 font-medium mb-1">Country</label>
            <select
             
              name="country"
              value={formData?.country}
              onChange={handleChange}
              readOnly={!editing}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                editing ? 'bg-white border-orange-400' : 'bg-gray-100 border-gray-300'
              }`}
            >
              <option>Select country</option>
              {countries.map((country,index)=> 
              <option key={index} value={country}>{country}</option>)}
             
            </select>
          </div>
        </div>

        <button
          onClick={handleToggleEdit}
          className="mt-6 w-full bg-brown-500 hover:bg-orange-500 text-white font-semibold py-3 rounded-full transition-all"
        >
          {editing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
