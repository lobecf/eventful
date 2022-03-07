import styled from "styled-components";

function Error({ children }) {
  return (
    <Wrapper>
      <Alert>!</Alert>
      <Message>{children}</Message>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: red;
  background-color: mistyrose;
  border-radius: 20px;
  width: 300px;
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 8px;
  margin: auto;
`;

const Alert = styled.span`
  background-color: white;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  font-weight: bold;
  display: grid;
  place-content: center;
`;

const Message = styled.p`
  font-family: 'Quicksand', sans-serif;
  margin: 0;
`;

export default Error;
