export default { title: 'Image' };

export function ImageStory() {
  return (
    <Img src="https://i.vimeocdn.com/video/330051511313_288x288" />
  );
}

function Img({ src }) {
  const ImageData = new Image();
  ImageData.src = src;
  console.dir({ ImageData });

  loadImage(src);

  return <img src={src} />;
}

async function loadImage(src) {
  // const headers = { etag: '3f79bb6f12fe2e5e1226b4f1a1a819e4' };
  console.log('\n\n');

  const response = await fetch(src, {
    method: 'GET',
    // cache: 'no-cache',
    // headers,
  });

  // .then((data) => {
  //   console.log('\n', { data });
  //   for (const pair of data.headers.entries()) {
  //     console.log(pair[0] + ': ' + pair[1]);
  //   }
  // });

  for (const [key, value] of response.headers) {
    console.log(`${key} = ${value}`);
  }

  const length = response.headers.get('content-length');
  const type = response.headers.get('content-type');
  const test = response.headers.get('x-viewmaster-lossless-format');
  console.log({ test });

  if (length === '23568' && type === 'image/jpeg') {
    console.log('default!');
  } else {
    console.log('not default!');
  }

  // return data;
}
