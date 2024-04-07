import Discord from "discord.js";
const { ButtonStyle, TextInputStyle } = Discord;

export default {
  PREFIX: "!", // Bot önekiniz.
  TOKEN: "token", // Bot tokeniniz.
  GUILD_ID: "sunucuid", // Sunucunuzun id'si.
  VOICE_CHANNEL: "kanalid", // Botun gireceği ses kanalı id'si.
  TICKET: {
    CHANNEL: "kanalid", // Ticket panelinin (mesajının) gönderileceği kanal id'si.
    CATEGORY: "kategoriid", // Ticketların oluşacağı kategori id'si.
    ARCHIVE_CATEGORY: "kategoriid", // Arşivlenen ticketların gözükeceği kategori id'si.
    MESSAGE: "Panel üzerinde bu yazı gözükmektedir.", // Ticket oluşturma panelinde gözükecek yazı.
    PanelEmbedMesajRenkKod: "#660099", // Ticket oluşturma panelinin solunda gözükecek renktir. İnternetten Örnek: "Mor renk kodu." yazarak bulabilirsiniz. Şuan da renk kodu mordur.
    STAFF_ROLES: ["yetkilirolid1", "yetkilirolid2"], // Yetkili rol idleri.
    BUTTONS: [
      {
        STYLE: ButtonStyle.Success,
        LABEL: "Onayla",
        EMOTE: "✅",
        ID: "successTicket",
        DISABLED: false,
      },
      {
        STYLE: ButtonStyle.Secondary,
        LABEL: "Arşivle",
        EMOTE: "🎫",
        ID: "archiveTicket",
        DISABLED: false,
      },
      {
        STYLE: ButtonStyle.Danger,
        LABEL: "Sil",
        EMOTE: "🎟️",
        ID: "deleteTicket",
        DISABLED: false,
      },
    ],
    QUESTIONS: [
      {
        ID: "name",
        LABEL: "Talep Açma Nedeniniz?", // Kullanıcılar ticket oluştururken sorulacak sorudur.
        STYLE: TextInputStyle.Short,
        MIN_LENGTH: 2, // Kullanıcıların soruyu yanıtlarken minimum kullanması gereken karakter değeridir.
        MAX_LENGTH: 100, // Kullanıcıların soruyu yanıtlarken maksimum kullanması gereken karakter değeridir.
        PLACE_HOLDER: "Örnek: x isimli kullanıcıdan şikayetçiyim, kendisi çok yakışıklı.", // Kullanıcılar ticket oluştururken yanıt bölümünde arkada gözüken mesajdır.
        REQUIRED: true,
      },
    ],
  },
};
