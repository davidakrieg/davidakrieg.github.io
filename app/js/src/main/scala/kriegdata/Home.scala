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
  val COLS = 11
  val rand = new Random(scala.compat.Platform.currentTime)

  def main(): Unit = {
    val selected = dom.document.location.hash.substring(1)
    jQuery("#base-color-picker").value(selected)
    jQuery("#base-color-picker").change(updateBackground _).trigger("change")
    dom.setInterval(fillPlayground _, 150)
  }

  def maybeChangeColor(index: js.Any, thiz:dom.Element):js.Any = {
    val thisRand = rand.nextInt()
    if(thisRand % 7 == 0 || thisRand % 11 == 0){
      jQuery(thiz).animate(js.Dynamic.literal("background-color" -> please))//Backticks don't work for CSS properties
      //jQuery(thiz).css("background-color", please)
    }
    index
  }

  def updateBackground():Unit = {
    dom.document.location.hash = "#" + getBaseColor
    jQuery(dom.document.body).animate(js.Dynamic.literal("background-color" -> please))
    jQuery(".jumbotron").animate(js.Dynamic.literal("background-color" -> please))
  }

  def drawRow(index:js.Any, thiz:dom.Element):js.Any = {
    if(jQuery(thiz).children().length >= COLS)
      jQuery(thiz).children(".cell").each(maybeChangeColor _)
    else {
      for(i <- 0 until COLS) {
        jQuery(thiz).append(newNode)
      }
    }
  }

  def newNode() = {
    val returnVal = jQuery("<div/>")
    returnVal.addClass("col-lg-1 well-lg cell tada")
    val color = please()
    returnVal.css("background-color", color)
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

  def please():String = {
    val base = getBaseColor()
    please(base)
  }

  def please(base:String):String = Please.make_color(js.Dynamic.literal("base_color" -> base)).toString

  def getBaseColor():String = {
    if (jQuery("#base-color-picker").value != null)
      jQuery("#base-color-picker").value.toString
    else ""
  }
}
