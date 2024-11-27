import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "../models/User";
import { getUsers } from "../api/getUsers";

interface UserListState {
  users: UserModel[];
  isLoading: boolean;
}

const initialState: UserListState = {
  users: [],
  isLoading: true,
};

export const fetchUsers = createAsyncThunk("users/getAll", async () => {
  return getUsers();
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    toggleLike(state, action: PayloadAction<UserModel>) {
      const { id } = action.payload;

      const likeUser = state.users.find((user) => user.id === id);
      if (likeUser) {
        likeUser.isLiked = !likeUser.isLiked;
      }
    },

    removeUser(state, action: PayloadAction<UserModel>) {
      const { id } = action.payload;

      state.users = state.users.filter((user) => user.id !== id);
    },
  },
  selectors: {
    selectUsers: (sliceState) => {
      return sliceState.users;
    },
    selectIsLoading: (sliceState) => {
      return sliceState.isLoading;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (sliceState) => {
        sliceState.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (sliceState, action) => {
        sliceState.isLoading = false;
        sliceState.users = action.payload;
      });
  },
});

export const { toggleLike, removeUser } = usersSlice.actions;
export const { selectUsers, selectIsLoading } = usersSlice.selectors;

export default usersSlice.reducer;
