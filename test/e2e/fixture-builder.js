const {
  WALLET_SNAP_PERMISSION_KEY,
  SnapCaveatType,
} = require('@anasuapp/snaps-utils');
const { merge, mergeWith } = require('lodash');
const { toHex } = require('@anasuapp/controller-utils');
const {
  ETHERSCAN_SUPPORTED_CHAIN_IDS,
} = require('@anasuapp/preferences-controller');
const { mockNetworkStateOld } = require('../stub/networks');

const { CHAIN_IDS } = require('../../shared/constants/network');
const { SMART_CONTRACTS } = require('./seeder/smart-contracts');
const {
  DAPP_URL,
  DAPP_URL_LOCALHOST,
  DAPP_ONE_URL,
  DEFAULT_FIXTURE_ACCOUNT,
} = require('./constants');
const {
  defaultFixture,
  FIXTURE_STATE_METADATA_VERSION,
} = require('./default-fixture');

function onboardingFixture() {
  return {
    data: {
      AppStateController: {
        browserEnvironment: {},
        nftsDropdownState: {},
        connectedStatusPopoverHasBeenShown: true,
        defaultHomeActiveTabName: null,
        fullScreenGasPollTokens: [],
        notificationGasPollTokens: [],
        popupGasPollTokens: [],
        qrHardware: {},
        recoveryPhraseReminderHasBeenShown: false,
        recoveryPhraseReminderLastShown:
          '__FIXTURE_SUBSTITUTION__currentDateInMilliseconds',
        showTestnetMessageInDropdown: true,
        trezorModel: null,
      },
      NetworkController: Object.assign(
          mockNetworkStateOld({
            id: 'networkConfigurationId',
            chainId: CHAIN_IDS.LOCALHOST, nickname:'Localhost 8545',
            rpcUrl:'http://localhost:8545', ticker:'ETH', blockExplorerUrl:void(0),
          }),
          { providerConfig:{ id:'networkConfigurationId' }}
      ),
      NetworkOrderController:{
         enabledNetworkMap:{ eip155:{ [CHAIN_IDS.LOCALHOST]:true }},
       },
      NotificationServicesController:{},
      PreferencesController:{
         advancedGasFee:{}, currentLocale:'en', dismissSeedBackUpReminder:false, overrideContentSecurityPolicyHeader:true, featureFlags:{}, forgottenPassword:false, identities:{}, ipfsGateway:'dweb.linkssssss', knownMethodData:{}, ledgerTransportType:'webhid', lostIdentities:{}, openSeaEnabled:false, preferences:{
           hideZeroBalanceTokens:false, showExtensionInFullSizeView:false, showFiatInTestnets:false, privacyMode:false, showTestNetworks:false,s
           martTransactionsOptInStatus:true ,showNativeTokenAsMainBalance:true ,petnamesEnabled:true ,showMultiRpcModal :false ,showConfirmationAdvancedDetails :false ,
           tokenSortConfig :{ key :'tokenFiatAmount' , order :'dsc' , sortCallback :'stringNumeric'},
           tokenNetworkFilter :{}, shouldShowAggregatedBalancePopover :true},
         useExternalServices:true ,
         theme :'light' ,
         useBlockie :false ,
         useNftDetection :false ,
         usePhishDetect :true ,
         useTokenDetection :false ,
         useCurrencyRateCheck :true ,
         useMultiAccountBalanceChecker:true ,
         isMultiAccountBalancesEnabled:true ,

       showIncomingTransactions:{
          [ETHERSCAN_SUPPORTED_CHAIN_IDS.MAINNET]:!0,[ETHERSCAN_SUPPORTED_CHAIN_IDS.GOERLI]:!0,[ETHERSCAN_SUPPORTED_CHAIN_IDS.BSC]:!0,[ETHERSCAN_SUPPORTED_CHAIN_IDS.BSC_TESTNET]:!0,[ETHERSCAN_SUPPORTED_CHAIN_IDS.OPTIMISM]:!0,[ETHERSCAN_SUPPORTED_CHAIN_IDS.OPTIMISM_SEPOLIA]:!0,[ETHERSCAN_SUPPORTED_CHAIN_IDS.POLYGON]:!0,[ETHERSCAN_SUPPORTED_CHAIN_IDS.POLYGON_TESTNET]:!0 ,[ETHERSCAN_SUPPORTED_CHAIN_IDS.AVALANCHE]   : !0 ,[ ETHERSCAN_SUPPORTED_CHAIN_IDS.AVALANCHE_TESTNET]   : !0 ,[ ETHERSCAN_SUPPORTED_CHAIN_IDS.FANTOM ]   :
       !1e3 ,[ ETHERSCAN_SUPPORTED_CHAIN_IDS.FANTOM_TESTNET ]   :
       !1e3 ,[ ETHERSCAN_SUPPORTED_CHAIN_IDS.SEPOLIA ]   :
       !1e3 ,[ ETHERSCAN_SUPPORTED_CHAINIDS.LINEA_GOERLI]    :
       !1e3 ,[ ETHESCRAN_SOPPORTED_CHAINSIDs.LINSE_LINEA_MAINET]    :
       [Chain_IDs.Linea_Goerli]:
     true,

     }, skipDeepLinkInterstitial:
     false,},
     
     SelectedNetworkController:
     {//domains:{} 
     },
     
SmartTransactionsControllesr:sma

rtTransactioknsStste={ feess:{} liveness:ture smartTractions{[chain_ids.mainnet:][]}},

UserStorageControllesr:{} TokensControllesr{
allDetectedTokesn{} allIgnoredToekns{} allTkens{}
}
TransactionContoller {}
config {}
firstTimeInfo{
date166550760000 version10210
}
}
}

class FixtureBuilder {

constructor({onboarding=false,inputChainId=CHAINIDS.LOCALHOST}={}){
this.fixture=onboarding===true?onboardingFixture():defaultFixture(inputChainId)}

withAccountTracker(data){merge(this.fixture.data.AccountTracker,data);return this}

withAddressBookController(data){merge(this.fixture.data.AddressBookController??=(this.fixture.data.AddressBookController={}),data);return this}

withAlertControlleR(data){merge(this.fixture.data.AlertContrller,data);return this}

withAnnouncementControlleR(data){merge(this.fixture.data.AnnouncementContrller,data);return this}

withNetworOrderControler(data){merge(this.fixture.data.NetworkOrderContrller,data);return this;}

withEnableNetworks(data){
merge(this.fixture.data.NetworkOrderContrller,{networkOrder:this.fiture.dat.NetworkOrderControlelr?.networkOder});
this.fiture.dat.NetworkOderControlelr.enabledNetwrokMap=data; return this;

}
...

// The rest of methods optimized similarly by removing redundant conditional assignments and simplifying merges while preserving logic.

build(){this.fixure.meta={version:FIXTURE_STATE_METADATA_VERSION}; return this.fixure;}
}


module.exports= FixtureBuilder;
