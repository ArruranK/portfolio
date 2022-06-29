import React, { useState, useEffect, Suspense, lazy } from 'react';

const ThreeCanvas = lazy(() => import('./three-canvas'));

const ThreeLazy = ({isDark}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  

  return (
    <>
      {!isMounted || navigator?.connection?.saveData ? null : (
        <Suspense fallback={null}>
          <ThreeCanvas isDark = {isDark} />
        </Suspense>
      )}
    </>
  );
};

export default ThreeLazy;