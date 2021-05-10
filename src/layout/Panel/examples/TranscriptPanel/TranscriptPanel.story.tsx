import React, { useEffect, useLayoutEffect, useState } from 'react';

import { TranscriptPanel } from './TranscriptPanel';
import { mockTranscriptSegments, secondsToMinutes } from './util';

import { Button, Input } from '../../../../components';

export default {
  title: 'layout/Panel/examples/TranscriptPanel',
};

const data = mockTranscriptSegments(5000);

export function TranscriptPanelStory() {
  return <Test />;
}
TranscriptPanelStory.storyName = 'TranscriptPanel';

function Test() {
  const [currentTime, currentTimeSet] = useState(0);
  const [active, activeSet] = useState(true);
  const [width, widthSet] = useState(0);

  useLayoutEffect(() => {
    const element = document.body;

    const observer = new ResizeObserver((entries) => {
      const { blockSize, inlineSize } = entries[0].borderBoxSize[0];

      const listSize = { height: blockSize, width: inlineSize };

      if (width !== listSize.width) widthSet(listSize.width - 64);
    });

    observer.observe(element);
    return () => observer.unobserve(element);
    //
  }, [width]);

  // const [player, playerSet] = useState();
  function updateTime(seconds) {
    if (currentTime !== seconds) {
      currentTimeSet(seconds);
    }
  }

  useEffect(() => {
    const iframe = document.getElementById('TranscriptPanelPlayer');
    // @ts-ignore
    const player = new Vimeo.Player(iframe);
    // playerSet(player);

    const checkCurrentTime = setInterval(() => {
      player?.getCurrentTime().then((seconds) => {
        updateTime(seconds);
      });
    }, 500);

    return () => {
      clearInterval(checkCurrentTime);
    };
  }, []);

  function onChange(start) {
    currentTimeSet(start);
  }

  return (
    <>
      <iframe
        id="TranscriptPanelPlayer"
        src="https://player.vimeo.com/video/519611694"
        width={active ? width - 320 : width}
        height={width * 0.5}
        // height="{video_height}"
        frameBorder="0"
        // @ts-ignore
        webkitallowfullscreen="true"
        // @ts-ignore
        mozallowfullscreen="true"
        // @ts-ignore
        allowfullscreen="true"
      />
      <Input
        // label={'currentTime: ' + currentTime}
        onChange={({ target: { value } }) => currentTimeSet(value)}
        value={secondsToMinutes(currentTime)}
        style={{ margin: '1rem 0', maxWidth: '15rem' }}
        size="xl"
      />
      <Button
        onClick={() => activeSet((active) => !active)}
        style={{ margin: '1rem 0' }}
      >
        Toggle Panel
      </Button>
      <TranscriptPanel
        active={active}
        currentTime={currentTime}
        data={data}
        onChange={onChange}
      />
    </>
  );
}

import { Story } from '@storybook/react/dist/ts3.9/client/preview/types-6-0';

import { CaptionStory } from './TranscriptTabs/Caption/Caption.story';
(CaptionStory as Story).storyName = 'Caption';
export { CaptionStory };

import { TranscriptTabsStory } from './TranscriptTabs/TranscriptTabs.story';
import { Header } from '../../../../typography';
(TranscriptTabsStory as Story).storyName = 'TranscriptTabs';
export { TranscriptTabsStory };
