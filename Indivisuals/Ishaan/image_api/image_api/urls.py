from django.urls import path
from images.views import ImageView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/', ImageView.as_view()),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
