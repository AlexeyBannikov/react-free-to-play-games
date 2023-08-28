import { createSlice } from '@reduxjs/toolkit';
import { fetchGame, fetchGames } from './asyncActions';
import { IGameSliceState, Status } from './types';

const initialState: IGameSliceState = {
  games: [],
  gamesStatus: Status.LOADING,
  currentGame: undefined,
  gameStatus: undefined,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //fetch all games
      .addCase(fetchGames.pending, (state) => {
        state.games = [];
        state.gamesStatus = Status.LOADING;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.games = action.payload;
        state.gamesStatus = Status.SUCCESS;
      })
      .addCase(fetchGames.rejected, (state) => {
        state.games = [];
        state.gamesStatus = Status.ERROR;
      })
      //fetch current game
      .addCase(fetchGame.pending, (state) => {
        state.currentGame = undefined;
        state.gameStatus = Status.LOADING;
      })
      .addCase(fetchGame.fulfilled, (state, action) => {
        state.currentGame = action.payload;
        state.gameStatus = Status.SUCCESS;
      })
      .addCase(fetchGame.rejected, (state) => {
        state.currentGame = undefined;
        state.gameStatus = Status.ERROR;
      });
  },
});

export default gameSlice.reducer;
