export class ColorType {
    static getColorByType(color: string, a?: string): string {
        if (a) { a = `, ${a}`; }
        if (!a) { a = ''; }
        switch (color) {
            case 'normal':
                return `rgb(168,167,122${a})`;
            case 'fire':
                return `rgba(238,129,48${a})`;
            case 'water':
                return `rgb(99,144,240${a})`;
            case 'electric':
                return `rgb(247,208,44${a})`;
            case 'grass':
                return `rgb(122,199,76${a})`;
            case 'ice':
                return `rgb(150,217,214${a})`;
            case 'fighting':
                return `rgb(194,46,40${a})`;
            case 'poison':
                return `rgb(163,62,161${a})`;
            case 'ground':
                return `rgb(226,191,101${a})`;
            case 'flying':
                return `rgb(169,143,243${a})`;
            case 'psychic':
                return `rgb(249,85,135${a})`;
            case 'bug':
                return `rgb(166,185,26${a})`;
            case 'rock':
                return `rgb(182,161,54${a})`;
            case 'ghost':
                return `rgb(115,87,151${a})`;
            case 'dragon':
                return `rgb(111,53,252${a})`;
            case 'dark':
                return `rgb(112,87,70${a})`;
            case 'steel':
                return `rgb(183,183,206${a})`;
            case 'fairy':
                return `rgb(214,133,173${a})`;
        }
    }
}
