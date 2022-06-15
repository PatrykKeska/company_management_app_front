import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'
import {Button} from "./Components/Button /Button";
function App() {
  return (
   <>

         <FontAwesomeIcon icon={faBars} />
       <Button >Zaloguj</Button>
       <Button small >Zaloguj</Button>
   </>
  );
}

export default App;
