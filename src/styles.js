import styled from "styled-components";

export const PageWrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 48px;
  align-items: center;
`;

export const ItemWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  height: 96px;
  padding: 16px;
  background: #f8f8fa;
  transition: all 0.15s ease;
  border-bottom: 1px solid #efeef3;
  display: flex;
  align-items: center;
  &:hover {
    border-bottom-color: white;
    border-radius: 4px;
    box-shadow: 0 25px 25px -5px rgba(0, 0, 0, 0.08),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    background: #ffffff;
    transform: scale(1.01);
  }
`;

export const NameAndRatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

export const DeleteButton = styled.button`
  background: white;
  border: 1px solid red;
  border-radius: 4px;
  height: 32px;
  color: #e53e3e;
  font-weight: 600;
  font-size: 16px;
  padding: 0 16px;
  cursor: pointer;
  margin-left: auto;
  transition: all 0.2s ease;
  outline: none;
  &:hover {
    background: #e53e3e;
    color: white;
  }
  &:focus,
  &:active {
    box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.5);
  }
`;

export const Search = styled.input.attrs(props => ({
  type: "search",
  placeholder: "Search..."
}))`
  max-width: 600px;
  font-size: 1.4rem;
  padding: 0 16px;
  height: 50px;
  border-radius: 4px;
  border: 1px solid #e2e8f0;
  width: 100%;
  outline: none;
  font-weight: 600;
  margin-bottom: 100px;
  &::placeholder {
    color: #a4adb6;
  }
  &:active,
  &:focus {
    box-shadow: 0 0 0 3px rgba(66, 153, 255, 0.5);
  }
`;

export const Title = styled.h1`
  margin-top: 100px;
  margin-bottom: 40px;
  font-size: 2.4rem;
  font-weight: 700;
`;

export const Picture = styled.div`
  width: 60px;
  height: 60px;
  background-image: url(${props => props.image});
  border-radius: 4px;
`;
