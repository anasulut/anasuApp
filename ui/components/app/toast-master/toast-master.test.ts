import { PRIVACY_POLICY_DATE } from '../../../helpers/constants/privacy-policy';
import { SURVEY_DATE, SURVEY_GMT } from '../../../helpers/constants/survey';
import {
  selectNewSrpAdded,
  selectShowPrivacyPolicyToast,
  selectShowSurveyToast,
} from './selectors';

describe('#getShowSurveyToast', () => {
  const realDateNow = Date.now;

  afterEach(() => {
    Date.now = realDateNow;
  });

  it('shows the survey link when not yet seen and within time bounds', () => {
    Date.now = () =>
      new Date(`${SURVEY_DATE}T12:25:00${SURVEY_GMT}`).getTime();
    expect(selectShowSurveyToast({
      anasuapp: { surveyLinkLastClickedOrClosed: undefined },
    })).toBe(true);
  });

  it('does not show the survey link when seen and within time bounds', () => {
    Date.now = () =>
      new Date(`${SURVEY_DATE}T12:25:00${SURVEY_GMT}`).getTime();
    expect(selectShowSurveyToast({
      anasuapp: { surveyLinkLastClickedOrClosed: '123456789' },
    })).toBe(false);
  });

it('does not show the survey link before time bounds',()=>{Date.now=()=>new
Date(`${SURVEY_DATE}T11:25
```

):`...`,);expect(
