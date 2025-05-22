

import { useEffect } from 'react';

type Props = {
  withText?: 'sign_in_with' | 'sign_up_with'
  containerId: string;
  clientId: string;
  onSuccess: (credential: string) => void;
};

export function useGoogleAuth({ containerId, clientId, onSuccess, withText}: Props) {
  useEffect(() => {
    if (!window.google || !containerId || !clientId) return;

    const container = document.getElementById(containerId);
    if (!container) return;

    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: (response) => {
        if (response.credential) {
          onSuccess(response.credential);
        }
      },
    });

    window.google.accounts.id.renderButton(container, {
      theme: 'outline',
      size: 'large',
      text: {withText},
      width: 400,
      shape: 'circle',
      logo_alignment: 'center',
    });
  }, [containerId, clientId, onSuccess]);
}
