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

### /api/stockslist

**Request:** `GET /api/stockslist`

Fetches all the stocks' symbols & company names listed on NSE

**Response (example):**
keys are the symbol names and values are the company names

```json
{
  "21STCENMGM": "Twentyfirst Century Management Services Ltd.",
  "A2ZINFRA": "A2Z Infra Engineering Ltd.",
  "AARTIDRUGS": "Aarti Drugs Ltd."
  // ...
}
```

**Request:** `GET /api/stockslist/nifty50`

Fetches all the stocks' symbols & company names listed in Nifty 50

**Response (example):**
keys are the symbol names and values are the company names

```json
{
  "ADANIPORTS": "Adani Ports & Special Economic Zone Ltd.",
  "ASIANPAINT": "Asian Paints Ltd.",
  "AXISBANK": "Axis Bank Ltd.",
  "BAJAJ-AUTO": "Bajaj Auto Ltd.",
  "BAJFINANCE": "Bajaj Finance Ltd."
  // ...
}
```

### /api/news

**Request:** `GET /api/news/:symbol`

Fetches recent news of a particular stock given it's symbol

**Response (example):**

An array of articles' metadata

```json
[
{
 title,
 link,
 guid,
 pubDate,
 description,
 source
},
// ...
]
```
