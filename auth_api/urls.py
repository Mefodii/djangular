from django.urls import path, include

from .api import LogoutView, LoginView

urlpatterns = [
    path('login/', LoginView.as_view()),
    path('logout/', LogoutView.as_view())
]