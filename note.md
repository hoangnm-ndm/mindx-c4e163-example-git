# Cai node

Vào trang chủ nodejs: https://nodejs.org/en/

```bash
node -v
```

## Khoi tao du an nodejs

```bash
npm init
```

## Cai dat json-server va json-server-auth

Để fake API backend nhanh chóng, ta có thể sử dụng json-server và json-server-auth để tạo một REST API giả lập với tính năng xác thực người dùng.

```bash
npm install json-server@0.17.0 json-server-auth
```

## Cập nhật lại scripts trong package.json

Mở file package.json và cập nhật phần "scripts" như sau:

```json
"scripts": {
  "start": "json-server --watch db.json --port 3000 -m ./node_modules/json-server-auth"
}
```
