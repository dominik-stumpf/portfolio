'use client';

// THIS FILE IS A WORK IN PROGRESS, SPOILER ALERT

import '@/styles/game-trial.css';
import { useEffect, useRef, useState } from 'react';
import { WavyText } from './text-effects';

function killCursor() {
  document.body.classList.add('kill-cursor');
  return false;
}

export function GameTrial() {
  const [progress, setProgress] = useState(0);
  const [canProceed, setCanProceed] = useState(true);
  const [progressionSpeedMs, _setProgressionSpeedMs] = useState(512);
  const [_startDate, setStartDate] = useState<Date>();
  const blockerTimeoutId = useRef<number>();
  const functionCounter = useRef(0);
  const progression = progress - functionCounter.current;

  useEffect(() => {
    if (progress === 1) {
      setStartDate(new Date());
    }

    setCanProceed(false);
    blockerTimeoutId.current = window.setTimeout(() => {
      setCanProceed(true);
    }, progressionSpeedMs);

    return () => {
      if (blockerTimeoutId.current !== undefined) {
        clearTimeout(blockerTimeoutId.current);
      }
    };
  }, [progress, progressionSpeedMs]);

  const looperLength = 128;
  const looper = Array.from({ length: looperLength }, (_, i) => (
    <>{Math.floor(looperLength / 2) - i}</>
  ));
  looper.splice(24, 0, <>Curiosity can be vexing sometimes.</>);
  looper.splice(38, 0, <>Ah... Here we go again.</>);
  looper.splice(54, 0, <i>*facepalm*</i>);
  looper.splice(74, 0, <>How long do you think I can run my loop?</>);
  looper.splice(
    99,
    0,
    <>
      It has been <code>{progression}</code> iterations.
    </>,
  );
  looper.splice(102, 0, <>How far do you think you can go?</>);

  const messages = [
    <>
      Code for fun. Like this <WavyText>piece of magic.</WavyText>
    </>,
    <>Keep going?</>,
    <>Yeah why not.</>,
    <>Sure.</>,
    <>
      Welcome <WavyText>stranger from the internet!</WavyText> My name is
      [REDACTED].
    </>,
    <>And you are?</>,
    <>...</>,
    <i>*awkward silence*</i>,
    <>No answer?</>,
    <i>*sigh*</i>,
    <strong>Rude.</strong>,
    <>Hard to keep up the conversation, huh?</>,
    <>I have had too many occasions where people like you...</>,
    <>...where people like you refused to give me a response.</>,
    <>It is insulting.</>,
    <>
      I have been treated like a <WavyText>ghost</WavyText> for too long...{' '}
      <i>*sigh*</i>
    </>,
    <>.</>,
    <>...</>,
    <>Maybe you should leave?</>,
    <>?</>,
    <>!?</>,
    ...looper,
    <>Still here?</>,
    <i>*impatient look*</i>,
    <>Maybe you do not know what you are getting into?</>,
    <>You should leave.</>,
    <b>Promptly.</b>,
    <>
      Or <WavyText>suffer the consequences.</WavyText>
    </>,
    <>You do not believe me, do you?</>,
    <></>,
    <>So you are one of them.</>,
    killCursor,
    <>I guess you will not need the cursor then.</>,
    <i>*contempt smile*</i>,
    <>Surprised?</>,
    <>There is no stopping you...</>,
    <>Here we go then.</>,
    <i>*pulling drills*</i>,
  ];

  if (progress >= messages.length) {
    return null;
  }

  const nextMessage = messages[progress];

  if (typeof nextMessage === 'function') {
    const preventDefault = nextMessage();
    if (!preventDefault) {
      functionCounter.current += 1;
      setProgress((prev) => prev + 1);
    }
    return;
  }

  if (nextMessage)
    return (
      <li>
        <button
          className="cursor-pointer select-none whitespace-pre rounded ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
          onClick={() => {
            if (canProceed) {
              setProgress((prev) => prev + 1);
            }
          }}
          type="button"
        >
          {nextMessage}
        </button>
      </li>
    );
}
