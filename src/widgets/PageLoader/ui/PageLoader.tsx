import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { HamsterLoader } from 'shared/ui/HamsterLoader/HamsterLoader';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames(styles.pageLoader, {}, [className])}>
      <HamsterLoader />
    </div>
  );
};
