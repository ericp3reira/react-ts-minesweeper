import React from 'react';
import { secondsToString } from '../utils/time';

export const Timer = (props: TimerProps) => {
  return <h3>{secondsToString(props.elapsedSeconds)}</h3>
}

export interface TimerProps {
  elapsedSeconds: number;
};