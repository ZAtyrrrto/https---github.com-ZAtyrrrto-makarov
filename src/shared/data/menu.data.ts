    import { APP_ROUTES } from "../routes/app.route";
    import { iMenu } from "../types/menu.type";

    
    export const MenuData: iMenu[] = [
        {
            label: "Home",
            uri: APP_ROUTES.HOME(),
        },
        {
            label: "About",
            uri: APP_ROUTES.ABOUT(),
        },
        {
            label: "Servises",
            uri: APP_ROUTES.SERVICES(),
        },
        {
            label: "Cases",
            uri: APP_ROUTES.CASES(),
        },
        {
            label: "Contacts",
            uri: APP_ROUTES.CONTACTS(),
        },
    ];