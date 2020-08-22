from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from rest_framework import generics
from api.models import Tutor
from api.serializers import TutorSerializer

@method_decorator(cache_page(60 * 5), name='dispatch')
class TutorList(generics.ListCreateAPIView):
    queryset = Tutor.objects.all()
    serializer_class = TutorSerializer


class TutorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tutor.objects.all()
    serializer_class = TutorSerializer
