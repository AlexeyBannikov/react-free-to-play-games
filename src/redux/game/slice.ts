import { createSlice } from '@reduxjs/toolkit';
import { fetchGames } from './asyncActions';
import { IGameSliceState, Status } from './types';

const initialState: IGameSliceState = {
  items: [],
  status: Status.LOADING,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGames.pending, (state) => {
      state.items = [];
      state.status = Status.LOADING;
    });
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchGames.rejected, (state) => {
      state.items = [];
      state.status = Status.ERROR;
    });
  },
});

export default gameSlice.reducer;
