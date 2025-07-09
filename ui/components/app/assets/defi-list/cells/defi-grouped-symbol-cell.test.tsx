import React from 'react';
import { render } from '@testing-library/react';
import { useI18nContext } from '../../../../../hooks/useI18nContext';
import { DeFiSymbolGroup } from './defi-grouped-symbol-cell';

jest.mock('../../../../../hooks/useI18nContext');

describe('DeFiSymbolGroup', () => {
  beforeEach(() => jest.clearAllMocks());

  it.each`
    symbols                  | privacyMode | key       | expectedText
    ${['ETH']}               | ${false}   | ${'only'}   | ${'ETH only'}
    ${['ETH', 'BTC']}        | ${false}   | ${'other'}  | ${'ETH +1 other'}
    ${['ETH', 'BTC', 'DAI']} | ${false}   | ${'others'} | ${'ETH +2 others'}
  `('renders correctly with $symbols.length symbol(s)', ({ symbols, privacyMode, key, expectedText }) => {
    (useI18nContext as jest.Mock).mockReturnValue((k: string) => (k === key ? key : ''));

    const { getByTestId } = render(<DeFiSymbolGroup symbols={symbols} privacyMode={privacyMode} />);
    
    expect(getByTestId('defi-list-symbol-group')).toHaveTextContent(expectedText);
  });

  it('hides text when privacyMode is enabled', () => {
    (useI18nContext as jest.Mock).mockReturnValue(() => '');
    
    const { getByTestId } = render(<DeFiSymbolGroup symbols={['ETH']} privacyMode />);
    
    expect(getByTestId('defi-list-symbol-group')).toHaveTextContent('•••••••••');
  });
});
