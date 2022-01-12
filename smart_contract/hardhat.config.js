//https://eth-ropsten.alchemyapi.io/v2/c8REIc-zkF7tcNOlGgn9yjRasf-xgciG

require('@nomiclabs/hardhat-waffle')

module.exports ={
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/c8REIc-zkF7tcNOlGgn9yjRasf-xgciG',
      accounts: ['a2a9d213667683a0e7fd3acc5117ca772ee12b6f83676d3f236b37eb45a9d186']
    }
  }

}
