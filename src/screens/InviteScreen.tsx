
const InviteScreen = () => {
  return (
    <div className={'invite_wrapper'}>
      <div className={'title'}>
        Invite friends. <br />
        Earn rewards.
      </div>
      <div className={'invite_info'}>
        <div className={'invite_header'}>
          How it works
        </div>
        <div className={'invite_road'}>
          <div className={'road_left'}>
            <div className={'road_circle'}> </div>
            <div className={'road_line'}> </div>
            <div className={'road_circle'}> </div>
            <div className={'road_line'}> </div>
            <div className={'road_circle'}> </div>
          </div>
          <div className={'road_right'}>
            <div className={'road_item'}>
              <div className={'road_head'}>
                Share your invitation link
              </div>
              <div className={'road_value'}>
                Spread the crypto among friends
              </div>
            </div>
            <div className={'road_item'}>
              <div className={'road_head'}>
                Your friends join Simple Tap
              </div>
              <div className={'road_value'}>
                And start farming points
              </div>
            </div>
            <div className={'road_item last'}>
              <div className={'road_head'}>
                Earn 10% of the farming by friends
              </div>
              <div className={'road_value'}>
                Plus extra 5% from their referrals
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteScreen;
