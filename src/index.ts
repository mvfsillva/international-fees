// fees
import canada from './ca'
import unitedStates from './usa'

interface Fees {
  shortName: string
  countryName: string
  total: number
}

const ca: Fees = {
  ...canada,
  total: Object.keys(canada).length,
  countryName: 'Canada',
  shortName: 'CA'
}

const usa: Fees = {
  ...unitedStates,
  total: Object.keys(unitedStates).length,
  countryName: 'United States',
  shortName: 'USA'
}

const fees = { ca, usa }

export default fees
