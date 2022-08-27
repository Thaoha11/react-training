import styled from "styled-components";

const ProductItem = styled.div`
  width: 900px;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 325px;
  margin-bottom: 30px;
  margin-left: 79px;
`;

const ImageItem = styled.img`
  width: 170px;
  height: 215px;
`;
const InformationItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const NameItem = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: #0f1a42;
  text-transform: capitalize;
`;
const DescriptionItem = styled.p`
  font-size: 19px;
  font-weight: 600;
  text-transform: capitalize;
`;

const IconButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 170px;
`;

const ContentItem = styled.div`
  display: flex;
`;
export {
  ProductItem,
  Item,
  ImageItem,
  InformationItem,
  NameItem,
  DescriptionItem,
  IconButton,
  ContentItem,
};
