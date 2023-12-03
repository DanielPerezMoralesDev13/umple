from enum import Enum, auto

class stateMachineWithNegativeNumberGuard():
    class Status(Enum):
        def _generate_next_value_(name, start, count, last_values):
            return name
        def __str__(self):
            return str(self.value)
        on = auto()
        off = auto()

    def __init__(self):
        self._status = None
        self.setStatus(stateMachineWithNegativeNumberGuard.Status.on)

    def getStatusFullName(self):
        answer = self._status.__str__()
        return answer

    def getStatus(self):
        return self._status

    def turnOff(self, pn):
        wasEventProcessed = False
        aStatus = self._status
        if aStatus == stateMachineWithNegativeNumberGuard.Status.on :
            if pn > -1 :
                self.setStatus(stateMachineWithNegativeNumberGuard.Status.off)
                wasEventProcessed = True
        else :
            pass
        return wasEventProcessed

    def turnOn(self):
        wasEventProcessed = False
        aStatus = self._status
        if aStatus == stateMachineWithNegativeNumberGuard.Status.off :
            self.setStatus(stateMachineWithNegativeNumberGuard.Status.on)
            wasEventProcessed = True
        else :
            pass
        return wasEventProcessed

    def setStatus(self, aStatus):
        self._status = aStatus

    def delete(self):
        pass

