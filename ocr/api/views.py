from django.shortcuts import render
from django.http import HttpResponse
import json
import base64
import os
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout

# Create your views here.

def stringToBase64(s):
    return base64.b64encode(s.encode('utf-8'))
	
def getImg(request):
	with open('image.png','rb') as img:
		img=base64.b64encode(img.read())
		resp=json.dumps({'data':str(img)})
		return HttpResponse(resp,content_type="application/json")
		
def getText(request):
	with open('out.txt',encoding="utf-8") as otr:
		otr=otr.read()
		
		resp=json.dumps({'txt':otr})
		return HttpResponse(resp,content_type="application/json")


@csrf_exempt
def upload(request):
	print('in upload')
	jsn=json.loads(request.body)
	print(jsn['type'])
	
	with open("image.png", "wb") as fh:
		fh.write(base64.b64decode(jsn['data']))
	os.system('tesseract image.png out -l tel')
	with open('out.txt',encoding="utf-8") as otr:
		otr=otr.read()
		resp=json.dumps({'txt':otr})
		return HttpResponse(resp,content_type="application/json")
