import { css } from 'styled-components';

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const heading = css`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const paragraph = css`
  font-size: 1.5rem;
  text-align: center;
`;

export default {
  container,
  heading,
  paragraph,
};
