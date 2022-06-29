import React, {useState, useEffect, useContext} from "react";
import {Wrapper} from "../../Components/Wrapper /Wrapper";
import {Nav} from "../../Layouts/Nav/Nav";
import styled from "styled-components";
import {ProductDescription} from "../../Layouts/ProductDescription/ProductDescription";
import {SingleProductTypes} from "../../types/Product.types";
import {AuthProvider} from "../../context/AuthProvider/AuthProvider";
import {useNavigate} from "react-router-dom";


const GridWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 100px;


  @media (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;

  }

`


export const StoragePage = () => {
    const [storage, setStorage] = useState([] as SingleProductTypes[]);


    useEffect(() => {

        (async () => {
            try {
 const response = await fetch('http://localhost:3001/storage', {
                        credentials: 'include',
                    });
                    const json = await response.json();
                    setStorage(json.message)

            } catch (error) {

            }
        })();


    }, []);

    return (<>
            <Nav/>
            <GridWrapper>

                {/*Dummy Data  to create styles*/}

                {storage.map(item =>
                    <ProductDescription
                        id={item.id}
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        amount={item.amount}
                        dateOfBuy={item.dateOfBuy}
                        img={item.img}/>


                )}

            </GridWrapper>
        </>
    )
}


