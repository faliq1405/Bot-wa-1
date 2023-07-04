const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	danzz: 'https://danzzapi.xyz',
}

global.APIKeys = {
	'https://danzzapi.xyz': 'YOUR APIKEY',
}

// Other
global.apikey = ['danzz'] // Get in: https://danzzapi.xyz
global.apikeyprem = ['danzzprem'] // Get in: https://danzzapi.xyz
global.apikeyvip = ['YOUR APIKEY'] // Get in: https://danzzapi.xyz
global.namabot = ['Grup of The Halal']
global.namaowner = ['Devil Killer⁠￣⁠︶⁠￣']
global.owner = ['62895613110306']
global.premium = ['62895613110306']
global.packname = '© Powered By'
global.author = '𝑍𝑌𝐾𝑂𝐵𝑂𝑇𝑍-𝑀𝐷'
global.sessionName = 'Zyko-MD'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.prefix = ['']
global.symbol1 = '•'
global.symbol2 = '>'
global.wm = '© 𝑍𝑌𝐾𝑂𝐵𝑂𝑇𝑍-𝑀𝐷'
global.mess = {
    success: 'Success ✓',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Khusus Group Chat',
    private: 'Fitur Khusus Private Chat!',
    bot: 'Fitur Khusus Nomor Bot',
    wait: 'Waittt...',
    notregist: 'Kamu belum terdaftar di database bot silahkan daftar terlebih dahulu',
    premium: 'Kamu Bukan User Premium, Beli Sana Ke Owner Bot',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}
global.limitawal = {
	free: "100",
        premium: "unlimited"
}
global.thumb = fs.readFileSync('./media/img/1.jpg')
global.qris = { url: 'https://telegra.ph/file/82f399cf9dd246029ad4a.jpg' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.greenBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
