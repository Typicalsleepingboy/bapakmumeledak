import dotenv from 'dotenv';
import { Secret } from 'jsonwebtoken';

dotenv.config();

/* App Config */
export const APP_PORT = process.env.APP_PORT || 8080;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as Secret;
export const ORIGIN = process.env.ORIGIN || '*';
export const BASE_URL = process.env.BASE_URL;

/* DB Config */
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = Number(process.env.DB_PORT);
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_DATABASE = process.env.DB_DATABASE;
export const DB_MAX_CONNECTIONS = Number(process.env.DB_MAX_CONNECTIONS) || 20;
export const DB_SSL =
    process.env.NODE_ENV === 'DEVELOPMENT'
        ? {
            rejectUnauthorized: false,
            sslMode: 'require',
        }
        : undefined;

/* Resend Email Config */
export const RESEND_KEY = process.env.RESEND_KEY;
export const RESEND_EMAIL = process.env.RESEND_EMAIL;
export const RESEND_SENDER = process.env.RESEND_SENDER;

// /* Xendit */
export const XENDIT_SECRET_KEY = process.env.XENDIT_SECRET_KEY;

/* Tax */
export const PPN_PERCENTAGE = Number(process.env.PPN_PERCENTAGE) || 0.1;

/* Author Config */
export const AUTHOR_SERVICE_NAME = process.env.AUTHOR_SERVICE_NAME;
export const AUTHOR_NAME = process.env.AUTHOR_NAME;
export const AUTHOR_EMAIL = process.env.AUTHOR_EMAIL;
export const AUTHOR_SOCIAL_MEDIA = {
    twitter: process.env.AUTHOR_TWITTER,
    github: process.env.AUTHOR_GITHUB,
    linkedin: process.env.AUTHOR_LINKEDIN,
};
export const AUTHOR_WEBSITE = process.env.AUTHOR_WEBSITE;
export const AUTHOR_DOCUMENTATION = process.env.AUTHOR_DOCUMENTATION;

export const FCM_DEFAULT_IMAGE_LOGO = BASE_URL + '/static/logo_jkt48pm_1.png';

// APPLE
export const APPLE_SECRET_KET = process.env.APPLE_SECRET_KET;
export const APPLE_ISSUER_ID = process.env.APPLE_ISSUER_ID;
export const APPLE_KEY_ID = process.env.APPLE_KEY_ID;
export const APPLE_BUNDLE_ID = process.env.APPLE_BUNDLE_ID;
