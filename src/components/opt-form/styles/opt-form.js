import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
  border-radius: 2em;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 500px;
  width: 100%;
  border: 1px solid rgb(140, 140, 140);
  border-radius: 2px 0 0 2px;
  padding: 10px;
  height: 70px;
  font-size: 16px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 1.625rem;
  border: 0;
  border-radius: 0 2px 2px 0;
  cursor: pointer;

  &:hover {
    background: #f40612;
  }

  @media only screen and (min-width: 1450px) {
    font-size: 1.875rem;
    min-height: 70px;
  }

  @media (max-width: 1000px) {
    min-height: 40px;
    margin-top: 20px;
  }

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 22px;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
