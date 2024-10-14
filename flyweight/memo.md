# Facade(cache)
複数のオブジェクト間で状態を共有することで，メモリ使用量を削減するパターン

## 問題
- オブジェクト毎にデータを持たせた場合，大量にオブジェクトを生成すると大きくメモリを消費する
    - 3Dゲームにおけるパーティクルなど

## 解決法
- オブジェクト間，オブジェクトのライフサイクル間で共通となる状態とそれ以外を別Classに切り出す
    - 別Classに切り出された状態をintrinsic state，オブジェクト間で異なる状態をextrinsic stateと呼ぶ
    - intrinsic stateはimmutableに保つ
        - コンストラクタによる初期化のみ
- intrinsic stateをメソッド経由でextrinsic stateのオブジェクトに渡す
- intrinsic state Classを使いまわせるため，メモリ使用量が改善される
- extrinsic stateはContext Classなどに格納する

# 実装の流れ
- 対象のクラスについて，propertyを以下の2つに分割する
    - the intrinsic state
        - 複数のオブジェクト間で共通のデータ
    - the extrinsic state
        - 複数のオブジェクト間で異なるデータ
- intrinsic stateをimmutableな別クラスに切り出す
- intrinsic stateを切り出した別クラスにextrinsic stateに依存する元のメソッドを追加する＋引数でextrinsic stateを渡す
- 追加で以下のClassを定義する
    - flyweightFactory
        - intrinsic stateに対応するfactory stateを管理する
        - 単一のintrinsic stateに単一のflyweightクラスのオブジェクトが対応するよう管理する
    - context
        - extrinsic stateを管理する
        - flyweightクラスのオブジェクトに参照を持ち，extrinsic stateをパラメータとして渡す
        - clientクラスはcontextクラスを経由してflyweightクラスを利用する
- 実装時の確認
    - 対象のクラスによりメモリの問題が発生しているか？
        - 最適化手法なので
