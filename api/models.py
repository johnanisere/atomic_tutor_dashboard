from django.core.validators import MaxValueValidator, MinValueValidator
from django.db.models import Model, CharField, URLField, DateTimeField, IntegerField


class Tutor(Model):
    DEFAULT_PHOTO = "https://rb.gy/fo6m2c"
    SPECIALTY_CHOICES = [
        ('MATHAMATICS', 'MATH'),
        ('ENGLISH', 'ENG'),
        ('PHYSICS', 'PHY'),
        ('CHEMISTRY', 'CHM')
    ]

    name = CharField(max_length=50, blank=False)
    experience = IntegerField(
        validators=[
            MinValueValidator(0),
            MaxValueValidator(100),
        ])
    specialty = CharField(
        max_length=128, choices=SPECIALTY_CHOICES, blank=False)
    photo = URLField(max_length=200, default=DEFAULT_PHOTO)
    created_at = DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created_at']
