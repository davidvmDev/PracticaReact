import React, {useState,useContext,useRef} from 'react';
import {PetsContext} from '../context/PetsContext'
import '../css/PetsForm.css'

export default function PetsForm(){
    const sexs = ['Male','Female'];
    const types = ['Dog','Cat','Hámster','Bird'];
    const services = ['Consult','Emergencies','Hospitalization'];
    const [petName,setPetName] = useState('');
    const [petAge,setPetAge] = useState('');
    const selectSex = useRef()
    const selectType = useRef()
    const selectService = useRef()
    const {addAPet} = useContext(PetsContext);
    
    function initializeState(){
        setPetName('');
        setPetAge('');
    }

    const handleSubmit = e => {
        e.preventDefault();
        const petToAdd = {
            petName,
            petSex:selectSex.current.value
            ,petAge
            ,petType:selectType.current.value
            ,petService:selectService.current.value
        };
        addAPet(petToAdd);
        initializeState();
    }
    
    const handleChange = function(e){
        const {value,name} = e.target;
        switch(name){
          case 'petName':
              setPetName(value);
          break;
          case 'petAge':
              setPetAge(value);
          break;
          default:
          break;
        }
      }
    return(
        <>
        <form className='form-group col-lg-6 col-md-12 col-sm-12 mb-5 w-75 h-50 mx-auto mr-5' onSubmit={handleSubmit}>
            <label className='text-danger mb-2 mt-3' htmlFor="petName">Pet Name:</label>
            <input className='form-control text-center' value={petName} type="text" name="petName" onInput={handleChange}/>
            <label className='text-danger mb-2 mt-3' htmlFor="petSex">Pet Sex</label>
            <select className='form-control text-center' name="petSex" id="petSex" ref={selectSex}>
                {sexs.map(sex => {
                    return <option key={sex} value={sex}>{sex}</option>
                })}
            </select>
            <label className='text-danger mb-2 mt-3' htmlFor="petAge">Pet Age:</label>
            <input className='form-control text-center' value = {petAge} type="text" name="petAge" onInput={handleChange}/>
            <label className='text-danger mb-2 mt-3' htmlFor="petType">Pet type:</label>
            <select className='form-control text-center' name="petType" id="petType" ref={selectType}>
                {types.map(type => {
                    return <option key={type} value={type}>{type}</option>
                })}
            </select>
            <label className='text-danger mb-2 mt-3' htmlFor="petService">Service:</label>
            <select className='form-control text-center' name="petService" id="petService" ref={selectService}>
                {services.map(service => {
                    return <option key={service} value={service}>{service}</option>
                })}
            </select>
            <button type='submit' className='btn btn-lg btn-primary mx-auto mt-3'>Save Pet</button>
        </form>
        </>
    )
}