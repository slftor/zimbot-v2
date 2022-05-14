let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './drips.jpg'
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado =`
╭─[ *𝐁𝐨𝐭* ]
│ *HI CHOMIE${name}*
│
│ *NO CREDIT BOT*
│ *BOT ACTIVE*
│ *BOT WORKING PUBLIC*
│ *UPTIME: ${uptime}*
╰───────────────
`.trim()

conn.sendHydrated(m.chat, estado, m, picture, 'https://github.com/zim-bot', '𝙶ITHUB', null, null, [
['MENU', '/menu']
], m)}

handler.help = ['alive']
handler.tags = ['main']
handler.command = /^(alive|hey|hi|bot|bot)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
