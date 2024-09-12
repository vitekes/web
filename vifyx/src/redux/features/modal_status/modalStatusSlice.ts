import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IModalState {
  isOpen: boolean;
}

export interface IModalWindows {
  modals: {
    [key: string]: IModalState;
  };
}

const initialState: IModalWindows = {
  modals: {
    register: { isOpen: false },
    login: { isOpen: false },
    menu_sidebar: { isOpen: false },
  },
};

export const ModalWindowsSlice = createSlice({
  name: "modalWindows",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      
      const modal = state.modals[action.payload];
      if (modal) {
        state.modals[action.payload].isOpen = true;
      }
    },
    closeModal: (state, action: PayloadAction<string>) => {
      const modal = state.modals[action.payload];
      if (modal) {
        state.modals[action.payload].isOpen = false;
      }
    },
  },
});

export const { openModal, closeModal } = ModalWindowsSlice.actions;

export default ModalWindowsSlice.reducer;
