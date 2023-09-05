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
      background: '#1F1F1F', //Background color
      sideBar: '#121212', //Sidebar color
      sideBarMainText: '#fff', //Sidebar color text main
      header: 'rgba(22, 255, 255, 0.9)',
    },
  },
  light: {
    colors: {
      background: '#F6F6F7', //Background color
      sideBar: '#fff', //Sidebar color
      sideBarMainText: '#161616', //Sidebar color text main
      header: 'rgba(255, 255, 255, 0.9)',
    },
  },
  green: {
    colors: {
      background: '#ECEDFD', //Background color
      sideBar: '#5255BC', //Sidebar color
      sideBarMainText: '#fff', //Sidebar color text main
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
