import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
  const { t } = useTranslation('mainPage');

  return <div>{t('Main page')}</div>;
};

export default MainPage;
