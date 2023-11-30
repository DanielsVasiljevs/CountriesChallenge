// Custom SWR fetch hook for getting data about all countries
import { getAllCountries } from 'Api/CountryApi'
import ICountry from 'Interfaces/ICountry'
import useSWRImmutable from 'swr/immutable'

const useCountryData: () => {
  data: { data: ICountry[]; success: boolean; message?: string } | undefined
  isLoading: boolean
  error: any
} = () => {
  const { data, isLoading, error } = useSWRImmutable<{
    data: ICountry[]
    success: boolean
  }>('/api', getAllCountries)

  return {
    data,
    isLoading,
    error
  }
}
export default useCountryData
