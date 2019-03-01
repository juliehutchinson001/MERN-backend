/* ---------------------------- Utility Classes ---------------------------- */

/* Color
   ========================================================================== */
/**
 * 1. Background Color
 * 2. Text Color
 * 3. Shadow
 */

/* ------------------ Background Color ------------------ */

export const bgTransparent = { backgroundColor: 'transparent' };
export const bgBlack = { backgroundColor: '#22292f' };
export const bgGreyDarkest = { backgroundColor: '#3d4852' };
export const bgGreyDarker = { backgroundColor: '#606f7b' };
export const bgGreyDark = { backgroundColor: '#8795a1' };
export const bgGrey = { backgroundColor: '#b8c2cc' };
export const bgGreyLight = { backgroundColor: '#dae1e7' };
export const bgGreyLighter = { backgroundColor: '#f1f5f8' };
export const bgGreyLightest = { backgroundColor: '#f8fafc' };
export const bgBlueDarkest = { backgroundColor: '#12283a' };
export const bgBlueDarker = { backgroundColor: '#1c3d5a' };
export const bgBlueDark = { backgroundColor: '#2779bd' };
export const bgBlue = { backgroundColor: '#3490dc' };
export const bgBlueLight = { backgroundColor: '#6cb2eb' };
export const bgBlueLighter = { backgroundColor: '#bcdefa' };
export const bgBlueLightest = { backgroundColor: '#eff8ff' };
export const bgIndigoDarkest = { backgroundColor: '#191e38' };
export const bgIndigoDarker = { backgroundColor: '#2f365f' };
export const bgIndigoDark = { backgroundColor: '#5661b3' };
export const bgIndigo = { backgroundColor: '#6574cd' };
export const bgIndigoLight = { backgroundColor: '#7886d7' };
export const bgIndigoLighter = { backgroundColor: '#b2b7ff' };
export const bgIndigoLightest = { backgroundColor: '#e6e8ff' };
export const bgPurpLeDarkest = { backgroundColor: '#21183c' };
export const bgPurpLeDarker = { backgroundColor: '#382b5f' };
export const bgPurpLeDark = { backgroundColor: '#794acf' };
export const bgPurpLe = { backgroundColor: '#9561e2' };
export const bgPurpLeLight = { backgroundColor: '#a779e9' };
export const bgPurpLeLighter = { backgroundColor: '#d6bbfc' };
export const bgPurpLeLightest = { backgroundColor: '#f3ebff' };

/* ------------------ Text Color ------------------ */

export const txTransparent = { color: 'transparent' };
export const txBlack = { color: '#22292f' };
export const txGreyDarkest = { color: '#3d4852' };
export const txGreyDarker = { color: '#606f7b' };
export const txGreyDark = { color: '#8795a1' };
export const txGrey = { color: '#b8c2cc' };
export const txGreyLight = { color: '#dae1e7' };
export const txGreyLighter = { color: '#f1f5f8' };
export const txGreyLightest = { color: '#f8fafc' };
export const txBlueDarkest = { color: '#12283a' };
export const txBlueDarker = { color: '#1c3d5a' };
export const txBlueDark = { color: '#2779bd' };
export const txBlue = { color: '#3490dc' };
export const txBlueLight = { color: '#6cb2eb' };
export const txBlueLighter = { color: '#bcdefa' };
export const txBlueLightest = { color: '#eff8ff' };
export const txIndigoDarkest = { color: '#191e38' };
export const txIndigoDarker = { color: '#2f365f' };
export const txIndigoDark = { color: '#5661b3' };
export const txIndigo = { color: '#6574cd' };
export const txIndigoLight = { color: '#7886d7' };
export const txIndigoLighter = { color: '#b2b7ff' };
export const txIndigoLightest = { color: '#e6e8ff' };
export const txPurpLeDarkest = { color: '#21183c' };
export const txPurpLeDarker = { color: '#382b5f' };
export const txPurpLeDark = { color: '#794acf' };
export const txPurpLe = { color: '#9561e2' };
export const txPurpLeLight = { color: '#a779e9' };
export const txPurpLeLighter = { color: '#d6bbfc' };
export const txPurpLeLightest = { color: '#f3ebff' };

