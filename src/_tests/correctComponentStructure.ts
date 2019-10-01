import fs from 'fs';

function fileExists(p, name) {
  return (piece = 'tsx') =>
    fs.existsSync(p + '/' + name + '.' + piece);
}

export function correctComponentStructure(p, name, verbose = false) {
  const resolve = fileExists(p, name);

  if (verbose) {
    console.log('story: ', resolve('story.tsx'));
    console.log('style: ', resolve('style.ts'));
    console.log('types: ', resolve('types.ts'));
    console.log('test: ', resolve('test.ts'));
    console.log('component: ', resolve());
  }

  return (
    resolve('story.tsx') &&
    resolve('style.ts') &&
    // resolve('types.ts') &&
    resolve('test.ts') &&
    resolve()
  );
}
