# おりた / works and notes

参考サイトの「縦長で、作品と活動の記録が主役の個人サイト」を意識した静的サイトです。参考元の文章・画像はコピーせず、レイアウトの方向性のみを参考にしています。

## ファイル
- `index.html`：文章、リンク、作品、フォーム
- `style.css`：幅、余白、文字、スマホ対応
- `script.js`：スマホ目次、年表示、メール作成フォーム

## プレビュー
`index.html` をブラウザで開いてください。

## 公開前に変更すること
- プロフィールの文章
- X / note / Instagram のURL
- お知らせの日付と内容
- 作品タイトル、あらすじ、掲載先URL
- `image-placeholder` と `cover-placeholder` を実際の作品画像に差し替え
- `hello@example.com` と `script.js` の `CONTACT_EMAIL`

## 画像を差し替える例
`<div class="cover-placeholder cover-one"><span>作品画像</span></div>` を次のように変更します。
`<img class="cover-image" src="images/work-cover.jpg" alt="作品タイトルの表紙">`
必要に応じて `style.css` に `.cover-image { display:block; width:100%; height:auto; }` を追加してください。

## メールフォーム
このフォームは入力内容をメールアプリに渡す方式です。Webページから直接送信するには、Formspree等のフォームサービスかサーバー側の送信処理が必要です。
