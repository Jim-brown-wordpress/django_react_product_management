from django.db import models
from django.utils import timezone
import datetime
# Create your models here.


class User(models.Model):

    business = {'price': 19 , 'nMonth': 1}
    developer = {'price': 50 , 'nMonth': 3}
    professional = {'price': 80 , 'nMonth': 6}

    name = models.CharField("Name" , max_length=240)
    email = models.EmailField()
    password = models.CharField("Password" , max_length=200 )
    membership = models.CharField("Membership" , max_length=10 , default= "free")
    membershipD = models.DateField('MembershipD' , default= datetime.date.today())
    registrationDate = models.DateField("Registration Date" , default=datetime.date.today())
    # models.

    def __str__(self):
        return self.name

    def isPermited(self):
        match self.membership:
            case 'free':
                return False
            case 'business':
                return True
        # return datetime.date.today() - self.registrationDate


class Question(models.Model):
    qHeader = models.CharField("QHeader" , max_length = 200)
    qContent = models.CharField("QContent" , max_length = 500)
    sHeader = models.CharField("sHeader" , max_length = 200)
    sContent = models.CharField("sContent" , max_length = 500)

    def __str__(self):
        return self.qHeader
