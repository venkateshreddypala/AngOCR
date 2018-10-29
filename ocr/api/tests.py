import base64

with open('../after death.jpg','rb') as img:
	img=img.read()
	enc=base64.b64encode(img)
	
	with open('b.png','wb') as bw:
		bw.write(enc.decode('base64'))