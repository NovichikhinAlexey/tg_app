import Logo from '../assets/simple_logo.svg';

const EmailScreen = () => {
  return (
    <div className={'email-wrapper'}>
      <div className={'email-top'}>
        <img src={Logo} alt={'simple'} />
        <div className={'email-desc'}>
          Boom! <br /> Welcome to Simple Tap
        </div>
      </div>
      <div className={'email-medium'}>
      </div>
      <div className={'email-bottom'}>

      </div>
    </div>
  );
};

export default EmailScreen;