export const fadeIn = (direction,duration ,delay) => {
  return {
    offscreen: {
      y: direction === 'up' ? 70 : direction === 'down' ? -70 : 0, //changed from 80 to 50
      opacity: 0,
      x: direction === 'left' ? 70 : direction === 'right' ? -70 : 0, //changed from 80 to 50
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
  
export const flipX = () => {
  return {
    offscreen: { opacity: 0, scaleX: 0 },
    onscreen: {
      opacity: 1,
      scaleX: 1,
      transition: {
        type: 'tween',
        duration: 0.2,
        delay: 0.1,
				ease: [0.25, 0.5, 0.5, 0.75],
      },
    }
  }};

  export const zoomIn = ( duration, delay) => {
    return {
      hidden: {
        opacity: 0.3,
        scale: 0.5,
        transition: {
          type: 'tween',
          duration: duration,
          delay: delay,
          ease: [0.25, 0.6, 0.3, 0.8],
        },
      },
      show: {
        opacity: 1,
        scale: 1, 
        transition: {
          type: 'tween',
          duration: duration,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  
