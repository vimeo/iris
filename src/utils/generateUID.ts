/* tslint:disable */
// prettier-ignore
export const generateUID = () =>
  ('000' + ((Math.random() * 46656) | 0).toString(36)).slice(-3) +
  ('000' + ((new Date().getUTCMilliseconds() * 466.56) | 0).toString(36)).slice(-3);
