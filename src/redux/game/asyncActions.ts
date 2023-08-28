import { http } from '@/api/config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { SearchGameParams, IGame } from './types';

export const fetchGames = createAsyncThunk<IGame[], SearchGameParams>(
  'game/fetchGamesStatus',
  async (params) => {
    const { platform, genre, sortBy } = params;
    let retryCount = 3;

    while (retryCount > 0) {
      try {
        const { data } = await http.get('/games', {
          params: { platform, category: genre, 'sort-by': sortBy },
        });

        return data;
      } catch (error) {
        retryCount--;
      }
    }
  }
);

export const fetchGame = createAsyncThunk<IGame, { id: number }>(
  'game/fetchGameStatus',
  async (params) => {
    const { id } = params;
    let retryCount = 3;

    while (retryCount > 0) {
      try {
        const { data } = await http.get('/game', {
          params: { id },
        });

        return data;
      } catch (error) {
        retryCount--;
      }
    }
  }
);
