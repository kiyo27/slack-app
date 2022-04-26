# files.upload
slack apiを利用してfileをアップロードする

## 準備するもの
slack tokenとchannelを環境変数から取得するので``.env``ファイルを作成する
```
SLACK_TOKEN=your-slack-token
CHANNELS=channels-you-want-to-post
```

## 実行方法
```
node upload-file.js
```