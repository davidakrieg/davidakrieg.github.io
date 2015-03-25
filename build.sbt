// Turn this project into a Scala.js project by importing these settings
enablePlugins(ScalaJSPlugin)

name := "kriegdata.github.io"

version := "0.1-SNAPSHOT"

scalaVersion := "2.11.6"

persistLauncher in Compile := true

persistLauncher in Test := false

testFrameworks += new TestFramework("utest.runner.Framework")

jsDependencies += ProvidedJS / "Please.js"

skip in packageJSDependencies := false
jsDependencies += RuntimeDOM

libraryDependencies ++= Seq(
    "org.scala-js" %%% "scalajs-dom" % "0.8.0",
    "com.lihaoyi" %%% "utest" % "0.3.0" % "test"
)
