# Visitor
アルゴリズムとそれを実行するクラスを分離するパターン

## 問題
- ある処理とその対象が異なるクラスを考える
    - あるクラスとそれをXMLにエクスポートする処理
- 対象となるクラス自身にそれを埋め込むと，クラスが壊れやすくなる場合がある
    - 頻繁に変更がかかりそうな処理
- そのクラスの責務の範囲外となる処理を加えてしまう可能性がある

## 解決法
- 新しい振る舞いを分離されたクラスに切り出す
    - Visitorクラス
- 対象となるクラスごとにメソッドを切り出す
- クラスごとにどのメソッドを呼び出すか分岐処理を実装することになるが，対象となるClass側にaccpectメソッドを追加することで解決する
    - Visitor Classのオブジェクトを引数にとり，自分のクラスに対応したメソッドを実行する
    - 元クラスへの変更は最小になる

## 実装の流れ
- Visitor interfaceを定義し，メソッドを定義する
    - 具体的なクラス一つにつきメソッドを定義する
- 受け入れる要素側（element class）にacceptance methodをもつinterfaceを定義する
- element class毎にacceptance methodを実装する
    - Visitor interfaceで引数を受け取る
- Element class側に持たせられてない振る舞い毎にVisitor Classを実装する
- Client 側でVisitor Classのインスタンスを作り，acceptance methodに渡す
