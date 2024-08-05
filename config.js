//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "";
global.devs = "";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "265993702468";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU5JUHVRZTcvZlpzRCtuK0hyQWNqSUF3YmFtT0RkcTZOcUpiMkNnYnhrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzV5S09ZQlM1Q2pKY3V4U2EyRUNlL2tpL09sbUVsVVJnckZHUWQwcHdYRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRnNqRzhQSnhkVnA5azg3Z2xHc0t3MVdyanY0RHRBMlhFbkRnU0xNMkZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPS2FEUm12MHVyUFhpV3NTSDFJZnZFOHFIRU85VFB5anNERVVrQnFyRG5zPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVJdU1yMFlFOUZFeUhVL1pvTVk1R1BHRTdUY1pZVTZ2dGd3SDRBN0tsR3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJkSHY1OEErWGRNQnVvczhpWmM4bHJSSTRDakMxbTZ3bldMYVJjYm91aVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ09QcTFONWx6b0poNFhjTlVvM21idU95THBZOWFFRVlUenF4ODVQQlJuOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXFxcmZOZW5qVGVZMzZDS3NYUXV6MkVNbWpjR0VaRFFpTThPSnJZZ3RFVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhNZG9HaFhrRkhUeTl6Z3dlQThYc0tVaE01RFVxODVWK0ZUWTFqeWwrb1c5QUxiYldoUmRMVlMwU0gvOW9sUFVyNUhHZkdIM3hYNjQ2WUtHZUVtRUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ4LCJhZHZTZWNyZXRLZXkiOiJFWWFhZTlab0Zod1ZJYzFHRlhpcGZ6cGJqMktEUmRaMEQ3RnZJUW16djQ4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJOeTRUVXVIdlJmT2tsbk1VcGxvSlpRIiwicGhvbmVJZCI6ImExMzQ4NjczLTkwYWYtNGQxOS04YWVhLTVkZjEzMGFkOGExMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjMkw4RGtMSVRMekY1Uk8wN2k5NXRHZm5IMVU9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkY3RGt0RzdCUm9YcHVpSzJqYzRWZFpJbGYyQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0l2ZzNzNEJFUDZ0djdVR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkpTbmRST1lmdllhVlhOblZNdWgra1NlTXdWYlRZQXZRWE5KQW5LbmQrMDQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkFBTXBjOERMNWtCQXVtL2dKdVhhejU2RDVvbUR4c0tNalZjSWdQZHUrcjF6bHBYSjc0SDdKZVFDd0dqdUkvTE5GbmMzOEg5NThBemhEbzRoOGxqekJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxS0VlOEtkU1RRK2FsOHZvS1NobzNqQkxHNTErSW9ZSUJLOU1DeHJoRjlDM0lwV0p4VGhWQ25TZ1JMSCtZMkZYWTUrWTVzeHZpVVhVeXBac2RQdVRCdz09In0sIm1lIjp7ImlkIjoiMjY1OTkzNzAyNDY4OjZAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNDU5MTc3MzkwMjQ0MDQ6NkBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjY1OTkzNzAyNDY4OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU1VwM1VUbUg3MkdsVnpaMVRMb2ZwRW5qTUZXMDJBTDBGelNRSnlwM2Z0TyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNzk5ODg3LCJsYXN0UHJvcEhhc2giOiIxbE9TRUkifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`EFKID GAMER BOT™`",
  author: process.env.PACK_AUTHER || "EFKID BOT",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "EFKID BOT",
  ownername: process.env.OWNER_NAME || "Frank Kaumba",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
