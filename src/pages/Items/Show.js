import React from 'react';
const ItemDetail = () =>{
  return (
    <div id='page-itemDetail'>
      <main>
        <div className='main-content'>
          <form onSubmit={() => {}}>
            <input 
              type="email" 
              placeholder="Digite o código da sala"
              onChange={event => {}}
              value={""}
            />
            <input 
              type="password" 
              placeholder="Digite o código da sala"
              onChange={event => {}}
              value={""}
            />
            <button type="submit">
              Entrar
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}
export default ItemDetail;
