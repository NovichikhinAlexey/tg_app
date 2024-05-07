import {useExpand, useInitData, useWebApp} from '@vkruglikov/react-telegram-web-app';
import {useEffect, useState} from "react";
import EmptyScreen from "./EmptyScreen";
import EmailScreen from "./EmailScreen";
import LoaderScreen from "./LoaderScreen";
import InnerScreen from "./InnerScreen";
import {AuthApi} from "../api/API";
import {ProfileResponse} from "../types/types";
import {store} from "../store/config";
import {
  setAccr,
  setActiveFarmingBalance,
  setActiveFarmingPerSec,
  setActiveFarmingSecond,
  setAddTapPerSecond,
  setAvailableTaps,
  setBalance,
  setInviteCount,
  setMaxAvailableTaps,
  setMaxFarmingSecondSec,
  setRefBalance,
  setRefUrlCopy,
  setRefUrlTg,
  setSymbol,
  setTapSize
} from "../store/AppState";

function getURLParams() {
  const params: any = {};
  const urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams);
  console.log();

  // @ts-ignore
  for (const [key, value] of urlParams) {
    // @ts-ignore
    params[key] = value;
  }

  return params;
}

const MainScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [userExist, setUserExist] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false);
  const [userData, setUserData] = useState<ProfileResponse | null>(null);
  const [isExpanded, expand] = useExpand();
  const [initDataUnsafe] = useInitData();
  const WebApp = useWebApp();

  const handleEmailEntered = async (email: string) => {
    const params = getURLParams();
    const profileDate = await AuthApi.register({
      userId: initDataUnsafe?.user?.id ?? 321309023,
      authData: WebApp?.authData ?? 'query_id=AAE6oasaAAAAADqhqxqQYAgp&user=%7B%22id%22%3A321309023%2C%22first_name%22%3A%22Alexey%22%2C%22last_name%22%3A%22Novichikhin%22%2C%22username%22%3A%22alexeynovi%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1715027827&hash=bae8aa82f47568ec17bfaf45dfaea7165e34ef4d5f94d0a4cc33b325bb656f27',
      email: email,
      refCode: params?.startapp ?? '',
    });
    setUserExist(true);
    setFirstLoad(true);
  };

  useEffect(() => {
    if (!isExpanded) {
      expand();
    }
  }, []);

  useEffect(() => {
    checkProfile();
  }, []);

  const checkProfile = async () => {
    const profileDate = await AuthApi.profile({
      userId: initDataUnsafe?.user?.id ?? 321309023,
      authData: WebApp?.authData ?? 'query_id=AAE6oasaAAAAADqhqxqQYAgp&user=%7B%22id%22%3A321309023%2C%22first_name%22%3A%22Alexey%22%2C%22last_name%22%3A%22Novichikhin%22%2C%22username%22%3A%22alexeynovi%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1715027827&hash=bae8aa82f47568ec17bfaf45dfaea7165e34ef4d5f94d0a4cc33b325bb656f27',
    });
    setUserExist(profileDate.data.data.hasEmail);
    setLoading(false);
    setUserData(profileDate.data);
    store.dispatch(setBalance(profileDate.data.data.balance));
    store.dispatch(setActiveFarmingSecond(profileDate.data.data.activeFarmingSeconds));
    store.dispatch(setActiveFarmingBalance(profileDate.data.data.activeFarmingBalance));
    store.dispatch(setActiveFarmingPerSec(profileDate.data.data.activeFarmingPerSec));
    store.dispatch(setMaxFarmingSecondSec(profileDate.data.data.maxFarmingSecondSec));
    store.dispatch(setAvailableTaps(profileDate.data.data.availableTaps));
    store.dispatch(setTapSize(profileDate.data.data.tapSize));
    store.dispatch(setAddTapPerSecond(profileDate.data.data.addTapPerSecond));
    store.dispatch(setMaxAvailableTaps(profileDate.data.data.maxAvailableTaps));
    store.dispatch(setRefUrlTg(profileDate.data.data.refUrlTg));
    store.dispatch(setRefUrlCopy(profileDate.data.data.refUrlCopy));
    store.dispatch(setInviteCount(profileDate.data.data.inviteCount));
    store.dispatch(setRefBalance(profileDate.data.data.refBalance));
    store.dispatch(setAccr(profileDate.data.data.accr));
    store.dispatch(setSymbol(profileDate.data.data.symbol));
  }

  return (
    <div>
      {isLoading ? <LoaderScreen /> : <>
        {/*(WebApp?.platform !== 'android' && WebApp?.platform !== 'ios')*/}
        {false
          ? (<EmptyScreen />)
          : (userExist ? <InnerScreen userData={userData} firstLoad={firstLoad} /> : <EmailScreen onEmailEntered={handleEmailEntered} />)
        }
      </>}
    </div>
  );
};

export default MainScreen;
