import React from "react";
import tw from "twin.macro";
import Header from "../components/Header/Header";
import styled from "styled-components";

const NavLinks = tw.div`inline-block`;
const Wrapper = styled.div`
  padding: 2rem;
`;
/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-blue-500 hocus:text-blue-500
`;

function DefaultLayout({ children }) {
  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink href="/videos">محاضرات</NavLink>
      <NavLink href="/about">من نحن</NavLink>
    </NavLinks>,
  ];
  return (
    <Wrapper>
      <Header links={defaultLinks} />

      {children}
    </Wrapper>
  );
}

export default DefaultLayout;
