from django.conf.urls import *
from . import views
from django.urls import path

urlpatterns = [
	
	
	path('upload',views.upload,name="upload"),
	path('getImg',views.getImg,name="getImg"),
	path('getText',views.getText,name="getText"),
	
	]