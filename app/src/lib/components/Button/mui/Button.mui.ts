// https://mui.com/customization/theme-components/#global-style-overrides
// import in src/theme/mui/MuiProvider.jsx
export default {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '10px',
        fontWeight: 'bold',
        textTransform: 'none' as const,
      },
    },
  },
}