/* ------------------ Shadow ------------------ */

export const shadow = {
  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, .1)',
};

export const shadowMd = {
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, .12), 0 2px 4px 0 rgba(0, 0, 0, .08)',
};

export const shadowLg = {
  boxShadow:
    '0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08)',
};

export const shadowInner = {
  boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, .06)',
};

export const shadowOutline = {
  boxShadow: '0 0 0 3px #348EDC',
};

export const shadowNone = {
  boxShadow: 'none',
};

/* Dimensions
   ========================================================================== */
/**
 * 1. Border Radius
 * 2. Height
 * 3. Width
 */

/* ------------------ Border Radius ------------------ */

export const roundedNone = { borderRadius: 0 };
export const roundedSmRem = { borderRadius: '0.125rem' };
export const roundedRem = { borderRadius: '0.25rem' };
export const roundedLgRem = { borderRadius: '0.5rem' };

/* ------------------ Height ------------------ */

export const hPt25Rem = { height: '0.25rem' };
export const hPt5Rem = { height: '0.5rem' };
export const hPt75Rem = { height: '0.75rem' };
export const h1Rem = { height: '1rem' };
export const h1Pt25Rem = { height: '1.25rem' };
export const h1Pt5Rem = { height: '1.5rem' };
export const h2Rem = { height: '2rem' };
export const h2Pt5Rem = { height: '2.5rem' };
export const h3Rem = { height: '3rem' };
export const h4Rem = { height: '4rem' };
export const h6Rem = { height: '6rem' };
export const h8Rem = { height: '8rem' };
export const h12Rem = { height: '12rem' };
export const h16Rem = { height: '16rem' };
export const hHalfPent = { height: '50%' };
export const h3rdPent = { height: '33.33333%' };
export const hTwo3rdsPent = { height: '66.66667%' };
export const hFourthPent = { height: '25%' };
export const hThree4thsPent = { height: '75%' };
export const hFifthPent = { height: '20%' };
export const hTwo5thsPent = { height: '40%' };
export const hThree5thsPent = { height: '60%' };
export const hFour5thsPent = { height: '80%' };
export const hFullPent = { height: '100%' };
export const hScreen = { height: '100vh' };
export const hMaxFullPent = { maxHeight: '100%' };
export const hMaxScreen = { maxHeight: '100vh' };
export const hMin0 = { minHeight: 0 };
export const hMinFullPent = { minHeight: '100%' };
export const hMinScreen = { minHeight: '100vh' };

/* ------------------ Width ------------------ */

export const wMaxXsRem = { maxWidth: '20rem' };
export const wMaxSmRem = { maxWidth: '30rem' };
export const wMaxMdRem = { maxWidth: '40rem' };
export const wMaxLgRem = { maxWidth: '50rem' };
export const wMaxXlRem = { maxWidth: '60rem' };
export const wMax2XlRem = { maxWidth: '70rem' };
export const wMax3XlRem = { maxWidth: '80rem' };
export const wMax4XlRem = { maxWidth: '90rem' };
export const wMax5XlRem = { maxWidth: '100rem' };
export const wMinFullPent = { minWidth: '100%' };
export const wPt25Rem = { width: '0.25rem' };
export const wPt5Rem = { width: '0.5rem' };
export const wPt75Rem = { width: '0.75rem' };
export const w1Rem = { width: '1rem' };
export const w1Pt25Rem = { width: '1.25rem' };
export const w1Pt5Rem = { width: '1.5rem' };
export const w2Rem = { width: '2rem' };
export const w2Pt5Rem = { width: '2.5rem' };
export const w3Rem = { width: '3rem' };
export const wHalfPent = { width: '50%' };
export const w3rdPent = { width: '33.33333%' };
export const wTwo3rdsPent = { width: '66.66667%' };
export const wFourthPent = { width: '25%' };
export const wThree4thsPent = { width: '75%' };
export const wFifthPent = { width: '20%' };
export const wTwo5thsPent = { width: '40%' };
export const wThree5thsPent = { width: '60%' };
export const wFour5thsPent = { width: '80%' };
export const wSixthPent = { width: '16.66667%' };
export const wFive6thsPent = { width: '83.33333%' };
export const wFullPent = { width: '100%' };
export const wScreen = { width: '100vw' };

