import { useGoogleAuth } from '../hooks/useGoogleAuth';

const clientId = "897804990747-m2cfv3l6egk5vq01dd876556pcd2370j.apps.googleusercontent.com";
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