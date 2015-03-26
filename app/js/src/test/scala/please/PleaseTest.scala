package please

import utest._

/**
 * Created by kriegd on 3/25/15.
 */
object PleaseTest extends TestSuite {
  import Please._
  def tests = TestSuite {
    'Please {
      assert(make_color().toString.startsWith("#"))
    }
  }
}
