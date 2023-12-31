import "./smileyBox.scss"
import React from "react"
import { useState } from "react";
const obj ={
    "🤩": [ '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '🥰', '😍', '🤩', '😘', '😗', '😚', '😙', '😋', '😛',
    '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔', '🤐', '🤨', '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😌', '😔', '😪',
    '🤤', '🤒', '🤕', '🤢', '🤮', '🤧', '🥵', '🥶', '🥴', '😵', '🤯', '🤠', '🥳', '😎', '😕', '😟', '🙁', '☹️', '😮', '😯', '😲',
    '😳', '😦', '😧', '😨', '😰', '😥', '😢', '😭', '😱', '😖', '😣', '😞', '😓', '😩', '😫', '😤', '😡', '😠', '🤬', '🥱', '😈',
    '👿', '💀', '☠️', '💩', '🤡', '👹', '👺', '👻', '👽', '👾', '🤖', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '💋',
    '😀', '🤓', '🧐', '💫', '❤️️', '💛', '💕', '💯', '💥', '💣', '💟', '💨', '🕳️', '💌', '💦', '👁️‍🗨️', '💓', '💔', '💖', '💗',
    '💘', '💙', '💚', '💜', '💝', '💞', '💢', '💤', '💬', '💭', '🖤', '🗨', '🗯', '🧡', '❣', '🤎', '🤍', '😴', '😷', '🥺', '❤️️',
    '🤡', '🤍', '🥲', '🥸', '🤌'],
    "🙋‍♀️":[ '👋', '🤚', '🖐', '✋', '🖖', '👌', '✌️', '🤞', '🤟', '🤘', '🤙', '👈', '👉', '👆', '🖕', '👇',
    '☝', '👍', '👎', '✊', '👊', '🤛', '🤜', '🤏', '👏', '🙌', '👐', '🤲', '🤝', '🙏', '✍️', '💅',
    '🤳', '💪', '🦵', '🦶', '👂', '👃', '🧠', '🦷', '🦴', '👀', '👁', '👅', '👄', '👶', '🧒', '👦',
    '👧', '🧑', '👱', '👨', '🧔', '👱‍♂️', '👨‍🦰', '👨‍🦱', '👨‍🦳', '👨‍🦲', '👩', '👱‍♀️', '👩‍🦰',
    '👩‍🦱', '👩‍🦳', '👩‍🦲', '🧓', '👴', '👵', '🙍', '🙍‍♂️', '🙍‍♀️', '🙎', '🙎‍♂️', '🙎‍♀️',
    '🙅', '🙅‍♂️', '🙅‍♀️', '🙆', '🙆‍♂️', '🙆‍♀️', '💁', '💁‍♂️', '💁‍♀️', '🙋', '🙋‍♂️', '🙋‍♀️',
    '🙇', '🙇‍♂️', '🙇‍♀️', '🤦', '🤦‍♂️', '🤦‍♀️', '🤷', '🤷‍♂️', '🤷‍♀️', '👨‍⚕️', '👩‍⚕️',
    '👨‍🎓', '👩‍🎓', '👨‍🏫', '👩‍🏫', '👨‍⚖️', '👩‍⚖️', '👨‍🌾', '👩‍🌾', '👨‍🍳', '👩‍🍳', '👨‍🔧',
    '👩‍🔧', '👨‍🏭', '👩‍🏭', '👨‍💼', '👩‍💼', '👨‍🔬', '👩‍🔬', '👨‍💻', '👩‍💻', '👨‍🎤', '👩‍🎤',
    '👨‍🎨', '👩‍🎨', '👨‍✈️', '👩‍✈️', '👨‍🚀', '👩‍🚀', '👨‍🚒', '👩‍🚒', '👮', '👮‍♂️', '👮‍♀️',
    '🕵️', '🕵️‍♂️', '🕵️‍♀️', '💂', '💂‍♂️', '💂‍♀️', '👷', '👷‍♂️', '👷‍♀️', '🤴', '👸', '👳',
    '👳‍♂️', '👳‍♀️', '👲', '🧕', '🤵', '👰', '🤰', '🤱', '👼', '🎅', '🤶', '🦸', '🦸‍♂️', '🦸‍♀️',
    '🦹', '🦹‍♂️', '🦹‍♀️', '🧙', '🧙‍♂️', '🧙‍♀️', '🧚', '🧚‍♂️', '🧚‍♀️', '🧛', '🧛‍♂️', '🧛‍♀️',
    '🧜', '🧜‍♂️', '🧜‍♀️', '🧝', '🧝‍♂️', '🧝‍♀️', '🧞', '🧞‍♂️', '🧞‍♀️', '🧟', '🧟‍♂️', '🧟‍♀️',
    '💆', '💆‍♂️', '💆‍♀️', '💇', '💇‍♂️', '💇‍♀️', '🚶', '🚶‍♂️', '🚶‍♀️', '👨‍🦯', '👩‍🦯', '👨‍🦼',
    '👩‍🦼', '👨‍🦽', '👩‍🦽', '🦾', '🦿', '🧏', '🧏‍♂️', '🧏‍♀️', '🏃', '🏃‍♂️', '🏃‍♀️', '🧍',
    '🧍‍♂️', '🧍‍♀️', '🧎', '🧎‍♂️', '🧎‍♀️', '💃', '🕺', '🕴️', '👯', '👯‍♂️', '👯‍♀️', '🧖',
    '🧖‍♂️', '🧖‍♀️', '👭', '👫', '👬', '🧑‍🤝‍🧑', '💏', '👨‍❤️‍💋‍👨', '👩‍❤️‍💋‍👩', '👩‍❤️‍💋‍👨',
    '💑', '👩‍❤️‍👨', '👩‍❤️‍👩', '👨‍❤️‍👨', '👪', '👨‍👩‍👦', '👨‍👩‍👧', '👨‍👩‍👧‍👦', '👨‍👩‍👦‍👦',
    '👨‍👩‍👧‍👧', '👨‍👨‍👦', '👨‍👨‍👧', '👨‍👨‍👧‍👦', '👨‍👨‍👦‍👦', '👨‍👨‍👧‍👧', '👩‍👩‍👦',
    '👩‍👩‍👧', '👩‍👩‍👧‍👦', '👩‍👩‍👦‍👦', '👩‍👩‍👧‍👧', '👨‍👦', '👨‍👦‍👦', '👨‍👧', '👨‍👧‍👦',
    '👨‍👧‍👧', '👩‍👦', '👩‍👦‍👦', '👩‍👧', '👩‍👧‍👦', '👩‍👧‍👧',   '🗣️', '👤', '👥', '👣', '👓', '🕶', '🥽', '🥼', '👔', '👕', '👖', '🧣', '🧤', '🧥', '🧦', '👗',
    '👘', '👙', '👚', '👛', '👜', '👝', '🎒', '👞', '👟', '🥾', '🥿', '👠', '👡', '👢', '👑', '👒',
    '🎩', '🎓', '🧢', '⛑', '💄', '💍', '🦺', '🥻', '🩱', '🩲', '🩳', '🛍️', '🩰', '📿', '🛀', '🛌',
    '💎', '🚣', '🏇', '🏌️‍♂️', '🏌', '⛷️', '🏂', '🏌️‍♀️', '🏄', '🏄‍♀️', '🏄‍♂️', '🏊', '🏊‍♀️',
    '🏊‍♂️', '🏋', '🏋️‍♀️', '🏋️‍♂️', '🚣‍♀️', '🚣‍♂️', '🚴', '🚴‍♀️', '🚴‍♂️', '🚵', '🚵‍♀️',
    '🚵‍♂️', '🤸', '🤸‍♀️', '🤸‍♂️', '🤹', '🤹‍♀️', '🤹‍♂️', '🤺', '🤼', '🤼‍♀️', '🤼‍♂️', '🤽',
    '🤽‍♀️', '🤽‍♂️', '🤾', '🤾‍♀️', '🤾‍♂️', '⛹', '⛹️‍♀️', '⛹️‍♂️', '🕴', '🧗', '🧗‍♀️',
    '🧗‍♂️', '🦻', '🧘', '🧘‍♀️', '🧘‍♂️', '🦰', '🦱', '🦲', '🦳', '⚾', '🎣', '🎳', '🎽', '🎾',
    '🎿', '🏀', '🏈', '🏉', '🏏', '🏐', '🏑', '🏒', '🏓', '🏸', '🛷', '🥅', '🥊', '🥋', '🥌', '🥍',
    '🥎', '🥏', '⚽', '⛳', '⛸', '🤿', '🎖', '🏅', '🏆', '🥇', '🥈', '🥉', '🤌', '🫀', '🫁', '🥷',
    '🤵', '🤵‍♀️', '👰', '👰‍♂️', '👩‍🍼', '🧑‍🍼', '👨‍🍼', '🧑‍🎄', '🫂', '🩴', '🪖'],
    "📺" : [ '💼', '🕳️', '💣', '🔪', '🏺', '⏲️', '📯', '🎙️', '🎚️', '🎛️', '📻', '📱', '📲', '☎️', '📞', '📟', '📠', '🔋', '🔌', '💻',
    '🖥️', '🖨️', '⌨️', '🖱', '🖲️', '💽', '💾', '💿', '📀', '🧮', '🎥', '🎞️', '📽️', '🎬', '📺', '📷', '📸', '📹', '📼', '🔍',
    '🔎', '🕯️', '💡', '🔦', '🏮', '🪔', '📔', '📕', '📖', '📗', '📘', '📙', '📚', '📓', '📒', '📃', '📜', '📄', '📰', '🗞', '📑',
    '🔖', '🏷️', '💰', '💴', '💵', '💶', '💷', '💸', '💳', '🧾', '💹', '💱', '💲', '✉️', '📧', '📨', '📩', '📤', '📥', '📦', '📫',
    '📪', '📬', '📭', '📮', '🗳', '✏️', '✒️', '🖋️', '🖊', '🖌', '🖍', '📝', '📁', '📂', '🗂️', '📅', '📆', '🗒️', '🗓', '📇',
    '📈', '📉', '📊', '📋', '📌', '📍', '📎', '🖇️', '📏', '📐', '✂️', '🗃️', '🗄️', '🗑️', '🔒', '🔓', '🔏', '🔐', '🔑', '🗝️',
    '🔨', '⛏️', '⚒️', '🛠️', '🗡️', '⚔️', '🪓', '🏹', '🛡️', '🔫', '🔧', '🔩', '⚙️', '🗜️', '⚖️', '🔗', '⛓️', '🧰', '🧲', '⚗️',
    '🧪', '🧫', '🧬', '🔬', '🔭', '📡', '💉', '🦯', '🩸', '💊', '🩹', '🩺', '🚪', '🛏️', '🛋️', '🪑', '🚽', '🚿', '🛁', '🪒', '🧴',
    '🧷', '🧹', '🧺', '🧻', '🧼', '🧽', '🧯', '🛒', '🚬', '🚰', '🎧', '🎤', '🎵', '🎶', '🎼', '📢', '📣', '🔇', '🔈', '🔉', '🔊',
    '🔔', '🔕', '🎷', '🎸', '🎹', '🎺', '🎻', '🥁', '🪕', '🪡', '🪗', '🪘', '🪙', '🪃', '🪚', '🪛', '🪝', '🪜', '🪞', '🪟', '🪠',
    '🪤', '🪣', '🪥'],
    "🐱":['🦦', '🙈', '🙉', '🙊', '🐵', '🐒', '🦍', '🦧', '🐶', '🐕', '🐩', '🦮', '🐕‍🦺', '🐺', '🦊', '🦝', '🐱', '🐈', '🦁', '🐯', '🐅', '🐆', '🐴', '🐎', '🦄', '🦓', '🦌', '🐮', '🐂', '🐃', '🐄', '🐷', '🐖', '🐽', '🐗', '🐏', '🐑', '🐐', '🐪', '🐫', '🦙', '🦒', '🐘', '🦏', '🦛', '🐭', '🐁', '🐀', '🐹', '🐰', '🐇', '🐿️', '🦔', '🦇', '🐻', '🐨', '🐼', '🦥', '🦨', '🦘', '🦡', '🐾', '🦃', '🐔', '🐓', '🐣', '🐤', '🐥', '🐦', '🐧', '🕊️', '🦅', '🦆', '🦢', '🦉', '🦩', '🦚', '🦜', '🐸', '🐊', '🐢', '🦎', '🐍', '🐲', '🐉', '🦕', '🦖', '🐳', '🐋', '🐬', '🐟', '🐠', '🐡', '🦈', '🐙', '🐚', '🐌', '🦋', '🐛', '🐜', '🐝', '🐞', '🦗', '🕷️', '🕸️', '🦂', '🦟', '🦠', '💐', '🌸', '💮', '🏵️', '🌹', '🥀', '🌺', '🌻', '🌼', '🌷', '🌱', '🌲', '🌳', '🌴', '🌵', '🌾', '🌿', '☘️', '🍀', '🍁', '🍂', '🍃', '🐈‍⬛', '🦬', '🦣', '🦫', '🐻‍❄️', '🦤', '🪶', '🦭', '🪲', '🪳', '🪰', '🪱', '🪴'],
    "🏧" : [ '🔵', '⚪', '💠', '🔘', '🔲', '🔳', '🔴', '🔶', '🔷', '🔸', '🔹', '🔺', '🔻', '▪', '▫',
    '◻', '◼', '◽', '◾', '⚫', '⬛', '⬜', '🟠', '🟡', '🟢', '🟣', '🟤', '🟥', '🟧', '🟨',
    '🟩', '🟦', '🟪', '🟫', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓',
    '⛎', '🔂', '🔁', '🎦', '📳', '📴', '📶', '🔀', '🔅', '🔆', '🔼', '🔽', '⏏', '⏩', '⏪', '⏫',
    '⏬', '⏭', '⏮', '⏯', '⏸', '⏹', '⏺', '▶', '◀', '🔄', '⬆️', '🔃', '🔙', '🔚', '🔛', '🔜',
    '🔝', '↔', '↕', '↖', '↗', '↘', '↙', '↩', '⬅', '⬇', '🔠', '🅰', '↪', '➡', '⤴', '⤵',
    '🅱', '🅾', '🅿', '🆎', '🆑', '🆒', '🆓', '🆔', '🆕', '🆖', '🆗', '🆘', '🆙', '🆚', '🈁', '🈂',
    '🈚', '🈯', '🈲', '🈳', '🈴', '🈵', '🈶', '🈷', '🈸', '🈹', '🈺', '🉐', '🉑', '🔡', '🔢', '🔣',
    '🔤', 'ℹ', 'Ⓜ', '㊗', '㊙', '⚜️', '©', '®', '📛', '🔰', '🔱', '‼', '⁉', '™', '☑', '♻',
    '♾', '⚕', '✅', '✔', '✖', '✳', '✴', '❇', '❌', '❎', '❓', '❔', '❕', '❗', '➕', '➖',
    '➗', '➰', '➿', '⭕', '〰', '〽', '🛄', '🛃', '🛅', '🛂', '🏧', '🚮', '🚰', '🚹', '🚺', '🚻',
    '🚼', '🚾', '♿', '#️⃣', '*️⃣', '0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣',
    '8️⃣', '9️⃣', '🔟', '🔯', '🕉', '🕎', '🛐', '☦', '☪', '☮', '☯', '☸', '⚛', '✝', '✡', '📵',
    '🔞', '🚫', '🚭', '🚯', '🚱', '🚳', '🚷', '🚸', '☢', '☣', '⚠', '⛔', '♀', '♂', '🛗', '⚧️'],
    "🏖️":['🧳', '☂️', '🌂', '🗺️', '🧭', '🧱', '🛢', '💈', '🛎️', '⌛', '⏳', '⌚', '⏰', '⏱️', '🕰️', '🌡️',
    '⛱️', '⚰', '⚱', '🗿', '🌎', '🌏', '🌍', '🌐', '🗾', '🌟', '🌞', '❄️', '🌈', '🌜', '🔥', '🌙', '⭐',
    '☁️', '🌩️', '⛈', '🌧️', '🌨️', '☄️', '💧', '🌓', '🌛', '🌫️', '🌕', '🌝', '⚡', '🌗', '🌌', '🌑',
    '🌚', '🌠', '☃️', '⛄', '☀', '⛅', '🌥', '🌦', '🌤', '🌪', '☔', '🌘', '🌖', '🌊', '🌒', '🌔', '🌬',
    '🌀', '🪐', '🚀', '🚡', '✈️', '🛬', '🛫', '🚁', '🚠', '🛰️', '💺', '🛩️', '🚟', '🛸', '🪂', '⏲️',
    '🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛', '🕜', '🕝', '🕞', '🕟', '🕠',
    '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '🕧', '🚘', '🚨', '🚑', '🚛', '🚗', '🚲', '🚌', '🚏', '🚧', '🚚',
    '🚒', '⛽', '🚄', '🚅', '🚥', '🛴', '🚈', '🚂', '🚇', '🚐', '🚝', '🛵', '🏍️', '🚞', '🚍', '🚔', '🚜',
    '🚖', '🚓', '🏎️', '🚃', '🛤️', '🚉', '🚕', '🚆', '🚊', '🚋', '🚎', '🚦', '🚙', '🛑', '🛣', '🛹', '🦽',
    '🦼', '🛺', '⚓', '⛴️', '🛥️', '🛳️', '⛵', '🚢', '🚤', '🛶', '🏦', '🏗️', '🏰', '🏛️', '🏪', '🏬',
    '🏚️', '🏭', '🏥', '🏨', '🏘️', '🏠', '🏡', '🏯', '🏣', '🏩', '🏢', '🏤', '🏫', '🏟️', '🗽', '🗼',
    '💒', '🌉', '🎠', '🏙️', '🌆', '🎡', '🌁', '⛲', '🌃', '🎢', '🌅', '🌄', '🌇', '⛺', '🎪', '♨', '🏖️',
    '🏕️', '🏜️', '🏝️', '🗻', '⛰️', '🏞️', '🏔️', '🌋', '⛪', '🕋', '🕌', '⛩️', '🕍', '🛕', '🪨', '🪵',
    '🛖', '🛻', '🛼', '🪦'],
    "🎉" : [ '🧶', '🧵', '🧨', '🎈', '🎉', '🎊', '🎎', '🎏', '🎐', '🧧', '🎀', '🎁', '🔮', '🧿', '🕹️',
    '🧸', '🖼️', '✨', '🎆', '🎄', '🎑', '🎍', '🎇', '🎋', '🎃', '🎗', '🎟', '🎫', '🎨', '🎭',
    '⚾', '🎣', '🎳', '🎽', '🎾', '🎿', '🏀', '🏈', '🏉', '🏏', '🏐', '🏑', '🏒', '🏓', '🏸',
    '🛷', '🥅', '🥊', '🥋', '🥌', '🥍', '🥎', '🥏', '⚽', '⛳', '⛸', '🤿', '🎲', '🀄', '🃏',
    '🎮', '🎯', '🎰', '🎱', '🎴', '🧩', '♟', '♠', '♣', '♥', '♦', '🪀', '🪁', '🎖', '🏅',
    '🏆', '🥇', '🥈', '🥉', '🪄', '🪅', '🪆', '🪢', '🪧'
],
    "🍔":[ '🍭', '🎂', '🍰', '🍬', '🍫', '🍪', '🍮', '🍩', '🍯', '🍨', '🍧', '🍦', '🥧', '🧁',
    '🍏', '🍌', '🍒', '🍓', '🍐', '🍋', '🍇', '🥝', '🍈', '🍑', '🍎', '🍊', '🍅', '🍉',
    '🍍', '🥥', '🥭', '🥑', '🌰', '🥕', '🥒', '🌽', '🍆', '🌶️', '🍄', '🥜', '🥔', '🥦',
    '🥬', '🧄', '🧅', '🍳', '🍞', '🍕', '🥓', '🥖', '🌯', '🧀', '🥐', '🍟', '🥗', '🍔',
    '🌭', '🍖', '🥞', '🍿', '🍲', '🍗', '🌮', '🥘', '🥙', '🥚', '🥣', '🥨', '🥩', '🥪',
    '🥫', '🥯', '🧂', '🧇', '🧆', '🧈', '🏺', '🍴', '🍽️', '🔪', '🥄', '🥢', '🍼', '🍺',
    '🍾', '🍻', '🥂', '🍸', '🥛', '☕', '🍶', '🍵', '🍹', '🥃', '🍷', '🥤', '🧃', '🧉',
    '🧊', '🍱', '🍚', '🍛', '🍡', '🍥', '🍤', '🍢', '🍙', '🍘', '🍠', '🍝', '🍜', '🍣',
    '🥟', '🥠', '🥡', '🥮', '🦀', '🦐', '🦑', '🦞', '🦪', '🫐', '🫒', '🫑', '🫓', '🫔',
    '🫕', '🫖', '🧋'],
}
const SmileyBox = ({ setSmiley}) => {
    const [selected, setSelected]= useState(obj["🤩"])
    const handleClick=(param)=> {
setSelected(obj[param])
    }
    const  handleClickEmoje =(param)=> {
   setSmiley(param)
    }
    return (
          <div className="smileyBox">
    <div className="smileyBoxEmodjies">
{selected.map((item, index)=> (
    <div
    onClick={() => handleClickEmoje(item)}
    className="smileyBoxEmodjiesItem">{item}</div>
))}

    </div>
    <div className="smileySelection">
<div className="smileySelectionWrapper">
    <div onClick={()=>handleClick("🤩")} className="smileySelectionItem">
🤩   
</div>
<div onClick={()=>handleClick("🙋‍♀️")} className="smileySelectionItem">
🙋‍♀️
</div>
<div  onClick={()=>handleClick("📺")}className="smileySelectionItem">
📺   
</div>
<div onClick={()=>handleClick("🐱")} className="smileySelectionItem">
🐱   
</div>
<div onClick={()=>handleClick("🏧")} className="smileySelectionItem">
🏧  
</div>
<div  onClick={()=>handleClick("🏖️")}className="smileySelectionItem">
🏖️   
</div>
<div onClick={()=>handleClick("🎉")} className="smileySelectionItem">
🎉  
</div>
<div onClick={()=>handleClick("🍔")} className="smileySelectionItem">
🍔   
</div>
</div>
    </div>
    </div>
    );
}
 
export default SmileyBox;
//https://emojio.top/vse-smailiki-skachat/