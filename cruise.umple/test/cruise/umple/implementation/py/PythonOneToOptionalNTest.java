package cruise.umple.implementation.py;

import org.junit.*;
import cruise.umple.implementation.*;

public class PythonOneToOptionalNTest extends OneToOptionalNTest
{

  @Before
  public void setUp()
  {
    super.setUp();
    language = "Python";
    languagePath = "py";
  }

  @Test @Ignore
  public void OptionalN(){
    super.OptionalN();
  }

  @Test @Ignore
  public void One(){
    super.One();
  }
}