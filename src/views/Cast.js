import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import { fetchActors } from "../services/moviesApi";
import CastList from "../components/CastList/CastList"
 

 const Cast =()=>{
     const {movieId}=useParams();
     const [cast, setCast]=useState([]);


     useEffect(()=>{
     fetchActors(movieId)
     .then(({cast})=>setCast(cast))
     .catch(error => console.log(error));
     
 }, [movieId]);

 return(
<>
<CastList cast={cast}/>
 </>
 );

}
export default Cast;