import step1 from '../assets/helper/step1.png';
import step2 from '../assets/helper/step2.png';
import step3 from '../assets/helper/step3.png';

interface Props  {
  step: number,
  onTap: () => void,
}

const Helper = (props: Props) => {
  return (
    <div onClick={props.onTap} className={'helper'}>
      {props.step === 0 && <div className={'helper_item first'}>
          Hurry up!
          <img src={step1} alt={'>'} />
      </div>}
      {props.step === 1 && <div className={'helper_item second'}>
          <img src={step2} alt={'>'} />
          100 taps for <br /> 8 hours
      </div>}
      {props.step === 2 && <div className={'helper_item third'}>
          <img src={step3} alt={'>'} />
          tap to get <br /> some smpl
      </div>}

    </div>
  );
};

export default Helper;