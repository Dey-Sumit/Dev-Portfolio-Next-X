export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {},
  },
};

export const stagger = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const routeFade = {
    hidden: {
       opacity: 0,
    },
    visible: {
       opacity: 1,
       transition: {
          delay: 0.1,
          duration: 0.1,
       },
    },
    exit: {
       opacity: 0,
       transition: {
          delay: 0.1,
          ease: 'easeInOut',
       },
    },
 }