import QRImage from '../assets/qr.png'

const EmptyScreen = () => {

  return (
    <div id="desktop_block">
      <div id="usercard_desk">
        <p>Open from mobile</p>
        <img className="qr_image" alt="qr" src={QRImage} />
        <p>@alexnovi_bot</p>
      </div>
    </div>
  );
};

export default EmptyScreen;
