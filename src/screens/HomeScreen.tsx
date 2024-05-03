import coin from '../assets/coin.png';
import background from '../assets/background.png';
import {useState} from "react";

const HomeScreen = () => {
  const [shake, setShake] = useState(false);

  const handleClick = () => {
    setShake(true);
    setTimeout(() => {
      setShake(false);
    }, 500);
  };

  const handleFarming = () => {

  };

  return (
    <div className={'home_wrapper wrapper'}>
      <div className={'tap_block'}>
        <img className={'home_background'} src={background} alt={'back'} />
        <img onClick={handleClick} className={`home_coin ${shake ? 'shake' : ''}`} src={coin} alt={'coin'} />
        <div className={'home_balance'}>
          100000 <span>SMPL</span>
        </div>
        <div className={'home_coins_text'}>
          Simple coin
        </div>
      </div>
      <div className={'button_block'}>
        <div className={'home-button'} onClick={handleFarming}>
          Start farming
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
