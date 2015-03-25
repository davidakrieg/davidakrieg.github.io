package kriegdata

import scala.scalajs.js
import js.annotation.JSExport
import org.scalajs.dom
import org.scalajs.dom.html
import please._

object Home extends js.JSApp {
  def main(): Unit = {
    dom.document.body.style.backgroundColor = please()
  }

  /** Computes the square of an integer.
   *  This demonstrates unit testing.
   */
  def square(x: Int): Int = x*x

  def please():String = Please.make_color().toString
}
