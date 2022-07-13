/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from 'styled-components';
import { Theme } from '../types';
import SearchForm from './SearchForm';

const Home = () => {
  return (
    <HomeContainer>
      <SearchForm />
    </HomeContainer>
  );
};

export default Home;

interface Props {
  theme: Theme;
}

const HomeContainer = styled.div<Props>`
  background-color: ${props => props.theme.main};
  overflow-y: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;