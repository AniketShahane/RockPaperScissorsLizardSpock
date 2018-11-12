from django.contrib import admin
from .models import Blogs
# Register your models here.
class BlogsAdmin(admin.ModelAdmin):
    list_display = ('id', 'title')
    list_filter = ('creator_name',)

    def get_ordering(self, request):
        return ['id']


admin.site.register(Blogs, BlogsAdmin)
