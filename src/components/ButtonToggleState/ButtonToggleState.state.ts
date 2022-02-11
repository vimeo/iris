export const initialState = ({
  format,
  isActive,
  offIcon,
  offStateText,
  onIcon,
  onStateText,
}) =>
  isActive
    ? {
        children: onStateText,
        format: 'positive',
        icon: onIcon,
      }
    : {
        children: offStateText,
        format,
        icon: offIcon,
      };

export function reducer({
  format,
  offIcon,
  offStateText,
  onIcon,
  onStateText,
  turnOffActionText,
  turnOffIcon,
}) {
  return (state, action) => {
    switch (action) {
      case 'on':
        return {
          ...state,
          children: onStateText,
          format: 'positive',
          icon: onIcon,
        };
      case 'off':
        return {
          ...state,
          children: offStateText,
          format,
          icon: offIcon,
        };
      case 'hovering':
        return {
          ...state,
          children: turnOffActionText,
          format: 'secondary',
          icon: turnOffIcon,
        };
    }
  };
}
