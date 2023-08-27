import { http } from '@/api/config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { SearchGameParams, TGame } from './types';

export const fetchGames = createAsyncThunk<TGame[], SearchGameParams>(
  'game/fetchGamesStatus',
  async (params) => {
    const { platform, genre, sortBy } = params;

    const { data } = await http.get('/games', {
      params: { platform, category: genre, 'sort-by': sortBy },
    });

    return data;
  }
);