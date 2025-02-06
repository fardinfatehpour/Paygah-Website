from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, ArticleViewSet, RegistrationViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'articles', ArticleViewSet)
router.register(r'registrations', RegistrationViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
