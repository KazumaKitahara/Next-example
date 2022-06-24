import React from 'react';
import {ScriptProps} from 'next/dist/client/script';
import styles from './Contents.module.scss';

const LayoutContents: React.FC<ScriptProps>  = ({children}) => {
  return (
    <main className={styles.contents}>{children}</main>
  );
};

export default LayoutContents;