import AppBar from "../components/app_bar";
import HomeScreen from "./HomeScreen";
import TasksScreen from "./TasksScreen";
import BoostsScreen from "./BoostsScreen";
import InviteScreen from "./InviteScreen";
import {useEffect, useRef, useState} from "react";
import Header from "../components/header";
import Helper from "../components/helper";
import {ProfileResponse} from "../types/types";
import {RootState, store} from "../store/config";
import {setActiveFarmingBalance, setActiveFarmingSecond, setAvailableTaps} from "../store/AppState";
import {useSelector} from "react-redux";

interface Props  {
  firstLoad: boolean,
  userData: ProfileResponse | null,
}

const InnerScreen = (props: Props) => {
  const [activeTab, setTab] = useState(0);
  const [stepCompleted, setStep] = useState(0);
  const timer = useRef<any>(null);
  const timerFarming = useRef<any>(null);


  const [timerStarted, setTimerStarted] = useState(false);
  const taps = useSelector((state: RootState) => state.app.availableTaps);
  const maxTaps = useSelector((state: RootState) => state.app.maxAvailableTaps);
  const tapRecovery = useSelector((state: RootState) => state.app.addTapPerSecond);
  const activeFarmingSeconds = useSelector((state: RootState) => state.app.activeFarmingSeconds);
  const maxFarmingSecondSec = useSelector((state: RootState) => state.app.maxFarmingSecondSec);
  const activeFarmingPerSec = useSelector((state: RootState) => state.app.activeFarmingPerSec);
  const activeFarmingBalance = useSelector((state: RootState) => state.app.activeFarmingBalance);


  useEffect(() => {
    if (taps < maxTaps && !timerStarted) {
      startTimer();
    } else if (taps >= maxTaps && timerStarted) {
      stopTimer();
    }
    return () => {
      if (!!timer) {
        clearInterval(timer.current);
      }
    };
  }, [taps]);

  const startTimer = () => {
    timer.current = setInterval(() => {
      store.dispatch(setAvailableTaps(taps + tapRecovery));
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timer.current);
  };

  useEffect(() => {
    if (activeFarmingSeconds > 0 && activeFarmingSeconds < maxFarmingSecondSec && !!timerFarming) {
      startFarmingTimer();
    } else if (activeFarmingSeconds > maxFarmingSecondSec) {
      stopFarmingTimer();
    }
    return () => {
      if (!!timerFarming) {
        clearInterval(timerFarming.current);
      }
    };
  }, [activeFarmingSeconds]);

  const startFarmingTimer = () => {
    timerFarming.current = setInterval(() => {
      store.dispatch(setActiveFarmingSecond(activeFarmingSeconds + 1));
      store.dispatch(setActiveFarmingBalance(activeFarmingBalance + activeFarmingPerSec));
    }, 1000);
  };

  const stopFarmingTimer = () => {
    clearInterval(timerFarming.current);
  };

  const tabs = [
    <HomeScreen startFarmingTimer={startFarmingTimer} userData={props.userData} />,
    <TasksScreen />,
    <BoostsScreen />,
    <InviteScreen userData={props.userData} />
  ];

  const handleTapStep = () => {
    setStep(stepCompleted + 1);
  };

  const onHomeTap = () => {
    setTab(0);
  };

  const onBoostTap = () => {
    // setTab(2);
  };

  const onTasksTap = () => {
    setTab(1);
  };

  const onInviteTap = () => {
    setTab(3);
  };

  return (
    <div className={'inner_wrapper'}>
      {(props.firstLoad && stepCompleted < 3) && <Helper step={stepCompleted} onTap={handleTapStep} />}
      <Header />
      {tabs[activeTab]}
      <AppBar activeTab={activeTab} onHomeTap={onHomeTap} onBoostTap={onBoostTap} onTasksTap={onTasksTap} onInviteTap={onInviteTap} />
    </div>
  );
};

export default InnerScreen;
