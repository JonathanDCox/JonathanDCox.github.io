import React from 'react';
import styles from './styles';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Hello, World!</h1>
      <p className={styles.paragraph}>This is a TypeScript React app.</p>
    </div>
  );
};

export default Home;
