import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardMedichine/cardMedichine-reducer"
import cardsStoreReducer from "./cardStore/cardStore-reducer"
import authReducer from "./auth/auth-reducer"




const store = configureStore({
  reducer: {
    cards: cardReducer,
 cardsStore: cardsStoreReducer,
 auth:authReducer,
  },
});

export default store;

