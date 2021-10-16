import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import api from '../../services/api'
import StorageService from "../../services/StorageService";
import Item from '../../components/Item'

import './list.scss';

const Items = (props) => {
  const history = useHistory()
  
  const [items, setItems] = useState([])

  const defaultLimit = 5

  useEffect(() => {
    const skip = 0
    const loadToastId = toast.loading("Buscando filmes...")
    api
      .get(`items/list?type=Movie&skip=${skip}&limit=${defaultLimit}`, { 
        headers: {
          access_token: StorageService.get('token')
        }
      })
      .then((response) => {
        setItems(response.data)
      })
      .catch(function (error) {
        if(error.response && error.response.status === 401) {
          toast.error('Sessão expirada. Faça login novamente!')
          history.push('/signin')
          return
        } else if (error.response.data.message) {
          toast.error(`Falha ao carregar filmes. ${error.response.data.message}!`)
          return
        }
        toast.error('Falha ao carregar filmes. Tente novamente!')
      })
      .finally(function () {
        toast.dismiss(loadToastId); 
      })
  }, [])

  return (
    <div id='page-items'>
      <main>
        <div className='main-content'>
          <h1>Filmes</h1>
          <div className="item-list">
          {items.map(item => {
              return (
              <Item
                key={item._id}
                {...props}
                item={item}
              />
            )
          })}
          </div>
        </div>
      </main>
    </div>
  )
}
export default Items;
