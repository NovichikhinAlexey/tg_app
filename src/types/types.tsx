export interface ProfileRequest {
  userId: number,
  authData: string,
}

export interface ProfileResponse {
  data: {
    hasEmail: boolean,
    balance: number,
    activeFarmingSeconds: number,
    activeFarmingBalance: number,
    activeFarmingPerSec: number,
    maxFarmingSecondSec: number,
    availableTaps: number,
    tapSize: number,
    addTapPerSecond: number,
    maxAvailableTaps: number,
    refUrlTg: string,
    refUrlCopy: string,
    inviteCount: number,
    refBalance: number,
    accr: number,
    symbol: string,
  },
}

export interface RegisterRequest {
  userId: number,
  authData: string,
  email: string,
  refCode: string
}

export interface TapRequest {
  userId: number,
  authData: string,
  count: number,
}

export interface ActivateRequest {
  userId: number,
  authData: string,
}
