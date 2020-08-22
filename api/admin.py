from django.contrib import admin
from .models import Tutor


class TutorAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'experience',
                    'specialty', 'photo', 'created_at')


admin.site.register(Tutor, TutorAdmin)
