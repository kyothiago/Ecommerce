import styled from "styled-components";
export const Button = styled.button`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  ${props => props.primary`
    background: white;
    color: black;
  `}
  `

export const Content = styled.section`
  display: flex;

  div {
    width: 50%;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2 {
      margin-bottom: 2rem;
    }

    table {
      width: 100%;
      thead {
        background-color: rgba("#343a40", 0.2);
        tr,
        th {
          background: #ccc;
          padding: 0.4;
          text-align: center;
        }
      }

      tbody {
        tr,
        td {
          background: #ccc;
          transition: all 0.6s cubic-bezier(0.2, 1, 0.22, 1);
        }
        td {
          text-align: center;
          padding: 0.5rem;
          font-size: 0.9rem;
        }
        tr {
          &:hover {
            background-color: rgba("#343a40", 0.3);
          }
          &:nth-child(even) {
            background-color: rgba("#343a40", 0.1);
            &:hover {
              background-color: rgba("#343a40", 0.4);
            }
          }
        }
      }
    }
  }
`;
