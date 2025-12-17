import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FullOffer } from '../../types/offer';

type OffersState = {
  offers: FullOffer[];
  selectedCity: string;
  selectedOffer: FullOffer | null;
  isLoading: boolean;
};

const initialState: OffersState = {
  offers: [],
  selectedCity: 'Amsterdam',
  selectedOffer: null,
  isLoading: false,
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setOffers: (state, action: PayloadAction<FullOffer[]>) => {
      state.offers = action.payload;
    },
    setSelectedCity: (state, action: PayloadAction<string>) => {
      state.selectedCity = action.payload;
    },
    setSelectedOffer: (state, action: PayloadAction<FullOffer | null>) => {
      state.selectedOffer = action.payload;
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const offer = state.offers.find((o) => o.id === action.payload);
      if (offer) {
        offer.isFavorite = !offer.isFavorite;
      }
      if (state.selectedOffer?.id === action.payload) {
        state.selectedOffer.isFavorite = !state.selectedOffer.isFavorite;
      }
    },
  },
});

export const { setOffers, setSelectedCity, setSelectedOffer, toggleFavorite } = offersSlice.actions;
export const offersReducer = offersSlice.reducer;

