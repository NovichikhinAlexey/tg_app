import Loading from '../assets/loading.gif';

const LoaderScreen = () => {
  return (
    <div className={'loader'}>
      <img src={Loading} alt={'x'} />
      <div className={'loader-text'}>
        Loading Simple Tap...
      </div>
    </div>
  );
};

export default LoaderScreen;
