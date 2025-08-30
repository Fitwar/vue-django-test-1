from rest_framework.routers import DefaultRouter
from .views import UserViewSet

router = DefaultRouter()
# 'users' 是资源的名称，ViewSet 会自动处理 /users/ 和 /users/{id}/ 这样的 URL
router.register(r'users', UserViewSet, basename='user')

urlpatterns = router.urls