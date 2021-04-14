import styled from 'styled-components';

const SignInButton = styled.button`
  margin: 10px;
  padding: 5px 16px;
  width: 250px;
  height: 62px;
  border-radius: 6px;
  border: 1px solid #e1e4e8;
  font-size: 24px;
  font-weight: bold;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
`;

export default SignInButton;
