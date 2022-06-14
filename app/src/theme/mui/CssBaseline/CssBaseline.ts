import poppins400Font from '../../tokens/typography/fonts/poppins/regular.woff2'
import colors from '../../tokens/colors'

export default {
  MuiCssBaseline: {
    styleOverrides: `
          @font-face {
            font-family: 'Poppins400';
            font-style: normal;
            font-display: swap;
            src: url(${poppins400Font}) format('woff2');
          }     
       
          * {
            box-sizing: border-box;
          }

          html {
            width: 100%;
            overflow-x: hidden;
            overscroll-behavior-y: contain;
            scroll-behavior: smooth;
          }

          body {
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            box-sizing: border-box;
            margin: 0;
            overscroll-behavior-y: contain;
          }

          a {
            color:  ${colors.primary.main};
          }

          p,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            padding: 0;
            margin: 0;
          }

          ul {
            margin: 0;
            padding: 0;
            list-style: none;
          }

          input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0px;
          }

          .firebase-emulator-warning {
            display: none;
          }

         :root {
           --use-pull-to-refresh-spinner-color: ${colors.primary.main};
          }

        `,
  },
}
