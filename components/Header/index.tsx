import styles from './Header.module.scss';
import Image from 'next/image';

const Header = () => {

  return (
    <div className={styles.header}>
      <div className={styles.header__title}>
        <Image src="/next.png" width={55} height={30} alt="logo"/>
      </div>
    </div>
  );
};

export default Header;