/* Position
   ========================================================================== */
/**
 * 1. DispLay
 * 2. Margin
 * 3. Overflow
 * 4. Padding
 * 5. Position
 * 6. Visibility
 * 7. ZIndex
 * */

/* ------------------ Display ------------------ */

export const dBlock = {
  display: 'block',
};

export const dFlex = {
  display: 'flex',
};

export const dFlexCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const dInBlock = {
  display: 'inlineBlock',
};

/* ------------------ Margin Top, Right, Bottom, Left ------------------ */

export const m0 = { margin: 0 };
export const m14 = { margin: '14px' };
export const m16 = { margin: '16px' };
export const m20 = { margin: '20px' };
export const m25 = { margin: '25px' };
export const mXAuto = { margin: '0 auto' };
export const mYAuto = { margin: 'auto 0' };

/* ------------------ Margin X-Axis ------------------ */

export const mX0 = {
  marginLeft: 0,
  marginRight: 0,
};

export const mX14 = {
  marginLeft: '14px',
  marginRight: '14px',
};

export const mX16 = {
  marginLeft: '16px',
  marginRight: '16px',
};

export const mX20 = {
  marginLeft: '20px',
  marginRight: '20px',
};

export const mX25 = {
  marginLeft: '25px',
  marginRight: '25px',
};

/* ------------------ Margin Y-Axis ------------------ */

export const mY0 = {
  marginTop: 0,
  marginBottom: 0,
};

export const mY14 = {
  marginTop: '14px',
  marginBottom: '14px',
};

export const mY16 = {
  marginTop: '16px',
  marginBottom: '16px',
};

export const mY20 = {
  marginTop: '20px',
  marginBottom: '20px',
};

export const mY25 = {
  marginTop: '25px',
  marginBottom: '25px',
};

/* ------------------ Margin Left ------------------ */

export const mL0 = { marginLeft: 0 };
export const mL14 = { marginLeft: '14px' };
export const mL16 = { marginLeft: '16px' };
export const mL20 = { marginLeft: '20px' };
export const mL25 = { marginLeft: '25px' };

/* ------------------ Margin Right ------------------ */

export const mR0 = { marginRight: 0 };
export const mR14 = { marginRight: '14px' };
export const mR16 = { marginRight: '16px' };
export const mR20 = { marginRight: '20px' };
export const mR25 = { marginRight: '25px' };

/* ------------------ Margin Top ------------------ */

export const mT0 = { marginTop: 0 };
export const mT14 = { marginTop: '14px' };
export const mT16 = { marginTop: '16px' };
export const mT20 = { marginTop: '20px' };
export const mT25 = { marginTop: '25px' };

/* ------------------ Margin Bottom ------------------ */

export const mB0 = { marginBottom: 0 };
export const mB14 = { marginBottom: '14px' };
export const mB16 = { marginBottom: '16px' };
export const mB20 = { marginBottom: '20px' };
export const mB25 = { marginBottom: '25px' };

/* ------------------ Overflow ------------------ */

export const oHidden = { overflow: 'hidden' };
export const oVisible = { overflow: 'visible' };
export const oScroll = { overflow: 'scroll' };

/* ------------------ Padding Top, Right, Bottom, Left ------------------ */

export const p0 = { padding: 0 };
export const p14 = { padding: '14px' };
export const p16 = { padding: '16px' };
export const p20 = { padding: '20px' };
export const p25 = { padding: '25px' };

/* ------------------ Padding X-Axis ------------------ */

export const pX0 = {
  paddingLeft: 0,
  paddingRight: 0,
};

export const pX14 = {
  paddingLeft: '14px',
  paddingRight: '14px',
};

export const pX16 = {
  paddingLeft: '16px',
  paddingRight: '16px',
};

export const pX20 = {
  paddingLeft: '20px',
  paddingRight: '20px',
};

