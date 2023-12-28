import { useState, useEffect } from 'react';

export const useMediaState = (numbersList, mediaList, initialValue) => {
  const [value, setValue] = useState(initialValue || numbersList[0]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      // Find the index of the media screen stop that the screenWidth is greater than or equal to
      var index = Math.max(...mediaList.map((stop, i) => screenWidth >= stop ? i : -1));
      if(index >= numbersList.length) index = -1;

      const largestIndex = numbersList.length - 1;

      // Set the value based on the index
      setValue(numbersList[index !== -1 ? index : largestIndex] || numbersList[0]);
    };

    // Attach event listener on mount
    window.addEventListener('resize', handleResize);

    // Call handleResize once to set the initial value
    handleResize();

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [numbersList, mediaList, initialValue]);

  return [value, setValue];
};