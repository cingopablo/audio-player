import { css } from '@emotion/css'

export const theme = {
  palette: {
    light: {
      icon: '#9C5AF2',
      border: '#e7e7e7',
      progressBar: {
        background: '#b3b3b3',
        played: '#2c2c2c',
        knob: '#9C5AF2',
      },
    },
  },
}

export const styles = {
  audioContainer: css`
    border: 1px solid ${theme.palette.light.border};
    border-radius: 4px;
    padding: 16px 24px;
  `,
  container: css`
    display: flex;
    align-items: center;
    gap: 4px;
  `,
  timestampsContainer: css`
    justify-content: space-between;
    font-size: 12px;
  `,
  button: css`
    background: none;
    border: none;
    display: flex;
    align-items: center;
    font-family: monospace;
    cursor: pointer;
    transition: 350ms ease 0ms;

    &:hover {
      transition: 150ms ease 0ms;
      transform: scale(1.05);
    }
  `,
  selectedButton: (isSelected: boolean) => css`
    opacity: ${isSelected ? '1' : '0.5'};
    color: red;
  `,
  disabledButton: css`
    cursor: not-allowed;
    opacity: 0.5;

    &:hover {
      transform: none;
    }
  `,
  progressBar: css`
    appearance: none;
    background: ${theme.palette.light.progressBar.background};
    border-radius: 10px;
    position: relative;
    width: 100%;
    height: 4px;
    outline: none;
    margin: 0 0 4px 0;

    &::-webkit-slider-runnable-track {
      background: ${theme.palette.light.progressBar.background};
      border-radius: 10px;
      position: relative;
      width: 100%;
      height: 4px;
      outline: none;
    }

    &::-moz-range-track {
      background: ${theme.palette.light.progressBar.background};
      border-radius: 10px;
      position: relative;
      width: 100%;
      height: 4px;
      outline: none;
    }

    &::-moz-focus-outer {
      border: 0;
    }

    &::before {
      content: '';
      height: 4px;
      width: var(--seek-before-width);
      background-color: ${theme.palette.light.progressBar.played};
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      cursor: pointer;
      //transition: 350ms ease 0ms;
    }

    &:hover::before {
      background-color: ${theme.palette.light.progressBar.knob};
    }

    &::-moz-range-progress {
      background-color: ${theme.palette.light.progressBar.played};
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      height: 4px;
      //transition: 350ms ease 0ms;
    }

    &:hover::-moz-range-progress {
      background-color: ${theme.palette.light.progressBar.knob};
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 8px;
      width: 8px;
      border-radius: 50%;
      border: none;
      background-color: ${theme.palette.light.progressBar.knob};
      cursor: pointer;
      position: relative;
      margin: -2px 0 0 0;
      z-index: 3;
      box-sizing: border-box;
      transition: 350ms ease 0ms;
    }

    &::-moz-range-thumb {
      height: 8px;
      width: 8px;
      border-radius: 50%;
      border: transparent;
      background-color: ${theme.palette.light.progressBar.knob};
      cursor: pointer;
      position: relative;
      z-index: 3;
      box-sizing: border-box;
      transition: 350ms ease 0ms;
    }

    &::-webkit-slider-thumb:hover,
    &::-webkit-slider-thumb:focus,
    &::-webkit-slider-thumb:active {
      transform: scale(3);
      background: ${theme.palette.light.progressBar.knob};
    }
  `,
}
