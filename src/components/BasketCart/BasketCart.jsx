import React from "react";
import { Container } from "../Container/container.styled";
import styled from "styled-components";

const BasketCart = () => {
  const SubmitButton = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      payment: formData.get('payment'),
    };
    console.log('Form data:', data);
    // Здесь можно добавить обработку данных (отправка на сервер и т.д.)
  };

  return (
    <Container style={{ marginTop: "20px", marginBottom: "20px" }}>
      <BasketCartTitle>Card</BasketCartTitle>

      <BasketPaymentCardWrapper onSubmit={SubmitButton}>
        <BasketPaymentCardTitle>Enter shipping info </BasketPaymentCardTitle>
        <BasketPaymentCardSubtitle>
          Enter your delivery address where you get the product. You can also
          send any other location where you send the products.
        </BasketPaymentCardSubtitle>
        <BasketPaymentCardInputList>
          <BasketPaymentCardInputItem>
            <BasketPaymentCardInputItemTitle>
              Name
            </BasketPaymentCardInputItemTitle>
            <BasketPaymentCardInput type="text" name="name" placeholder="Enter your name" required />
          </BasketPaymentCardInputItem>

          <BasketPaymentCardInputItem>
            <BasketPaymentCardInputItemTitle>
              Email
            </BasketPaymentCardInputItemTitle>
            <BasketPaymentCardInput type="email" name="email" placeholder="Enter your email" required />
          </BasketPaymentCardInputItem>

          <BasketPaymentCardInputItem>
            <BasketPaymentCardInputItemTitle>
              Phone
            </BasketPaymentCardInputItemTitle>
            <BasketPaymentCardInput type="tel" name="phone" placeholder="Enter your phone" required />
          </BasketPaymentCardInputItem>

          <BasketPaymentCardInputItem>
            <BasketPaymentCardInputItemTitle>
              Address
            </BasketPaymentCardInputItemTitle>
            <BasketPaymentCardInput type="text" name="address" placeholder="Enter your address" required />
          </BasketPaymentCardInputItem>
        </BasketPaymentCardInputList>
        <BasketPaymentCardLines />
        <BasketPaymentCardTitle style={{ marginTop: "40px" }}>
          Payment method
        </BasketPaymentCardTitle>
        <BasketPaymentCardSubtitle>
          You can pay us in a multiple way in our payment gateway system.
        </BasketPaymentCardSubtitle>

        <BasketPaymentCardInputRadioList>
          <BasketPaymentCardInputRadioListItem>
            <BasketPaymentCardInputRadio
              type="radio"
              name="payment"
              value="cash"
              required
            />
            <BasketPaymentCardInputRadioLabel htmlFor="cash">
              Cash On Delivery
            </BasketPaymentCardInputRadioLabel>
          </BasketPaymentCardInputRadioListItem>

          <BasketPaymentCardInputRadioListItem>
            <BasketPaymentCardInputRadio
              type="radio"
              name="payment"
              value="bank"
              required
            />
            <BasketPaymentCardInputRadioLabel htmlFor="bank">
              Bank
            </BasketPaymentCardInputRadioLabel>
          </BasketPaymentCardInputRadioListItem>
        </BasketPaymentCardInputRadioList>
        <BasketPaymentCardSubmit type="submit">Submit</BasketPaymentCardSubmit>
      </BasketPaymentCardWrapper>
    </Container>
  );
};

export default BasketCart;

export const BasketPaymentCardInputRadio = styled.input`
  display: flex;
`;
export const BasketPaymentCardInputRadioLabel = styled.label`
  display: flex;
  color: rgb(29, 30, 33);
font-family: Inter;
font-size: 14px;
font-weight: 400;
line-height: 18px;
letter-spacing: 0px;
text-align: left;
`;

export const BasketPaymentCardInputRadioList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 21px;
`;
export const BasketPaymentCardInputRadioListItem = styled.li`
  display: flex;
`;

export const BasketPaymentCardInputList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 20px;
  margin-bottom: 40px;
`;
export const BasketPaymentCardInputItem = styled.li``;
export const BasketPaymentCardInputItemTitle = styled.p`
  margin-bottom: 8px;
  margin-left: 20px;
  color: rgb(29, 30, 33);
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  text-align: left;
`;
export const BasketPaymentCardInput = styled.input`
  box-sizing: border-box;
  border: 1px solid rgba(29, 30, 33, 0.2);
  border-radius: 60px;
  height: 44px;
  color: rgba(29, 30, 33, 0.6);
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  padding-left: 20px;
  width: 260px;
`;

export const BasketPaymentCardWrapper = styled.form`
  border-radius: 27px;
  background: rgb(255, 255, 255);
  padding: 40px;
  max-width: 630px;
`;

export const BasketPaymentCardSubmit = styled.button``;
export const BasketPaymentCardLines = styled.div`
  border: 1px solid rgba(29, 30, 33, 0.1);
`;

export const BasketPaymentCardTitle = styled.h2`
  color: rgb(29, 30, 33);
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 14px;
`;

export const BasketPaymentCardSubtitle = styled.p`
  color: rgb(106, 106, 111);
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;

export const BasketCartTitle = styled.h1`
  color: rgb(29, 30, 33);
  font-family: Inter;
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 40px;
`;
