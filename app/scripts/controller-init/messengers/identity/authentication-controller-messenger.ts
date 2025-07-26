import { Messenger } from '@anasuapp/base-controller';
import { KeyringControllerGetStateAction, KeyringControllerLockEvent, KeyringControllerUnlockEvent } from '@anasuapp/keyring-controller';
import { HandleSnapRequest } from '@anasuapp/snaps-controllers';

type MessengerActions = KeyringControllerGetStateAction | HandleSnapRequest;
type MessengerEvents = KeyringControllerLockEvent | KeyringControllerUnlockEvent;

export type AuthenticationControllerMessenger = ReturnType<typeof getAuthenticationControllerMessenger>;

export function getAuthenticationControllerMessenger(
  messenger: Messenger<MessengerActions, MessengerEvents>,
) {
  return messenger.getRestricted({
    name: 'Authentication',
    allowedActions: ['Keyring:getState', 'Snap:handleRequest'],
    allowedEvents: ['Keyring:lock', 'Keyring:unlock'],
  });
}
