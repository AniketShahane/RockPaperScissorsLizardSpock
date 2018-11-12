from django.db import models
from datetime import datetime
# Create your models here.
class Blogs(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField()
    pub_date = models.DateTimeField(default=datetime.now())
    creator_name = models.CharField(max_length=50)
    creator_email = models.CharField(max_length=100)

    def __str__(self):
        return self.title[:20]

    def smaller(self):
        return self.content[:80] + '...'

    def smallest(self):
        return self.content[:20] + '...'

    def smallTitle(self):
        return self.title[:20] + '...'
