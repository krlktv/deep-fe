import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation('notFoundPage');

  return <div className={classNames(styles.notFoundPage, {}, [className])}>{t('Not found')}</div>;
};

export default NotFoundPage;
