# Bridge pattern
コレクション内の要素について，内部での表現（Stack, Queueなど）に寄らずに全要素を利用するためのpattern

## 問題
- コレクション型内の要素全てに1回ずつアクセスするのは，以下の理由で困難
    - 複数のコレクション型のパターンがある
        - List, Stack, Queue, Graphなど
    - データ型によっては，要素にアクセスする順番が自明ではない
        - 深さ優先，幅優先，ランダムなど
- Collection型毎にアクセスするinterfaceが違うと，利用するClient側のコードが煩雑になる

## 解決法
- 全要素を参照する処理をiteratorオブジェクトに切り出す
- 以下を管理する
    - 要素全てにアクセスするアルゴリズムの実装
    - 現在の要素
- 以下にアクセスできる共通のinterfaceを持つ
    - 次の要素の取得
    - 要素が残っているか
    - interfaceの共通化により，Client側はCollection型毎にiterationのアルゴリズムを持たなくて良い

# 実装の流れ
- iterator interfaceを定義する
    - 以下メソッドを持つ（必須）
        - 次の要素取得
    - 以下メソッドを持つ（任意）
        - 現在の要素取得
        - 前の要素取得
        - iterationの終わりであるかを判定
- iterator interfaceを返すメソッドを含んだCollection interfaceを定義
- iterator interfaceの実装クラスを定義
    - コンストラクタでCollection Classへの参照を持つ
- Collection Classでのinterfaceを実装する
    - Iterator interface実装クラスに自分自身を参照させて返す
- Clientコードをiteratorを使うよう修正
    - 全要素への参照が必要になるたびにiteratorを生成する
