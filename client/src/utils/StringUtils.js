export default class StringUtils {
    static toCPF(str) {
        return str.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3\-\$4");
    };

    static numbersOnly(str) {
        return str.replace(/[^\d]/g, "");
    };


    static contaisNumbers(str) {
        let numbersOnString = str.match(/\d+/g);
        let stringHasNumbers = numbersOnString != null;
        return stringHasNumbers;
    }

    static contains(str, keyword) {
        return str.indexOf(keyword) > -1;
    }

    static isValidEmail(str) {
        let emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return emailRegex.test(str);
    }

    static toTitleCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
            if (txt)
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            else
                return str;
        });
    }

    static removeAccents(str, text) {
        const accentFull = 'áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ';
        const accentFree = 'aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC';
        let stripped = '';
        for (let i = 0; i < text.length; i++) {
            if (accentFull.search(text.substr(i, 1)) >= 0) {
                stripped += accentFree.substr(accentFull.search(text.substr(i, 1)), 1);
            } else {
                stripped += text.substr(i, 1);
            }
        }
        return stripped;
    }

    static toUnderscoreCase(str) {
        return str.replace(/\.?([A-Z]+)/g, function (x, y) { return "_" + y.toLowerCase() }).replace(/^_/, "");
    }

    static toDashCase(str) {
        return str.replace(/\.?([A-Z]+)/g, function (x, y) { return "-" + y.toLowerCase() }).replace(/^-/, "");
    }

    static limitTo(str, limit) {
        return str.substring(0, limit) + ((str.length > limit) ? "..." : "");
    }
}