// import { Handlee, Cormorant_Infant } from '@next/font/google'

// export const handlee = Handlee({
//   display:'swap',
//   preload: true,
//   weight: '400',
// })

// export const cormorant = Cormorant_Infant({
//   display:'swap',
//   preload: true,
//   weight: '400',
// })

import localFont from '@next/font/local'

export const handlee = localFont({
  src: './../styles/fonts/Handlee-Regular.woff2',
  display: 'swap',
  preload: true,
  weight: '400',
})

export const cormorant = localFont({
  src: './../styles/fonts/CormorantInfant-Regular.woff2',
  display: 'swap',
  preload: true,
  weight: '400',
})