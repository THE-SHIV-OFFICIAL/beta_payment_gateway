require('dotenv').config();
const num = (v, d) => (v === undefined || v === '' || isNaN(Number(v)) ? d : Number(v));
module.exports = {
  PORT: num(process.env.PORT, 4000),
  NODE_ENV: process.env.NODE_ENV || 'development',
  BRAND: process.env.BRAND_NAME || 'BETA BOT HUB',
  OWNER: process.env.OWNER_NAME || 'THE SHIV',
  UPI_ID: (process.env.FAMPAY_UPI_ID || '').trim(),
  UPI_NAME: process.env.UPI_PAYEE_NAME || 'BETA BOT HUB',
  GMAIL_USER: (process.env.GMAIL_USER || '').trim(),
  GMAIL_APP_PASSWORD: (process.env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, ''),
  COMMISSION: num(process.env.PLATFORM_COMMISSION_PERCENT, 4),
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || '',
  PUBLIC_URL: (process.env.PUBLIC_URL || '').replace(/\/$/, ''),
  ORDER_EXPIRY_MIN: num(process.env.ORDER_EXPIRY_MINUTES, 30),
  POLL_SECONDS: num(process.env.IMAP_POLL_SECONDS, 20),
  TG_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  TG_CHAT_ID: process.env.TELEGRAM_CHAT_ID || '',
  SUPPORT_GROUP: process.env.TELEGRAM_GROUP || '@betabot_support',
  SUPPORT_CHANNEL: process.env.TELEGRAM_CHANNEL || '@betabot_hub',
  OWNER_TG: process.env.OWNER_TELEGRAM || '@sukoon_s',
};
