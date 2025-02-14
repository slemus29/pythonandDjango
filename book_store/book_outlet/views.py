from django.shortcuts import get_object_or_404, render
from django.http import Http404
from django.db.models import Avg

from .models import Book

# Create your views here.

def index(request):
    books = Book.objects.all().order_by("-rating")
    number_books = books.count()
    avg_rating = books.aggregate(Avg("rating"))
    return render(request, "book_outlet/index.html", {
        "books": books,
        "total_numbers_of_books": number_books,
        "average_rating": avg_rating
    })


def book_detail(request, slug):
    try:
        book = Book.objects.get(slug=slug)
        #book = get_object_or_404(Book, pk=id)
        return render(request, "book_outlet/book_detail.html", {
            "title": book.title,
            "author": book.author,
            "rating": book.rating,
            "is_bestseller": book.is_bestselling
        })
    except:
        raise Http404()

