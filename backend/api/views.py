from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from .serializers import UserSerializer

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    一个只读的 API 端点，用于查看用户。
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny] # 开发时允许任何人访问