import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'
import {Button} from "./Components/Button /Button";
import {Title} from "./Components/Title /Title";
import {Wrapper} from "./Components/Wrapper /Wrapper";
import {Input} from "./Components/Input/Input";
import {Paragraph} from "./Components/Paragraphs/Paragraph";
import {Img} from "./Components/Img/Img";
function App() {
  return (
   <Wrapper>

         <FontAwesomeIcon icon={faBars} />
       {/*<Button >Zaloguj</Button>*/}
       {/*<Button small >Zaloguj</Button>*/}
       {/*<Title>Menedżer Firmowy</Title>*/}
       {/*<Input type='text' placeholder='login'/>*/}
       {/*<Input type='password' placeholder='hasło'/>*/}
       {/*<Paragraph>Cena:2,49</Paragraph>*/}
       {/*<Paragraph>Ilość: 239</Paragraph>*/}
       {/*<Paragraph>Data Zakupu : 29-08-2022</Paragraph>*/}
       <Img src='https://cdn.shopify.com/s/files/1/2776/0008/products/Navy_Logo_Pen_2048x.jpg?v=1608530496'/>
   </Wrapper>
  );
}

export default App;
