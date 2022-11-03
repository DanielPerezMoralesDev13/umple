package cruise.umple.implementation.py;

import org.junit.*;
import cruise.umple.implementation.*;

public class PythonOptionalOneToManyTest extends OptionalOneToManyTest
{

  @Before
  public void setUp()
  {
    super.setUp();
    language = "Python";
    languagePath = "py";
  }

  @Test @Ignore
  public void One(){
    super.One();
  }

  @Test @Ignore
  public void Many(){
    super.Many();
  }
}