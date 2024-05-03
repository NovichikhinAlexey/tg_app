
interface Props  {
  taps: number,
  time: string,
}

const Header = (props: Props) => {
  return (
    <div className={'header'}>
      <div className={`header_timer ${props.time === '00:00:00' ? 'disabled' : ''}`}>
        {props.time} left
      </div>
      <div className={`header_taps ${props.taps === 0 ? 'disabled' : ''}`}>
        {props.taps} {props.taps === 1 ? 'tap' : 'taps'}
      </div>
    </div>
  );
};

export default Header;
