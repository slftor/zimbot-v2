/* Codded by Drips Memes ©️Zim-bot 2022



*/
const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

// LIST
const EFFECT_DESC = "Text effective."
const NEED_WORD = "*type some words after command*"

if (Config.WORKTYPE == 'private') {

     Asena.addCommand({pattern: 'wasted ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://zenzapi.xyz/api/photooxy/gtaposter?image=${match[1]}&apikey=e75b25d89d`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '᳆⃞angella↯ǫᴇᴇɴᬐ'})

    }));
        
    Asena.addCommand({pattern: 'gta ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://zenzapi.xyz/api/photooxy/gtaposter?image=${match[1]}&apikey=e75b25d89d`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '᳆⃞🇱angella↯ǫᴇᴇɴᬐ'})

    }));
        
    Asena.addCommand({pattern: 'circle ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://zenzapi.xyz/api/circle?image=${match[1]}&apikey=e75b25d89d`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '᳆⃞angella↯ǫᴇᴇɴᬐ'})

    }));
}
else if (Config.WORKTYPE == 'public') {
        
            Asena.addCommand({pattern: 'wasted ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://zenzapi.xyz/api/image/wasted?image=${match[1]}&APIKEY=e75b25d89d`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '᳆⃞angella↯ǫᴇᴇɴᬐ'})

    }));
        
    Asena.addCommand({pattern: 'gta ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://zenzapi.xyz/api/photooxy/gtaposter?image=${match[1]}&APIKEY=e75b25d89d`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '᳆⃞🇱angella↯ǫᴇᴇɴᬐ'})

    }));
        
    Asena.addCommand({pattern: 'circle ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://zenzapi.xyz/api/circle?image=${match[1]}&APIKEY=e75b25d89d`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '᳆⃞🇱angella↯ǫᴇᴇɴᬐ'})

    }));
}
