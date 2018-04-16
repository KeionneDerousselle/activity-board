export const mobileBreakPoint = 768 - 1;
export const breakpoints = {
  'xs': 575,
  'sm': 576,
  'md': 768,
  'lg': 992,
  'xl': 1200,
  'xxl': 1600,
};

export const createMediaQueryStyles = (values, properties) => {
  const style = {};
  Object.keys(breakpoints).forEach(b => {
    if (values[b]) {
      const styleProperties = {};
      properties.forEach(p => {
        if (typeof p === 'string') {
          styleProperties[p] = values[b];
        } else {
          if(p.property) {
            styleProperties[p.property] = p.modifer(values[b]);
          } else if(p.properties) {
            p.properties.forEach(n => {
              styleProperties[n] = p.modifer(values[b]);
            });
          }
        }
      });

      const mediaQuery = (b === 'xs') ? 'max-width' : 'min-width';
      style[`@media (${mediaQuery}: ${breakpoints[b]}px)`] = styleProperties; 
    }
  });

  return style;
};
