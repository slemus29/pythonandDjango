from django.shortcuts import render, get_object_or_404

from datetime import date

from .models import Post

# Create your views here.



def get_date(post):
    return post['date']

def index(request):
    latest_post = Post.objects.all().order_by("-date")[:3]
    # sorted_posts = sorted(all_posts, key=get_date)
    # latest_post = sorted_posts[-3:]
    return render(request, "blog/index.html", { "posts": latest_post})

def post(request):
    all_posts = Post.objects.all().order_by("-date")
    return render(request, "blog/all-posts.html", {
        "posts": all_posts
    })

def post_detail(request, slug):
    # post = next(post for post in all_posts if post['slug'] == slug)
    post = get_object_or_404(Post, slug=slug)
    # post = Post.objects.get(slug=slug)
    return render(request, "blog/post-detail.html", {
        "post": post,
        "post_tags": post.tags.all()
    })