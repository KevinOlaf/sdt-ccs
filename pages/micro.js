import React from 'react';
import liff from '@line/liff';
//import styles from './App.module.css';
//import Header from './components/Header';
//import Snippet from './components/Snippet';
//import Input from './components/Input';
//import { FilterContext, FilterTypes } from './Context';
//import qrCode from './qr-code.png';

//const isMINI = new URLSearchParams(location.search).has('mini');
//const filter = isMINI ? FilterTypes.MINI : FilterTypes.LIFF;

function Micro() {
  let isLoggedIn = false;
  try {
    isLoggedIn = liff.isLoggedIn();
  } catch (e) {
    console.log(e);
  }
  return (
    <div className={""}>
        <h1>Micro</h1>
        <p>isLoggedIn: {isLoggedIn ? 'true' : 'false'}</p>
    </div>
  )
}

export default Micro;
