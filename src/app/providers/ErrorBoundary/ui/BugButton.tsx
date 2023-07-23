import { FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

// Component for testing ErrorBoundary
export const BugButton: FC = () => {
  const [error, setError] = useState<boolean>(false);

  const activateError = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  // eslint-disable-next-line i18next/no-literal-string
  return <Button onClick={activateError}>Throw Error</Button>;
};
