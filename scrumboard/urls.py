from .api import ListViewSet, CardViewSet

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("lists", ListViewSet)
router.register("cards", CardViewSet)

urlpatterns = router.urls