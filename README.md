# stocks-news-feed Backend REST API

## Scripts

### Start Server

```bash
$ npm start
```

### Start Development Server

```bash
$ npm run dev
```

## API Endpoints

### /api/topgainers

Fetches the top 10 gainers

**Request:** `GET /api/topgainers`

**Response (example):**

```json
[
  {
    "series": "EQ",
    "symbol": "CIPLA",
    "percentChange": "3.48",
    "lastTradedPrice": "955.00",
    "volume": "36,88,123"
  }
  // ...
]
```
