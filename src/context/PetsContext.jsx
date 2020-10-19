import React, { Component } from 'react';

const PetsContext = React.createContext();

class PetsProvider extends Component {
  state = {
    pets: JSON.parse(window.localStorage.getItem('pets')) ? JSON.parse(window.localStorage.getItem('pets')) : []
  }
   handleAddPet = petToAdd =>{
     this.setState(prevState => ({
      pets: prevState.pets.concat([petToAdd])
     }))
    window.localStorage.setItem('pets',JSON.stringify(this.state.pets))
  }
  render(){
    const {children} = this.props;
    return (
      <PetsContext.Provider value={{
          ...this.state,
          addAPet: this.handleAddPet
        }}>
          { children }
      </PetsContext.Provider>
    )
  }
}
const PetsConsumer = PetsContext.Consumer;
export {PetsContext,PetsProvider,PetsConsumer}