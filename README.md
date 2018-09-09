# gashapon-demo

- http://gashapon-demo.s3-website-ap-northeast-1.amazonaws.com/

```
# ローカルで確認
npm run dev

# docs配下に生成して出力
npm run generate
```

```
# masterブランチから取得
git pull origin master

# 変更をmasterブランチに反映
git add .
git commit -m 'メッセージ'
git push origin master
```

## 参考
- https://ja.nuxtjs.org/
- https://element.eleme.io/

```
npm run generate
aws s3 cp --profile mag-dev --recursive ./docs s3://gashapon-demo/
```
