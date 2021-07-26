import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #65aef6;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    width: 50%;
    
    label {
        padding: 0.5rem 0;
        font-weight: 600;
    }

    input {
        padding: 0.5rem 0;
        border-radius: 0.5rem;
        outline: none;
        border: none;
    }
    select {
        margin-bottom: 1rem;
    }
    button {
        padding: 0.5rem 0;
        border-radius: 0.5rem;
        outline: none;
        border: none;
        margin-bottom: 1rem;
        font-weight: 600;
        background: 65aef6;
    }
  }
`;
