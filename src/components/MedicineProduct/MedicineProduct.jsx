import { TiThMenuOutline } from "react-icons/ti";
import { MedicineProductCardItem, MedicineProductCardItemButtonDetalis, MedicineProductCardItemButtonDetalisWrapper, MedicineProductCardItemDecr, MedicineProductCardItemDescWrapper, MedicineProductCardItemDescWrapperTabl, MedicineProductCardItemName, MedicineProductCardItemPhoto, MedicineProductCardItemTabl } from './MedicineProduct.styled';
import shopErrorImg from "../../img/shoperror.jpg"
import {MedicineStoreCardButton} from "../PromoBanners/PromoBanners.styled"
import styled from "styled-components";
const MedicineProduct = (props) => {


  return (
    <MedicineProductCardItem>

 <MedicineProductCardItemPhoto src={props.photo} width={"20px"}/>
  


<MedicineProductCardItemDescWrapper>


<MedicineProductCardItemDescWrapperTabl>
<div>
<MedicineProductCardItemName>{props.name}</MedicineProductCardItemName>
<MedicineProductCardItemDecr>{props.suppliers}</MedicineProductCardItemDecr>
</div>
<MedicineProductCardItemTabl><TiThMenuOutline />{props.stock}</MedicineProductCardItemTabl>
</MedicineProductCardItemDescWrapperTabl>
<MedicineProductCardItemButtonDetalisWrapper>
<MedicineStoreCardButton>Add to cart</MedicineStoreCardButton>
<MedicineProductCardItemButtonDetalis onClick={props.onClick}>Details</MedicineProductCardItemButtonDetalis>
</MedicineProductCardItemButtonDetalisWrapper>
</MedicineProductCardItemDescWrapper>
   

    </MedicineProductCardItem>
  )
}

export default MedicineProduct








