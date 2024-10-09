# Decorator pattern(Wrapper tree)
あるオブジェクトに対する振る舞いの追加をラッパーによって実現する手法

# 解決したい課題
- あるオブジェクトに対する振る舞いの追加を継承で行うと，組み合わせが膨大になる場合がある
    - 例:通知ライブラリの例
        - 通知方法（Slack, メール）ごとにサブクラスを作る実装では，複数の通知方法を実現しようとすると組み合わせが膨大になる
            - 継承は排他的なものを表すときにのみ使うべき？

# 解決方法
- 実際に処理を行うクラスとは別にwrapper classを作成する
- wrapper classは以下の特徴を持つ
    - wrapされるクラスが処理を行うメソッドと同じメソッドを持つ
        - 元のClassを継承する
    - wrapされるクラスのオブジェクトをpropertyに持つ
    - wrapされるクラスのメソッドと同じメソッドでは，元の処理に付け加える形で処理を行う
        - 追加の処理をpropertyの前後に追加するイメージ


# 実装
- wrapper, wrapped双方が実装するComponent interfaceを定義する
- Component interfaceを実装するConcret Classを定義する
- Base Decorator Classを定義する
    - propertyにwrapされるComponent interfaceを実装したClassを持つ
    - Component interfaceを実装する
        - メソッド内でwrapped propertyの同じメソッド＋追加の処理を行う
- Base Decorator Classを継承したConcrete Decorators Classを作成する
- Clientは複数のwrapperを用いて機能を付け足す
    - 追加機能を一つのwrapperに持たせ，複数回のwrapにより機能を追加する

# 実装時の注意
- 対象領域が核となるComponentと複数の任意の追加処理で表せられることを確認する
- 上記のComponentで共通となっている処理を確認し，Component interfaceに切り出す
