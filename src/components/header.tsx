import {useSelector} from "react-redux";
import {RootState} from "../store/config";

function fancyTimeFormat(duration: number) {
  // Hours, minutes and seconds
  const hrs = ~~(duration / 3600);
  const mins = ~~((duration % 3600) / 60);
  const secs = ~~duration % 60;

  let ret = "";

  ret += (hrs < 10 ? "0" : "") + hrs + ":";

  ret += (mins < 10 ? "0" : "");

  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;

  return ret;
}

const Header = () => {
  const taps = useSelector((state: RootState) => state.app.availableTaps);
  const maxSeconds = useSelector((state: RootState) => state.app.maxFarmingSecondSec);
  const nowSeconds = useSelector((state: RootState) => state.app.activeFarmingSeconds);
  const defSeconds = maxSeconds - nowSeconds;
  var time = fancyTimeFormat(defSeconds);

  return (
    <div className={'header'}>
      <div className={`header_timer ${time === '00:00:00' ? 'disabled' : ''}`}>
        {time} left
      </div>
      <div className={`header_taps ${Math.floor(taps) === 0 ? 'disabled' : ''}`}>
        {Math.floor(taps)} {Math.floor(taps) === 1 ? 'tap' : 'taps'}
      </div>
    </div>
  );
};

export default Header;
