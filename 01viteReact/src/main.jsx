import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const reactElement = React.createElement(
  'a',
  {href:'https://www.google.com',target:'_blank'},
  'click me to surprise'
)
  
ReactDOM.createRoot(document.getElementById('root')).render(
  
    
    reactElement
    
   
  
);

