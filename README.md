# Math Quest 公開メモ

式の展開と因数分解をRPG風に学習するHTMLアプリです。GitHub Pagesでは `index.html` が入口になります。

## 公開用ファイル構成

```text
.
├── index.html              # GitHub Pagesの入口
├── styles.css              # 画面デザイン
├── app.js                  # ゲーム処理、ログイン、学習データ保存
├── firebase-config.js      # Firebaseの公開用Web設定
├── firestore.rules         # Firestoreの安全ルール
├── firebase.json           # Firebase CLIを使う場合のルール参照
├── .nojekyll               # GitHub Pagesで静的ファイルをそのまま配信
├── .gitignore              # 公開しないファイルの指定
└── assets/
    ├── hero.svg
    └── slime.svg
```

`math-quest-standalone.html`、`math-quest-fixed.html`、`screenshots/` は公開用ではありません。`.gitignore` でGitHubに上げない設定にしています。

## Firebaseで設定すること

1. [Firebase Console](https://console.firebase.google.com/) でプロジェクトを作ります。
2. プロジェクトに「ウェブアプリ」を追加します。
3. 表示されたFirebase設定を `firebase-config.js` の `YOUR_...` と入れ替えます。
4. Authenticationを開き、Sign-in methodで「Google」を有効にします。
5. AuthenticationのSettingsでAuthorized domainsにGitHub Pagesのドメインを追加します。
   例: `ユーザー名.github.io`
6. Firestore Databaseを作成します。最初は「本番環境モード」で作ってください。
7. FirestoreのRules画面に `firestore.rules` の内容を貼り付けて公開します。

FirebaseのWeb設定にある `apiKey` は、通常の意味でのパスワードではありません。Firebase公式も、Firebase用APIキーはプロジェクトやアプリを識別するための公開設定であり、データ保護はSecurity Rulesなどで行うと説明しています。ただし、サービスアカウントJSON、秘密鍵、`.env`、管理者用キーは絶対にGitHubに上げないでください。

## 保存される学習データ

ログイン後、次の場所に本人の学習データを保存します。

```text
users/{ログインした人のuid}/learningData/main
```

保存内容:

- `exp`: 経験値
- `correctCount`: 正解数
- `wrongWords`: 間違えた問題の記録
- `history`: 学習履歴
- `settings`: 表示名などの設定用データ
- `updatedAt`: 最終更新時刻

未ログイン時はブラウザ内だけに保存されます。Googleログイン後はFirestoreにも保存されます。

## GitHub Pagesで公開する手順

1. GitHubで新しいリポジトリを作ります。
2. このフォルダのファイルをリポジトリに入れます。
3. `index.html`、`styles.css`、`app.js`、`firebase-config.js`、`firestore.rules`、`.nojekyll`、`assets/` を含めます。
4. `.env`、秘密鍵、サービスアカウントJSON、スクリーンショット、古い単体HTMLは入れません。
5. GitHubのリポジトリ画面で Settings → Pages を開きます。
6. Sourceを「Deploy from a branch」にします。
7. Branchを `main`、Folderを `/root` にして保存します。
8. 表示されたGitHub PagesのURLを開きます。
9. Firebase AuthenticationのAuthorized domainsに、そのURLのドメインが入っているか確認します。

## 公開前チェックリスト

- [ ] `firebase-config.js` の `YOUR_...` を自分のFirebase設定に置き換えた
- [ ] Firestore Rulesに `firestore.rules` を貼って公開した
- [ ] GoogleログインをFirebase Authenticationで有効にした
- [ ] GitHub PagesのドメインをFirebaseのAuthorized domainsに追加した
- [ ] `.env`、秘密鍵、サービスアカウントJSONが入っていない
- [ ] `math-quest-standalone.html` と `math-quest-fixed.html` を公開対象にしていない
- [ ] ログイン前はゲスト保存、ログイン後はクラウド保存になる
- [ ] 他人の `users/{uid}` のデータを読めないルールになっている

参考:

- [Firebase Web setup](https://firebase.google.com/docs/web/setup)
- [Firebase Google login](https://firebase.google.com/docs/auth/web/google-signin)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
- [Firebase API keys](https://firebase.google.com/docs/projects/api-keys)
- [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
