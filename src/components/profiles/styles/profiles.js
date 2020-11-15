import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

export const Title = styled.h1`
  width: 100%;
  color: white;
  font-size: 3.5vw;
  text-align: center;
  font-weight: 500;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

export const Picture = styled.img`
  height: 10vw;
  width: 10vw;
  max-height: 200px;
  max-width: 200px;
  min-height: 84px;
  min-width: 84px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  text-decoration: none;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  background-color: #333;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  border: 3px solid black;
  cursor: pointer;
`;

export const Name = styled.p`
  font-size: 1.3vw;
  line-height: 1.2em;
  min-height: 1.8em;
  color: grey;
  display: block;
  text-align: center;
  font-size: 1.3vw;
  margin: 0.6em 0;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    color: #e5e5e5;
  }

  @media (min-width: 1666px) {
    font-size: 24px;
  }
`;

export const Item = styled.li`
  width: 10vw;
  max-width: 200px;
  min-width: 84px;
  list-style-type: none;
  text-align: center;

  &:not(:last-child) {
    margin-right: 2vw;
  }

  &:hover > ${Picture} {
    border: 3px solid #e5e5e5;
  }

  &:hover > ${Name} {
    font-weight: bold;
    color: #e5e5e5;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
