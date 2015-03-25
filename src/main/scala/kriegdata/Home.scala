package kriegdata


import scala.annotation.tailrec
import scala.scalajs.js
import js.annotation.JSExport
import org.scalajs.dom
import org.scalajs.dom.{Node, NodeList}
import please._

object Home extends js.JSApp {
  def main(): Unit = {
    dom.document.body.style.backgroundColor = please()
    fillPlayground()
    dom.window.setTimeout(doRedraw, 250)
  }

  def doRedraw: Function0[Unit] = () => {
    dom.window.setTimeout(doRedraw, 250)
    fillPlayground()
  }

  def fillPlayground() = {
    @tailrec
    def changeNodes(n:Node):Unit = {
      if(n != null){
        val parent = n.parentNode
        parent.removeChild(n)
        parent.appendChild(newNode)
        changeNodes(n.nextSibling)
      }
    }
    def newNode() = {
      val returnVal = dom.document.createElement("div")
      returnVal.setAttribute("class", "one box flip eighths")
      returnVal.setAttribute("style", "background-color: %s;".format(please))
      returnVal
    }
    val playgroundRows:NodeList = dom.document.getElementById("playground").getElementsByClassName("row")
    for(row <- 0 until playgroundRows.length) {
      if(playgroundRows(row).hasChildNodes()){
        changeNodes(playgroundRows(row).firstChild)
      } else {
        for(i <- 0 until 16) {
          playgroundRows(row).appendChild(newNode)
        }
      }
    }
  }

  /** Computes the square of an integer.
   *  This demonstrates unit testing.
   */
  def square(x: Int): Int = x*x

  def please():String = Please.make_color().toString
  def pleaseDiv():String = "<div class=\"one mobile sixteenths\" style=\"{background-color:%s}\"></div>".format(please)
}
