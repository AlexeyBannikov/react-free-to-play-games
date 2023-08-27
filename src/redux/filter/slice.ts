import {
  IFilterSliceState,
  IPlatformItem,
  PlatformPropertyEnum,
  SortPropertyEnum,
  ISortItem,
  GenrePropertyEnum,
  IGenreItem,
} from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IFilterSliceState = {
  currentPlatform: {
    name: 'All Platforms',
    platformProperty: PlatformPropertyEnum.ALL,
  },
  currentGenre: {
    name: 'All Genres',
    genreProperty: GenrePropertyEnum.ALL,
  },
  currentSort: {
    name: 'Relevance',
    sortProperty: SortPropertyEnum.RELEVANCE,
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCurrentPlatform(state, action: PayloadAction<IPlatformItem>) {
      state.currentPlatform = action.payload;
    },
    setCurrentGenre(state, action: PayloadAction<IGenreItem>) {
      state.currentGenre = action.payload;
    },
    setCurrentSort(state, action: PayloadAction<ISortItem>) {
      state.currentSort = action.payload;
    },
    setCurrentFilters(state, action: PayloadAction<IFilterSliceState>) {
      state.currentPlatform = action.payload.currentPlatform;
      state.currentGenre = action.payload.currentGenre;
      state.currentSort = action.payload.currentSort;
    },
  },
});

export const {
  setCurrentPlatform,
  setCurrentGenre,
  setCurrentSort,
  setCurrentFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
