from enum import Enum, auto

class stateMachineWithStringComparisonGuard():
    class CommandControl(Enum):
        def _generate_next_value_(name, start, count, last_values):
            return name
        def __str__(self):
            return str(self.value)
        IDLE = auto()
        CHECK_AVAILABILITY = auto()
        COMMAND_VALIDITY = auto()
        EXECUTION = auto()

    def __init__(self):
        self._commandControl = None
        self._cmdString = None
        self._cmdString = ""
        self.setCommandControl(stateMachineWithStringComparisonGuard.CommandControl.IDLE)

    def setCmdString(self, aCmdString):
        wasSet = False
        self._cmdString = aCmdString
        wasSet = True
        return wasSet

    def getCmdString(self):
        return self._cmdString

    def getCommandControlFullName(self):
        answer = self._commandControl.__str__()
        return answer

    def getCommandControl(self):
        return self._commandControl

    def execute(self):
        wasEventProcessed = False
        aCommandControl = self._commandControl
        if aCommandControl == stateMachineWithStringComparisonGuard.CommandControl.IDLE :
            self.setCommandControl(stateMachineWithStringComparisonGuard.CommandControl.CHECK_AVAILABILITY)
            wasEventProcessed = True
        elif aCommandControl == stateMachineWithStringComparisonGuard.CommandControl.CHECK_AVAILABILITY :
            if not "" == self.getCmdString() :
                self.setCommandControl(stateMachineWithStringComparisonGuard.CommandControl.COMMAND_VALIDITY)
                wasEventProcessed = True
        elif aCommandControl == stateMachineWithStringComparisonGuard.CommandControl.COMMAND_VALIDITY :
            if isCommandValid(self.getCmdString()) :
                self.setCommandControl(stateMachineWithStringComparisonGuard.CommandControl.EXECUTION)
                wasEventProcessed = True
        else :
            pass
        return wasEventProcessed

    def setCommandControl(self, aCommandControl):
        self._commandControl = aCommandControl

    def delete(self):
        pass

    def __str__(self):
        return str(super().__str__()) + "[" + "cmdString" + ":" + str(self.getCmdString()) + "]"

