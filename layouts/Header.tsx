import React from 'react';
import {ScriptProps} from 'next/dist/client/script';
import Header from 'components/Header';
import Footer from 'components/Footer';
import LayoutContents from '../components/LayoutContents';

const HeaderLayout: React.FC<ScriptProps> = ({children}) => {
  return (
    <>
      <Header />
      <LayoutContents>{children}</LayoutContents>
      <Footer />
    </>
  );
};

export default HeaderLayout;