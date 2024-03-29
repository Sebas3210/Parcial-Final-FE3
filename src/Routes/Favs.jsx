import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";

const Favs = () => {

  const {state} = useGlobalContext()

  return (
    <div>
    <h1>Dentists Favs</h1>
    <div className="card-grid">
      {state.favs.map((fav) => <Card key={fav.id} name={fav.name} username={fav.username} id={fav.id}/>)}
    </div>
  </div>
  );
};

export default Favs;
