import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fireEvent } from '@testing-library/react';
import { renderWithProvider } from '../../../../test/jest/rendering';
import mockState from '../../../../test/data/mock-state.json';
import InfoTab from '.';

const middleware = [thunk];
const mockStore = configureMockStore(middleware)(mockState);

describe('InfoTab', () => {
  let getByText, getByTestId;

  beforeEach(() => {
    const { getByText: gbt, getByTestId: gbtid } = renderWithProvider(<InfoTab />, mockStore);
    getByText = gbt;
    getByTestId = gbtid;
  });

  const links = [
    ['Privacy policy', 'https://anasuapp.io/privacy.html'],
    ['Terms of use', 'https://anasuapp.io/terms.html'],
    ['Attributions', `https://raw.githubusercontent.com/anasuApp/anasuapp-extension/vMOCK_VERSION/attribution.txt`],
    ['Visit our website', 'https://anasuapp.io/'],
    ['Contact us', 'https://support.anasuapp.io']
  ];

  links.forEach(([text, href]) => {
    it(`should have correct href for "${text}" link`, () => {
      expect(getByText(text)).toHaveAttribute('href', href);
    });
  });

  it('should trigger support modal when click support link', () => {
    fireEvent.click(getByText('Visit our support center'));
    expect(getByTestId('visit-support-data-consent-modal')).toBeInTheDocument();
  });
});
