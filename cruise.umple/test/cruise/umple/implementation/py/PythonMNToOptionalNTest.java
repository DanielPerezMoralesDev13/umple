package cruise.umple.implementation.py;

import org.junit.*;
import cruise.umple.implementation.*;

public class PythonMNToOptionalNTest extends MNToOptionalNTest
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
  public void MN(){
    super.MN();
  }
}