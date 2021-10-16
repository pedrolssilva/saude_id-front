import qs from 'qs';
import React, { useState, useEffect } from 'react';
import {useHistory, useParams} from 'react-router-dom'
import { toast } from 'react-toastify';
import api from '../../services/api'
import StorageService from "../../services/StorageService";

import './show.scss';

const ItemDetail = (props) =>{
  const history = useHistory();
  const params = useParams();

  const [itemDetail,setItemDetail] = useState({});

  const {itemId} = params;

  useEffect(() => {
    const loadToastId = toast.loading("Carregando detalhes do filme...")
    api
      .get(`items/${itemId}`, { 
        headers: {
          access_token: StorageService.get('token')
        }
      })
      .then((response) => {
        setItemDetail({...response.data.itemDetail})
      })
      .catch(function (error) {
        if(error.response && error.response.status === 401) {
          toast.error('Sessão expirada. Faça login novamente!')
          history.push('/signin')
          return
        } else if (error.response.data.message) {
          toast.error(`Falha ao carregar detalhes do filme. ${error.response.data.message}!`)
          return
        }
        toast.error('Falha ao carregar detalhes do filme. Tente novamente!')
      })
      .finally(function () {
        toast.dismiss(loadToastId); 
      })
  }, [])

  const itemInfo = qs.parse(props.location.search, { ignoreQueryPrefix: true });
  return (
    <>
    {(itemDetail
      && Object.keys(itemDetail).length > 0
      && Object.getPrototypeOf(itemDetail) === Object.prototype) && (
      <div id='page-itemDetail'>
        <main>
          <div className='main-content'>
            <div className="itemDetail">
              <img src={itemInfo.poster} alt="Movie poster"/>
              <div className="info">
                <h2>Título: {itemInfo.title}</h2>
                <h3>Lançamento: {itemInfo.year}</h3>
                <p>{itemDetail.synopsis}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    ) }
  </>
  )
}
export default ItemDetail;
