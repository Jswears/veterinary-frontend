import { Link } from "react-router-dom"
import {  useContext } from "react";
import { AuthContext } from "../context/auth.context";

export const Pet = ({pet}) => {
 const {user}=useContext(AuthContext)   
  return (
    <div className="pet-card" key={pet._id}>
    <img src={pet.image} />
    <h3>{pet.name}</h3>
    {
        user.role ==='admin' &&     
        <>
        <h3>Owner: {pet.customerId && pet.customerId.fullname} </h3>
        <p>Age: {pet.age}</p>
        <p>Specie: {pet.specie}</p>
        </>
    }
    { user.role!='admin' &&   <Link to={`/detailPet/${pet._id}`}>Details</Link>}
  </div>
  )
}
