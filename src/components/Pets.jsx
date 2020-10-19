import React from 'react';
import { PetsProvider } from '../context/PetsContext';
import PetsForm from './PetsForm';
import PetsList from './PetsList';

export default function Form(props) {
    return (
        <PetsProvider>
          <PetsForm />
          <PetsList />
        </PetsProvider>
    );
}