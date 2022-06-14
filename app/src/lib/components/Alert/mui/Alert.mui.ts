// https://mui.com/customization/theme-components/#global-style-overrides
export default {
  MuiAlert: {
    styleOverrides: {
      root: {
        borderRadius: '100px',
        margin: '0 auto',
        maxWidth: '300px',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(12px) saturate(0.9)',
      },
    },
  },
}
