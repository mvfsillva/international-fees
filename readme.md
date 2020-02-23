# International fees

## Why?
Each country has its own way of collecting taxes and, sometimes, they are also divided by the state, as in the case of Canada, each province has its tax rate added to the tax charged by the country. This library maps all of these fees to make your life easier.

## Installation

```shell
$ yarn add international-fees
# or
$ npm install international-fees
```

## Usage


```js
import fees from 'international-fees'

// List all provinces
 console.log(fees.ca)
```
![Canada provinces list](.github/ca-list.png)

```js
import fees from 'international-fees'

// List all states
 console.log(fees.usa)
```
![The USA states list](.github/usa-list.png)


```js
fees.ca['Ontario'].provinceRate // 8
fees.ca['Ontario'].countryRate // 5
fees.ca['Ontario'].tax // 13

fees.usa['New York'].tax // 10
fees.usa['New Jersey'].tax // 1
```

## Contributing

### 01. Learn more in the Contributing guide

Please take a look at the [contributing guide](.github/contributing.md).

### 02. Fork this project

### 03. Install dependencies

```sh
$ yarn or npm install
```

## Respect earns Respect 👏

Please respect our [Code of Conduct](.github/code-of-conduct.md), in short:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

## License

[MIT](license) © 2020 Marcus Silva
