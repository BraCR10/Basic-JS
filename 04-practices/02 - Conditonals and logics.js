/**
 * 8k 7600 X 4320
 * 4k 3840 X 2160
 * WQHD 2560 X 1440
 * FHD 1920 X 1080
 * HD 1280 X 720
 */
function nameResolution(widht,height){
    //Usando If -else
    if (widht>=7600 && height>=4320)
        return '8K'
    else if (widht>=3840 && height>=2160)
        return '4K'
    else if (widht>=2560 && height>=1440)
        return 'WQHD'
    else if(widht>=1920 && height>=1080)
        return 'FHD'
    else if (widht>=1280 && height>=720)
        return 'HD'
    else
        return 'Resolucion no admitida'

}

let name = nameResolution(1290,4800)
console.log(name)