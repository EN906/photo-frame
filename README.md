# 照片參數邊框（獨立 App 版）

替照片加上模糊背景邊框，以及機型和光圈、ISO、快門等參數。加到 iPhone 主畫面後：

- 會像 App 一樣全螢幕打開
- 打開過一次就能離線使用
- 按「存到相簿」會直接跳出分享選單，存進「照片」

照片只在手機上處理，不會上傳到任何地方。

## 一、放上 GitHub Pages（免費，用電腦做最快）

1. 登入 github.com，按右上角「+」→「New repository」。
2. Repository name 填 `photo-frame`，選 **Public**，按「Create repository」。
3. 在新 repo 的頁面點「uploading an existing file」，把這個資料夾**裡面**的所有東西一起拖進去，然後按「Commit changes」。要拖的有：
   - `index.html`、`sw.js`、`manifest.webmanifest`、`.nojekyll`
   - `fonts`、`icons`、`vendor`、`licenses` 四個資料夾
4. 到 repo 的「Settings」→ 左邊「Pages」，Source 選「Deploy from a branch」，Branch 選 `main`、資料夾選 `/ (root)`，按「Save」。
5. 等一兩分鐘，頁面上方會出現網址：`https://你的帳號.github.io/photo-frame/`。

拖檔案時要注意兩件事：

- 要拖的是資料夾「裡面的東西」，不是整個 `photo-frame-app` 資料夾。`index.html` 要在 repo 的最上層，網址才打得開。
- `.nojekyll` 是隱藏檔，Mac 的 Finder 要按 ⌘⇧. 才看得到。沒傳到也沒關係。

## 二、加到 iPhone 主畫面

1. 用 **Safari** 打開上面的網址。
2. 按「分享」→「加入主畫面」。如果有「以網頁 App 打開」的選項，保持開啟，再按「加入」。
3. 之後從主畫面的「參數邊框」圖示打開，就是全螢幕的 App。

## 三、存照片

輸出後按「存到相簿」，再選「儲存影像」。一次輸出多張的話，可以按「全部存到相簿」一起存。

## 更新

改了任何檔案，就重新上傳到同一個 repo。記得把 `sw.js` 第二行的 CACHE 名稱也改掉，例如在後面加 `-2`。然後在手機上把 App 完全關掉、再打開，就會換成新版。

## 隱私

- 網站本身是公開的，有網址的人都能用這個工具，但網站裡沒有你的任何照片或設定。
- 你的設定、Logo 和浮水印圖片只存在你手機上的這個 App 裡。

## 使用的開源元件

- exifr 7.1.3（MIT）：讀取照片的 EXIF
- stackblur-canvas 2.7.0（MIT）：背景模糊
- Montserrat、Playfair Display、Bebas Neue、IBM Plex Mono：SIL Open Font License 1.1，取自 Fontsource

各元件的授權全文放在 `licenses` 資料夾。
