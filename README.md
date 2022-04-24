# Sequelize ラーニング

- [Sequelize v6](https://sequelize.org/)
- [Sequelize 6.5 (日本語)](https://runebook.dev/ja/docs/sequelize/-index-)
- [The Sequelize Command Line Interface (CLI)](https://github.com/sequelize/cli)
- Sequelize とは
    > [Sequelize is a modern TypeScript and Node.js ORM for Postgres, MySQL, MariaDB, SQLite and SQL Server, and more.](https://sequelize.org/)
-  ORM とは
    > [O/Rマッピングとは、オブジェクト指向プログラミング言語におけるオブジェクトとリレーショナルデータベース（RDB）の間でデータ形式の相互変換を行うこと。](https://e-words.jp/w/O-R%E3%83%9E%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0.html)


## 検証環境
```
node --version
v16.14.2
```
```
npm --version
8.5.0
```
```
mysql --version
mysql  Ver 8.0.28
```
## Installation
### ローカルに `sequelize` をインストール
```
npm install sequelize
```
package.json
```
"dependencies": {
    "sequelize": "^6.19.0"
}
```


### ローカルに `sequelize-cli` をインストール
- 開発環境のみで使用するので `--save-dev` をつける。
- `devDependencies` にインストールされる。
```
npm install --save-dev sequelize-cli
```
package.json
```
"devDependencies": {
    "sequelize-cli": "^6.4.1"
}
```

### ローカルに `mysql2` をインストール
```
npm install mysql2
```
package.json
```
"dependencies": {
    "mysql2": "^2.3.3",
    "sequelize": "^6.19.0"
}
```


### `npx sequelize` コマンドで実行
`npx sequelize --version`
```
Sequelize CLI [Node: 16.14.2, CLI: 6.4.1, ORM: 6.19.0]
6.4.1
```


## Usage
### フォルダの作成
```
npx sequelize init
```
```
Created "config/config.json"
Successfully created models folder at "/sequelize-learning/models".
Successfully created migrations folder at "/sequelize-learning/migrations".
Successfully created seeders folder at "/sequelize-learning/seeders".
```
```
.
├── config
│   └──  config.js
├── migrations
├── models
│   └── index.js
└── seeders
```
- `init:config` 、`init:migrations` 、`init:models` 、 `init:seeders` で個別に作成することもできる。


## モデルの作成
```
npx sequelize model:generate --name モデル名 --attributes 属性名:型
```
- `--name` はモデル名、 `--attributes` は属性名と型を指定する。
```
--name          Defines the name of the new model [文字列] [必須]
--attributes    A list of attributes [文字列] [必須]
```
- `--attributes` は必須項目。複数指定できる。`\`で改行できる。

例）
```
npx sequelize model:generate --name User --attributes \
firstName:string,\
lastName:string,\
email:string
```
```
New model was created at /sequelize-learning/models/user.js .
New migration was created at /sequelize-learning/migrations/**********-create-user.js .
```
```
.
├── config
│   └──  config.js
├── migrations
│   └── **********-create-user.js
├── models
│   ├── index.js
│   └── user.js
└── seeders
```
