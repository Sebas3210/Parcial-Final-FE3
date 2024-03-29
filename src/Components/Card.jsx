import React from "react";
import { Link } from "react-router-dom";
import { ActionType, useGlobalContext } from "./utils/global.context";

const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    const cardData = {name, username, id}
    const existingData = state.favs.find((dentist) => dentist.id === cardData.id)
    if(!existingData) {
      dispatch({ type: ActionType.SetFav, payload: cardData })
      alert('Dentist added to favs')
    } else alert('Dentist already exists')
  }

  return (
    <div className={`card ${state.theme}`}>

        <Link to={`/detail/${id}`}>
        <img className="card-img" src="../../images/doctor.jpg" alt={name} />
        <h4>{name}</h4>
        <p>{username}</p>
      </Link>
      
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