export const pX25 = {
  paddingLeft: '25px',
  paddingRight: '25px',
};

/* ------------------ Padding Y-Axis ------------------ */

export const pY0 = {
  paddingTop: 0,
  paddingBottom: 0,
};

export const pY14 = {
  paddingTop: '14px',
  paddingBottom: '14px',
};

export const pY16 = {
  paddingTop: '16px',
  paddingBottom: '16px',
};

export const pY20 = {
  paddingTop: '20px',
  paddingBottom: '20px',
};

export const pY25 = {
  paddingTop: '25px',
  paddingBottom: '25px',
};

/* ------------------ Padding Left ------------------ */

export const pL0 = { paddingLeft: 0 };
export const pL14 = { paddingLeft: '14px' };
export const pL16 = { paddingLeft: '16px' };
export const pL20 = { paddingLeft: '20px' };
export const pL25 = { paddingLeft: '25px' };

/* ------------------ Padding Right ------------------ */

export const pR0 = { paddingRight: 0 };
export const pR14 = { paddingRight: '14px' };
export const pR16 = { paddingRight: '16px' };
export const pR20 = { paddingRight: '20px' };
export const pR25 = { paddingRight: '25px' };

/* ------------------ Padding Top ------------------ */

export const pT0 = { paddingTop: 0 };
export const pT14 = { paddingTop: '14px' };
export const pT16 = { paddingTop: '16px' };
export const pT20 = { paddingTop: '20px' };
export const pT25 = { paddingTop: '25px' };

/* ------------------ Padding Bottom ------------------ */

export const pB0 = { paddingBottom: 0 };
export const pB14 = { paddingBottom: '14px' };
export const pB16 = { paddingBottom: '16px' };
export const pB20 = { paddingBottom: '20px' };
export const pB25 = { paddingBottom: '25px' };

/* ------------------ Position ------------------ */

export const staticPos = { position: 'static' };
export const fixedPos = { position: 'fixed' };
export const absolutePos = { position: 'absolute' };
export const relativePos = { position: 'relative' };
export const stickyPos = { position: 'sticky' };

/* ------------------ Visibility ------------------ */

export const visible = { visibility: 'visible' };
export const invisible = { visibility: 'hidden' };

/* ------------------ Z-Index ------------------ */

export const z0 = { zIndex: 0 };
export const z10 = { zIndex: '10' };
export const z20 = { zIndex: '20' };

/* Typography
========================================================================== */
/**
 * 1. Font Size
 * 2. Boldness
 * 3. Letter Spacing
 * 4. Visibility
 */

/* ------------------ Font Size ------------------ */

export const txXsRem = { fontSize: '0.75rem' }; // 10.5px
export const txSmRem = { fontSize: '0.875rem' }; // 12.25px
export const txBaseRem = { fontSize: '1rem' }; // 14px
export const txLgRem = { fontSize: '1.125rem' }; // 15.75px
export const txXlRem = { fontSize: '1.25rem' }; // 17.5px
export const tx2XlRem = { fontSize: '1.5rem' }; // 21px

/* ------------------ Font Weight ------------------ */

export const boldLight = { fontWeight: 300 };
export const boldNormal = { fontWeight: 400 };
export const boldMedium = { fontWeight: 500 };
export const boldSemibold = { fontWeight: 600 };
export const boldMoreBold = { fontWeight: 700 };
export const boldExtrabold = { fontWeight: 800 };

/* ------------------ Letter Spacing ------------------ */

export const lSpaceTight = { letterSpacing: '-0.05em' };
export const lSpaceNormal = { letterSpacing: 0 };
export const lSpaceWide = { letterSpacing: '0.05em' };

/* ------------------ Visibility ------------------ */
export const txLeft = { textAlign: 'left' };
export const txCenter = { textAlign: 'center' };
export const txRight = { textAlign: 'right' };
export const txJustify = { textAlign: 'justify' };

/* Miscellaneous
========================================================================== */

/**
 * 1. Cursor
 * 2. List
 */

export const cPointer = { cursor: 'pointer' };
export const listReset = { listStyle: 'none' };
