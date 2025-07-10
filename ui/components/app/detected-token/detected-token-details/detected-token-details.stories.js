import React from 'react';
import DetectedTokenDetails from './detected-token-details';

const token = {
  address: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
  symbol: 'SNX',
  decimals: 18,
  iconUrl: 'https://assets.coingecko.com/coins/images/3406/large/SNX.png',
  aggregators: ['aave', 'bancor', 'cmc', 'cryptocom', 'coinGecko', 'oneInch', 'paraswap', 'pmm', 'synthetix', 'zapper', 'zerion'],
};
const tokensListDetected = {
  [token.address]: { token, selected: true },
  "0x514910771af9ca656af840dff83e8264ecf986ca": {
    token: {
      name: "ChainLink Token",
      address: "0x514910771af9ca656af840dff83e8264ecf986ca",
      symbol: "LINK",
      decimals: 18,
      iconUrl:"https://crypto.com/price/coin-data/icon/LINK/color_icon.png",
      aggregators:[
        "coinGecko", "oneInch", "paraswap", "zapper", "zerion"
      ]
    },
    selected: true
  }
};

export default {
 title:'Components/App/DetectedToken/DetectedTokenDetails',
 argTypes:{
   token:{control:'object'},
   handleTokenSelection:{action:'handleTokenSelection'},
   tokensListDetected:{control:'array'}
 },
 args:{token,tokensListDetected}
};

const Template=(args)=><div style={{width:'320px'}}><DetectedTokenDetails {...args}/></div>;
export const DefaultStory=Template.bind({});
DefaultStory.storyName='Default';
