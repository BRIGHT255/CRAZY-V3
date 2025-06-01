/* ʜᴏᴡ ᴛᴏ ʙᴇᴄᴏᴍᴇ ᴀ ɢᴀʏ 

ᴍᴏᴅɪғʏ ᴛʜɪs sᴄʀɪᴘᴛ ᴛᴏ ʙᴇᴄᴏᴍᴇ
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "CYPHER-X:~UEsDBBQAAAgIAKiVwVrbBE2EsQQAAH0IAAAKAAAAY3JlZHMuanNvbq2U2Y6jOBSG38W3iZp9lUpqAoQEshDIUsloLhwwS1hjTBLSyruPqFR1t9QzPTXScGWMOef7j*9zvoGyShvkoA6o30CN0wskqF+SrkZABaM2ihAGQxBCAoEKNPegGOHusJycb*GRtagzb+VWG<a href="tel:8051">8051</a>xy4q9xvD25eTfGINl*AYwjq9pinwW8C2kfrHpudXEVj41buk0t7SLhXM7SW2+ZYS*bptVBOghIyG*kFPPqIMMVpGZt1ggqEYe6gzoUp*hw+PbpV22gRy4nJCNm6uUMKnZa2h+pFF9DeFHLzkPJcurOun8PPN+nSFvcwXxkOmTMdvZhxZaiNm9VscDotyqjdBDvC15FuPvGbNC5ROA1RSVLSfbru8SKYHZcHzpxS88ZOpzwSfe+UeMpGYNzVJcnOdzfY2Dwxm8+BU*bIvd6djlndt+fq6gX2pfEHYXxQgogJvDzt0NLOuHwb0z+Du*jDK9l*qft1opyLyFCsXRKlylq0k27AzUbWzjc3Tc5NRxq29p55Oeabz+Eng3V+phl*ceOU29HJsjO9Ve5b0eciwiTyzhjUr2cRJtGp+YEPSYt*R1kvfb6+RPNNuMtMWnktisDp5guXsyei1Xp4P1mM7bW2wLZ9vEC*CGZGTgia38uoq46VwzP5eow1ijqNQsnWp5bCsqfry5uiDHXTEKjMYwgwitOGYEjSquz3WJYZAhhefBRgRN7KC*jtJDAvc2EVWWOKiurQvZECO3yFMYcDbjKluFXgHK90vHkBQ1DjKkBNg8JJ2pAKd3PUNDBGDVD*eLupXjRGRUWQnYZABazISbLE0IJEc1+bL9cEkgbW9ZcSETAEEa6KOQIqwS0agucPikyztCKI+thgZInl2RHPM6YhKJLBMTTTSyyeSddpgRoCixqojMTLMs0JDP0Y*j8cY3nMSZosjHVBlmWe5sUxK2sCo8mmIkma*i8c3OPPISjRjTx93FefY4YgSnFDNmVb5xUMP0z+8REGQdWWxO*KQO8XCAP1p21ESFrGTa+sLSEOkvSC9F4HUCOYN+j7hSOMwg8t70NMr8Leh+yrIxsTZwV69j7QL7VRxV+rkz9P8bTI0KwkiILMKKr4td9+fMfro4WIwDRvgAp0R6op5WqYdkHJjWlZmhlreqyBH3I+2uRpQ+Y+8ZvDen2uIpzlGhRem2AZnE*J2lAcyssHL3wQBKkCiFDij5aooImM2CWzmlIzmAZtdMkEgpautxrsc30ezgj8ng9OeT73L*jqzPVeLUo6ls*2tYlLoyXJhT7E*iEKt5PX4pc8WoksaoJ+TWQtfDI9rz2IN<a href="tel:45528">45528</a>zKAUSTsyTxal7NolMkuhf0Dw*sUlZ3M+*pWt5IJW<a href="tel:32526">32526</a>+X0jZ7XYVe5y2NretTc9byEn26j98b+G2A5O+DO31vrfTtNUrR2xwsYYE+cXFP7t5e9GP4U4j3wfoPw2kUBjcaWxtaPE9EwV5Z7VaaGKVT8Zsr5V9us1IX2TXPu5ZSgkfv8zqHJKpwAVQAyxBXaQiGAFdt79dpGVWmyDGT64p1g+*SaZr06mxegrPYUO0Hz3wa1vxivA85eKqnsAmASrgYndjZ72hO62ufQLJR0sBrX*G5QY8*gJQSwECFAMUAAAICAColcFa2wRNhLEEAAB9CAAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAADZBAAAAAA=",
// add your Crazy Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY CRAZY-V3 🎉*",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/hlfa1a.jpeg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "CRAZY-MD-V3",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "CRAZY-MD_V3💫",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "24105730123",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ᴄʀᴀᴢʏ ᴅᴇᴠ",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ ᴛᴇᴄʜ ɪɴᴄ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/149k8x.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> 🔰 ʜɪ ᴅᴀʀʟɪɴɢ ᴄʀᴀᴢʏ ᴍᴅ ᴠ3 ɪᴛ\'ᴛ ᴀʟɪᴠᴇ ᴀɴᴅ ʀᴇᴀᴅʏ ᴊᴜsᴛ ᴛʏᴘᴇ ᴍᴇɴᴜ🦋\n\n*ᴅᴇsᴄ:* ᴄʀᴀᴢʏ ᴍᴅ ᴠ3 ᴄʜᴜᴅᴅʏ ʙᴜᴅᴅʏ🌻 ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ ғᴏʀ ᴀᴜᴛᴏᴍᴀsᴛ ʏᴏᴜʀ ᴡʜᴀᴛsᴀᴘᴘ ᴀᴄᴄᴏᴜɴᴛ ᴍᴏʀᴇ ᴀɴᴅ ғᴜɴ ᴄᴍᴅs ᴀᴅᴅᴇᴅ✅\n\n> ᴄʀᴇᴀᴛᴇᴅ ᴡɪᴛʜ 💞 ʙʏ ᴄʀᴀᴢʏ ᴅᴇᴠ",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "24165730123",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
/* ʙʏ ᴄʀᴀᴢʏ ᴅᴇᴠ 

ᴛʜᴀɴᴄᴋs ᴛᴏ 

- ɢᴏᴅ ᴅᴏᴍᴀ ғᴏʀ ʜᴇʟᴘ

- ᴊᴀᴡᴀᴅ ғᴏʀ ᴛᴇsᴛ

- ᴋᴀᴍᴀᴅᴏ ғᴏʀ ᴘʟᴜɢɪɴs ᴅᴇsɪɢɴ
*/
