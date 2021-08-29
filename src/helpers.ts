export const classes = (...names: unknown[]) =>
    names.filter((name) => !!name).join(' ');
export const excerpt = (str: string | null | undefined, max: number) => {
    str = str || '';
    return str.length > max ? str.substring(0, max - 3) + '...' : str;
};
export const toTime = (hours: number) => {
    return `${Math.floor(hours)} h. ${Math.round((hours % 1) * 60)} m.`;
};
