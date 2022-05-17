/* Copyright (C) 2021 ameer-kallumthodi.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
PIKACHU*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "type some words after command"

if (Config.WORKTYPE == 'private') {

  Asena.addCommand({ pattern: 'greenneon ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/greenneon?apikey=d0bd4f8d3fc453adc10f14e2&&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by TJ*' })

  }));
}

else if (Config.WORKTYPE == 'public') {

  Asena.addCommand({ pattern: 'greenneon ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/greenneon?apikey=d0bd4f8d3fc453adc10f14e2&&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by TJ*' })

  }));

}
