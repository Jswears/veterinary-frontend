import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { AuthContext } from "../context/auth.context";
import { Link, useNavigate, useParams } from "react-router-dom";
import env from "../config";
export const PetDetailsPage = () => {
const {id}=   useParams('id')
const navigate=   useNavigate()
    const { user } = useContext(AuthContext);
    const [pet, setPet] = useState([])
    
    const getPet=async ()=>{
        try {
            const response =await axios.get(`${env.URL_BASE}/user/one-pet/${id}`)
            setPet(response.data)
            console.log(response.data)

        } catch (error) {
            console.log(error)
        }
      
    }
    
    
      useEffect(() => {
      getPet()
      }, [])

 const handleDelete=async(id)=>{

try {
    const response=await axios.delete(`${env.URL_BASE}/user/one-pet/${id}`)
     
    console.log(response) 
    navigate('/')
 

} catch (error) {
    console.log(error)
}
  
 

 

 }


  return (
    <div className="container">
   <div className="content-lg">    
    <div className="pet-card-detail">

    <img src={pet.image} />



         </div>
         <div className="sideRight">
           
         <p>  <strong> Name: </strong> {pet.name}</p>
         <p> <strong>   Age:</strong> {pet.age}</p>
         <p>  <strong> Specie:</strong> {pet.specie}
           </p>
         <div className="buttons">
         <Link className="buttonLink" to={`/editPet/${pet._id}`} >Edit</Link>

          <button className="buttonLink" onClick={()=>{handleDelete(pet._id)}}>Delete</button>
         </div>  
    
         </div>
         </div>
         </div>  
  )
}
