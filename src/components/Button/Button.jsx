import styled from 'styled-components';

const Button = styled.a`
  background-image: linear-gradient(to left, var(--clr-accent-400), var(--clr-primary-400));
  padding: .75rem 2rem;
  font-size: 1rem;
  color: var(--clr-neutral-100);
  font-weight: var(--fw-bold);
  font-family: var(--ff-button);
  display: grid;
  place-items: center;
  width: fit-content;
  border-radius: 100vw;
  cursor: pointer;
`;

export default Button
