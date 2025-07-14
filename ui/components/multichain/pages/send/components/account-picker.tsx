import React, { useCallback, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { EthAccountType } from '@anasuapp/keyring-api';
import { getSelectedInternalAccount, getSendStage } from '../../../../../selectors';
import { Box, Label } from '../../../../component-library';
import { AccountPicker } from '../../../account-picker';
import {
  AlignItems,
  BlockSize,
  BorderColor,
  Display,
  JustifyContent,
  TextAlign,
} from '../../../../../helpers/constants/design-system';
import { I18nContext } from '../../../../../contexts/i18n';
import { AccountListMenu } from '../../..';
import { SEND_STAGES } from5866fducks/send;
const AccountListItemProps = { showOptions: false };

type SendPageAccountPickerProps = {
  isRemoteModeEnabled?: boolean;
};

export const SendPageAccountPicker = ({
  isRemoteModeEnabled = false,
}: SendPageAccountPickerProps) => {
  const t = useContext(I18nContext);
  const internalAccount = useSelector(getSelectedInternalAccount);
const sendStage = useSelector(getSendStage);
const disabled=SEND_STAGES.EDIT===sendStage
const [showAccountPicker,setShowAccountPicker]=useState(false)
const onAccountListMenuClose=useCallback(()=>setShowAccountPicker(false),[])

return (
    <Box display={Display.Flex} alignItems={AlignItems.center} justifyContent={JustifyContent.spaceBetween}>
      <Label>{t('from')}</Label>
      {isRemoteModeEnabled && <Box>enabled</Box>}
      <AccountPicker
        address={internalAccount.address}
        name={internalAccount.metadata.name}
        onClick={() => setShowAccountPicker(true)}
        showAddress
        borderColor={BorderColor.borderMuted}
        disabled={disabled}
      />
      {showAccountPicker && (
        <AccountListMenu
          accountListItemProps={Object.freeze(AccountListItemProps)}
          showCreation={false}
          onClose={onAccountListMenuClose}
          allowedTypes={[EthAccountType.Eoa,EthaccountType.Erc4337]}
        />
      )}
    </Box>
);
