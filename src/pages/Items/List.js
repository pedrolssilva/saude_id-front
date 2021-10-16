import React from 'react';
const Items = () =>{
  return (
    <div id='page-items'>
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
              placeholder="Digite o código da "
              onChange={event => {}}
              value={""}
            />
            <button type="submit">
              Foi
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}
export default Items;
