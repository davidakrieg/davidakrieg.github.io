import NativePackagerKeys._

val app = crossProject.settings(
  libraryDependencies ++= Seq(
    "com.lihaoyi" %%% "scalatags" % "0.4.6",
    "com.lihaoyi" %%% "upickle" % "0.2.7"
  ),
  version := "0.1-SNAPSHOT",
  scalaVersion := "2.11.6"
).jsSettings(
  name := "kriegdata.github.io",
  homepage := Some(url("http://kriegdata.github.io")),
  jsDependencies ++= Seq(
    ProvidedJS / "Please.js",
    RuntimeDOM
  ),
  libraryDependencies ++= Seq(
    "org.webjars" % "bootstrap" % "3.2.0",
    "org.webjars" % "animate.css" % "3.2.5",
    "org.scala-js" %%% "scalajs-dom" % "0.8.0",
    "be.doeraene" %%% "scalajs-jquery" % "0.8.0",
    "org.spaced.scalajs" %%% "scalajs-d3" % "0.1-SNAPSHOT",
    "com.lihaoyi" %%% "utest" % "0.3.0" % "test"
  ),
  testFrameworks += new TestFramework("utest.runner.Framework"),
  skip in packageJSDependencies := false,
  pipelineStages := Seq(cssCompress)
)

lazy val appJs = app.js.enablePlugins(ScalaJSPlugin, SbtWeb)

persistLauncher in Compile := true

persistLauncher in Test := false




