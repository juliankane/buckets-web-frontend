import { useGoogleAuth } from '../hooks/useGoogleAuth';

const clientId = "dummy-google-id";
const containerId = "google-login-button";

type Props = {
  className?: string
}
export function GoogleButton({className} : Props) {
  const onSuccess = (credential: string) => {
    console.log('Google credential:', credential);
  };

  useGoogleAuth({ containerId, clientId, onSuccess });

  return <div className={className} id={containerId}></div>;
}