import { http } from '@/api/config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { SearchGameParams, TGame } from './types';

export const fetchGames = createAsyncThunk<TGame[], SearchGameParams>(
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
