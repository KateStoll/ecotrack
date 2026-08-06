from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets

from .models import Plant
from .serializers import PlantSerializer


@api_view(["GET"])
def health_check(request):
    return Response({"status": "ok"})


class PlantViewSet(viewsets.ModelViewSet):
    queryset = Plant.objects.all()
    serializer_class = PlantSerializer