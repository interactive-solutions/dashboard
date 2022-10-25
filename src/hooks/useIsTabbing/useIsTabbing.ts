import { useState, useCallback } from 'react';

import { useEventListener } from '@entire.se/hooks';

export const useIsTabbing = (): boolean => {
  const className = 'is-tabbing';
  const [isTabbing, setIsTabbing] = useState(false);

  const handleKeydown = useCallback(
    ({ keyCode }: KeyboardEvent) => {
      if (keyCode === 9 && !isTabbing) {
        setIsTabbing(true);
        document.body?.classList.add(className);
      }
    },
    [isTabbing]
  );

  const handleMousedown = useCallback(() => {
    if (isTabbing) {
      setIsTabbing(false);
      document.body?.classList.remove(className);
    }
  }, [isTabbing]);

  useEventListener({
    type: 'keydown',
    listener: handleKeydown,
    options: { passive: true }
  });

  useEventListener({
    type: 'mousedown',
    listener: handleMousedown
  });

  return isTabbing;
};
