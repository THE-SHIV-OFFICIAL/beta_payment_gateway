# BETA BOT HUB – UPI Payment Gateway

Built by **THE SHIV** · Support: [@betabot_support](https://t.me/betabot_support) · Updates: [@betabot_hub](https://t.me/betabot_hub) · Owner: [@sukoon_s](https://t.me/sukoon_s)

## How it works
1. A user signs up on `/dashboard` with **only email + password** (no Gmail app password needed).
2. They get an API key and create payments from their website/bot.
3. Customer pays to the owner's FamPay UPI ID. Each order has a unique amount (a few paise added) + order ID in the note.
4. Server reads the owner's Gmail every ~20 s, finds the FamPay alert, marks the order **PAID**.
5. The user gets an email (sent from the owner's Gmail) with amount, order and earning; customer gets a receipt; optional Telegram alert + webhook.
6. 4% commission is kept; the rest is the user's balance. Users request withdrawals, owner pays them via UPI and clicks "Mark paid" in `/admin`.

## Run
```bash
npm install
npm start        # http://localhost:4000
```
Settings are in `.env` (see `.env.example`). Data is saved in `data/db.json` – keep this folder when redeploying (Docker volume / Railway volume).

Pages: `/` home · `/dashboard` users · `/pay?id=ORDER` checkout · `/admin` owner panel.

## API
```
POST /api/v1/payments/create      Authorization: Bearer API_KEY
     { "amount": 99, "customerEmail": "buyer@gmail.com", "note": "Premium" }
GET  /api/v1/payments/:orderId    Authorization: Bearer API_KEY
```
Webhook (optional, set in Settings): `POST { event: "payment.paid", order }` with header `X-BBH-Signature = HMAC_SHA256(apiKey, orderId)`.

## Notes
- Gmail must have IMAP enabled (Gmail → Settings → Forwarding and POP/IMAP).
- FamPay must send payment-received emails to the owner Gmail.
- Telegram alerts: create a bot with @BotFather, add it as admin to your channel, put the token in `TELEGRAM_BOT_TOKEN`.
