import {useExpand, useInitData, useWebApp} from '@vkruglikov/react-telegram-web-app';
import {useEffect, useState} from "react";
import EmptyScreen from "./EmptyScreen";
import HomeScreen from "./HomeScreen";
import EmailScreen from "./EmailScreen";
import LoaderScreen from "./LoaderScreen";

const MainScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [userExist, setUserExist] = useState(false);
  const [isExpanded, expand] = useExpand();
  const [initDataUnsafe] = useInitData();
  const WebApp = useWebApp();

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
          : (userExist ? <HomeScreen /> : <EmailScreen />)
        }
      </>}
    </div>
  );
};

export default MainScreen;
