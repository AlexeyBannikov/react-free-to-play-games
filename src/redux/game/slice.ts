import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchGame, fetchGames } from './asyncActions';
import { IGame, IGameSliceState, Status } from './types';

const initialState: IGameSliceState = {
  games: [],
  gamesStatus: Status.LOADING,
  currentGame: null,
  gameStatus: null,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setCurrentGame(state, action: PayloadAction<IGame>) {
      state.currentGame = action.payload;
    },
    setGameStatus(state, action: PayloadAction<Status>) {
      state.gameStatus = action.payload;
    },
  },
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
        state.gameStatus = Status.LOADING;
      })
      .addCase(fetchGame.fulfilled, (state, action) => {
        state.currentGame = action.payload;
        state.gameStatus = Status.SUCCESS;
      })
      .addCase(fetchGame.rejected, (state) => {
        state.gameStatus = Status.ERROR;
      });
  },
});

export const { setCurrentGame, setGameStatus } = gameSlice.actions;

export default gameSlice.reducer;
