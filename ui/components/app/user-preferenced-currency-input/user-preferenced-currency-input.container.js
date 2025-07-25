import { connect } from 'react-redux';
import { toggleCurrencySwitch } from '../../../ducks/app/app';
import UserPreferencedCurrencyInput from './user-preferenced-currency-input.component';

const mapStateToProps = state => ({
  sendInputCurrencySwitched: state.appState.sendInputCurrencySwitched,
});

const mapDispatchToProps = dispatch => ({
  onPreferenceToggle: () => dispatch(toggleCurrencySwitch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPreferencedCurrencyInput);
