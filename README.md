# Node2Know — Express Query Strings

A minimal Express app demonstrating **query strings** with `req.query`.

Query strings are the “options panel” for a route:
- they don’t change the route path
- they modify the request using key/value pairs after `?`

Example:

```txt
/search?keyword=turbo&sort=desc
```

---

## ✅ Prereqs

- **Node.js**
- **npm**

Check:

```bash
node -v
npm -v
```

---

## 📦 Install

```bash
npm install
```

---

## ▶️ Run

```bash
npm start
```

---

## 🧪 Try it

### With keyword + sort

Open:

- `http://localhost:3000/search?keyword=turbo&sort=desc`

You’ll get:

```txt
Searching for turbo sorted by desc
```

### With keyword only

Open:

- `http://localhost:3000/search?keyword=turbo`

You’ll get:

```txt
Searching for turbo sorted by undefined
```

(That’s intentional — it shows `sort` is optional unless you enforce it.)

### Missing keyword

Open:

- `http://localhost:3000/search`

You’ll get:

```txt
Please specify a keyword.
```

---

## 👀 Watch mode

```bash
npm run watch
```

Edit `app.js`, save, refresh.

Stop with:
- `Ctrl + C`

---

## 🧠 Key idea

Query string values land here:

```js
req.query
```

So:

- `/search?keyword=turbo&sort=desc`
- `req.query = { keyword: "turbo", sort: "desc" }`

---

## 📁 Project Structure

```txt
.
├── app.js
├── package.json
└── README.md
```

---

## Repo

- https://github.com/ProfessorSolo/Node2Know-ExpressQueryStrings.git

---

## License

**Node2Know-LEARN-1.0**
