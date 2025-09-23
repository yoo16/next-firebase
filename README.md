# Next.js + Firebase (Auth + Firestore) — Minimal Starter

## Firebase Console
1. Firebase のアカウント作成
https://firebase.google.com/?hl=ja

2. Firebase Console で新規プロジェクト作成
https://console.firebase.google.com/

3. 「Authentication」→「サインイン方法」→ Googleログイン を有効化
4. 「Firestore Database」を作成
5. 「Webアプリを追加」して firebaseConfig を取得

## Next.js プロジェクト作成
```bash
npx create-next-app next-firebase
```

### 設問
```bash
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like to use src/ directory? … No
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to customize the default import alias (@/*)? … No
```

### ファイル構成
```treeview
next-firebase-starter/
├─ app/
│  ├─ layout.tsx
│  ├─ globals.css
│  ├─ page.tsx                # Landing: shows Sign in or link to /app
│  └─ app/
│     └─ page.tsx             # Protected Todo App (client-side guard)
├─ components/
│  ├─ AuthButtons.tsx         # Google/Email sign in/out
│  ├─ TodoForm.tsx            # Add todos
│  └─ TodoList.tsx            # List + toggle + delete
├─ hooks/
│  └─ useAuth.ts              # React hook around Firebase Auth state
├─ lib/
│  └─ firebase.client.ts      # Client SDK init (Auth, Firestore)
├─ public/
│  └─ favicon.ico
├─ .env.local.example         # Copy -> .env.local
├─ package.json
├─ postcss.config.js
├─ tailwind.config.ts
├─ tsconfig.json
└─ next.config.ts
```

### firebase インストール
#### Firebase JavaScript SDK（Firebaseサービスを使うため）
```bash
npm install -g firebase-tools
```

#### Firebase CLI ツール（開発・デプロイ用）
```bash
npm install firebase
```

### Firebase CLI ログイン
1. firebase コマンドでログインする
```bash
firebase login
```
2. 設問に答える
```bash
Enable Gemini in Firebase features? (Y/n)

Allow Firebase to collect CLI and Emulator Suite usage and error reporting information?
(Y/n)
```

```bash
firebase init
```

### 環境設定ファイル
#### .env.local
```bash
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_APP_ID
```

### Data Connect
1. Data Connect を初期化
```bash
firebase init dataconnect
```

2. 「Use an existing project」を選択

```bash
? Please select an option: (Use arrow keys)
❯ Use an existing project
  Create a new project
  Add Firebase to an existing Google Cloud Platform project
  Don't set up a default project
```

3. プロジェクトを選択する

```bash
 Please select an option: Use an existing project
? Select a default Firebase project for this directory: (Use arrow keys)
❯ project1
  project2
  project3
```

4. そのまま Enter する。
```bash
Describe your app to automatically generate a schema with Gemini [Enter to skip]:
```

5. dataconnect フォルダや関連ファイルが作成される。