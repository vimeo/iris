import React, { useRef } from 'react';
import styled from 'styled-components';

import { Dropzone } from '../Dropzone';

import { Header } from '../../../../typography';
import { UploadCloud, ChevronDownDouble } from '../../../../icons';
import { Button } from '../../../../components';
import { PopOver, Pop } from '../../../../layout';

export default { title: 'Components/Inputs/Dropzone/Examples' };

export function Upload() {
  const ref = useRef(null);

  return (
    <Dropzone
      ref={ref}
      style={{
        maxWidth: '40rem',
        height: '27rem',
        position: 'relative',
      }}
      onChange={(e) => {
        console.log(
          'File uploaded',
          e.target.files || e.dataTransfer.files,
          e
        );
      }}
    >
      <Container>
        <UploadCloud style={{ width: '5rem' }} />
        <Header>Drag and drop to upload</Header>
        <Button
          pill
          fluid
          size="xl"
          onClick={() => ref.current.click()}
        >
          Or choose a file
        </Button>
      </Container>

      <PopOver
        attach="top"
        content={
          <Pop.List>
            <Pop.Item>Dropbox</Pop.Item>
            <Pop.Item>FTP</Pop.Item>
          </Pop.List>
        }
      >
        <ActionButton
          size="sm"
          format="basic"
          variant="hyperminimal"
          onClick={(event) => event.stopPropagation()}
          iconPosition="action"
          icon={<ChevronDownDouble />}
        >
          More ways to upload
        </ActionButton>
      </PopOver>
    </Dropzone>
  );
}

const Container = styled.div`
  width: 20rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const ActionButton = styled(Button)`
  position: absolute;
  bottom: 0;
  z-index: 10;
`;
