import homeActive from '../assets/app_bar/HomeActive.svg';
import boostActive from '../assets/app_bar/GraphActive.svg';
import inviteActive from '../assets/app_bar/RewardsActive.svg';
import tasksActive from '../assets/app_bar/ChartActive.svg';
import home from '../assets/app_bar/Home.svg';
import boost from '../assets/app_bar/Graph.svg';
import invite from '../assets/app_bar/Rewards.svg';
import tasks from '../assets/app_bar/Chart.svg';


interface Props  {
  activeTab: number,
  onHomeTap: () => void,
  onBoostTap: () => void,
  onTasksTap: () => void,
  onInviteTap: () => void,
}

const AppBar = (props: Props) => {
  return (
    <div className={'app_bar'}>
      <div onClick={props.onHomeTap} className={"appbar-tab"}>
        <img className={"appbar-image"} src={props.activeTab == 0 ? homeActive : home} alt={'home'} />
        <div className={props.activeTab == 0 ? "appbar-text active_home" : "appbar-text"}>
          Home
        </div>
      </div>
      <div onClick={props.onTasksTap} className={"appbar-tab"}>
        <img className={"appbar-image"} src={props.activeTab == 1 ? tasksActive : tasks} alt={'tasks'} />
        <div className={props.activeTab == 1 ? "appbar-text active" : "appbar-text"}>
          Tasks
        </div>
      </div>
      <div onClick={props.onBoostTap} className={"appbar-tab"}>
        <img className={"appbar-image"} src={props.activeTab == 2 ? boostActive : boost} alt={'boost'} />
        <div className={props.activeTab == 2 ? "appbar-text active" : "appbar-text"}>
          Boost
        </div>
      </div>
      <div onClick={props.onInviteTap} className={"appbar-tab"}>
        <img className={"appbar-image"} src={props.activeTab == 3 ? inviteActive : invite} alt={'Invite'} />
        <div className={props.activeTab == 3 ? "appbar-text active" : "appbar-text"}>
          Invite
        </div>
      </div>
    </div>
  );
};

export default AppBar;
