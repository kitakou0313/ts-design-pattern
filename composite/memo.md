# Composite pattern(Obeject tree)

# 解決したい課題
- 木構造として表されるObjectを取り扱うアプリケーションでは，各ノードに関する処理は単純なループでは書けない
    - 例：製品Classと箱Class（製品，または箱を内包できる）で構成されるソフトウェアを考える
    - 再帰的に関係をたどる必要がある

# 解決方法
- 各ノードにClassに関わらず共通のinterfaceを持たせる
    - 各ノードは自分の子ノードに対してループでinterfaceで定義された処理を実行する


# 実装
- 各ノードが共通して行う処理を持つinterfaceを定義する
    - component inteface
- Leafノードに対応するClassを定義する
    - component interfaceを実装する
- 中間のノードに対応するClassを定義する
    - Composite Class
    - 子ノードを管理するため，component interfaceのリストを持つ
    - 子ノードに再帰的に実行するcomponent interfaceのメソッドで実装する
