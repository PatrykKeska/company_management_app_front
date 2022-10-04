// After build command this path gonna get /api
// if your api use different path please change it.
// export const apiURL = process.env.REACT_APP_API_URL ?? 'http://localhost:3001'
// export const fileApi = 'http://localhost:3001/files/'
export const fileApi = 'http://localhost:3000/files/'
// for localhost usage please use this version above !
export const apiURL =
  process.env.REACT_APP_API_URL ?? 'http://localhost:3000/api'
