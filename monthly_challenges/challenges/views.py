from django.shortcuts import render
from django.http import Http404, HttpResponseNotFound, HttpResponseRedirect
from django.urls import reverse

# Create your views here.



monthly_challenges = {
    "january": "Eat no meat for the entire month!",
    "february": "Eat no meat for the entire month!",
    "march": "Eat no meat for the entire month!",
    "april": "Eat no meat for the entire month!",
    "may": "Eat no meat for the entire month!",
    "june": "Eat no meat for the entire month!",
    "july": None,
    'august': "Go to the gym",
    "september": "Desde septiembre se siente diciembre!",
    "octuber": "Eat no meat for the entire month!",
    "november": "Eat no meat for the entire month!",
    "december": "Eat no meat for the entire month!",
}

def january(request):
    return HttpResponse("This works!")


def index(request):
    # list_items=""
    months = list(monthly_challenges.keys())
    # for month in months:
    #     capitalized_month = month.capitalize()
    #     month_path = reverse("month-challenge", args=[month])
    #     list_items += f"<li><a href=\"{month_path}\">{capitalized_month}</a></li>"
    
    # response_data = f"<ul>{list_items}</ul>"
    # return HttpResponse(response_data)

    return render(request, "challenges/index.html", {
        "months": months
    })

def monthly_challenge_by_number(request, month):
    months = list(monthly_challenges.keys())
    if month > len(months):
        return HttpResponseNotFound("Invalid month")
    redirect_month = months[month - 1]
    redirect_path = reverse("month-challenge", args=[redirect_month])
    return HttpResponseRedirect(redirect_path)

def monthly_challenge(request, month):
    try:
        challenge_text = monthly_challenges[month]
        return render(request, "challenges/challenge.html", { 
            "text": challenge_text,
            "month_name": month
        })
    except:
        raise Http404()