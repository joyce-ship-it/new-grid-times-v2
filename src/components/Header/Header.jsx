import React from "react";
import styled from "styled-components";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <DesktopAdd>
            <Logo></Logo>
          </DesktopAdd>
          <TabletActionGroup>
            <User size={24} />
          </TabletActionGroup>
          <DesktopRightAction>
            <Button>Subscribe</Button>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Already a subscriber ?
            </a>
          </DesktopRightAction>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media ${QUERIES.laptopAndUp} {
    background-color: var(--color-gray-100);
    color: var(--color-offblack);
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;
  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const DesktopAdd = styled.div`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`;

const TabletActionGroup = styled(ActionGroup)`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const DesktopRightAction = styled.div`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    gap: 8px;
    a {
      font-style: italic;
      text-decoration: underline;
    }
  }
`;
export default Header;
