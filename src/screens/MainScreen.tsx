import {useExpand, useInitData, useWebApp} from '@vkruglikov/react-telegram-web-app';
import {useEffect, useState} from "react";
import EmptyScreen from "./EmptyScreen";
import EmailScreen from "./EmailScreen";
import LoaderScreen from "./LoaderScreen";
import InnerScreen from "./InnerScreen";

const MainScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [userExist, setUserExist] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false);
  const [isExpanded, expand] = useExpand();
  const [initDataUnsafe] = useInitData();
  const WebApp = useWebApp();

  const handleEmailEntered = () => {
    setUserExist(true);
    setFirstLoad(true);
  };

  useEffect(() => {
    if (!isExpanded) {
      expand();
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {isLoading ? <LoaderScreen /> : <>
        {(WebApp.platform !== 'android' && WebApp.platform !== 'ios')
          ? (<EmptyScreen />)
          : (userExist ? <InnerScreen firstLoad={firstLoad} /> : <EmailScreen onEmailEntered={handleEmailEntered} />)
        }
      </>}
    </div>
  );
};

export default MainScreen;
