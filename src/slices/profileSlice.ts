import {createSlice} from '@reduxjs/toolkit';

const initialState: {state: ProfileSliceInterface} = {
  state: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    coutry: "",
    city: "",
    userType: "",
    profileImg: "",
    isVerifiedBvn: 0,
    isVerifiedEmail: 0,
    isVerifiedPhone: 0,
    balance: 0,
    savings: 0,
    totalBankTransfers: 0,
    totalWalletTransfers: 0,
    bankAmountTransfered: 0,
    walletAmountTransfered: 0,
    fetchedProfile: false,
  }
};

export const setProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.state = {...state.state, ...action.payload};
    },
  },
});

export const {setProfile} = setProfileSlice.actions;

export interface ProfileSliceInterface {
  firstName: string
  lastName: string
  email: string
  phone: string
  coutry: string
  city: string
  isVerifiedBvn: number
  isVerifiedEmail: number
  isVerifiedPhone: number
  balance: number
  savings: number
  profileImg: string,
  userType: string,
  totalBankTransfers: number
  totalWalletTransfers: number
  bankAmountTransfered: number
  walletAmountTransfered: number
  fetchedProfile: boolean,
}

export default setProfileSlice.reducer;
