import CourierBold from 'pdfjs/font/Courier-Bold';
import CourierBoldOblique from 'pdfjs/font/Courier-BoldOblique';
import CourierOblique from 'pdfjs/font/Courier-Oblique';
import Courier from 'pdfjs/font/Courier';
import HelveticaBold from 'pdfjs/font/Helvetica-Bold';
import HelveticaBoldOblique from 'pdfjs/font/Helvetica-BoldOblique';
import HelveticaOblique from 'pdfjs/font/Helvetica-Oblique';
import Helvetica from 'pdfjs/font/Helvetica';
import Symbol from 'pdfjs/font/Symbol';
import TimesBold from 'pdfjs/font/Times-Bold';
import TimesBoldItalic from 'pdfjs/font/Times-BoldItalic';
import TimesItalic from 'pdfjs/font/Times-Italic';
import TimesRoman from 'pdfjs/font/Times-Roman';
import ZapfDingbats from 'pdfjs/font/ZapfDingbats';

import {ref} from "vue";
export function useFonts(){
    const fonts=ref({
        CourierBold,
        CourierBoldOblique,
        CourierOblique,
        Courier,
        HelveticaBold,
        HelveticaBoldOblique,
        HelveticaOblique,
        Helvetica,
        Symbol,
        TimesBold,
        TimesBoldItalic,
        TimesItalic,
        TimesRoman,
        ZapfDingbats,
    })

    return {
       fonts
    }
}