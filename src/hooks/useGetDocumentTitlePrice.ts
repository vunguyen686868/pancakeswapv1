import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'
import { CAKE } from '../constants'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData()

  const cakePriceUsd = 0 // priceData ? parseFloat(priceData.data[CAKE.address]?.price ?? 0) : 0

  const cakePriceUsdString = 0
  // Number.isNaN(cakePriceUsd) || cakePriceUsd === 0
  //   ? ''
  //   : ` - $${cakePriceUsd.toLocaleString(undefined, {
  //       minimumFractionDigits: 3,
  //       maximumFractionDigits: 3,
  //     })}`

  useEffect(() => {
    document.title = `PancakeSwap${cakePriceUsdString}`
  }, [cakePriceUsdString])
}
export default useGetDocumentTitlePrice
