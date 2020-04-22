import { css } from 'styled-components'

const media = {
  xs: (...args) => css`
    @media (max-width: 479px) {
      ${ css(...args)}
    }
  `,
  sp: (...args) => css`
    @media (max-width: 768px) {
      ${ css(...args)}
    }
  `,
  spsm: (...args) => css`
    @media (min-width: 769px) and (max-width: 959px) {
      ${ css(...args)}
    }
  `,
  sm: (...args) => css`
    @media (min-width: 480px) and (max-width: 959px) {
      ${ css(...args)}
    }
  `,
  md: (...args) => css`
    @media (min-width: 960px) and (max-width: 1112px) {
      ${ css(...args)}
    }
  `,
  lg: (...args) => css`
    @media (min-width: 1113px) {
      ${ css(...args)}
    }
  `,
}

export default media
