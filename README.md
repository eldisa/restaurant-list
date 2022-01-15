# 我的餐廳清單

## 敘述
使用 Node.js 搭配 Express 框架搭建的簡易式-我的餐廳清單

## 產品規格與功能

### 餐廳資訊管理及搜尋系統(需登入)
#### 管理
* 新增一家餐廳

* 修改一家餐廳
* 刪除一家餐廳

#### 瀏覽
* 指定一家餐廳的詳細資訊
* 全部的餐廳
* 自己擁有的餐廳
* 根據關鍵字進行搜尋

### 使用者註冊以及認證系統

* 一般帳號密碼
* 使用 Facebook 帳號

## 安裝與執行步驟

* 請先確認已安裝:
    * Node.js
    * npm 

1. 打開終端機並複製此專案至本機

```
git clone https://github.com/eldisa/restaurant-list.git

```

2. 進入專案的目錄
```
cd restaurant-list
```
3. 安裝套件

```
npm install
```

4. 產生種子資料

```
npm run seed
```
5. 啟動伺服器

```
npm run dev
```

6. 開啟網頁瀏覽器並連結到此網址即可瀏覽本專案
```
http://localhost:3000
```
### 開發工具及版本 (dev tools information)：
| 開發工具名稱         | 版本    |
| ------------------ | ------- |
| Node.js            | 14.18.1 |
| express            | 4.17.1  |
| express-handlebars | 5.3.4   |
| Bootstrap          | 4.3.1   |
| jQuery             | 3.3.1   |
| passport           | 0.5.2   |
