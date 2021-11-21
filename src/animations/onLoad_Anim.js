export const titleAnim = {
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "linear",
      type: "spring",
      delay: 0.5,
    },
  },
};

export const buttonTitleAnim = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      // stiffness: 100,
      ease: "linear",
      delay: 1.3,
    },
  },
};
