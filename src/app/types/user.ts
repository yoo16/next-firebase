export type UserData = {
    uid: string;           // Firebase Auth の UID
    displayName: string;   // Googleアカウントの表示名
    email: string;         // メールアドレス
    photoURL: string;      // プロフィール画像URL
    createdAt: Date;       // 作成日時（serverTimestamp を Date に変換）
    updatedAt: Date;       // 更新日時
};

// Firestoreから取得した際にドキュメントIDを持つ型
export type UserDocument = UserData & {
    id: string;            // Firestore ドキュメントID
};
