import { TiThMenuOutline } from "react-icons/ti";

import {MedicineStoreCardButton} from "../PromoBanners/PromoBanners.styled"
import PropTypes from 'prop-types';
import { MedicineProductCardItemButtonDetalisWrapperDetalis, MedicineProductCardItemDecrDetalis, MedicineProductCardItemDescWrapperDetalis, MedicineProductCardItemDescWrapperTablDetalis, MedicineProductCardItemDetalis, MedicineProductCardItemNameDetalis, MedicineProductCardItemPhotoDetalis, MedicineProductCardItemTablDetalis } from "./CardDetalis.styled";
import ProductChecker from "../ProductChecker/ProductChecker";
import { useState } from "react";
const CardDetalis = (props) => {
  
  const [count, setCount] = useState(1);
  const increment =()=>{
    setCount(count+1)
  }
  const decrement =()=>{
    if(count==0){
      return
    }
    setCount(count-1)

  }





  return (
    <MedicineProductCardItemDetalis>
      <MedicineProductCardItemPhotoDetalis src={props.photo} width={"20px"} />
      <MedicineProductCardItemDescWrapperDetalis>
        <MedicineProductCardItemDescWrapperTablDetalis>
          <div>
            <MedicineProductCardItemNameDetalis>{props.name}</MedicineProductCardItemNameDetalis>
            <MedicineProductCardItemDecrDetalis>{props.suppliers}</MedicineProductCardItemDecrDetalis>
          </div>
          <MedicineProductCardItemTablDetalis><TiThMenuOutline />{props.stock}</MedicineProductCardItemTablDetalis>
        </MedicineProductCardItemDescWrapperTablDetalis>
        <MedicineProductCardItemButtonDetalisWrapperDetalis>
        <ProductChecker count={count} increment={increment} decrement={decrement}/>

          <MedicineStoreCardButton style={{padding:"14px 30px 14px 30px", borderRadius: "60px"}}>Add to cart</MedicineStoreCardButton>
        </MedicineProductCardItemButtonDetalisWrapperDetalis>
      </MedicineProductCardItemDescWrapperDetalis>
    </MedicineProductCardItemDetalis>
  );
}

CardDetalis.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  suppliers: PropTypes.string.isRequired,
  stock: PropTypes.string.isRequired,
};

export default CardDetalis








