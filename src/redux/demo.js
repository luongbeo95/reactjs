import { createStore } from 'redux'
import { useState } from 'react';



const myReducer = (status, acction) => {

}

const store = createStore(myReducer);

const acction = { type: 'CHANGE_STATUS' }

console.log(store)