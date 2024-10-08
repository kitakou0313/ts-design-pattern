# Bridge pattern
巨大なクラスや結合度の高いクラスの集合を別々に実装できるように抽象と実装の2階層に分離するパターン

## 問題
- 抽象度の高いクラスからいくつかの属性に基づいてサブクラスを作る
    - 例：クラス Shape -> Square, Circle
- 新しい属性を追加すると，サブクラスが指数関数的に増大する
    - 例：クラス Shape -> RedSquare, RedCircle, BlueSquare, BlueCircle

## 解決法
- 継承から属性の保持に切り替える
    - 片方の属性に対応するClassをもう片方の属性に持たせる
    - 例：ShapeクラスにColorクラスを持たせ，それぞれのサブクラスを持たせる
- この書籍におけるAbstraction
    - 高いレベルの制御層ぐらいの意味合い
    - アプリケーションのGUIぐらいの立ち位置

# 実装の流れ
