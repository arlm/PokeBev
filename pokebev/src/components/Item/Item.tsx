import React from 'react';
import styles from './Item.module.css';

const Item = () => (
  <div className={styles.Item} data-testid="Item">
    Item Component
  </div>
);

export default Item;
