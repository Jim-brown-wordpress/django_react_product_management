from rest_framework import serializers
from .models import User , Question


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('pk' , 'name' , 'email' , 'password', 'membership' , 'membershipD' ,'registrationDate')
        # fields = ('email' , 'password')

class QuestionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Question
        fields = ('pk' , 'qHeader' , 'qContent' , 'sHeader' , 'sContent')
