import React, { useCallback } from 'react';
import PutoButton from './components/PutoButton';
import ShareButtons from './components/ShareButtons';
import { createStorage, useStorageListener, setStorage, getStorage } from './utils/storage';

const App = () => {
  const [count, setCount] = createStorage('putoCount', 0);

  const handleButtonClick = useCallback(() => {
    const currentCount = getStorage('putoCount') || 0;
    setStorage('putoCount', currentCount + 1);
  }, []);

  useStorageListener('putoCount', (newValue) => {
    setCount(newValue);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">
        ¡Ayudá a que el mundo se entere que Uriel es alto puto!
      </h1>
      <div className="text-white text-3xl md:text-5xl font-mono mb-8 p-4 bg-black bg-opacity-50 rounded-lg shadow-xl">
        Contador Global: <span className="font-bold text-yellow-300">{count}</span>
      </div>
      <PutoButton text="Uriel alto puto" onButtonClick={handleButtonClick} />
      <ShareButtons />
    </div>
  );
};

export default App;
