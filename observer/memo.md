# Observer
通知のサブスクリプションを実現するパターン

## 問題
- あるObjectの状態を監視したい
    - 例：顧客と店
    - 顧客が定期的に確認するパターン
        - 確認の処理が無駄になる
    - 店が全ユーザーに通知
        - 監視したくないユーザーにはリソースの無駄


## 解決法
- 前提
    - 状態を監視したい側のObjectをSubscriber
    - 監視される側をPublisherと呼ぶ
- Subscriber側で自身を監視したいPublisherのリストを持ち，通知する
    - Subscriber側はPublisherのリストへの追加，削除用のPublicメソッドを持つ

# 実装の流れ
- ビズネスロジックを以下の二つに分ける
    - 他のコードから独立した機能
        - Publisherになる
    - それ以外
        - Subscruberになる
- Subscriber Interfaceを定義する
    - 通知を受けるためのメソッドのみで良い
- Publisher Interfaceを定義する
    - Subscriberの追加，削除
    - Interfaceにのみ依存することに注意
- Subscriberのリスト，送信のメソッドを管理する場所を考える
    - どのPublisherでも共通した処理と考えられるため，Publisher Interfaceを実装した抽象クラスがよい
- Publisherの実装クラスを定義する
    - 重要なことが起きたらSubscriberに通知する
- Subscriberの実装クラスの通知を受けるメソッドを実装する
    - 通知した時のContextが必要なため，Publisher自身を渡すなどで実現する
- Client側で必要なSubscriber, Publisherを実装する
