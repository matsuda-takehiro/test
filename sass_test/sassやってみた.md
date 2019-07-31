Sassをやってみた

#DL手順
- Rubyが必要なので入れる Macならデフォで入っている
- `$ sudo gem update --system` でアップデート
- `$ sudo gem install sass` でダウンロード
    - `sudo gem install -n /usr/local/bin sass` エラーでたらこっち：https://qiita.com/NAKKA-K/items/6b5de9459b3c952f5b2e
        - usr/bin 自体に権限ないかもなので。

#実験手順（SCSS記法）
- 作業フォルダをターミナルにドラッグドロップorターミナルで開くor「cd フォルダのパス」を叩く
- `sass test.scss test.css`,
  `sass test.scss:test.css --style expanded`　コロンでもいける。--styleを指定しないとネストっぽくなる。
    - expandedはいつもの。compactは１行づつ。compressedは改行、インデントしない。
    - `sass test.scss:sass_test_build/output.css --style expanded` のようにパス指定もできる。

ex. SCSS更新したら「`sass --style expanded --watch scss:css`」で自動でcssも更新される。（--watch）
    - 止めるときはMACならctrl + Cかな？
ex. GUIでコンパイル「Koala」「Scout」など

#参考文献
- http://websae.net/sass-compile-20140904/
- http://vdeep.net/sass-scss
他　文中URL

#めも
- http://book.scss.jp/code/c2/04.html
- http://www.ykst.de/i-made-blog-with-jekyll/
- https://qiita.com/Ress/items/27fbbf5a973522e6f1c3

---
＊＊＊＊続編＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
---

#Compassが死んでたんでLibSassとGulpの勉強をする
- コンパイラーがデフォだとインデントが４でも２にされたのでなんか無いかと探したらCompassが出てきた
    - Gulpのようなタスクランナーほど大かかりなもんじゃないんで楽らしい
    - でも更新やめたらしい
    - そもそもMACの所有者が自分ならこれで行けそう　https://www.anothersky.pw/2011/12/000121.html
- KoalaやVScodeのEasySassみたいな拡張機能にインデントのとかあるかわからん
- そろそろGulpくらいは勉強しておきたい
- PreprosってのがPugやTypeScriptやSassをコンパイルできるらしいし、しくじったらこれもみてみよう
    - http://blog.kentsunekawa.com/others/sass_prepros/
- node-sassってのがry
    - https://blog.sioyaki.com/entry/2016/05/02/153303
    - https://its-office.jp/blog/sass/2018/05/12/node-sass.html
