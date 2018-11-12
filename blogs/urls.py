from django.urls import path, include
from . import views
urlpatterns = [
    path('', views.blogs, name='blogs'),
    path('search', views.search, name='search'),
    path('<int:blog_id>', views.blog, name='ind_blog'),
    path('upload', views.upload, name='upload'),
]
