import React from 'react'

const LoadingScreen = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-300 dark:bg-gray-800">
        <div className="animate-ping rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900 dark:border-gray-300"></div>
      </div>
    );
  };

export default LoadingScreen