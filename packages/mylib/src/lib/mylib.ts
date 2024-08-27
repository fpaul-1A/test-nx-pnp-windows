import * as semver from 'semver';

export function mylib() {
  return new semver.Range('~1.2.3');
}
