let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `BOT OPTIONS`,
rows: [
{title: "WELCOME", rowId: `${usedPrefix + command} welcome`},
{title: "PUBLIC", rowId: `${usedPrefix + command} public`},
{title: "MODOHORNY", rowId: `${usedPrefix + command} modohorny`},
{title: "ANTILINK", rowId: `${usedPrefix + command} antilink`},
{title: "ANTILINK2", rowId: `${usedPrefix + command} antilink2`},
{title: "ANTIDELETE", rowId: `${usedPrefix + command} antidelete`},
{title: "DETECT", rowId: `${usedPrefix + command} detect`},
{title: "RESTRICT", rowId: `${usedPrefix + command} restrick`},
{title: "AUTOREAD", rowId: `${usedPrefix + command} autoread`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: author,
title: `╭══〘 ENABLE MENU 〙═╮
║
║*HI CHOMIE, ${name}!!*
║


┣  _${usedPrefix}enable *welcome*_
┣  _${usedPrefix}disable *welcome*_
┣  _${usedPrefix}enable *public*_
┣  _${usedPrefix}disable *public*_
┣  _${usedPrefix}enable *modohorny*_
┣  _${usedPrefix}disable *modohorny*_
┣  _${usedPrefix}enable *antilink*_
┣  _${usedPrefix}disable *antilink*_
┣  _${usedPrefix}enable *antilink2*_
┣  _${usedPrefix}disable *antilink2*_
┣  _${usedPrefix}enable *detect*_
┣  _${usedPrefix}disable *detect*_
┣  _${usedPrefix}enable *restrict*_
┣  _${usedPrefix}disable *restrict*_
┣  _${usedPrefix}enable *autoread*_
┣  _${usedPrefix}disable *autoread*_
┗━━━━━━━━━━━━━
ㅤㅤㅤㅤㅤㅤㅤㅤ
`,
buttonText: "SELECT OPTION",
sections }

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
conn.sendButton(m.chat, `OPTION: ${type} 
*STATUS*: ${isEnable ? 'ACTIVE' : 'DEACTIVATE'}
*FOR*: ${isAll ? 'THIS CHAT' : isUser ? '' : 'THIS GROUP'}`, author, null, [[`${isEnable ? 'DEACTIVATE' : 'ACTIVATE'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['MENU', '.menu']],m)}

handler.help = ['en', 'dis'].map(v => v + 'able option')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler
