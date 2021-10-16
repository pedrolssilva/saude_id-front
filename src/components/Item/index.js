import React from 'react';
import { useHistory } from "react-router-dom";
import './styles.scss';

const Item = (props) =>
{ 
  const history = useHistory()
  const { item } = props

  const handleItemDetail = (item) => {
    const {_id: itemId, Title, Year, Poster, Type, imdbID} = item

    const queryParams = `?title=${Title}&year=${Year}&type=${Type}&imdbID=${imdbID}&poster=${Poster}`
    history.push(`/details/${itemId}${queryParams}`)
  };

  return (
    <div className="item">
      <h2>{item.Title}</h2>
      <h3>{item.Year}</h3>
      <button type="button" onClick={() => handleItemDetail(item)}>Detalhes</button>
    </div>
  );
}

export default Item;