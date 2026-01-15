import {Playfair, Barlow_Semi_Condensed, Poppins} from 'next/font/google'
import '@/ui/globals.css'

export const playfair = Playfair({
    subsets: ['latin'],
    variable: "--font-playfair"
})

export const barlow = Barlow_Semi_Condensed({
    subsets: ['latin'],
    weight: '500',
    variable: "--font-barlow"
})

export const poppins = Poppins({
    subsets: ['latin'],
    weight: '400',
    variable: "--font-poppins"
})