import * as gulp from "gulp";
import * as rimraf from "rimraf";

export function clean(done: {(): void}) {
  const pluginPath = __dirname.concat("/../../../src/elements/**/*");
  rimraf.sync(pluginPath);

  done();
}