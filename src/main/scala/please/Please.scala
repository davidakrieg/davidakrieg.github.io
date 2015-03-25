package please

import scala.scalajs.js
import scala.scalajs.js.annotation.JSName

trait PleaseStatic extends js.Object {
  def make_color():js.Any = js.native
  def make_color(options:MakeColorOpts):js.Any = js.native
  def make_scheme(baseColor:HSV):Array[js.Any] = js.native
  def make_scheme(baseColor:HSV, options:MakeSchemeOpts):Array[js.Any] = js.native
}

@JSName("Please")
object Please extends PleaseStatic

trait HSV extends js.Object {
  val h: Int = js.native
  val s: Double = js.native
  val v: Double = js.native
}

trait MakeColorOpts extends js.Object {
  val hue:Int = js.native
  val saturation:Double = js.native
  val value:Double = js.native
  val base_color: String = js.native
  val greyscale:Boolean = js.native
  val golden:Boolean = js.native
  val full_random: Boolean = js.native
  val colors_returned:Int = js.native
  val format:String = js.native
}

trait MakeSchemeOpts extends js.Object {
  val scheme_type:String = js.native
  val format:String = js.native
}
