import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Breadcrumb from '../../components/Breadcrumb';
const IPD_Form = () => {
  const [ formData , setFormData]= useState({
    patient :"",
    admission_id:"",
    ward:"",
    bed_number:"",
      number:"",
        doctor:"",
        ward:"", 
        admission_date:"", 
    

  }); //1st
  const navigate = useNavigate(); //2nd
  const handle =()=>{
    navigate("/Patient/OPD")
  }
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value }); //3rd
  };
  // type='text' name="Name" onChange={handleChange} placeholder='Enter full name'
  // onChange={handleChange} 
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };


  const handleSubmit = () => {
    console.log('Form Data Submitted:', formData);

   // Use Axios to send a POST request with the form data
    axios.post('http://127.0.0.1:8000/api/ipd/ipd-registrations/', formData)
      .then((response) => {
        console.log('API Response:', response.data);
        // Add logic to handle the API response, if needed
        navigate('/Patient/Patient_Details');
      })
      .catch((error) => {
        console.error('API Error:', error);
        // Add logic to handle the API error, if needed
      });
  };
return(
    <div>
    <Breadcrumb></Breadcrumb>
    <fieldset>
      <form className="items-stretch w-[1100px] bg-slate-50 flex flex-col pt-5 pb-12 px-8 max-md:px-5" onSubmit={handleSubmit}>
      <div className="items-stretch bg-white flex flex-col justify-center py-1.5 max-md:max-w-full">
        <div className="flex flex-col justify-center pl-7 pr-16 py-2 items-start max-md:max-w-full max-md:px-5">
          <div className="backdrop-blur-[5px]  flex   max-w-full items-stretch justify-between gap-5 pl-4 pr-1 py-1.5 rounded-xl">
            <input className="text-gray-500 border-transparent w-[179px] h-[40px] max-w-full  items-stretch justify-between gap-5 pl-4 pr-1 py-1.5 rounded-xl bg-slate-100 text-sm font-medium leading-3 mt-3 self-start" type='text' name="patient" onChange={handleChange} placeholder='Enter patient id' value={formData.patient} >
             
            </input>
            <div className="text-white h-[40px] mt-[10px] text-xs font-semibold leading-3 whitespace-nowrap items-stretch bg-blue-500 justify-center px-5 py-3 rounded-md">
              Import Details{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="items-stretch bg-white flex flex-col mt-8 pb-7 px-7 max-md:max-w-full max-md:px-5">
        <div className="max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col pt-7 max-md:max-w-full max-md:mt-10">
                <div className="text-slate-600 text-sm font-medium max-md:max-w-full">
                  Full name
                </div>
                <input className="text-gray-500 border-transparent text-base font-medium leading-4 bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5"  type='text' name="name" onChange={handleChange} placeholder='Enter full name'>
                 
                </input>
                <div className="text-slate-600 text-sm font-medium mt-9 max-md:max-w-full">
                  IPD ID
                </div>
                  <input className="text-gray-500 border-transparent text-base font-medium leading-4 bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5"  type='text' name="admission_id" onChange={handleChange} placeholder='Enter IPD id' value={formData.admission_id}>
                 
                </input>
                <div className="text-slate-600 text-sm font-medium mt-9 max-md:max-w-full">
                  Ward type
                </div>
                <div>
                
                   <input  className="justify-between text-gray-500 border-transparent w-[480px] items-stretch bg-slate-100 flex gap-5 mt-2 px-3.5 py-4 rounded-md max-md:max-w-full max-md:flex-wrap" type='text' name='ward' onChange={handleChange} placeholder='Select ward' value={formData.ward}>

   
</input>

                </div>
                <div className="text-slate-600 text-sm font-medium mt-9 max-md:max-w-full">
                  Bed number
                </div>
               
                    <input className="text-gray-500 border-transparent text-base font-medium leading-4 bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5"  type='text' name="bed_number" onChange={handleChange} placeholder='Enter bed number' value={formData.bed_number}>
                 
                </input>
                   
                  </div>
             
            
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col pt-7 max-md:max-w-full max-md:mt-10">
                <div className="text-slate-600 text-sm font-medium max-md:max-w-full">
                  Phone number
                </div>
                 <input className="text-gray-500 border-transparent text-base font-medium leading-4 bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5"  type='text' name="number" onChange={handleChange} placeholder='Enter phone number' value={formData.number}>
                 
                </input>
                
                <div className="text-slate-600 text-sm font-medium mt-8 max-md:max-w-full">
                  Referred by
                </div>
                 <input className="text-gray-500 border-transparent text-base font-medium leading-4 bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5"  type='text' name="doctor" onChange={handleChange} placeholder='Enter doctor name' value={formData.doctor}>
                 
                </input>
                
              <div className="text-slate-600 text-sm font-medium mt-8 max-md:max-w-full">
                  Ward number
                </div>
                 <input className="text-gray-500 border-transparent text-base font-medium leading-4 bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5"  type='text' name="ward" onChange={handleChange} placeholder='Enter ward number' value={formData.ward}>
                 
                </input>
                 <div className="text-slate-600 text-sm font-medium mt-8 max-md:max-w-full">
                Date of arrival
                </div>
                 <input className="text-gray-500 border-transparent text-base font-medium leading-4 bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5"  type='date' name="admission_date" onChange={handleChange} placeholder='Enter date' value={formData.admission_date}>
                 
                </input>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-stretch justify-between gap-5 mt-8 self-end">
          <div className="text-blue-700 text-base font-semibold leading-4 items-stretch border grow justify-center px-8 py-4 rounded-lg border-solid border-blue-700 max-md:px-5">
            Cancel
          </div>
          <button className="text-white text-base font-semibold leading-4 items-stretch border border-[color:var(--Theme-Primary-Default,#4C6FFF)] bg-blue-700 grow justify-center px-7 py-4 rounded-lg border-solid max-md:px-5" type='submit'>
            Submit
          </button>
        </div>
      </div>
    </form></fieldset></div>
  )
}

export default IPD_Form