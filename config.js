const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function toBool(val, defaultOn = true) {
    if (val === undefined || val === null || val === '') return defaultOn;
    return val.toLowerCase() !== 'false';
}

module.exports = {
    SESSION_ID:            process.env.SESSION_ID || "Silva~H4sIAAAAAAAAA5VUy5KbRhT9lRRbTVk8BBJTNVVBICEkEEiAXqksWtCglhAgaF5yeet8QrzxNst8QLLIL/kT0kgzHi8SZ0JVQ/elOZy+95z7nooTlMMZbKjH91SaoRJg2E5xk5InNSyCAGbUA+UDDMh6PRGHwagJQ5ceCyFtduAQBFY9FnfyIVqoVeHUpZxuqnhdPVEfHqi02EfI+w5gfVkezJF+CQtAj118mo7DiXesJhv30C2nysqRAuVo0IM8OhHAFhGgDMXhKD3AM8xARKhbJPQ2+p4aBFrizMY9WfIAnfYWo3kineLesnDiHODdMTKzU3ipV/Tb6AvmWZD6Xhml/p4vXF4fRTI6BrVZy2Y3OsKmhlx48d2c693p5yiMoa/5MMYIN2/OuzA8nJUSyfvcEJxSbfpISDoe6y350hlkEwZxyFucpWkxzt9GXGI9QwpSSeMv/GCV2T4rc9XKH/dW02vBBelpEE8G0zGz47RviVvZi1ZO/yfvsoVOor2VaTdSOtalKUVL7gzn/tXUJ2Z/bmTpLO6Otgt1PXob/VhLIrsxJMttdJM/nbmNIDSjOmVO/FTfzlw18ZQdFtDQ9l7pA1xk32O578GM31Q2n0RmUtTlAGsGvhbBpWusS9XcgUUhzZy0H4EicQ1BHGy3gbUoZ6jqLPcC3XVLbuhtdr26YU/KALtqBWVl8XQ7EUmX5lOPDJlmMEQ5zgBGSdzGOOGBAn5pQy+D+JZdyt6cAm2bOxt/rpWTTSPGzo4pZXnYT9XlStily9i5cMVO6hlPhH+aJR7Mc+hPCHCSNQZZgBDm1ONPPz9QMazxvW7t3wTmgQpQlmM3LtIoAf5LUV9eAs9LihjbTezJ7YRk6JF+DUOMif3yNo1FDDLvgEooHwAmkQBEOfx6QJhBgoizAn41rZz4bd41d74cKcqGMD/f6oHIRorle32GZwYsw3OPPPtj/q5qYUGavoshJntj0O6mvnz+9Tcyfifjjy+fP328zz/90j5/ILfPZPxJxl/kk+iGLDB8v08zHDsQ6Tt2G//w9UwtBR9igKK81aqpl9xOUkcGrOucVlXpFEpyKFGvOXjR0r1YrCcDF8xzVqycmF4Pi4XRDbmwKLz+1shP+vDCiKZpMhtZe/oHEIKQjvYQjfWFPhknGT3xNSY/6B2rtjUWM8bRUgC7d7xoHnbyY8+utlln7k8nTnQNVVq2RSGKFIc+zmcrsIRbzZIVtkFyKzwibVgiD377M7oficXRdhoBZtcr351gke4bvXltaXrTUacXM6zSwM5LLM2V4RqH0ws7C8dLUI1oey4U666OkKUmElIwO+os5FDPhs8qv7kseu5u6CbAtrrtMkDw1iyeq/if1b4Tb0VJE+BXjOf28y8WHvqxdI7U435eeiNeHIf7k2L15j09i01W0adyBXDgHI94VSHSF4g70ohEkuxMPs7Pe0CgsqRoJa7FQfK9liaFmrII5fbYEcix9GobB51hjsE5JX7v9zm2JwgD9r7LypJ0AvIDAeCW4o4TWw80UpramHTQZxdSUnvpV5f68DfuJBGkoAcAAA==",
    PREFIX:                process.env.PREFIX || ".",
    BOT_NAME:              process.env.BOT_NAME || "Samyaza MD",
    OWNER_NUMBER:          process.env.OWNER_NUMBER || "254715182153",
    OWNER_NAME:            process.env.OWNER_NAME || "Samyaza MD",
    DESCRIPTION:           process.env.DESCRIPTION || "Samyaza MD Bot",
    ALIVE_IMG:             process.env.ALIVE_IMG || "https://files.catbox.moe/5uli5p.jpeg",
    LIVE_MSG:              process.env.LIVE_MSG || "Samyaza MD is active",
    MODE:                  process.env.MODE || "both",
    AUTO_STATUS_SEEN:      toBool(process.env.AUTO_STATUS_SEEN,      true),
    AUTO_STATUS_REACT:     toBool(process.env.AUTO_STATUS_REACT,     true),
    AUTO_STATUS_REPLY:     toBool(process.env.AUTO_STATUS_REPLY,     true),
    AUTO_STATUS_MSG:       process.env.AUTO_STATUS_MSG || "Seen by Samyaza MD",
    CUSTOM_REACT_EMOJIS:   process.env.CUSTOM_REACT_EMOJIS || "❤️,🔥,💯,😍,👏,💙,🙌",
    READ_MESSAGE:          toBool(process.env.READ_MESSAGE,          false),
    AUTO_REACT_NEWSLETTER:   toBool(process.env.AUTO_REACT_NEWSLETTER,   true),
    AUTO_FOLLOW_NEWSLETTER:  true,
    ANTI_BAD:              toBool(process.env.ANTI_BAD,              true),
    ALWAYS_ONLINE:         toBool(process.env.ALWAYS_ONLINE,         true),
    AUTO_TYPING:           toBool(process.env.AUTO_TYPING,           true),
    AUTO_RECORDING:        toBool(process.env.AUTO_RECORDING,        false),
    DELETE_LINKS:          toBool(process.env.DELETE_LINKS,          false),
    ANTIDELETE_GROUP:      toBool(process.env.ANTIDELETE_GROUP,      true),
    ANTIDELETE_PRIVATE:    toBool(process.env.ANTIDELETE_PRIVATE,    true),
    ANTILINK:              toBool(process.env.ANTILINK,               true),
    ANTIVV:                toBool(process.env.ANTIVV,                 true),
    DEBUG:                 toBool(process.env.DEBUG,                 false),
    THEME:                 (process.env.THEME || 'samyza').toLowerCase().trim(),
};
