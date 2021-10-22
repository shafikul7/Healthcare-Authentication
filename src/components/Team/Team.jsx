import React, { useState ,useEffect} from 'react';
import TeamCards from '../TeamCards/TeamCards';
import './Team.css';
const Team = () => {
   
        const [teams,setTeam] = useState([]);
    
    useEffect(() =>{
        fetch('./teams.json')
        .then(res=>res.json())
        .then(data=>setTeam(data))
    },[]);
    return (
        <div className="container">
           <h1 className="head-color">Teams us</h1>
           <div className="row">
           {
               teams.slice(0,6).map(team=> <TeamCards 
                key={team._id}
                team={team}
                // handleAddToCart={handleAddToCart}
                ></TeamCards>)
           }
           </div>
        </div>
    );
    };

export default Team;

