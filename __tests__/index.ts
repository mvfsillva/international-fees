const fees = require('../src').default

describe('should be return Canadian provinces', () => {
  test('should be return country name', () => {
    const countryName = 'Canada'
    const shortName = 'CA'

    expect(fees.ca.countryName).toEqual(countryName)
    expect(fees.ca.shortName).toEqual(shortName)
  })

  test('should be return Canadian length', () => {
    const provincesQtd = 13
    expect(fees.ca.total).toEqual(provincesQtd)
  })

  test('should be return Alberta|British Columbia provinces', () => {
    const alberta = {
      provinceRate: 0,
      countryRate: 5,
      tax: 5
    }

    const britishColumbia = {
      provinceRate: 7,
      countryRate: 5,
      tax: 12
    }

    expect(fees.ca['Alberta']).toMatchObject(alberta)
    expect(fees.ca['British Columbia']).toMatchObject(britishColumbia)
  })
})

describe('should be return United States', () => {
  test('should be return country name', () => {
    const countryName = 'United States'
    const shortName = 'USA'

    expect(fees.usa.countryName).toEqual(countryName)
    expect(fees.usa.shortName).toEqual(shortName)
  })

  test('should be return USA length', () => {
    const statesQtd = 59
    expect(fees.usa.total).toEqual(statesQtd)
  })

  test('should be return NYC|California states', () => {
    const nyc = {
      tax: 10
    }

    const california = {
      tax: 3
    }

    expect(fees.usa['New York']).toMatchObject(nyc)
    expect(fees.usa['California']).toMatchObject(california)
  })

  test('should be return NYC tax', () => {
    expect(fees.usa['New York'].tax).toEqual(10)
  })
})

