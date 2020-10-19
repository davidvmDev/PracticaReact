import React, { useContext } from 'react';
import { PetsContext } from '../context/PetsContext'

export default function PetsList(){
    const {pets} = useContext(PetsContext);
    return(
        <div className="card-deck col-lg-6 col-md-12 col-sm-12">
            <div className='row w-100'>
            { pets.length ? (pets.map((pet) => {
                return (
                        <div className='col-lg-6 mb-4 col-md-6 col-sm-12'>
                            <div key={pet.petName} className="card text-left rounded rounded-lg border-danger">
                                <div className='card-header text-white text-uppercase bg-danger'>{pet.petName}</div>
                                <div className="card-body text-danger">
                                    <p className="card-text">Pet sex: {pet.petSex}</p>
                                    <p className="card-text">Pet age: {pet.petAge}</p>
                                    <p className="card-text">Pet type: {pet.petType}</p>
                                    <p className="card-text">Service: {pet.petService}</p>
                                </div>
                            </div>
                        </div>
                    )
                }))
                : (<div className='card-body text-center'>
                    <h3 className='card-title text-danger'>No pets jet</h3>
                </div>)
            }
            </div>
        </div>
    );
}