# Strategy
アルゴリズムの集合を定義し，それらを個別のクラスに切り出し，互換性を持たせるパターン

## 問題
- インターフェースは変わらないが内部の処理だけ切り替えたい　というケースがある
    - 例：地図アプリの道案内
        - 車，歩行，新幹線など
- 一つのクラスに処理をすべて実装すると，クラスが巨大になる
    - 一つのアルゴリズムの変更が他処理にも波及する
    - コンフリクトが起きる

## 解決法
- アルゴリズムごとに別のClassに切り出し，共通のInterfaceで利用する
    - InterfaceをStrategy Classとする
- アルゴリズムを利用するClass（Context Class）側が利用するアルゴリズムのClassへの参照を持つ
- アルゴリズムごと分割されたクラスになるため，問題なく利用可能

# 実装の流れ
- Context Class（複数のアルゴリズムを持っているClass）内で以下のいずれかに該当するクラスを探す
    - 頻繁に変更される可能性のあるクラス
    - 巨大な条件分岐のあるアルゴリズム
- Strategy Interfaceを定義する
- 各アルゴリズムをStrategy Interfaceに切り出す
- Context ClassがStrategy Interface 実装クラスを利用するよう変更する
- Client側でContext Classに渡すStrategy Interface実装クラスを切り替える
