import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCardsId } from "../../redux/cardMedichine/cardMedichine-selectors";
import MedicineProduct from "../MedicineProduct/MedicineProduct";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCardDetalis } from "../../redux/cardMedichine/cardMedichine-operations";

const MedicineProductDetail = () => {
  const { name } = useParams(); 
  const dispatch = useDispatch();
  const cardId = useCardsId();
  const navigate = useNavigate();

  useEffect(() => {
    if (name) { 
      dispatch(fetchCardDetalis(name));
    }
  }, [dispatch, name]);


  if (!cardId || cardId.length === 0) { 
    return <p>No details found for this product.</p>;
  }

  const cardDetalis = cardId[0];
  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>

      <MedicineProduct
        stock={cardDetalis.stock}
        name={cardDetalis.name}
        suppliers={cardDetalis.suppliers}
        photo={cardDetalis.photo}
      />
    </div>
  );
};

export default MedicineProductDetail;
