import {createSlice} from "@reduxjs/toolkit";

interface AppState {
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
}

const init = {
    hasEmail: false,
    balance: 0,
    activeFarmingSeconds: 0,
    activeFarmingBalance: 0,
    activeFarmingPerSec: 0,
    maxFarmingSecondSec: 0,
    availableTaps: 0,
    tapSize: 0,
    addTapPerSecond: 0,
    maxAvailableTaps: 0,
    refUrlTg: '',
    refUrlCopy: '',
    inviteCount: 0,
    refBalance: 0,
    accr: 0,
    symbol: '',
}

const state: AppState = init

const initialState: AppState = state

const AppSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setBalance: (state, action) => {
            state.balance = action.payload;
        },
        setActiveFarmingSecond: (state, action) => {
            state.activeFarmingSeconds = action.payload;
        },
        setActiveFarmingBalance: (state, action) => {
            state.activeFarmingBalance = action.payload;
        },
        setActiveFarmingPerSec: (state, action) => {
            state.activeFarmingPerSec = action.payload;
        },
        setMaxFarmingSecondSec: (state, action) => {
            state.maxFarmingSecondSec = action.payload;
        },
        setAvailableTaps: (state, action) => {
            state.availableTaps = action.payload;
        },
        setTapSize: (state, action) => {
            state.tapSize = action.payload;
        },
        setAddTapPerSecond: (state, action) => {
            state.addTapPerSecond = action.payload;
        },
        setMaxAvailableTaps: (state, action) => {
            state.maxAvailableTaps = action.payload;
        },
        setRefUrlTg: (state, action) => {
            state.refUrlTg = action.payload;
        },
        setRefUrlCopy: (state, action) => {
            state.refUrlCopy = action.payload;
        },
        setInviteCount: (state, action) => {
            state.inviteCount = action.payload;
        },
        setRefBalance: (state, action) => {
            state.refBalance = action.payload;
        },
        setAccr: (state, action) => {
            state.accr = action.payload;
        },
        setSymbol: (state, action) => {
            state.symbol = action.payload;
        },

    }
})

export const {
    setBalance,
    setActiveFarmingSecond,
    setActiveFarmingBalance,
    setActiveFarmingPerSec,
    setMaxFarmingSecondSec,
    setAvailableTaps,
    setTapSize,
    setAddTapPerSecond,
    setMaxAvailableTaps,
    setRefUrlTg,
    setRefUrlCopy,
    setInviteCount,
    setRefBalance,
    setAccr,
    setSymbol,
} = AppSlice.actions
export default AppSlice.reducer;