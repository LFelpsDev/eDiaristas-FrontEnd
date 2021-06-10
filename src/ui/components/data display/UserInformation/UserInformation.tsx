import React from 'react';
import {
  UserInformationContainer,
  UserName,
  UserDescription,
  AvatarStyled,
  RatingStyled,
} from './UserInformation.style'

interface UserInformationProps {
  picture: string; //STRING por conta do caminho da foto
  name: string;
  rating: number;
  description?: string;
}

const UserInformation: React.FC<UserInformationProps> = ({
  name, picture, rating, description
}) => {
  return (
    <UserInformationContainer>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
      <UserName>{name}</UserName>
      <RatingStyled readOnly value={rating}/> {/* o readOnly quer dizer somente leitura */}
      <UserDescription>{description}</UserDescription>
    </UserInformationContainer>
  );
};

export default UserInformation;