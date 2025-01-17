from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('tasks.urls')),
    path('api/', include('toys.urls')),
    path('api/', include('puzzles.urls')),
]
