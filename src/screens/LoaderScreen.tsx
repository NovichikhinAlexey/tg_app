import Loading from '../assets/loading.gif';
import {useInitData} from "@vkruglikov/react-telegram-web-app";

const LoaderScreen = () => {
  const [initDataUnsafe] = useInitData();

  return (
    <div className={'loader'}>
      <img src={Loading} alt={'x'} />
      <div className={'loader-text'}>
        Loading Simple Tap...
      </div>
      <div className={'loader-text'}>
        {initDataUnsafe?.user?.id}
      </div>
    </div>
  );
};

export default LoaderScreen;
