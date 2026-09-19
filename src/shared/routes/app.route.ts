export const APP_ROUTES = {
    root: (path: string = '') => path,
    HOME: () => APP_ROUTES.root('/'),
    ABOUT: () => APP_ROUTES.root('/about'),
    CONTACTS: () => APP_ROUTES.root('/contacts'),
    SERVICES: () => APP_ROUTES.root('/services'),
    CASES: () => APP_ROUTES.root('/cases'),
} as const;