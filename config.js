import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['62895613110306', 'Xyroinee', true]
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '62895613110306'
global.packname = 'Clara - MD by'
global.author = '© Asep134'
global.namebot = '​Clara - MD'
global.wm = '© Clara By Asep134'
global.stickpack = 'Clara - MD by'
global.stickauth = '© Asep134'
// Link Sosmed
global.sig = 'https://www.instagram.com'
global.sgh = 'https://github.com'
global.sgc = 'https://chat.whatsapp.com'
// Donasi
global.psaweria = 'https://saweria.co/Asep134'
global.ptrakterr = ''
global.pdana = '0895613110306'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.lol = 'Apikeymu'
global.rose = 'Apikeymu'
global.xyro = 'Apikeymu'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "Apikeymu",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
