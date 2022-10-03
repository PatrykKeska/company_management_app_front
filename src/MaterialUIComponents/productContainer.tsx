import styled from 'styled-components'
interface ActivePlaceOrProduct {
  isActive?: boolean
}

export const ProductContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: 2,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'black',
  fontSize: 'small',
  padding: 8,
  borderRadius: 4,
  boxShadow: '0 0 10px #1ca600',

  [theme.breakpoints.up('xs')]: {
    width: '170px',
  },
  [theme.breakpoints.up('sm')]: {
    width: '250px',
  },
}))
export const SingleProduct = styled(ProductContainer)<ActivePlaceOrProduct>`
  background-color: ${({ isActive }) => (!isActive ? 'white' : '#beff00')};
  transition: 0.3s linear background-color;
`
