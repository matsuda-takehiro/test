// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass");

//TODO　ちょっと使ってみたい
//var FILE_NAME = minimist(process.argv.slice(2)).src; // 第一引数 `gulp [taskName] --src param1Value`

// style.scssをタスクを作成する　←なんだっけこれ

/*　旧
gulp.task("default", function() {
    // style.scssファイルを取得
    return (
        gulp
            .src("sass_test/sass_src/test1.scss")
            // Sassのコンパイルを実行
            .pipe(
                sass({
                    outputStyle: "expanded",
                    //indentType: 'tab',
                    indentWidth: 4,
                })
                //TODO  .on("error", sass.logError)
                //エラー避け
            )
            // cssフォルダー以下に保存
            .pipe(gulp.dest("sass_test/sass_build"))
    );
});
*/


gulp.task("compile", function() {
    // style.scssファイルを取得
    return (
        gulp
            .src("sass_test/sass_src/test1.scss")
            // Sassのコンパイルを実行
            .pipe(
                sass({
                    outputStyle: "expanded",
                    //indentType: 'tab',
                    indentWidth: 4,
                })
                //TODO  .on("error", sass.logError)
                //エラー避け
            )
            // cssフォルダー以下に保存
            .pipe(gulp.dest("sass_test/sass_build"))
    );
});

gulp.task('default', gulp.task("compile"));



/*
gulp v.4から書き方がかわりました
gulp.task("default",["compile","hoge"]);って書いていたが、引数が３から２になってしまったので下記を使おう！

gulp.series：タスクを直列処理する
gulp.parallel：タスクを並列処理する
え、直列できるようになったの？シークエンスいらなくない...????

gulp.task('sass', ['clean'], function() {
  ...
});
gulp.task('js', ['clean'], function() {
  ...
});
gulp.task('build', ['sass', 'js']);
が
gulp.task('build',
  gulp.series('clean', // 直列処理
  gulp.parallel('sass', 'js') // 並列処理
));
に！！　参考URL：https://aimstogeek.hatenablog.com/entry/2018/11/30/192238
すげー...シークエンス使わなくても直列（同期的？）ってことか...

で、どう書くの？ってのは↓
https://qiita.com/tatsuo-iriyama/items/08ba4bd621b7fdedcc4e
「配列指定から、関数指定になるイメージですかね」　とあるが、最後の引数はfnだよね〜ってことは
https://satoyan419.com/gulp-v4/　や　https://designsupply-web.com/knowledgeside/4410/
のように

gulp.task('def', function () {
    gulp.task('hoge');
});

なんて書くのもええんかね、いや長いか　というかなんだろう
*/