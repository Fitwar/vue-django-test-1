from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # 出于安全考虑，只暴露必要的、非敏感的字段
        fields = ['id', 'username', 'email'] 