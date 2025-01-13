import styled from "styled-components";
// style={{ width: "44px" }} fill={"#59B17A"}

export const HeaderWraperSection = styled.header`




  padding: 20px;
  text-align: center;
  color: white;
`;

export const HeaderWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 28px;
  padding-bottom: 28px;
`;

export const Logo = styled.div`
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  display: flex;
  align-items: center;
  gap: 14px;

`;

export const ButtonHeader = styled.div`
  border-radius: 60px;
  background: white;
  color: rgb(147, 147, 154);
  padding: 16px 29px;
`;
export const ActiveButtonHeader = styled.div`
  border-radius: 24px;
  background: rgb(89, 177, 122);
  padding: 16px 32px;

  color: white;
`;

export const ButtonHeaderWraper = styled.div`
  border-radius: 60px;
  background: white;
  color: rgb(147, 147, 154);
  font-size: 14px;
  font-weight: 400;
  border: 1px solid rgb(217, 217, 217);
  padding: 8px;
`;

export const HeaderList = styled.ul`
  display: flex;
  gap: 8px;
`;

export const HeaderListItem = styled.li``;

export const HeaderListAyth = styled.ul`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const HeaderListAythButtonRegiste = styled.button`
  box-sizing: border-box;
  border: 1px solid rgba(241, 241, 241, 0.5);
  border-radius: 60px;

  color: rgb(241, 241, 241);
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0%;
  padding: 16px 32px;
`;

export const HeaderListAythButtonLogin = styled.button`
  color: rgb(241, 241, 241);
  font-size: 14px;
  font-weight: 400;
  line-height: 100%;
`;

export const PromoSectionWrapper = styled.div`
  background: rgb(89, 177, 122);
  padding: 40px;
  border-radius: 32px;
  display: flex;
  margin-bottom: 64px;
`;

export const PromoSectionWrapperTitle = styled.div`
  max-width: 501px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
`;
export const PromoSectionTitle = styled.h2`
  color: rgb(241, 241, 241);
  font-size: 48px;
  font-weight: 600;
  line-height: 55px;
  margin-bottom: 30px;
`;

export const PromoSectionImg = styled.img`
max-width: 100%;
height: auto;
@media (max-width: 768px) { width: 633px; }
`;

export const PromoSectionDescr = styled.p`
  color: rgb(241, 241, 241);
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;