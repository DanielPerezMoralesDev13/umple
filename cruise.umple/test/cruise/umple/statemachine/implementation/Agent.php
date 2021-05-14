<?php
/*PLEASE DO NOT EDIT THIS CODE*/
/*This code was generated using the UMPLE 1.30.2.5248.dba0a5744 modeling language!*/

class Agent
{

  //------------------------
  // MEMBER VARIABLES
  //------------------------

  //Agent State Machines
  private static $StatusFollow = 1;
  private static $StatusChanging_lane = 2;
  private static $StatusFinal = 3;
  private $status;

  //------------------------
  // CONSTRUCTOR
  //------------------------

  public function __construct()
  {
    $this->setStatus(self::$StatusFollow);
  }

  //------------------------
  // INTERFACE
  //------------------------

  public function getStatusFullName()
  {
    $answer = $this->getStatus();
    return $answer;
  }

  public function getStatus()
  {
    if ($this->status == self::$StatusFollow) { return "StatusFollow"; }
    elseif ($this->status == self::$StatusChanging_lane) { return "StatusChanging_lane"; }
    elseif ($this->status == self::$StatusFinal) { return "StatusFinal"; }
    return null;
  }

  public function change_lane()
  {
    $wasEventProcessed = false;
    
    $aStatus = $this->status;
    if ($aStatus == self::$StatusFollow)
    {
      $this->setStatus(self::$StatusChanging_lane);
      $wasEventProcessed = true;
    }
    elseif ($aStatus == self::$StatusChanging_lane)
    {
      if ($this->not_achieved==$this->False)
      {
        $this->setStatus(self::$StatusChanging_lane);
        $wasEventProcessed = true;
      }
      if ($this->not_achieved==$this->True)
      {
        $this->setStatus(self::$StatusFinal);
        $wasEventProcessed = true;
      }
    }
    return $wasEventProcessed;
  }

  private function setStatus($aStatus)
  {
    $this->status = $aStatus;
  }

  public function equals($compareTo)
  {
    return $this == $compareTo;
  }

  public function delete()
  {}

}
?>