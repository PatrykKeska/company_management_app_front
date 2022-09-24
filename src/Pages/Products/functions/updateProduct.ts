import {apiURL} from '../../../utils/api'
import {SingleProductTypes} from '../../../types/Product.types'

export const updateProduct = async (itemDetails: SingleProductTypes) => {
    const {id, name, price, amount, dateOfBuy, file} = itemDetails
    const formData = new FormData()
    formData.append('name', name)
    formData.append('id', id!)
    formData.append('price', String(price))
    formData.append('amount', String(amount))
    formData.append('dateOfBuy', dateOfBuy)
    formData.append('file', file!)
    await fetch(`${apiURL}/products/update`, {
        method: 'PATCH',
        credentials: 'include',
        body: formData,
    })
}
