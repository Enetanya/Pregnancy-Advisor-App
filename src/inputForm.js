
import React, { useState, useEffect } from 'react';
import AgeRelatedAdvice from "./advice1.js";
import PregnancyRelatedAdvice from "./advice2.js"


function InputForm() {
  
   const[name,setName] =useState('');
   const [yourAgeRange,setYourAgeRange] =useState('');
    const [weeksOfPregnancy,setWeeksOfPregnancy] =useState('');
    const[submitted,setSubmitted]=useState(false);

  
   const handleInputChange = (e,setInput)=>{
    e.preventDefault();
    setInput(e.target.value);
   };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
       };
  
  const handleReset=()=>{
  setName('');
  setYourAgeRange('');
  setWeeksOfPregnancy(''); 
  setSubmitted(false);
  }


  useEffect(() => {
    const timeOut = setTimeout(() => {
      handleReset();
    },10 * 60 *1000);

    return () => 
      clearTimeout(timeOut);
    },[submitted]);

    const handlePrint=()=>{
      window.print();
    };
   

  return (
    <div className='form-container'>
        <h1 className='form-title'>Pregnancy Advisor App</h1>
      <form>
        <p>Please enter your name below:</p>
        <input
        className="input-field"
          type="text"
          name="name"
          placeholder="Enter Name"
          value={name}
          required
          onChange={(e)=>handleInputChange(e,setName)}
        />

        <p>Please choose your age range:</p>
        <select className='select-field' name="yourAgeRange" value={yourAgeRange} 
 required onChange={(e)=>handleInputChange(e,setYourAgeRange)}
>
          <option value=""></option>
          <option value="18-19">18-19</option>
          <option value="20-29">20-29</option>
          <option value="30-39">30-39</option>
          <option value="40-49">40-49</option>
          <option value="50 and Above">50 and Above</option>
        </select>

        <p>Please choose a range for your weeks of pregnancy:</p>
        <select className='select-field' name="weeksOfPregnancy" value={weeksOfPregnancy}
 required onChange={(e)=>handleInputChange(e,setWeeksOfPregnancy)}
>
          <option value=""></option>
          <option value="1-6">1-6</option>
          <option value="7-12">7-12</option>
          <option value="13-18">13-18</option>
          <option value="19-24">19-24</option>
          <option value="25-30">25-30</option>
          <option value="31-36">31-36</option>
          <option value="37-42">37-42</option>
        </select>

       <div className='button-container'>
        <button className='submit-button' type="submit" onClick={handleSubmit}>Submit</button>
        <button className='reset-button' onClick={() =>handleReset}>Reset</button>
      </div>
      </form>
      {submitted && (
      <div className='advice-section'>
        <h1 className='advice-title'>Advice</h1>

    <p className='advice-text'>Name:{name}</p>
    <p className='advice-text'>Age Range:{yourAgeRange}</p>
    <p className='advice-text'><AgeRelatedAdvice  age ={yourAgeRange}/></p>
    <p className='advice-text'>Age of pregnancy:{weeksOfPregnancy}</p>
    <p className='advice-text'><PregnancyRelatedAdvice  weeks={weeksOfPregnancy}/></p>

   </div>
      )}
      <div className='print-button-container'>
      <button onClick={handlePrint} className='print-button'>Print Page</button>
      </div>
  </div>
  );
}
 
export default InputForm;