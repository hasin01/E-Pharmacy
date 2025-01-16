import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardMedichine/cardMedichine-reducer"
import cardsStoreReducer from "./cardStore/cardStore-reducer"



const store = configureStore({
  reducer: {
    cards: cardReducer,
 cardsStore: cardsStoreReducer,
  },
});

export default store;

