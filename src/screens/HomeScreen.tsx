import coin from '../assets/coin.png';
import background from '../assets/background.png';
import {useEffect, useRef, useState} from "react";
import {ProfileResponse} from "../types/types";
import {useSelector} from "react-redux";
import {RootState, store} from "../store/config";
import {AuthApi} from "../api/API";
import {useInitData, useWebApp} from "@vkruglikov/react-telegram-web-app";
import {setActiveFarmingBalance, setActiveFarmingSecond, setAvailableTaps, setBalance} from "../store/AppState";

interface Props  {
  userData: ProfileResponse | null,
  startFarmingTimer: () => void,
}

const HomeScreen = (props: Props) => {

  const [shake, setShake] = useState(false);
  const [tapsCache, setTaps] = useState(0);
  const symbol = useSelector((state: RootState) => state.app.symbol);
  const taps = useSelector((state: RootState) => state.app.availableTaps);
  const balance = useSelector((state: RootState) => state.app.balance);
  const tapSize = useSelector((state: RootState) => state.app.tapSize);
  const activeFarmingSeconds = useSelector((state: RootState) => state.app.activeFarmingSeconds);
  const maxFarmingSecondSec = useSelector((state: RootState) => state.app.maxFarmingSecondSec);
  const activeFarmingBalance = useSelector((state: RootState) => state.app.activeFarmingBalance);
  const accr = useSelector((state: RootState) => state.app.accr);
  const [initDataUnsafe] = useInitData();
  const WebApp = useWebApp();

  const handleClick = async () => {
    if (taps > tapsCache) {
      const tapWait = tapsCache + 1;
      setTaps(tapsCache + 1);
      setShake(true);
      store.dispatch(setAvailableTaps(taps - 1));
      store.dispatch(setBalance(balance + tapSize));
      setTimeout(() => {
        setShake(false);
      }, 500);
      setTimeout(async () => {
        var tapsNew = 0;
        setTaps((tapsCache) => {
          tapsNew = tapsCache;
          return tapsCache;
        })

        if (tapWait === tapsNew) {
          const tap = AuthApi.tap({
            userId: initDataUnsafe?.user?.id ?? 321309023,
            authData: WebApp?.authData ?? 'query_id=AAE6oasaAAAAADqhqxqQYAgp&user=%7B%22id%22%3A321309023%2C%22first_name%22%3A%22Alexey%22%2C%22last_name%22%3A%22Novichikhin%22%2C%22username%22%3A%22alexeynovi%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1715027827&hash=bae8aa82f47568ec17bfaf45dfaea7165e34ef4d5f94d0a4cc33b325bb656f27',
            count: tapsNew,
          });
          setTaps(0);
        }
      }, 2000, tapsCache);
    }
  };

  const handleFarming = async () => {
    if ((activeFarmingSeconds === 0 &&
      activeFarmingBalance === 0)) {
      const activateFarming = AuthApi.farmingActivate({
        userId: initDataUnsafe?.user?.id ?? 321309023,
        authData: WebApp?.authData ?? 'query_id=AAE6oasaAAAAADqhqxqQYAgp&user=%7B%22id%22%3A321309023%2C%22first_name%22%3A%22Alexey%22%2C%22last_name%22%3A%22Novichikhin%22%2C%22username%22%3A%22alexeynovi%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1715027827&hash=bae8aa82f47568ec17bfaf45dfaea7165e34ef4d5f94d0a4cc33b325bb656f27',
      });
      props.startFarmingTimer();
    } else if ((activeFarmingSeconds === 0 || activeFarmingSeconds === maxFarmingSecondSec)) {
      const collect = AuthApi.collect({
        userId: initDataUnsafe?.user?.id ?? 321309023,
        authData: WebApp?.authData ?? 'query_id=AAE6oasaAAAAADqhqxqQYAgp&user=%7B%22id%22%3A321309023%2C%22first_name%22%3A%22Alexey%22%2C%22last_name%22%3A%22Novichikhin%22%2C%22username%22%3A%22alexeynovi%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1715027827&hash=bae8aa82f47568ec17bfaf45dfaea7165e34ef4d5f94d0a4cc33b325bb656f27',
      });
      store.dispatch(setBalance(balance + activeFarmingBalance));
      store.dispatch(setActiveFarmingSecond(0));
      store.dispatch(setActiveFarmingBalance(0));
    }
  };


  return (
    <div className={'home_wrapper wrapper'}>
      <div className={'tap_block'}>
        <img className={'home_background'} src={background} alt={'back'} />
        <img onClick={handleClick} className={`home_coin ${shake ? 'shake' : ''}`} src={coin} alt={'coin'} />
        <div className={`home_balance ${(Math.round(balance * Math.pow(10, accr))/Math.pow(10, accr)).toString().length > 7 ? 'small' : ''}`}>
          {Math.round(balance * Math.pow(10, accr))/Math.pow(10, accr)} <span>{symbol}</span>
        </div>
        <div className={'home_coins_text'}>
          Simple coin
        </div>
      </div>
      <div className={'button_block'}>
        <div className={`home-button ${(activeFarmingSeconds !== 0 && activeFarmingSeconds !== maxFarmingSecondSec) ? 'block' : ''}`} onClick={handleFarming}>
          {
            (activeFarmingSeconds === 0 &&
              activeFarmingBalance === 0)
              ? 'Start farming'
              : (activeFarmingSeconds !== 0 && activeFarmingSeconds !== maxFarmingSecondSec)
                ? `Farming... ${Math.round(activeFarmingBalance * Math.pow(10, accr))/Math.pow(10, accr)} ${symbol}`
                : `Collect ${Math.round(activeFarmingBalance * Math.pow(10, accr))/Math.pow(10, accr)} ${symbol}`
          }
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
