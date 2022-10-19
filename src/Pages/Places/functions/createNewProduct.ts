import { SingleProductTypes } from '../../../types/Product.types'
import { ApiList } from '../../../utils/api'
const {basicUrl} = ApiList

export function createNewProduct(productDetails: SingleProductTypes) {
  const responseFunction = async () => {
    const { price, name, dateOfBuy, amount, file } = productDetails
    const formData = new FormData()
    formData.append('file', file!)
    formData.append('name', name)
    formData.append('price', String(price))
    formData.append('amount', String(amount))
    formData.append('dateOfBuy', dateOfBuy)

    const data = await fetch(`${basicUrl}/products/add-new`, {
      method: 'POST',
      credentials: 'include',
      body: formData,
    })
    const response = await data.json()
    return {
      title: response.title,
      message: response.message,
    }
  }

  return responseFunction()
}
