module.exports = function check(str, bracketsConfig) {
    const br = bracketsConfig.map(b => b.join(""));
    for (let i = 0; i < br.length; i++) {
        if (str.includes(br[i])) {
            str = str.replace(br[i], "");
            console.log(str);
             i = -1 ;
        }
    }
    return !str;
};

