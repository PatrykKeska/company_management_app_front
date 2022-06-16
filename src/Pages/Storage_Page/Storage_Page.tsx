import React from "react";
import {Wrapper} from "../../Components/Wrapper /Wrapper";
import {Nav} from "../../Layouts/Nav/Nav";
import styled from "styled-components";
import {Product_Description} from "../../Layouts/Product_Description/Product_Description";


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


export const Storage_Page = () => {


    return (<>
            <Nav/>
            <GridWrapper>

                {/*Dummy Data  to create styles*/}
                <Product_Description
                    title={'Długopis'}
                    price={2.49}
                    date={'29-09-2022'}
                    amount={120}/>

                <Product_Description
                    title={'Długopis'}
                    price={2.49}
                    date={'29-09-2022'}
                    amount={120}/>

                <Product_Description
                    title={'Długopis'}
                    price={2.49}
                    date={'29-09-2022'}
                    amount={120}/>

                <Product_Description
                    title={'Długopis'}
                    price={2.49}
                    date={'29-09-2022'}
                    amount={120}/>

                <Product_Description
                    title={'Długopis'}
                    price={2.49}
                    date={'29-09-2022'}
                    amount={120}/>

                <Product_Description
                    title={'Długopis'}
                    price={2.49}
                    date={'29-09-2022'}
                    amount={120}/>

                <Product_Description
                    title={'Długopis'}
                    price={2.49}
                    date={'29-09-2022'}
                    amount={120}/>

                <Product_Description
                    title={'Długopis'}
                    price={2.49}
                    date={'29-09-2022'}
                    amount={120}/>

                <Product_Description
                    title={'Długopis'}
                    price={2.49}
                    date={'29-09-2022'}
                    amount={120}/>

                <Product_Description
                    title={'Długopis'}
                    price={2.49}
                    date={'29-09-2022'}
                    amount={120}/>

                <Product_Description
                    title={'Długopis'}
                    price={2.49}
                    date={'29-09-2022'}
                    amount={120}/>
            </GridWrapper>
        </>
    )
}


