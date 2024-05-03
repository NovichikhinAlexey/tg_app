import Logo from '../assets/simple_logo.svg';
import {useState} from "react";

interface Props  {
  onEmailEntered: () => void,
}

const EmailScreen = (props: Props) => {
  const [email, setEmail] = useState('');
  const [isValid, setValid] = useState(false);

  const handleChangeEmail = (value: string | null) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === null) {
      setEmail('');
      setValid(false);
    } else {
      setEmail(value.replace(new RegExp(' ', 'g'), ''));
      setValid(emailRegex.test(value ?? ''));
    }
  };

  const handleContinue = () => {
    if (isValid) {
      props.onEmailEntered();
      console.log('click');
    } else {
      console.log('not click(');
    }
  };

  return (
    <div className={'email-wrapper'}>
      <div className={'email-top'}>
        <img src={Logo} alt={'simple'} />
        <div className={'email-desc'}>
          Boom! <br /> Welcome to Simple Tap
        </div>
      </div>
      <div className={'email-medium'}>
        Enter the address to get started
      </div>
      <div className={'email-bottom'}>
        <input
          onChange={(e) => handleChangeEmail(e.target.value)}
          className={`email-input ${(email !== '' && !isValid) ? 'error' : '' }`}
          placeholder={'Enter your email'}
          value={email}
        />
        <div className={'email-button'} onClick={handleContinue}>
          Continue
        </div>
      </div>
    </div>
  );
};

export default EmailScreen;