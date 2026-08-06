from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import PlantViewSet, health_check

router = DefaultRouter()
router.register(r"plants", PlantViewSet)

urlpatterns = [
    path("health/", health_check),
    path("", include(router.urls)),
]