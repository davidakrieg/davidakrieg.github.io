package kriegdata

import scala.annotation.tailrec
import scala.scalajs.js
import org.scalajs.jquery._
import js.annotation.JSExport
import org.scalajs.dom
import org.scalajs.dom.{Node, NodeList}
import please._

import scala.util.Random

object Home extends js.JSApp {
  val ROWS = 16
  val COLS = 16
  val rand = new Random(scala.compat.Platform.currentTime)

  def main(): Unit = {
    jQuery(dom.document.body).css("background-color", please)
    jQuery(".jumbotron").css("background-color", please)
    dom.setInterval(fillPlayground _, 100)
  }

  def maybeChangeColor(index: js.Any, thiz:dom.Element):js.Any = {
    val thisRand = rand.nextInt()
    if(thisRand % 7 == 0 || thisRand % 11 == 0){
      jQuery(thiz).animate(js.Dynamic.literal("background-color" -> please), "slow")//Backticks don't work for CSS properties
      //jQuery(thiz).css("background-color", please)
    }
    index
  }

  def drawRow(index:js.Any, thiz:dom.Element):js.Any = {
    if(jQuery(thiz).children().length >= COLS)
      jQuery(thiz).children(".cell").each(maybeChangeColor _)
    else {
      for(i <- 0 to COLS) {
        jQuery(thiz).append(newNode)
      }
    }
  }

  def newNode() = {
    val returnVal = jQuery("<div/>")
    returnVal.addClass("col-lg-9 cell img-rounded")
    returnVal.css("background-color", please)
    returnVal
  }

  def fillPlayground() = {
    val playgroundRows = jQuery("#playground").children(".row")
    playgroundRows.each(drawRow _)
  }

  /** Computes the square of an integer.
   *  This demonstrates unit testing.
   */
  def square(x: Int): Int = x*x

  def please():String = Please.make_color().toString
}
