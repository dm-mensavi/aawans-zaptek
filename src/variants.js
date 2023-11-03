export const fadeIn = (direction,duration ,delay) => {
  return {
    offscreen: {
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0, //changed from 80 to 50
      opacity: 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0, //changed from 80 to 50
      transition: {
        type: 'tween',
        duration: duration,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    onscreen: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: duration,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  }};
