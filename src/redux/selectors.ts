interface RootState {
  isAuth: boolean
}
export const authSelector = (state: RootState) => state.isAuth;
