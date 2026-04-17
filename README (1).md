# 📅 schedule-app

シンプルで使いやすいスケジュール管理アプリ。**React 19 + Vite 7** で構築された、軽量で高速なフロントエンドアプリケーションです。

🔗 **Live Demo**: [https://schedule-app-iota-six.vercel.app](https://schedule-app-iota-six.vercel.app)

---

## ✨ 特徴

- ⚡ **Vite** による超高速な開発体験（HMR対応）
- ⚛️ **React 19** の最新機能を活用
- 📆 **date-fns** による柔軟な日付操作
- 🎨 軽量で直感的なUI
- 🚀 **Vercel** で即座にデプロイ可能

---

## 🛠️ 技術スタック

| カテゴリ | 技術 |
|---------|------|
| フレームワーク | React 19.2 |
| ビルドツール | Vite 7.3 |
| 日付処理 | date-fns 4.1 |
| Lint | ESLint 9.39 |
| ホスティング | Vercel |
| 言語 | JavaScript / CSS / HTML |

---

## 📦 セットアップ

### 前提条件

- **Node.js** 18以上
- **npm** または **yarn**

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/bunjinshiromura-code/schedule-app.git

# ディレクトリへ移動
cd schedule-app

# 依存パッケージをインストール
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

起動後、ブラウザで `http://localhost:5173` にアクセスしてください。

---

## 📜 利用可能なスクリプト

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバーを起動（HMR有効） |
| `npm run build` | 本番用ビルドを生成 |
| `npm run preview` | ビルド結果をプレビュー |
| `npm run lint` | ESLintによるコード品質チェック |

---

## 📁 プロジェクト構成

```
schedule-app/
├── public/              # 静的ファイル
├── src/                 # ソースコード
│   ├── components/      # Reactコンポーネント
│   ├── App.jsx          # ルートコンポーネント
│   └── main.jsx         # エントリーポイント
├── index.html           # HTMLエントリー
├── vite.config.js       # Vite設定
├── eslint.config.js     # ESLint設定
└── package.json         # プロジェクト定義
```

---

## 🚀 デプロイ

本プロジェクトは **Vercel** に自動デプロイされます。

```bash
# ビルドコマンド
npm run build

# 出力ディレクトリ
dist/
```

`main` ブランチへのプッシュで本番環境へ自動反映されます。

---

## 🤝 コントリビューション

1. このリポジトリを Fork する
2. 新しいブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. Pull Request を作成

---

## 📝 ライセンス

このプロジェクトはパブリックリポジトリとして公開されています。

---

## 👤 作者

**bunjinshiromura-code**

- GitHub: [@bunjinshiromura-code](https://github.com/bunjinshiromura-code)

---

## 🔗 関連リンク

- [公開サイト](https://schedule-app-iota-six.vercel.app)
- [GitHubリポジトリ](https://github.com/bunjinshiromura-code/schedule-app)
- [React 公式ドキュメント](https://react.dev/)
- [Vite 公式ドキュメント](https://vite.dev/)
- [date-fns 公式ドキュメント](https://date-fns.org/)

---

⭐ このプロジェクトが役に立ったら、Starをお願いします！
