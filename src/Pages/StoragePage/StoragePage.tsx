import React from "react";
import {Wrapper} from "../../Components/Wrapper /Wrapper";
import {Nav} from "../../Layouts/Nav/Nav";
import styled from "styled-components";
import {Place_Description} from "../../Layouts/ProductDescription/ProductDescription";


const GridWrapper = styled(Wrapper)`
display: flex;
justify-content: center;
  align-items: flex-start;
  padding-top: 100px;

  
  @media(min-width: 800px){
    flex-direction: row;
    flex-wrap: wrap;
    
  }

`


export const StoragePage = () => {


    return (<>
            <Nav/>
            <GridWrapper>

                {/*Dummy Data  to create styles*/}
                <Place_Description
                    title={'Długopis'}
                    price={2.49}
                    date={'29-09-2022'}
                    amount={120}/>

                <Place_Description
                    title={'Długopis'}
                    price={2.49}
                    date={'29-09-2022'}
                    amount={120}/>

                <Place_Description
                    title={'Długopis'}
                    price={2.49}
                    date={'29-09-2022'}
                    amount={120}/>

                <Place_Description
                    title={'Długopis'}
                    price={2.49}
                    date={'29-09-2022'}
                    amount={120}/>

                <Place_Description
                    title={'Długopis'}
                    price={2.49}
                    date={'29-09-2022'}
                    amount={120}/>

                <Place_Description
                    title={'Długopis'}
                    price={2.49}
                    date={'29-09-2022'}
                    amount={120}/>

                <Place_Description
                    title={'Długopis'}
                    price={2.49}
                    date={'29-09-2022'}
                    amount={120}/>

                <Place_Description
                    title={'Długopis'}
                    price={2.49}
                    date={'29-09-2022'}
                    amount={120}/>

                <Place_Description
                    title={'Długopis'}
                    price={2.49}
                    date={'29-09-2022'}
                    amount={120}/>

                <Place_Description
                    title={'Długopis'}
                    price={2.49}
                    date={'29-09-2022'}
                    amount={120}/>

                <Place_Description
                    title={'Długopis'}
                    price={2.49}
                    date={'29-09-2022'}
                    amount={120}/>
            </GridWrapper>
        </>
    )
}


