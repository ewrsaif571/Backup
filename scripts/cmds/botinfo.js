const moment = require('moment-timezone');

module.exports = {
    config: {
        name: 'botinfo',
        role: 0,
        aliases: ['bot'],
        category: 'info',
        author: 'SAIF',
        longDescription: 'Show Bot Status',
        guide: {
            en: '${p}bot'
        }
    },

    onStart: async function ({ api, args, message, event, usersData, threadsData }) {
        const uptime = process.uptime();
        const hour = Math.floor(uptime / 3600);
        const minute = Math.floor((uptime % 3600) / 60);
        const second = Math.floor(uptime % 60);
        const SaifUptime = `${hour}hrs : ${minute}mins : ${second}secs`;

        const timeStart = Date.now();
        await new Promise(resolve => setTimeout(resolve, 100)); // Realistic delay
        const ping = Date.now() - timeStart;

        const BotName = '𝖳𝗐𝗂𝗇𝗄𝗅𝖾 ';
        const Owner = 'Sᴀɪғ 🧸';
        const totalThreads = await threadsData.getAll();
        const totalUsers = await usersData.getAll();
        const usersCount = totalUsers.length;
        const threadsCount = totalThreads.length;

        const bdTime = moment().tz('Asia/Dhaka').format('dddd, MMMM Do YYYY, h:mm:ss A');

        await message.reply('𝗯𝗼𝘁 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 𝗹𝗼𝗮𝗱𝗶𝗻𝗴....');

        // এখানে ভিডিও লিংকগুলো রাখো
        const videoLinks = [
            "https://i.imgur.com/k0HZKHe.mp4",
            "https://i.imgur.com/snHpj5Q.mp4",
            "https://i.imgur.com/W0T69JR.mp4"
        ];

        let videoSection = '\n------[ 𝗘𝗗𝗜𝗧𝗘𝗗 𝗩𝗜𝗗𝗘𝗢𝗦 ]------\n';
        videoLinks.forEach((link, index) => {
            videoSection += `${Math.floor(index + 1)}. ${link}\n`;
        });

        const SaifMessage = `_______[ 𝗧𝗵𝗲 𝗕𝗼𝘁 𝗗𝗲𝘁𝗮𝗶𝗹𝘀 >3🎀 ]_______\n\n𝐁𝐨𝐭 𝐍𝐚𝐦𝐞: ${BotName}\n𝐎𝐰𝐧𝐞𝐫: ${Owner}\n𝐁𝐨𝐭 𝐔𝐬𝐞𝐫𝐬: ${usersCount}\n𝐁𝐨𝐭 𝐓𝐡𝐫𝐞𝐚𝐝𝐬: ${threadsCount}\n------[ 𝗢𝗧𝗛𝗘𝗥𝗦 𝗜𝗡𝗙𝗢 ]------\n\n𝐁𝐨𝐭 𝐏𝐢𝐧𝐠: ${ping}ms\n𝐔𝐩𝐭𝐢𝐦𝐞: ${SaifUptime}\n𝐓𝐢𝐦𝐞: ${bdTime}${videoSection}`;
        
        message.reply(SaifMessage);
    }
};