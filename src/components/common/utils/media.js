export const mobileBreakPoint = 768 - 1;
export const breakpoints = {
  'xl': 1600,
  'lg': 1200,
  'md': 992,
  'sm': 768,
  'xs': 576,
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
      style[`@media (max-width: ${breakpoints[b] - 1}px)`] = styleProperties;
    }
  });

  return style;
};
