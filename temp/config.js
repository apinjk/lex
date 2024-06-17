const fs = require('fs')
const chalk = require('chalk')

// ganti info bot dibawah ini
global.botName = "LeccyV8"
global.ownerName = "LeccyOfc"
global.ownerNumber = ["6283834558105"]

global.AutoBotAiChat = false // auto bot ai chat
global.Auto_Typing = false // auto typing
global.Auto_Recording = false // auto recording
global.Auto_ReadPesan = false // auto read messages

// Auto Downloader Tiktok
global.TiktokAutoDownload = true

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})