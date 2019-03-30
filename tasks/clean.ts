import * as gulp from "gulp";
import * as rimraf from "rimraf";

gulp.task("clean", done => {
  const pluginPath = __dirname.concat("/../au-dx-plugin/**/*");
  rimraf.sync(pluginPath);

  const testPath = __dirname.concat("/../au-dx-test/src/au-dx-plugin/**/*");
  rimraf.sync(testPath);
  
  done();
});