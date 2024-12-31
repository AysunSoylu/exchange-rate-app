import React from 'react'
import '../css/currency.css';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function Currency() {
  return (
    <div className='currency-div'>
        <div style={{fontFamily:'arial', backgroundColor:'black', color:'#fff', width:'100%', textAlign:'center'}}>
            <h3>DÖVİZ KURU UYGULAMASI</h3>
        </div>

        <div style={{marginTop:'30px'}}>
        <input type='number' className='amount' />
        <select className='from-currency-option'>
            <option>USD</option>
            <option>EUR</option>
            <option>TL</option>
        </select>

        <FaRegArrowAltCircleRight style={{fontSize: '25px', marginRight:'10px'}} />

        <select className='to-currency-option'>
            <option>TL</option>
            <option>USD</option>
            <option>EUR</option>
            
        </select>

        <input type='number' className='result' />
        <div>
        <button className='exchange-button'>Çevir</button>
        </div>
        </div>
        
      </div>
  )
}

export default Currency
