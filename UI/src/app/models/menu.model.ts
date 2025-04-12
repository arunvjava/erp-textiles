interface SubMenu {
    menuname: string;
    hyperlink: string;
}

export interface Menu {
    menuname: string;
    hyperlink: string;
    collapsible: boolean;
    collapseName: string;
    submenu: SubMenu[];
}