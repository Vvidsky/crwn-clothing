import "./directory-item.styles.scss";
import React from "react";
import { useNavigate } from 'react-router-dom'
import { DirectoryItemContainer, BackgroundImage, Body, ItemHeader, ShopNow } from "./directory-item.styles";

export default function DirectoryItem({ category }) {
    const { title, imageUrl } = category;
    const navigate = useNavigate();

    const navigateHandler = () => navigate(`shop/${title}`);

  return (
    <DirectoryItemContainer onClick={navigateHandler}>
      <BackgroundImage
        imageUrl={imageUrl}
      />
      <Body>
        <ItemHeader>{title}</ItemHeader>
        <ShopNow>Shop Now</ShopNow>
      </Body>
    </DirectoryItemContainer>
  );
}
