import React, { EventHandler } from 'react'
import { Wrapper } from '../../Components/Wrapper /Wrapper'
import { Button } from '../../Components/Button /Button'
import { Paragraph } from '../../Components/Paragraphs/Paragraph'
import { FinalizedProductDescription } from '../../Layouts/Finalized/FinalizedProductDescription'
import { SummaryCalc } from '../../utils/SummaryCalc'
import { StyledModal } from '../../Components/StyledModal/StyledModal'
import { SinglePlacesProductsTypes } from '../../types/places_products.types'

interface Props {
  items: Array<SinglePlacesProductsTypes>
  onClick: EventHandler<any>
  deleteProduct: any
}

export const SingleFinalizedModal = (props: Props) => {
  return (
    <Wrapper>
      <StyledModal>
        <Button small={true} onClick={props.onClick}>
          Back
        </Button>

        {props.items.length <= 0 && (
          <>
            <Paragraph>This plase has no items yet!</Paragraph>
            <Paragraph>Please use inventory tab to add some</Paragraph>
          </>
        )}
        {props.items.length > 0 && (
          <Paragraph>
            Total costs of this Place:{SummaryCalc(props.items)}$
          </Paragraph>
        )}

        {props.items.map((item) => (
          <FinalizedProductDescription
            deleteProduct={props.deleteProduct}
            item_id={item.item_id}
            place_id={item.place_id}
            key={item.item_id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            dateOfBuy={item.dateOfBuy}
            img={item.img}
          />
        ))}
      </StyledModal>
    </Wrapper>
  )
}
