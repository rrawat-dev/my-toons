import styled from 'styled-components';

const Filter = styled.div`
    background: transparent;
    border: 1px solid ${props => props.theme.offWhite};
    position: relative;
    display: block;
    margin-bottom: 20px;
    h3 {
        text-transform: uppercase;
        display:block;
        text-align:center;
    }
  ul {
    padding: 0 20px;
    list-style: none;
    li {
      font-size: 1.2rem;
      padding: 10px 0;
    }
    .checkbox-value {
      color: ${props => props.theme.terracotta};
      margin-left: 10px;
    }
  }
  }`;

export default Filter;