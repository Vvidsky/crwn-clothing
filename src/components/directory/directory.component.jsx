import React from 'react'
import CategoryItem from '../directory-item/directory-item.component'
import { DirectoryContainer } from './directory.styles';
// import "./directory.styles.scss";

export default function Directory( {categories} ) {

  return (
    <DirectoryContainer>
    {categories.map(( category ) => {
        return (
          <CategoryItem key={category.id} category={category} />
        );
      })}
    </DirectoryContainer>
  )
}
