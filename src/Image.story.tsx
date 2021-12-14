import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { blue } from '../src/color';

export default { title: 'Image' };

export function ImageStory() {
  return (
    <>
      <Img src="https://i.vimeocdn.com/video/1147513349-cb9702b73274b7adfd614d50bff1c7069b3825048e683e35a2b0364b4f180549-d_472x266" />
      <Img src="https://i.vimeocdn.com/video/1325655366-d69d494982ee1a8d1fea22f4034aee9efe0c5b583911a0d116659f303bd0155c-d_295x166?r=pad" />
    </>
  );
}

function Img({ src }) {
  const [status, loading] = useFetchImage(src);
  console.log({ status, loading });

  return status !== '404' ? <img src={src} /> : <Placeholder />;
}

const Placeholder = styled.div`
  margin: 2rem 0;
  width: 472px;
  height: 266px;
  border: 2px solid ${blue(500)};
  color: ${blue(500)};
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;

  &:before {
    content: 'I can be anything!';
  }
`;

function useFetchImage(src) {
  const [status, statusSet] = useState(null);
  const [loading, loadingSet] = useState(true);

  useEffect(() => {
    async function fetchImage() {
      try {
        loadingSet(true);
        const response = await fetch(src);
        const status = response.headers.get('x-viewmaster-status');

        statusSet(status);
        loadingSet(false);
      } catch (error) {
        loadingSet(false);
      }
    }
    fetchImage();
  }, [src]);

  return [status, loading];
}
