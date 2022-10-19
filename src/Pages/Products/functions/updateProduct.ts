import { SingleProductTypes } from '../../../types/Product.types'
import { ApiList } from '../../../utils/api'
const {basicUrl} = ApiList
export const updateProduct = async (itemDetails: SingleProductTypes) => {
  const { id, name, price, amount, dateOfBuy, file } = itemDetails
  const formData = new FormData()
  formData.append('name', name)
  formData.append('id', id!)
  formData.append('price', String(price))
  formData.append('amount', String(amount))
  formData.append('dateOfBuy', dateOfBuy)
  formData.append('file', file!)
  const data = await fetch(`${basicUrl}/products/update`, {
    method: 'PATCH',
    credentials: 'include',
    body: formData,
  })
  const response = await data.json()
  if (response.isSuccess) {
    return { title: 'Success', message: response.message }
  } else {
    return { title: 'Fail', message: response.message }
  }
}
