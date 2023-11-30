import axios from 'axios'
import ICountry from 'Interfaces/ICountry'

export const CountryApi = axios.create({
  baseURL: 'http://localhost:4000/api'
})

export const getAllCountries = async (): Promise<{
  data: ICountry[]
  success: boolean
  message?: string
}> => {
  const response = await CountryApi.get('/allCountries')
  return response.data
}
