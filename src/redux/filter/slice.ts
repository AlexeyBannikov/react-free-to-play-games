import {
  IFilterSliceState,
  IPlatformItem,
  PlatformPropertyEnum,
  SortPropertyEnum,
  ISortItem,
  IGenreItem,
} from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IFilterSliceState = {
  currentPlatform: {
    name: 'All Platforms',
    platformProperty: PlatformPropertyEnum.ALL,
  },
  currentGenre: {
    name: null,
    genreProperty: null,
  },
  currentSort: {
    name: 'Relevance',
    sortProperty: SortPropertyEnum.RELEVANCE,
  },
  currentPage: 1,
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
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
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
  setCurrentPage,
  setCurrentFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
