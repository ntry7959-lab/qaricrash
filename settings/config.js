// IKUTI PETUNJUK INI AGAR KALIAN BISA AKSES BOTNYA, JIKA SUDAH MENGUBAH BAGIAN SINI, LANGKAH KE 2 KALIAN MASUK KE BAGIAN FILE : justinofficial, LALU MASUK KE BAGIAN lib, LALU MASUK KE BAGIAN database, DAN MASUK KEBAGIAN owner.json, DISITU KALIAN TINGGAL UBAH NOMERNYA PAKE NOMER KALIAN, JANGAN LUPA AWALI DENGAN 628 ✓ , 08 X

//Don't Delete Credit : By JustinOfficial
// YOUTUBE : JustinOfficial-ID


const fs = require('fs')

const config = {
    owner: "6285137598244", //GANTI NOMER KALIAN AGAR BISA AKSES BOT
    botNumber: "6285137598244", //GANTI NOMER KALIAN AGAR BISA AKSES BOT
    setPair: "JUSTIN23",
    thumbUrl: "https://img1.pixhost.to/images/10053/659146095_ochobot.jpg",
    session: "sessions",
    status: {
        public: true, //UBAH KE false JIKA INGIN BOT KALIAN KE MODE self
        terminal: true, //JANGAN DI UBAH, JIKA UBAH KE false MAKA AKAN MENGGUNAKAN QR CODE
        reactsw: true, //BEBAS UBAH KE false, AGAR TIDAK AUTO REACT SW
    },
    message: {
        owner: "no, this is for owners only",
        group: "Ketiknya Didalam Group Yang Mau Di Bug Bego.",
        admin: "this command is for admin only",
        private: "this is specifically for private chat"
    },
    settings: {
        title: "Developer Justin",
        packname: 'JustinV23',
        description: "this script was created by JustinOfficial",
        author: 'https://telegram.com/justinoffc',
        footer: "YT JustinOfficial-ID`"
    },
    newsletter: {
        name: "Information JustinXSatanic",
        id: "120363403897687476@newsletter"
    },
    socialMedia: {
        YouTube: "https://youtube.com/@justinofficial-id",
        GitHub: "https://github.com/kiuur",
        Telegram: "https://t.me/justinoffc",
        ChannelWA: "https://whatsapp.com/channel/0029VbBLlI61yT225PiIpx36"
    }
}

module.exports = config;

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
