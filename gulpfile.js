// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass");

//TODO
//var FILE_NAME = minimist(process.argv.slice(2)).src; // 第一引数 `gulp [taskName] --src param1Value`

// style.scssをタスクを作成する
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


/*
こういう書き方したい

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

gulp.task("default", ["compile"]);
*/

/*　めも　
npx gulp　で起動
npxはここ　https://qiita.com/tonkotsuboy_com/items/8227f5993769c3df533d

*/