from django.shortcuts import render, get_object_or_404, redirect
from django.contrib import messages
from .models import Blogs
# Create your views here.
def blogs(request):
    blogs = Blogs.objects.all()
    return render(request, 'blogs/blogs.html', {'blogs':blogs})

def search(request):
    if request.method == 'GET':
        search = Blogs.objects.order_by('-pub_date')

        if 'keyword' in request.GET:
            keyword = request.GET['keyword']
            if keyword:
                search = search.filter(content__icontains=keyword)

        if 'creator' in request.GET:
            creator = request.GET['creator']
            if creator:
                search = search.filter(creator_name__icontains=creator)

        if 'title' in request.GET:
            title = request.GET['title']
            if title:
                search = search.filter(title__icontains=title)

        return render(request, 'blogs/search.html', {'search':search[:4]})

def blog(request, blog_id):
    blog = get_object_or_404(Blogs, pk=blog_id)
    return render(request, 'blogs/blog.html', {'blog':blog})


def upload(request):
    if request.method == 'POST':
        title = request.POST['title']
        content = request.POST['content']
        name = request.POST['name']
        email = request.POST['email']

        if Blogs.objects.all().filter(content__iexact=content):
            messages.error(request, 'Same Content Error')
            return redirect('/blogs/')
        else:
            new_blog = Blogs(title=title, content=content, creator_name=name, creator_email=email)
            new_blog.save()


        return redirect('/blogs/'+str(new_blog.id))
