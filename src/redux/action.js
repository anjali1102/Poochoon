import {
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_AMOUNT,
  CHANGE_TYPE,
  CHANGE_SCORE,
} from "./actionType";

export const CategoryChangeHandler = (payload) => ({
  type: CHANGE_CATEGORY,
  payload,
});

export const DifficultyChangeHandler = (payload) => ({
  type: CHANGE_DIFFICULTY,
  payload,
});

export const TypeChangeHandler = (payload) => ({
  type: CHANGE_TYPE,
  payload,
});

export const AmountChangeHandler = (payload) => ({
  type: CHANGE_AMOUNT,
  payload,
});

export const ScoreChangeHandler = (payload) => ({
  type: CHANGE_SCORE,
  payload,
});
