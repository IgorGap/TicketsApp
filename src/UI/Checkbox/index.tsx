import React, { type MouseEventHandler } from 'react';
import { CheckIcon } from '../../assets/icons';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface CheckboxProps {
  onChange: MouseEventHandler<HTMLDivElement>;
  isActive?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  onChange,
  isActive = false,
}) => {
  return (
    <div
      className={classNames(
        { [styles['checkbox--active']]: isActive },
        styles.checkbox
      )}
      onClick={onChange}
    >
      {isActive ? <CheckIcon width={10} height={10} fill="#fff" /> : null}
    </div>
  );
};
