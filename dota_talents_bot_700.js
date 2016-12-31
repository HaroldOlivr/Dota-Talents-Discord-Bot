var Discord = require("discord.js");
var bot = new Discord.Client();

try {
  require('./config.json')
} catch (e) {
  console.log('Config file not found')
  process.exit()
}
//
const config = require('./config.json')

bot.login(config.login)

bot.on('ready', () => {
  console.log('\nDota Talents Bot is now operational...')
});

bot.on("message", msg => {
  let prefix = "::";
  let stream = " -stream";

  //
  // H E R O E S
  //
  if (msg.content.startsWith(prefix + "abaddon") || msg.content.startsWith(prefix + "aba")) {
    msg.channel.sendMessage("http://i.imgur.com/PsI0npv.png");
  }
  //
  if (msg.content.startsWith(prefix + "alchemist") || msg.content.startsWith(prefix + "alch")) {
    msg.channel.sendMessage("http://i.imgur.com/ZCyPaZz.png");
  }
  //
  if (msg.content.startsWith(prefix + "ancient apparition") || msg.content.startsWith(prefix + "aa")) {
    msg.channel.sendMessage("http://i.imgur.com/4YwdN64.png");
  }
  //
  if (msg.content.startsWith(prefix + "anti mage") || msg.content.startsWith(prefix + "am")) {
    msg.channel.sendMessage("http://i.imgur.com/mXSQSQC.png");
  }
  //
  if (msg.content.startsWith(prefix + "arc warden") || msg.content.startsWith(prefix + "arc")) {
    msg.channel.sendMessage("http://i.imgur.com/eVLKq8t.png");
  }
  //
  if (msg.content.startsWith(prefix + "axe")) {
    msg.channel.sendMessage("http://i.imgur.com/ELuvX7F.png");
  }
  //
  if (msg.content.startsWith(prefix + "bane")) {
    msg.channel.sendMessage("http://i.imgur.com/h70EFX1.png");
  }
  //
  if (msg.content.startsWith(prefix + "batrider") || msg.content.startsWith(prefix + "bat")) {
    msg.channel.sendMessage("http://i.imgur.com/Vyi5QCh.png");
  }
  //
  if (msg.content.startsWith(prefix + "beastmaster") || msg.content.startsWith(prefix + "bm")) {
    msg.channel.sendMessage("http://i.imgur.com/B68Vet2.png");
  }
  //
  if (msg.content.startsWith(prefix + "bloodseeker") || msg.content.startsWith(prefix + "bs") || msg.content.startsWith(prefix + "bloodcyka")) {
    msg.channel.sendMessage("http://i.imgur.com/lcXSQj3.png");
  }
  //
  if (msg.content.startsWith(prefix + "bounty hunter") || msg.content.startsWith(prefix + "bh") || msg.content.startsWith(prefix + "bounty")) {
    msg.channel.sendMessage("http://i.imgur.com/3JqOzYb.png");
  }
  //
  if (msg.content.startsWith(prefix + "brewmaster") || msg.content.startsWith(prefix + "brew")) {
    msg.channel.sendMessage("http://i.imgur.com/2n9Gicc.png");
  }
  //
  if (msg.content.startsWith(prefix + "bristleback") || msg.content.startsWith(prefix + "bristle")) {
    msg.channel.sendMessage("http://i.imgur.com/OntZ6w2.png");
  }
  //
  if (msg.content.startsWith(prefix + "broodmother") || msg.content.startsWith(prefix + "brood") || msg.content.startsWith(prefix + "broodmama")) {
    msg.channel.sendMessage("http://i.imgur.com/WkLdeL3.png");
  }
  //
  if (msg.content.startsWith(prefix + "centaur")) {
    msg.channel.sendMessage("http://i.imgur.com/8QIJoqR.png");
  }
  //
  if (msg.content.startsWith(prefix + "chaos knight") || msg.content.startsWith(prefix + "ck")) {
    msg.channel.sendMessage("http://i.imgur.com/mMwWLvW.png");
  }
  //
  if (msg.content.startsWith(prefix + "chen") || msg.content.startsWith(prefix + "puppey")) {
    msg.channel.sendMessage("http://i.imgur.com/aCi7q20.png");
  }
  //
  if (msg.content.startsWith(prefix + "clinkz")) {
    msg.channel.sendMessage("http://i.imgur.com/UQ4jGjj.png");
  }
  //
  if (msg.content.startsWith(prefix + "clockwerk") || msg.content.startsWith(prefix + "clock")) {
    msg.channel.sendMessage("http://i.imgur.com/m15wyjk.png");
  }
  //
  if (msg.content.startsWith(prefix + "crystal maiden") || msg.content.startsWith(prefix + "cm")) {
    msg.channel.sendMessage("http://i.imgur.com/3IICaA9.png");
  }
  //
  if (msg.content.startsWith(prefix + "dark seer") || msg.content.startsWith(prefix + "ds")) {
    msg.channel.sendMessage("http://i.imgur.com/6ImatuK.png");
  }
  //
  if (msg.content.startsWith(prefix + "dazzle") || msg.content.startsWith(prefix + "dazz")) {
    msg.channel.sendMessage("http://i.imgur.com/25keowx.png");
  }
  //
  if (msg.content.startsWith(prefix + "death prophet") || msg.content.startsWith(prefix + "dp") || msg.content.startsWith(prefix + "krobelus")) {
    msg.channel.sendMessage("http://i.imgur.com/cXGd2oR.png");
  }
  //
  if (msg.content.startsWith(prefix + "disruptor")) {
    msg.channel.sendMessage("http://i.imgur.com/CiAjyvW.png");
  }
  //
  if (msg.content.startsWith(prefix + "doom") || msg.content.startsWith(prefix + "lucifer")) {
    msg.channel.sendMessage("http://i.imgur.com/GlicPnH.png");
  }
  //
  if (msg.content.startsWith(prefix + "dragon knight") || msg.content.startsWith(prefix + "dk")) {
    msg.channel.sendMessage("http://i.imgur.com/e3Mlap4.png");
  }
  //
  if (msg.content.startsWith(prefix + "drow ranger") || msg.content.startsWith(prefix + "drow")) {
    msg.channel.sendMessage("http://i.imgur.com/SsLmnOF.png");
  }
  //
  if (msg.content.startsWith(prefix + "earth spirit") || msg.content.startsWith(prefix + "earth")) {
    msg.channel.sendMessage("http://i.imgur.com/clnw3Uk.png");
  }
  //
  if (msg.content.startsWith(prefix + "earthshaker") || msg.content.startsWith(prefix + "es")) {
    msg.channel.sendMessage("http://i.imgur.com/viDRCGO.png");
  }
  //
  if (msg.content.startsWith(prefix + "elder titan") || msg.content.startsWith(prefix + "elder") || msg.content.startsWith(prefix + "et")) {
    msg.channel.sendMessage("http://i.imgur.com/4mHLhnw.png");
  }
  //
  if (msg.content.startsWith(prefix + "ember spirit") || msg.content.startsWith(prefix + "ember")) {
    msg.channel.sendMessage("http://i.imgur.com/LAQqKPh.png");
  }
  //
  if (msg.content.startsWith(prefix + "enchantress")) {
    msg.channel.sendMessage("http://i.imgur.com/LRLan7r.png");
  }
  //
  if (msg.content.startsWith(prefix + "enigma")) {
    msg.channel.sendMessage("http://i.imgur.com/rIFRNcF.png");
  }
  //
  if (msg.content.startsWith(prefix + "faceless void") || msg.content.startsWith(prefix + "faceless") || msg.content.startsWith(prefix + "void")) {
    msg.channel.sendMessage("http://i.imgur.com/zGeO4Sb.png");
  }
  //
  if (msg.content.startsWith(prefix + "gyrocopter") || msg.content.startsWith(prefix + "gyro")) {
    msg.channel.sendMessage("http://i.imgur.com/zVhiVWF.png");
  }
  //
  if (msg.content.startsWith(prefix + "huskar") || msg.content.startsWith(prefix + "husk")) {
    msg.channel.sendMessage("http://i.imgur.com/ilAMUWO.png");
  }
  //
  if (msg.content.startsWith(prefix + "invoker") || msg.content.startsWith(prefix + "invo") || msg.content.startsWith(prefix + "injoker") || msg.content.startsWith(prefix + "voker")) {
    msg.channel.sendMessage("http://i.imgur.com/NcTg35Z.png");
  }
  //
  if (msg.content.startsWith(prefix + "io") || msg.content.startsWith(prefix + "wisp")) {
    msg.channel.sendMessage("http://i.imgur.com/lJm7Dv4.png");
  }
  //
  if (msg.content.startsWith(prefix + "jakiro") || msg.content.startsWith(prefix + "jaki")) {
    msg.channel.sendMessage("http://i.imgur.com/4BqOMmz.png");
  }
  //
  if (msg.content.startsWith(prefix + "juggernaut") || msg.content.startsWith(prefix + "jugg") || msg.content.startsWith(prefix + "yurnero")) {
    msg.channel.sendMessage("http://i.imgur.com/9X5HNd7.png");
  }
  //
  if (msg.content.startsWith(prefix + "keeeper of the light") || msg.content.startsWith(prefix + "kotl") || msg.content.startsWith(prefix + "keeper")) {
    msg.channel.sendMessage("http://i.imgur.com/9SAjw8u.png");
  }
  //
  if (msg.content.startsWith(prefix + "kunkka")) {
    msg.channel.sendMessage("http://i.imgur.com/g5lORZt.png");
  }
  //
  if (msg.content.startsWith(prefix + "legion commander") || msg.content.startsWith(prefix + "lc") || msg.content.startsWith(prefix + "lcjungle")) {
    msg.channel.sendMessage("http://i.imgur.com/YLu8UQM.png");
  }
  //
  if (msg.content.startsWith(prefix + "leshrac") || msg.content.startsWith(prefix + "lesh")) {
    msg.channel.sendMessage("http://i.imgur.com/6brX4zr.png");
  }
  //
  if (msg.content.startsWith(prefix + "lich")) {
    msg.channel.sendMessage("http://i.imgur.com/zVBkxBw.png");
  }
  //
  if (msg.content.startsWith(prefix + "lifestealer") || msg.content.startsWith(prefix + "ls") || msg.content.startsWith(prefix + "naix")) {
    msg.channel.sendMessage("http://i.imgur.com/oM7hm2U.png");
  }
  //
  if (msg.content.startsWith(prefix + "lina")) {
    msg.channel.sendMessage("http://i.imgur.com/hDrymWu.png");
  }
  //
  if (msg.content.startsWith(prefix + "lion")) {
    msg.channel.sendMessage("http://i.imgur.com/aY5AfEL.png");
  }
  //
  if (msg.content.startsWith(prefix + "lone druid") || msg.content.startsWith(prefix + "lone")) {
    msg.channel.sendMessage("http://i.imgur.com/Gvm0ZfM.png");
  }
  //
  if (msg.content.startsWith(prefix + "luna")) {
    msg.channel.sendMessage("http://i.imgur.com/Hk7etaK.png");
  }
  //
  if (msg.content.startsWith(prefix + "lycan")) {
    msg.channel.sendMessage("http://i.imgur.com/8hHDK9p.png");
  }
  //
  if (msg.content.startsWith(prefix + "magnus")) {
    msg.channel.sendMessage("http://i.imgur.com/CA9kqnU.png");
  }
  //
  if (msg.content.startsWith(prefix + "medusa") || msg.content.startsWith(prefix + "dusa")) {
    msg.channel.sendMessage("http://i.imgur.com/UBbwBJq.png");
  }
  //
  if (msg.content.startsWith(prefix + "meepo")) {
    msg.channel.sendMessage("http://i.imgur.com/tm5Z7kw.png");
  }
  //
  if (msg.content.startsWith(prefix + "mirana") || msg.content.startsWith(prefix + "potm")) {
    msg.channel.sendMessage("http://i.imgur.com/60pjiHN.png");
  }
  //
  if (msg.content.startsWith(prefix + "monkey king") || msg.content.startsWith(prefix + "monkey") || msg.content.startsWith(prefix + "mk")) {
    msg.channel.sendMessage("http://i.imgur.com/T498f1H.png");
  }
  //
  if (msg.content.startsWith(prefix + "morphling") || msg.content.startsWith(prefix + "morph")) {
    msg.channel.sendMessage("http://i.imgur.com/cuIo7fj.png");
  }
  //
  if (msg.content.startsWith(prefix + "naga siren") || msg.content.startsWith(prefix + "naga")) {
    msg.channel.sendMessage("http://i.imgur.com/6h7lPEY.png");
  }
  //
  if (msg.content.startsWith(prefix + "nature's prophet") || msg.content.startsWith(prefix + "np") || msg.content.startsWith(prefix + "furion")) {
    msg.channel.sendMessage("http://i.imgur.com/oUV6cFO.png");
  }
  //
  if (msg.content.startsWith(prefix + "necrophos") || msg.content.startsWith(prefix + "necro")) {
    msg.channel.sendMessage("http://i.imgur.com/hrQFsrh.png");
  }
  //
  if (msg.content.startsWith(prefix + "night stalker") || msg.content.startsWith(prefix + "ns") || msg.content.startsWith(prefix + "balanar")) {
    msg.channel.sendMessage("http://i.imgur.com/45c9bl7.png");
  }
  //
  if (msg.content.startsWith(prefix + "nyx assasin") || msg.content.startsWith(prefix + "nyx")) {
    msg.channel.sendMessage("http://i.imgur.com/Oub89RF.png");
  }
  //
  if (msg.content.startsWith(prefix + "ogre magi") || msg.content.startsWith(prefix + "ogre")) {
    msg.channel.sendMessage("http://i.imgur.com/iFG7GW2.png");
  }
  //
  if (msg.content.startsWith(prefix + "omniknight") || msg.content.startsWith(prefix + "omni")) {
    msg.channel.sendMessage("http://i.imgur.com/n0Twenx.png");
  }
  //
  if (msg.content.startsWith(prefix + "oracle")) {
    msg.channel.sendMessage("http://i.imgur.com/aHpBdtT.png");
  }
  //
  if (msg.content.startsWith(prefix + "outworld devourer") || msg.content.startsWith(prefix + "od")) {
    msg.channel.sendMessage("http://i.imgur.com/cH2nrvK.png");
  }
  //
  if (msg.content.startsWith(prefix + "phantom assasin") || msg.content.startsWith(prefix + "pa")) {
    msg.channel.sendMessage("http://i.imgur.com/ZPvVd0J.png");
  }
  //
  if (msg.content.startsWith(prefix + "phantom lancer") || msg.content.startsWith(prefix + "pl")) {
    msg.channel.sendMessage("http://i.imgur.com/zeehV0d.png");
  }
  //
  if (msg.content.startsWith(prefix + "phoenix")) {
    msg.channel.sendMessage("http://i.imgur.com/QunuUIl.png");
  }
  //
  if (msg.content.startsWith(prefix + "puck")) {
    msg.channel.sendMessage("http://i.imgur.com/ibgoz0n.png");
  }
  //
  if (msg.content.startsWith(prefix + "pudge")) {
    msg.channel.sendMessage("http://i.imgur.com/naU0PF3.png");
  }
  //
  if (msg.content.startsWith(prefix + "pugna")) {
    msg.channel.sendMessage("http://i.imgur.com/9UOWyac.png");
  }
  //
  if (msg.content.startsWith(prefix + "queen of pain") || msg.content.startsWith(prefix + "qop")) {
    msg.channel.sendMessage("http://i.imgur.com/J3CLwMY.png");
  }
  //
  if (msg.content.startsWith(prefix + "razor")) {
    msg.channel.sendMessage("http://i.imgur.com/XNA2aCl.png");
  }
  //
  if (msg.content.startsWith(prefix + "riki")) {
    msg.channel.sendMessage("http://i.imgur.com/thUWJh3.png");
  }
  //
  if (msg.content.startsWith(prefix + "rubick")) {
    msg.channel.sendMessage("http://i.imgur.com/9p1rS1p.png");
  }
  //
  if (msg.content.startsWith(prefix + "sand king") || msg.content.startsWith(prefix + "sk")) {
    msg.channel.sendMessage("http://i.imgur.com/MKn3xGR.png");
  }
  //
  if (msg.content.startsWith(prefix + "shadow demon") || msg.content.startsWith(prefix + "sd")) {
    msg.channel.sendMessage("http://i.imgur.com/s7KkhVA.png");
  }
  //
  if (msg.content.startsWith(prefix + "shadow fiend") || msg.content.startsWith(prefix + "sf")) {
    msg.channel.sendMessage("http://i.imgur.com/SXGNRSt.png");
  }
  //
  if (msg.content.startsWith(prefix + "shadow shaman") || msg.content.startsWith(prefix + "shaman")) {
    msg.channel.sendMessage("http://i.imgur.com/uvSqA3w.png");
  }
  //
  if (msg.content.startsWith(prefix + "silencer") || msg.content.startsWith(prefix + "silence")) {
    msg.channel.sendMessage("http://i.imgur.com/WiOnl5S.png");
  }
  //
  if (msg.content.startsWith(prefix + "skywrath mage") || msg.content.startsWith(prefix + "Sky")) {
    msg.channel.sendMessage("http://i.imgur.com/ehelLK9.png");
  }
  //
  if (msg.content.startsWith(prefix + "slardar")) {
    msg.channel.sendMessage("http://i.imgur.com/sm0QhNP.png");
  }
  //
  if (msg.content.startsWith(prefix + "slark")) {
    msg.channel.sendMessage("http://i.imgur.com/sHpelnP.png");
  }
  //
  if (msg.content.startsWith(prefix + "sniper")) {
    msg.channel.sendMessage("http://i.imgur.com/d9cmubf.png");
  }
  //
  if (msg.content.startsWith(prefix + "spectre") || msg.content.startsWith(prefix + "spec")) {
    msg.channel.sendMessage("http://i.imgur.com/kf0PQHL.png");
  }
  //
  if (msg.content.startsWith(prefix + "spirit breaker") || msg.content.startsWith(prefix + "sb")) {
    msg.channel.sendMessage("http://i.imgur.com/0X57piK.png");
  }
  //
  if (msg.content.startsWith(prefix + "storm spirit") || msg.content.startsWith(prefix + "storm")) {
    msg.channel.sendMessage("http://i.imgur.com/vrLzBsu.png");
  }
  //
  if (msg.content.startsWith(prefix + "sven")) {
    msg.channel.sendMessage("http://i.imgur.com/UNabDFk.png");
  }
  //
  if (msg.content.startsWith(prefix + "techies")) {
    msg.channel.sendMessage("http://i.imgur.com/1yopYaa.png");
  }
  //
  if (msg.content.startsWith(prefix + "templar assasin") || msg.content.startsWith(prefix + "ta")) {
    msg.channel.sendMessage("http://i.imgur.com/cNmqLaX.png");
  }
  //
  if (msg.content.startsWith(prefix + "terrorblade") || msg.content.startsWith(prefix + "terror") || msg.content.startsWith(prefix + "tb")) {
    msg.channel.sendMessage("http://i.imgur.com/9wVHHV5.png");
  }
  //
  if (msg.content.startsWith(prefix + "tidehunter") || msg.content.startsWith(prefix + "tide")) {
    msg.channel.sendMessage("http://i.imgur.com/wNNm9pA.png");
  }
  //
  if (msg.content.startsWith(prefix + "timbersaw") || msg.content.startsWith(prefix + "timber")) {
    msg.channel.sendMessage("http://i.imgur.com/0JlgZYi.png");
  }
  //
  if (msg.content.startsWith(prefix + "tinker")) {
    msg.channel.sendMessage("http://i.imgur.com/gqgr3iG.png");
  }
  //
  if (msg.content.startsWith(prefix + "tiny")) {
    msg.channel.sendMessage("http://i.imgur.com/jBOyb2D.png");
  }
  //
  if (msg.content.startsWith(prefix + "treant protector") || msg.content.startsWith(prefix + "treant")) {
    msg.channel.sendMessage("http://i.imgur.com/mqwoHIX.png");
  }
  //
  if (msg.content.startsWith(prefix + "troll warlord") || msg.content.startsWith(prefix + "troll")) {
    msg.channel.sendMessage("http://i.imgur.com/edChpIp.png");
  }
  //
  if (msg.content.startsWith(prefix + "tusk")) {
    msg.channel.sendMessage("http://i.imgur.com/yw9r7ee.png");
  }
  //
  if (msg.content.startsWith(prefix + "underlord") || msg.content.startsWith(prefix + "pitlord") || msg.content.startsWith(prefix + "pit")) {
    msg.channel.sendMessage("http://i.imgur.com/AH8VifT.png");
  }
  //
  if (msg.content.startsWith(prefix + "undying")) {
    msg.channel.sendMessage("http://i.imgur.com/0y0onKf.png");
  }
  //
  if (msg.content.startsWith(prefix + "ursa")) {
    msg.channel.sendMessage("http://i.imgur.com/aPUHIne.png");
  }
  //
  if (msg.content.startsWith(prefix + "vengeful spirit") || msg.content.startsWith(prefix + "venge") || msg.content.startsWith(prefix + "shen") || msg.content.startsWith(prefix + "shendelzare silkwood")) {
    msg.channel.sendMessage("http://i.imgur.com/qJTloVN.png");
  }
  //
  if (msg.content.startsWith(prefix + "venomancer") || msg.content.startsWith(prefix + "veno")) {
    msg.channel.sendMessage("http://i.imgur.com/CSySQhw.png");
  }
  //
  if (msg.content.startsWith(prefix + "viper")) {
    msg.channel.sendMessage("http://i.imgur.com/WnVR24T.png");
  }
  //
  if (msg.content.startsWith(prefix + "visage")) {
    msg.channel.sendMessage("http://i.imgur.com/2frAFIl.png");
  }
  //
  if (msg.content.startsWith(prefix + "warlock")) {
    msg.channel.sendMessage("http://i.imgur.com/NnLqxMN.png");
  }
  //
  if (msg.content.startsWith(prefix + "weaver")) {
    msg.channel.sendMessage("http://i.imgur.com/7RMlsm5.png");
  }
  //
  if (msg.content.startsWith(prefix + "windranger") || msg.content.startsWith(prefix + "wind") || msg.content.startsWith(prefix + "windrunner")) {
    msg.channel.sendMessage("http://i.imgur.com/jbM8wTS.png");
  }
  //
  if (msg.content.startsWith(prefix + "winter wyvern") || msg.content.startsWith(prefix + "wyvern")) {
    msg.channel.sendMessage("http://i.imgur.com/JDVeZT6.png");
  }
  //
  if (msg.content.startsWith(prefix + "witch doctor") || msg.content.startsWith(prefix + "wd")) {
    msg.channel.sendMessage("http://i.imgur.com/zLyFJ3c.png");
  }
  //
  if (msg.content.startsWith(prefix + "wraith king") || msg.content.startsWith(prefix + "wk")) {
    msg.channel.sendMessage("http://i.imgur.com/5HORT4x.png");
  }
  //
  if (msg.content.startsWith(prefix + "zeus")) {
    msg.channel.sendMessage("http://i.imgur.com/P37rUhi.png");
  }


  // I T E M S
  //
  if (msg.content.startsWith(prefix + "clarity")) {
    msg.channel.sendMessage("http://i.imgur.com/PeDR7SS.png");
  }
  //
  if (msg.content.startsWith(prefix + "faerie fire") || msg.content.startsWith(prefix + "faerie")) {
    msg.channel.sendMessage("http://i.imgur.com/WVv08pb.png");
  }
  //
  if (msg.content.startsWith(prefix + "enchanted mango") || msg.content.startsWith(prefix + "mango")) {
    msg.channel.sendMessage("http://i.imgur.com/RTJ7sWv.png");
  }
  //
  if (msg.content.startsWith(prefix + "tango")) {
    msg.channel.sendMessage("http://i.imgur.com/nwxdkZ2.png");
  }
  //
  if (msg.content.startsWith(prefix + "healing salve") || msg.content.startsWith(prefix + "salve")) {
    msg.channel.sendMessage("http://i.imgur.com/NecfWhv.png");
  }
  //
  if (msg.content.startsWith(prefix + "smoke of deceit") || msg.content.startsWith(prefix + "smoke")) {
    msg.channel.sendMessage("http://i.imgur.com/zYKV8L2.png");
  }
  //
  if (msg.content.startsWith(prefix + "town portal scroll") || msg.content.startsWith(prefix + "tp") || msg.content.startsWith(prefix + "scroll")) {
    msg.channel.sendMessage("http://i.imgur.com/DPeYsl7.png");
  }
  //
  if (msg.content.startsWith(prefix + "dust of appearance") || msg.content.startsWith(prefix + "dust")) {
    msg.channel.sendMessage("http://i.imgur.com/dXyxv2z.png");
  }
  //
  if (msg.content.startsWith(prefix + "dust")) {
    msg.channel.sendMessage("http://i.imgur.com/dXyxv2z.png");
  }
  //
  if (msg.content.startsWith(prefix + "animal courier") || msg.content.startsWith(prefix + "cour")) {
    msg.channel.sendMessage("http://i.imgur.com/6mNOuhf.png");
  }
  //
  if (msg.content.startsWith(prefix + "animal courier") || msg.content.startsWith(prefix + "cour")) {
    msg.channel.sendMessage("http://i.imgur.com/QzbQMvt.png");
  }
  //
  if (msg.content.startsWith(prefix + "obs")) {
    msg.channel.sendMessage("http://i.imgur.com/lCg4gsh.png");
  }
  //
  if (msg.content.startsWith(prefix + "ward")) {
    msg.channel.sendMessage("http://i.imgur.com/lCg4gsh.png");
  }
  //
  if (msg.content.startsWith(prefix + "sentry")) {
    msg.channel.sendMessage("http://i.imgur.com/EYvOJct.png");
  }
  //
  if (msg.content.startsWith(prefix + "ward")) {
    msg.channel.sendMessage("http://i.imgur.com/EYvOJct.png");
  }
  //
  if (msg.content.startsWith(prefix + "tome")) {
    msg.channel.sendMessage("http://i.imgur.com/xvGsOZt.png");
  }
  //
  if (msg.content.startsWith(prefix + "bottle")) {
    msg.channel.sendMessage("http://i.imgur.com/5B2fbhF.png");
  }
  //
  if (msg.content.startsWith(prefix + "branch")) {
    msg.channel.sendMessage("http://i.imgur.com/xKTWl2N.png");
  }
  //
  if (msg.content.startsWith(prefix + "gauntlets of strength") || msg.content.startsWith(prefix + "gauntlets")) {
    msg.channel.sendMessage("http://i.imgur.com/GbrlJ2t.png");
  }
  //
  if (msg.content.startsWith(prefix + "slippers of agility") || msg.content.startsWith(prefix + "slippers")) {
    msg.channel.sendMessage("http://i.imgur.com/cJlpLIO.png");
  }
  //
  if (msg.content.startsWith(prefix + "mantle of intelligence") || msg.content.startsWith(prefix + "mantle")) {
    msg.channel.sendMessage("http://i.imgur.com/ZMI8IPE.png");
  }
  //
  if (msg.content.startsWith(prefix + "circlet")) {
    msg.channel.sendMessage("http://i.imgur.com/LbYhZ5v.png");
  }
  //
  if (msg.content.startsWith(prefix + "belt of strength") || msg.content.startsWith(prefix + "belt")) {
    msg.channel.sendMessage("http://i.imgur.com/2fcIriL.png");
  }
  //
  if (msg.content.startsWith(prefix + "band of elvenskin") || msg.content.startsWith(prefix + "band") || msg.content.startsWith(prefix + "elvenskin")) {
    msg.channel.sendMessage("http://i.imgur.com/qtzW0yr.png");
  }
  //
  if (msg.content.startsWith(prefix + "robe of the magi") || msg.content.startsWith(prefix + "robe")) {
    msg.channel.sendMessage("http://i.imgur.com/0GL3FJ9.png");
  }
  //
  if (msg.content.startsWith(prefix + "ogre club") || msg.content.startsWith(prefix + "club")) {
    msg.channel.sendMessage("http://i.imgur.com/OZoume3.png");
  }
  //
  if (msg.content.startsWith(prefix + "blade of alacrity") || msg.content.startsWith(prefix + "alacrity")) {
    msg.channel.sendMessage("http://i.imgur.com/iSeHKfs.png");
  }
  //
  if (msg.content.startsWith(prefix + "staff of wizardry") || msg.content.startsWith(prefix + "wizardry")) {
    msg.channel.sendMessage("http://i.imgur.com/Ya7dBcJ.png");
  }
  //
  if (msg.content.startsWith(prefix + "ring of protection")) {
    msg.channel.sendMessage("http://i.imgur.com/YtYPcH6.png");
  }
  //
  if (msg.content.startsWith(prefix + "stout shield") || msg.content.startsWith(prefix + "stout")) {
    msg.channel.sendMessage("http://i.imgur.com/mbqXxnj.png");
  }
  //
  if (msg.content.startsWith(prefix + "quelling blade") || msg.content.startsWith(prefix + "quell")) {
    msg.channel.sendMessage("http://i.imgur.com/SW2oIPL.png");
  }
  //
  if (msg.content.startsWith(prefix + "infused raindrop") || msg.content.startsWith(prefix + "raindrop")) {
    msg.channel.sendMessage("http://i.imgur.com/mjJSC6n.png");
  }
  //
  if (msg.content.startsWith(prefix + "blight stone") || msg.content.startsWith(prefix + "blight")) {
    msg.channel.sendMessage("http://i.imgur.com/kuODqSw.png");
  }
  //
  if (msg.content.startsWith(prefix + "orb of venom") || msg.content.startsWith(prefix + "venom orb") || msg.content.startsWith(prefix + "oov")) {
    msg.channel.sendMessage("http://i.imgur.com/bT45zcq.png");
  }
  //
  if (msg.content.startsWith(prefix + "blades of attack")) {
    msg.channel.sendMessage("http://i.imgur.com/TAkdC4v.png");
  }
  //
  if (msg.content.startsWith(prefix + "chainmail")) {
    msg.channel.sendMessage("http://i.imgur.com/2JniaRv.png");
  }
  //
  if (msg.content.startsWith(prefix + "quarterstaff")) {
    msg.channel.sendMessage("http://i.imgur.com/PfID43e.png");
  }
  //
  if (msg.content.startsWith(prefix + "helm of ironwill")) {
    msg.channel.sendMessage("http://i.imgur.com/UgDQMgR.png");
  }
  //
  if (msg.content.startsWith(prefix + "broadsword")) {
    msg.channel.sendMessage("http://i.imgur.com/F0dhx9E.png");
  }
  //
  if (msg.content.startsWith(prefix + "claymore")) {
    msg.channel.sendMessage("http://i.imgur.com/f19RZYh.png");
  }
  //
  if (msg.content.startsWith(prefix + "javelin")) {
    msg.channel.sendMessage("http://i.imgur.com/yzMncL8.png");
  }
  //
  if (msg.content.startsWith(prefix + "mithril hammer") || msg.content.startsWith(prefix + "mithril")) {
    msg.channel.sendMessage("http://i.imgur.com/fWLaR8I.png");
  }
  //
  if (msg.content.startsWith(prefix + "wind lace") || msg.content.startsWith(prefix + "lace")) {
    msg.channel.sendMessage("http://i.imgur.com/ami2qo0.png");
  }
  //
  if (msg.content.startsWith(prefix + "magic stick") || msg.content.startsWith(prefix + "stick")) {
    msg.channel.sendMessage("http://i.imgur.com/9jgunip.png");
  }
  //
  if (msg.content.startsWith(prefix + "sage's mask") || msg.content.startsWith(prefix + "sage")) {
    msg.channel.sendMessage("http://i.imgur.com/HldfOpj.png");
  }
  //
  if (msg.content.startsWith(prefix + "ring of regen") || msg.content.startsWith(prefix + "regen")) {
    msg.channel.sendMessage("http://i.imgur.com/xsnmyhu.png");
  }
  //
  if (msg.content.startsWith(prefix + "boots of speed") || msg.content.startsWith(prefix + "boots")) {
    msg.channel.sendMessage("http://i.imgur.com/l8Ph3Lu.png");
  }
  //
  if (msg.content.startsWith(prefix + "gloves of haste") || msg.content.startsWith(prefix + "gloves")) {
    msg.channel.sendMessage("http://i.imgur.com/pfmffLT.png");
  }
  //
  if (msg.content.startsWith(prefix + "cloak")) {
    msg.channel.sendMessage("http://i.imgur.com/3995jIL.png");
  }
  //
  if (msg.content.startsWith(prefix + "ring of health")) {
    msg.channel.sendMessage("http://i.imgur.com/MIVzBHx.png");
  }
  //
  if (msg.content.startsWith(prefix + "void stone")) {
    msg.channel.sendMessage("http://i.imgur.com/D0Kw3R7.png");
  }
  //
  if (msg.content.startsWith(prefix + "gem of true sight") || msg.content.startsWith(prefix + "gem")) {
    msg.channel.sendMessage("http://i.imgur.com/aedWzQX.png");
  }
  //
  if (msg.content.startsWith(prefix + "morbid mask") || msg.content.startsWith(prefix + "morbid")) {
    msg.channel.sendMessage("http://i.imgur.com/23HnMdF.png");
  }
  //
  if (msg.content.startsWith(prefix + "shadow amulet") || msg.content.startsWith(prefix + "amulet")) {
    msg.channel.sendMessage("http://i.imgur.com/OmVS5RE.png");
  }
  //
  if (msg.content.startsWith(prefix + "ghost scepter")) {
    msg.channel.sendMessage("http://i.imgur.com/eBrInQL.png");
  }
  //
  if (msg.content.startsWith(prefix + "blink dagger") || msg.content.startsWith(prefix + "blink")) {
    msg.channel.sendMessage("http://i.imgur.com/CrKkC1S.png");
  }
  //
  if (msg.content.startsWith(prefix + "energy booster")) {
    msg.channel.sendMessage("http://i.imgur.com/w8C1Ucg.png");
  }
  //
  if (msg.content.startsWith(prefix + "vitality booster")) {
    msg.channel.sendMessage("http://i.imgur.com/aZgkgNO.png");
  }
  //
  if (msg.content.startsWith(prefix + "point booster")) {
    msg.channel.sendMessage("http://i.imgur.com/a70pQ4v.png");
  }
  //
  if (msg.content.startsWith(prefix + "platemail")) {
    msg.channel.sendMessage("http://i.imgur.com/JqzKhXK.png");
  }
  //
  if (msg.content.startsWith(prefix + "talisman of evasion") || msg.content.startsWith(prefix + "talisman")) {
    msg.channel.sendMessage("http://i.imgur.com/GyFDFgR.png");
  }
  //
  if (msg.content.startsWith(prefix + "hyperstone")) {
    msg.channel.sendMessage("http://i.imgur.com/dDFplNs.png");
  }
  //
  if (msg.content.startsWith(prefix + "ultimate orb")) {
    msg.channel.sendMessage("http://i.imgur.com/IDeDHpB.png");
  }
  //
  if (msg.content.startsWith(prefix + "ult orb")) {
    msg.channel.sendMessage("http://i.imgur.com/IDeDHpB.png");
  }
  //
  if (msg.content.startsWith(prefix + "demon edge")) {
    msg.channel.sendMessage("http://i.imgur.com/QbInCF5.png");
  }
  //
  if (msg.content.startsWith(prefix + "mystic staff") || msg.content.startsWith(prefix + "mystic")) {
    msg.channel.sendMessage("http://i.imgur.com/3gOMpY7.png");
  }
  //
  if (msg.content.startsWith(prefix + "reaver")) {
    msg.channel.sendMessage("http://i.imgur.com/ezZuJq7.png");
  }
  //
  if (msg.content.startsWith(prefix + "eaglesong")) {
    msg.channel.sendMessage("http://i.imgur.com/iqtP18o.png");
  }
  //
  if (msg.content.startsWith(prefix + "sacred relic")) {
    msg.channel.sendMessage("http://i.imgur.com/K64pYF6.png");
  }
  //
  if (msg.content.startsWith(prefix + "magic wand") || msg.content.startsWith(prefix + "wand")) {
    msg.channel.sendMessage("http://i.imgur.com/lViajco.png");
  }
  //
  if (msg.content.startsWith(prefix + "null talisman")) {
    msg.channel.sendMessage("http://i.imgur.com/2RiyzFJ.png");
  }
  //
  if (msg.content.startsWith(prefix + "wraith band")) {
    msg.channel.sendMessage("http://i.imgur.com/mcOvXBa.png");
  }
  //
  if (msg.content.startsWith(prefix + "poor man's shield")) {
    msg.channel.sendMessage("http://i.imgur.com/EVHbYwa.png");
  }
  //
  if (msg.content.startsWith(prefix + "shield")) {
    msg.channel.sendMessage("http://i.imgur.com/EVHbYwa.png");
  }
  //
  if (msg.content.startsWith(prefix + "bracer")) {
    msg.channel.sendMessage("http://i.imgur.com/RBmRrPy.png");
  }
  //
  if (msg.content.startsWith(prefix + "soul ring")) {
    msg.channel.sendMessage("http://i.imgur.com/L7FrD3M.png");
  }
  //
  if (msg.content.startsWith(prefix + "phase boots") || msg.content.startsWith(prefix + "phase")) {
    msg.channel.sendMessage("http://i.imgur.com/G9DwL6X.png");
  }
  //
  if (msg.content.startsWith(prefix + "power treads") || msg.content.startsWith(prefix + "treads")) {
    msg.channel.sendMessage("http://i.imgur.com/vytI7xt.png");
  }
  //
  if (msg.content.startsWith(prefix + "oblivion staff") || msg.content.startsWith(prefix + "oblivion")) {
    msg.channel.sendMessage("http://i.imgur.com/NrOFYSY.png");
  }
  //
  if (msg.content.startsWith(prefix + "perseverance")) {
    msg.channel.sendMessage("http://i.imgur.com/TBGlX7r.png");
  }
  //
  if (msg.content.startsWith(prefix + "hand of midas") || msg.content.startsWith(prefix + "midas")) {
    msg.channel.sendMessage("http://i.imgur.com/YUlyZ3C.png");
  }
  //
  if (msg.content.startsWith(prefix + "boots of travel") || msg.content.startsWith(prefix + "bot")) {
    msg.channel.sendMessage("http://i.imgur.com/EVwWNEL.png");
  }
  //
  if (msg.content.startsWith(prefix + "moon shard") || msg.content.startsWith(prefix + "shard")) {
    msg.channel.sendMessage("http://i.imgur.com/T0kWNfI.png");
  }
  //
  if (msg.content.startsWith(prefix + "ring of basilius") || msg.content.startsWith(prefix + "basilius")) {
    msg.channel.sendMessage("http://i.imgur.com/A6xvqO6.png");
  }
  //
  if (msg.content.startsWith(prefix + "iron talon") || msg.content.startsWith(prefix + "talon")) {
    msg.channel.sendMessage("http://i.imgur.com/g2bYU2y.png");
  }
  //
  if (msg.content.startsWith(prefix + "headdress")) {
    msg.channel.sendMessage("http://i.imgur.com/VRJx6qE.png");
  }
  //
  if (msg.content.startsWith(prefix + "buckler")) {
    msg.channel.sendMessage("http://i.imgur.com/rPjo1MN.png");
  }
  //
  if (msg.content.startsWith(prefix + "urn of shadows") || msg.content.startsWith(prefix + "urn")) {
    msg.channel.sendMessage("http://i.imgur.com/zgtTPGB.png");
  }
  //
  if (msg.content.startsWith(prefix + "tranquil boots") || msg.content.startsWith(prefix + "tranquil") || msg.content.startsWith(prefix + "tranqs")) {
    msg.channel.sendMessage("http://i.imgur.com/cyhAHAV.png");
  }
  //
  if (msg.content.startsWith(prefix + "ring of aquila") || msg.content.startsWith(prefix + "aquila")) {
    msg.channel.sendMessage("http://i.imgur.com/IhZZ0uO.png");
  }
  //
  if (msg.content.startsWith(prefix + "medallion of courage") || msg.content.startsWith(prefix + "medallion")) {
    msg.channel.sendMessage("http://i.imgur.com/JIAbUvk.png");
  }
  //
  if (msg.content.startsWith(prefix + "arcane boots") || msg.content.startsWith(prefix + "arcane") || msg.content.startsWith(prefix + "mana boots")) {
    msg.channel.sendMessage("http://i.imgur.com/42MFw1K.png");
  }
  //
  if (msg.content.startsWith(prefix + "drum of endurance") || msg.content.startsWith(prefix + "drums")) {
    msg.channel.sendMessage("http://i.imgur.com/IwEucvc.png");
  }
  //
  if (msg.content.startsWith(prefix + "mekansm") || msg.content.startsWith(prefix + "meka")) {
    msg.channel.sendMessage("http://i.imgur.com/rWfZAAx.png");
  }
  //
  if (msg.content.startsWith(prefix + "vladimir's offering") || msg.content.startsWith(prefix + "vlads")) {
    msg.channel.sendMessage("http://i.imgur.com/vCGt1nN.png");
  }
  //
  if (msg.content.startsWith(prefix + "pipe of insight") || msg.content.startsWith(prefix + "pipe")) {
    msg.channel.sendMessage("http://i.imgur.com/YTbvgAc.png");
  }
  //
  if (msg.content.startsWith(prefix + "guardian greaves") || msg.content.startsWith(prefix + "greaves")) {
    msg.channel.sendMessage("http://i.imgur.com/1PMq7NY.png");
  }
  //
  if (msg.content.startsWith(prefix + "glimmer cape") || msg.content.startsWith(prefix + "glimmer")) {
    msg.channel.sendMessage("http://i.imgur.com/o04jpEP.png");
  }
  //
  if (msg.content.startsWith(prefix + "force staff") || msg.content.startsWith(prefix + "force")) {
    msg.channel.sendMessage("http://i.imgur.com/EcgPNbq.png");
  }
  //
  if (msg.content.startsWith(prefix + "veil of dicord") || msg.content.startsWith(prefix + "veil")) {
    msg.channel.sendMessage("http://i.imgur.com/yw6hxSc.png");
  }
  //
  if (msg.content.startsWith(prefix + "aether lens") || msg.content.startsWith(prefix + "aether")) {
    msg.channel.sendMessage("http://i.imgur.com/Fruqiia.png");
  }
  //
  if (msg.content.startsWith(prefix + "necronomicion")) {
    msg.channel.sendMessage("http://i.imgur.com/kAEO5i0.png");
  }
  //
  if (msg.content.startsWith(prefix + "dagon")) {
    msg.channel.sendMessage("http://i.imgur.com/laDjLvR.png");
  }
  //
  if (msg.content.startsWith(prefix + "eul's scepter of divinity") || msg.content.startsWith(prefix + "euls")) {
    msg.channel.sendMessage("http://i.imgur.com/TiPTPQ3.png");
  }
  //
  if (msg.content.startsWith(prefix + "solar crest") || msg.content.startsWith(prefix + "solar")) {
    msg.channel.sendMessage("http://i.imgur.com/LalThBY.png");
  }
  //
  if (msg.content.startsWith(prefix + "rod of atos") || msg.content.startsWith(prefix + "atos")) {
    msg.channel.sendMessage("http://i.imgur.com/3turpZG.png");
  }
  //
  if (msg.content.startsWith(prefix + "orchid malevolence") || msg.content.startsWith(prefix + "orchid")) {
    msg.channel.sendMessage("http://i.imgur.com/rEyBxVH.png");
  }
  //
  if (msg.content.startsWith(prefix + "aghanim's scepter") || msg.content.startsWith(prefix + "aghs") || msg.content.startsWith(prefix + "scepter")) {
    msg.channel.sendMessage("http://i.imgur.com/d8zkIvF.png");
  }
  //
  if (msg.content.startsWith(prefix + "refresher orb") || msg.content.startsWith(prefix + "refresher")) {
    msg.channel.sendMessage("http://i.imgur.com/8eVzeRX.png");
  }
  //
  if (msg.content.startsWith(prefix + "scythe of vyse") || msg.content.startsWith(prefix + "scythe") || msg.content.startsWith(prefix + "vyse")) {
    msg.channel.sendMessage("http://i.imgur.com/B7GXzkj.png");
  } //
  if (msg.content.startsWith(prefix + "octarine core") || msg.content.startsWith(prefix + "octarine")) {
    msg.channel.sendMessage("http://i.imgur.com/GCXpF73.png");
  } //
  if (msg.content.startsWith(prefix + "hood of defiance") || msg.content.startsWith(prefix + "defiance")) {
    msg.channel.sendMessage("http://i.imgur.com/frBDsim.png");
  } //
  if (msg.content.startsWith(prefix + "vanguard")) {
    msg.channel.sendMessage("http://i.imgur.com/8d8TfVS.png");
  } //
  if (msg.content.startsWith(prefix + "blade mail") || msg.content.startsWith(prefix + "blademail")) {
    msg.channel.sendMessage("http://i.imgur.com/j6o5k5m.png");
  } //
  if (msg.content.startsWith(prefix + "soul booster")) {
    msg.channel.sendMessage("http://i.imgur.com/JjMM3eE.png");
  } //
  if (msg.content.startsWith(prefix + "crimson guard") || msg.content.startsWith(prefix + "crimson")) {
    msg.channel.sendMessage("http://i.imgur.com/KS4QwQG.png");
  } //
  if (msg.content.startsWith(prefix + "black king bar") || msg.content.startsWith(prefix + "bkb")) {
    msg.channel.sendMessage("http://i.imgur.com/fJUJrTG.png");
  } //
  if (msg.content.startsWith(prefix + "lotus orb") || msg.content.startsWith(prefix + "lotus")) {
    msg.channel.sendMessage("http://i.imgur.com/QGwegdb.png");
  } //
  if (msg.content.startsWith(prefix + "shiva's guard") || msg.content.startsWith(prefix + "shivas")) {
    msg.channel.sendMessage("http://i.imgur.com/NZCVaPz.png");
  } //
  if (msg.content.startsWith(prefix + "bloodstone")) {
    msg.channel.sendMessage("http://i.imgur.com/EgxnWzO.png");
  } //
  if (msg.content.startsWith(prefix + "manta style") || msg.content.startsWith(prefix + "manta")) {
    msg.channel.sendMessage("http://i.imgur.com/2v6YZdV.png");
  } //
  if (msg.content.startsWith(prefix + "linken's sphere") || msg.content.startsWith(prefix + "linkens")) {
    msg.channel.sendMessage("http://i.imgur.com/728PWgG.png");
  } //
  if (msg.content.startsWith(prefix + "hurricane pike") || msg.content.startsWith(prefix + "pike")) {
    msg.channel.sendMessage("http://i.imgur.com/90p00Pu.png");
  } //
  if (msg.content.startsWith(prefix + "assault cuirass") || msg.content.startsWith(prefix + "cuirass")) {
    msg.channel.sendMessage("http://i.imgur.com/n7hdDfZ.png");
  } //
  if (msg.content.startsWith(prefix + "heart of tarrasque") || msg.content.startsWith(prefix + "heart") || msg.content.startsWith(prefix + "tarrasque")) {
    msg.channel.sendMessage("http://i.imgur.com/V0b830l.png");
  } //
  if (msg.content.startsWith(prefix + "crystalys")) {
    msg.channel.sendMessage("http://i.imgur.com/gLbh2xX.png");
  } //
  if (msg.content.startsWith(prefix + "armlet of morgiggian") || msg.content.startsWith(prefix + "armlet")) {
    msg.channel.sendMessage("http://i.imgur.com/4RAhOuZ.png");
  } //
  if (msg.content.startsWith(prefix + "shadow blade")) {
    msg.channel.sendMessage("http://i.imgur.com/81WfBaG.png");
  } //
  if (msg.content.startsWith(prefix + "skull basher") || msg.content.startsWith(prefix + "basher")) {
    msg.channel.sendMessage("http://i.imgur.com/ZtTO9ia.png");
  } //
  if (msg.content.startsWith(prefix + "battle fury") || msg.content.startsWith(prefix + "battlefury") || msg.content.startsWith(prefix + "bf")) {
    msg.channel.sendMessage("http://i.imgur.com/iXqzAme.png");
  } //
  if (msg.content.startsWith(prefix + "ethereal blade") || msg.content.startsWith(prefix + "ethereal")) {
    msg.channel.sendMessage("http://i.imgur.com/55Z0OmT.png");
  } //
  if (msg.content.startsWith(prefix + "divine rapier") || msg.content.startsWith(prefix + "divine") || msg.content.startsWith(prefix + "rapier")) {
    msg.channel.sendMessage("http://i.imgur.com/8SvioRt.png");
  } //
  if (msg.content.startsWith(prefix + "abyssal blade") || msg.content.startsWith(prefix + "abyssal")) {
    msg.channel.sendMessage("http://i.imgur.com/S2h1XVm.png");
  } //
  if (msg.content.startsWith(prefix + "bloodthorn")) {
    msg.channel.sendMessage("http://i.imgur.com/KWSEfsH.png");
  } //
  if (msg.content.startsWith(prefix + "mask of madness") || msg.content.startsWith(prefix + "mom")) {
    msg.channel.sendMessage("http://i.imgur.com/QooIrzJ.png");
  } //
  if (msg.content.startsWith(prefix + "helm of dominator") || msg.content.startsWith(prefix + "hotd")) {
    msg.channel.sendMessage("http://i.imgur.com/KkY2Csx.png");
  } //
  if (msg.content.startsWith(prefix + "dragon lance") || msg.content.startsWith(prefix + "lance")) {
    msg.channel.sendMessage("http://i.imgur.com/YcubBW1.png");
  } //
  if (msg.content.startsWith(prefix + "sage")) {
    msg.channel.sendMessage("http://i.imgur.com/Qx41nLj.png");
  } //
  if (msg.content.startsWith(prefix + "yasha")) {
    msg.channel.sendMessage("http://i.imgur.com/DNU9A6h.png");
  } //
  if (msg.content.startsWith(prefix + "echo sabre") || msg.content.startsWith(prefix + "sabre")) {
    msg.channel.sendMessage("http://i.imgur.com/1kP65bD.png");
  } //
  if (msg.content.startsWith(prefix + "maelstrom")) {
    msg.channel.sendMessage("http://i.imgur.com/YWK1vYH.png");
  } //
  if (msg.content.startsWith(prefix + "diffusal blade") || msg.content.startsWith(prefix + "diffusal")) {
    msg.channel.sendMessage("http://i.imgur.com/AeiMOQy.png");
  } //
  if (msg.content.startsWith(prefix + "desolator") || msg.content.startsWith(prefix + "deso")) {
    msg.channel.sendMessage("http://i.imgur.com/dqqaRZj.png");
  } //
  if (msg.content.startsWith(prefix + "heaven's halberd") || msg.content.startsWith(prefix + "halberd")) {
    msg.channel.sendMessage("http://i.imgur.com/JdHZfmi.png");
  } //
  if (msg.content.startsWith(prefix + "sange and yasha") || msg.content.startsWith(prefix + "sny")) {
    msg.channel.sendMessage("http://i.imgur.com/ncaqHpv.png");
  } //
  if (msg.content.startsWith(prefix + "eye of skadi") || msg.content.startsWith(prefix + "skadi")) {
    msg.channel.sendMessage("http://i.imgur.com/dqeNS1x.png");
  } //
  if (msg.content.startsWith(prefix + "mjollnir")) {
    msg.channel.sendMessage("http://i.imgur.com/le4bNnm.png");
  }
  //
  if (msg.content.startsWith(prefix + "satanic")) {
    msg.channel.sendMessage("http://i.imgur.com/isjoxBX.png");
  }
  //
  if (msg.content.startsWith(prefix + "silver edge")) {
    msg.channel.sendMessage("http://i.imgur.com/NS1d0Pv.png");
  }
  //
  if (msg.content.startsWith(prefix + "radiance")) {
    msg.channel.sendMessage("http://i.imgur.com/IHwuitf.png");
  }
  //
  if (msg.content.startsWith(prefix + "monkey king bar") || msg.content.startsWith(prefix + "mkb")) {
    msg.channel.sendMessage("http://i.imgur.com/7aTWlZp.png");
  }
  //
  if (msg.content.startsWith(prefix + "deadalus")) {
    msg.channel.sendMessage("http://i.imgur.com/3X9hqiA.png");
  }
  //
  if (msg.content.startsWith(prefix + "butterfly")) {
    msg.channel.sendMessage("http://i.imgur.com/121RW7I.png");
  }

  /*************************************************************************** */
  /************************************************************************* */
  /*********************************************************************** */
  /********************************************************************* */

  // M I S C .
  if (msg.content.startsWith(prefix + "map")) {
    msg.channel.sendMessage("http://i.imgur.com/UZeDAFk.png");
  }
  //
  if (msg.content.startsWith(prefix + "creepinfo")) {
    msg.channel.sendMessage("https://imgur.com/a/UNCbw#cLmXbby")
  }
  //
  if (msg.content.startsWith(prefix + "happybday")) {
    msg.channel.sendMessage("https://media.giphy.com/media/ToMjGpRb3TkJImKKIh2/giphy.gif");
  }
  //
  if (msg.content.startsWith(prefix + "4rtylewd")) {
    msg.channel.sendMessage("http://i.imgur.com/FwGtEkq.png");
  }

  //
  // S T R E A M
  // template:
  if (msg.content.startsWith(prefix + "__username__or__nickname__" + prefix)) {
    msg.channel.sendMessage("__LINK__HERE__");
  }
  //
  if (msg.content.startsWith(prefix + "adam" + stream)) {
    msg.channel.sendMessage("https://www.twitch.tv/adamman1130/");
  }
  //
  if (msg.content.startsWith(prefix + "ox" + stream)) {
    msg.channel.sendMessage("https://www.twitch.tv/oxthe5th/");
  }
  //
  if (msg.content.startsWith(prefix + "4rtemis" + stream)) {
    msg.channel.sendMessage("https://www.twitch.tv/lll4rtemislll/");
  }
  //
  if (msg.content.startsWith(prefix + "hershey" + stream)) {
    msg.channel.sendMessage("https://www.twitch.tv/h3rsh3yb3ar/");
  }
  //
  if (msg.content.startsWith(prefix + "mtn" + stream)) {
    msg.channel.sendMessage("https://www.twitch.tv/mtnlol/");
  }
  //
  if (msg.content.startsWith(prefix + "wamu" + stream)) {
    msg.channel.sendMessage("https://www.twitch.tv/wamu1217/");
  }
  //
  if (msg.content.startsWith(prefix + "hamster" + stream)) {
    msg.channel.sendMessage("https://www.twitch.tv/applefibs/")
  }
  //
  if (msg.content.startsWith(prefix + "soha" + stream)) {
    msg.channel.sendMessage("https://www.twitch.tv/sohakmet/");
  }

  /* M E M E S */
  //
  if (msg.content.startsWith(prefix + "philfear")) {
    msg.channel.sendMessage("http://i.imgur.com/TjeiOxd.jpg");
  }
  //
  if (msg.content.startsWith(prefix + "stfu")) {
    msg.channel.sendMessage("http://i.imgur.com/GDAugZL.png");
  }

});
// -- | end of code | --