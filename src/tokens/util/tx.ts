import { Mode } from './readToken';

export function tx(theme: Mode, token: any) {
  return token({ theme });
}
