# 照片參數邊框 Photo Frame

[中文](#中文) ｜ [English](#english)

---

## 中文

作者：EN906

替照片加上模糊背景邊框，以及機型和光圈、ISO、快門等參數。加到 iPhone 主畫面後：

- 會像 App 一樣全螢幕打開
- 打開過一次就能離線使用
- 按「存到相簿」會直接跳出分享選單，存進「照片」
- 內建 18 種濾鏡（電影暖橙、日系灰霧、徠卡風、底片、CCD 等），可微調顆粒、暗角、光暈，也能加日期戳記
- 每個設定都能單獨還原：改過的項目旁邊會出現 ↺，每個區塊有「重設」，濾鏡、文字、版面也能一次還原整頁；按錯了可以馬上按「復原」

照片只在手機上處理，不會上傳到任何地方。

### 網址

https://en906.github.io/photo-frame/

網站由 GitHub Pages 從 `gh-pages` 分支發布，`main` 分支放的是同一份檔案。

### 加到 iPhone 主畫面

1. 用 **Safari** 打開上面的網址。
2. 按「分享」→「加入主畫面」。如果有「以網頁 App 打開」的選項，保持開啟，再按「加入」。
3. 之後從主畫面的「參數邊框」圖示打開，就是全螢幕的 App。

### 存照片

輸出後按「存到相簿」，再選「儲存影像」。一次輸出多張的話，可以按「全部存到相簿」一起存。

### 更新

改了任何檔案，把 `sw.js` 第二行的 CACHE 名稱也改掉（例如在後面加 `-2`），再推到 `gh-pages` 分支（`main` 也一起更新）。手機上把 App 完全關掉、再打開，就會換成新版。

### 隱私

- 網站本身是公開的，有網址的人都能用這個工具，但網站裡沒有你的任何照片或設定。
- 你的設定、Logo 和浮水印圖片只存在你手機上的這個 App 裡。

### 授權

© 2026 EN906，保留所有權利。

- 歡迎任何人免費使用上面的網站處理自己的照片，做出來的照片屬於你自己。
- 如果想引用、修改或重新發布這個專案的程式碼、設計或濾鏡設定，請先到 [Issues](https://github.com/EN906/photo-frame/issues) 開一則留言聯絡我，取得同意後再使用。
- 完整條款見 [LICENSE](LICENSE)。下面列的第三方元件依各自的授權使用。

### 使用的開源元件

- exifr 7.1.3（MIT）：讀取照片的 EXIF
- stackblur-canvas 2.7.0（MIT）：背景模糊
- Montserrat、Playfair Display、Bebas Neue、IBM Plex Mono：SIL Open Font License 1.1，取自 Fontsource

各元件的授權全文放在 `licenses` 資料夾。

---

## English

Author: EN906

Photo Frame adds a blurred-background border to your photos, along with the camera model and exposure details such as aperture, ISO and shutter speed. Once you add it to your iPhone home screen:

- It opens full screen, like an app
- It works offline after the first visit
- The save button opens the share sheet, so you can save straight to Photos
- It includes 18 filters (warm cinematic, faded Japanese style, Leica style, film, CCD and more), with adjustable grain, vignette and glow, plus an optional date stamp
- Each setting can be reset on its own: a ↺ button appears next to anything you've changed, each section has its own 重設 (Reset) button, and the filter, text and layout tabs can each be reset as a whole. If you reset something by mistake, tap 復原 (Undo) right away

Photos are processed only on your device and are never uploaded.

The app's interface is in Traditional Chinese. The steps below give each button's on-screen Chinese label, followed by its meaning in parentheses.

### Website

https://en906.github.io/photo-frame/

The site is published with GitHub Pages from the `gh-pages` branch. The `main` branch holds the same files.

### Add it to your iPhone home screen

1. Open the link above in **Safari**.
2. Tap Share, then Add to Home Screen. If you see an "Open as Web App" option, leave it on, then tap Add.
3. From then on, open it from the 參數邊框 (Photo Frame) icon on your home screen, and it runs as a full-screen app.

### Save photos

After exporting, tap 存到相簿 (Save to Photos), then choose Save Image. If you exported several photos at once, tap 全部存到相簿 (Save All to Photos) to save them together.

### Updating

Whenever you change any file, also change the CACHE name on line 2 of `sw.js` (for example, add `-2` to the end). Then push to the `gh-pages` branch and update `main` as well. On the phone, fully close the app and open it again to load the new version.

### Privacy

- The website is public, so anyone with the link can use the tool, but it contains none of your photos or settings.
- Your settings, logo and watermark image are stored only in the app on your own phone.

### License

© 2026 EN906. All rights reserved.

- Anyone is welcome to use the website above free of charge to process their own photos. The photos you create belong to you.
- If you want to quote, modify or redistribute this project's code, design or filter presets, please contact me first by opening an issue under [Issues](https://github.com/EN906/photo-frame/issues), and use them only after you get permission.
- See [LICENSE](LICENSE) for the full terms. The third-party components listed below are used under their own licenses.

### Open-source components used

- exifr 7.1.3 (MIT): reads photo EXIF data
- stackblur-canvas 2.7.0 (MIT): background blur
- Montserrat, Playfair Display, Bebas Neue and IBM Plex Mono: SIL Open Font License 1.1, from Fontsource

The full license text for each component is in the `licenses` folder.
