let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • XL [Gada]
│ • Gopay  [081390413987]
│ • Dana  [Ada Tapi Lupa]
│ • Saweria  [Belum Ada Cuy]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6287719424487
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
