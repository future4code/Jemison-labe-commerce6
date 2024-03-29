import styled from "styled-components";

export const AsideCart = styled.aside`
    background-color: #F47E20;
    border: 4px solid #45525B;
    border-radius:20px;
    padding: 16px;
    border: 4px solid ;
   width:20%;
   height:40%;
    margin-bottom:20px;
    

`;

export const CardItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  font-family:'calibri';
  font-size:20px;
  font-weight:bolder;
  color: white;
`;

export const ProductName = styled.span`
  flex: 1;
  margin-left: 4px;
`;

export const RemoverBtn = styled.button`
border:none;
background:none;
`;
export const ImgBtnRemover = styled.img`
width:50px;

:hover{
  border: 2px solid black;
  border-radius:100%;
  width:46px;
  background-color:white ;
}
`;




