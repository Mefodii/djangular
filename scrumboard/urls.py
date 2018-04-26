from django.urls import path
from django.views.generic import TemplateView

from .api import ListApi, CardApi


urlpatterns = [
    path('lists', ListApi.as_view(), name="scrumboard_lists"),
    path('cards', CardApi.as_view(), name="scrumboard_cards"),
    path('home', TemplateView.as_view(template_name="scrumboard/home.html"), name="scrumboard_home")
]