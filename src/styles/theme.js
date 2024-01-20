const sizes = {
  onlymobile: '374px',
  mobile: '375px',
  tablet: '768px',
  desktop: '1200px',
  notdesktop: '1199px',
};

export const theme = Object.freeze({
  dark: {
    colors: {
      // header: 'rgba(31, 31, 31, 0.9)',
      header: 'rgba(60, 179, 113, 0.9)',
      headerHover: 'rgba(34, 139, 34)',
    },
  },
  light: {
    colors: {
      header: 'rgba(255, 255, 255, 0.9)',
    },
  },
  green: {
    colors: {
      header: 'rgba(255, 255, 255, 0.9)',
    },
  },
  yellow: {
    colors: {
      header: 'rgba(255, 255, 255, 0.9)',
    },
  },
});

export const devices = {
  onlymobile: `max-width: ${sizes.onlymobile}`,
  mobile: `min-width: ${sizes.mobile}`,
  tablet: `min-width: ${sizes.tablet}`,
  desktop: `min-width: ${sizes.desktop}`,
  notdesktop: `max-width: ${sizes.notdesktop}`,
  retina: 'min-device-pixel-ratio: 2',
};

export const baseTransition = '250ms cubic-bezier(0.4, 0, 0.2, 1)';
