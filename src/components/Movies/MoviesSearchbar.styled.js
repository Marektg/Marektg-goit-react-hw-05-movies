import styled from "styled-components";

export const SearchbarWrapper = styled.div`
  padding: 10px 20px;
`;

export const Searchbar = styled.form`
  display: grid;
  grid-template-columns: minmax(50px, 1fr) 80px;
  grid-template-areas: "searchbar searchbtn";
  margin: 0 auto;
  border: 1px solid grey;
  border-radius: 10px;
  overflow: hidden;
  @media (min-width: 576px) {
    grid-template-columns: 450px 80px;
    width: max-content;
  }
  & input {
    grid-area: searchbar;
    padding: 5px 10px;
    outline: none;
    border: none;
    font-size: 18px;
    line-height: 1.2;
  }
  & button {
    display: inline-block;
    width: 80px;
    height: 48px;
    border: 0;
    background-image: url('./Icon/search.svg');
    background-size: 30%;
    background-repeat: no-repeat;
    background-position: 5px;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
  
    &:hover {
      opacity: 1;
    }
    & p {
    size: 22px;
    width: 100px;
    height: 100%;
    padding: 0;
    overflow: hidden;
    letter-spacing: 1px;
    font-weight: 300;
    border: 0;
    }
  }
  &:focus-within {
    box-shadow: -1px -1px 3px 1px black, 1px 1px 3px 1px black;
  }
`;