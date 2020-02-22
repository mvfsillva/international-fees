// fees
import c from './ca'
import u from './usa'

interface Countries {
  ca: object|any
  usa: object|any
}

interface Params {
  countryName: string
  shortName: string
  total: number
  provinceRate?: number
  countryRate?: number
  tax?: number
}

const ca: Params = {
  ...c,
  total: Object.keys(c).length,
  countryName: 'Canada',
  shortName: 'CA'
}

const usa: Params = {
  ...u,
  total: Object.keys(u).length,
  countryName: 'United States',
  shortName: 'USA'
}

const fees: Countries = { ca, usa }

export default fees
