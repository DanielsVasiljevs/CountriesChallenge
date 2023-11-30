import axios from 'axios'
import ICountry from 'Interfaces/ICountry'

export const CountryApi = axios.create({
  // Most of the times this should be in .env file, but for now no sensetive information is being passed
  baseURL: 'https://countriesback-8atk.onrender.com/api'
})

export const getAllCountries = async (): Promise<{
  data: ICountry[]
  success: boolean
  message?: string
}> => {
  const response = await CountryApi.get('/allCountries')
  return response.data
}
