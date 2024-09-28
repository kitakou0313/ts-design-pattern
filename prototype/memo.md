# Prototype pattern
あるobjectのコピーを作成するためのpattern

## 問題
- あるobjectのコピーを作成する際の問題を解決したい
    - すべてのpropertyをコピーする必要があるが困難
        - privateやprotectedなどのアクセス修飾子
        - propertyの型定義がinterfaceなどで具体的な型が不明

## 解決法
- コピーするobeject自身にコピーする処理を実装させる
    - 共通のinterfaceを持たせる
    - この処理（clone）を実装したobjectをprototypeと呼ぶ
- 問題への解決策
    - 同じクラスなのでアクセス修飾子にもアクセス可能

# 実装の流れ
- cloneするclassのコンストラクタにそのclassのobject自身を引数にとるものを追加する
    - propetyを参照するため
