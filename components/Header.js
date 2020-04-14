import styled from 'styled-components';
import Link from 'next/link';
import Search from './Search';
import Sorting from './Sorting';

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: none;
    color: ${props => props.theme.blue};
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  .bar {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  }
`;

const Header = () => (
    <StyledHeader>
      <div className="bar">
        <Logo>
          <Link href="/">
            <a>My Toons</a>
          </Link>
        </Logo>
      </div>
      <div className="sub-bar">
        <Search />
        <Sorting />
      </div>
    </StyledHeader>
  );

export default Header;