from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from api import views

# API endpoints
urlpatterns = format_suffix_patterns([
    path('tutor/',
         views.TutorList.as_view(),
         name='tutor-list'),
    path('tutor/<int:pk>/',
         views.TutorDetail.as_view(),
         name='tutor-detail')
])
