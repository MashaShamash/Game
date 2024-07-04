import type { UserId } from '../../users/types/userTypes';

export type Game = {
  id: number;
  userId: UserId;
  gameStatus: boolean;
  point: number;
};

export type MovieId = Game['id'];
