import AppBar from "../components/app_bar";
import HomeScreen from "./HomeScreen";
import TasksScreen from "./TasksScreen";
import BoostsScreen from "./BoostsScreen";
import InviteScreen from "./InviteScreen";
import {useState} from "react";
import Header from "../components/header";

const tabs = [
  <HomeScreen />,
  <TasksScreen />,
  <BoostsScreen />,
  <InviteScreen />
];

const InnerScreen = () => {
  const [activeTab, setTab] = useState(0);

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
      <Header taps={100} time={'08:00:00'} />
      {tabs[activeTab]}
      <AppBar activeTab={activeTab} onHomeTap={onHomeTap} onBoostTap={onBoostTap} onTasksTap={onTasksTap} onInviteTap={onInviteTap} />
    </div>
  );
};

export default InnerScreen;
