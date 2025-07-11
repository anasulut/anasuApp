import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Text,
  Box,
  BannerAlert,
} from '../../../components/component-library';

export default class SecurityTab extends PureComponent {
  static contextTypes = {
    t: PropTypes.func.isRequired,
    trackEvent: PropTypes.func.isRequired,
  };

  static propTypes = {
    history: PropTypes.object.isRequired,

    // Other props...
    // ...shortened for brevity...

    metaMetricsDataDeletionId: PropTypes.string,

    ipfsGateway: PropTypes.string.isRequired,

    setIpfsGateway: PropTypes.func.isRequired,

    skipDeepLinkInterstitial: PropTypes.bool.isRequired,
    
    setSecurityAlertsEnabled: PropTypes.func,

    useTransactionSimulations:PropTypes.bool

};

state = {
     ipfsGatewayError:''
}

componentDidUpdate(prevProps){
      const {t}=this.context;
      if(prevProps.dataCollectionForMarketing === true && 
         this.props.participateInMetaMetrics === true && 
         this.props.dataCollectionForMarketing ===false ){
           this.setState({showDataCollectionDisclaimer:true})
}
}


toggleSetting=(value,eventName,eventAction,toggleMethod)=>{
   this.context.trackEvent({
       category:'MetaMetricsEventCategory.Settings',
       event:eventName,
       properties:{
           action:eventAction
       }
   });
   toggleMethod(!value);
}

hideSrpQuizModal=()=>{this.setState({srpQuizModalVisible:false})};


render() {

const{
ipfsGatewayError,setIpfsGateway
}=this.state;
return (
<div>
 {/* Render content */}
</div>
);
}
};
