from rest_framework.serializers import ModelSerializer

from .models import Tutor


class TutorSerializer(ModelSerializer):
    class Meta:
        model = Tutor
        fields = '__all__'
