import Loading from '../assets/loading.gif';
import {useInitData, useWebApp} from "@vkruglikov/react-telegram-web-app";

const LoaderScreen = () => {
  const [initDataUnsafe] = useInitData();
  const WebApp = useWebApp();

  return (
    <div className={'loader'}>
      <img src={Loading} alt={'x'} />
      <div className={'loader-text'}>
        Loading Simple Tap...
      </div>
      <div className={'loader-text'}>
        {initDataUnsafe?.user?.id}
      </div>
      <div className={'loader-text'}>
        {WebApp?.initData}
      </div>
    </div>
  );
};

export default LoaderScreen;
