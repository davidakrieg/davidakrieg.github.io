package kriegdata

import utest._

object HomeTest extends TestSuite {

  import Home._

  def tests = TestSuite {
    'Home {
      assert(square(0) == 0)
      assert(square(4) == 16)
      assert(square(-5) == 25)
    }

    'HomePlease {
      assert(please().startsWith("#"))
    }
  }
}
