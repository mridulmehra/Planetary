from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Image
from .serializers import ImageSerializer
from keras.models import load_model
import keras.utils as image
import numpy as np
import os
from django.conf import settings

class ImageView(APIView):
    def post(self, request, format=None):
        try:
            serializer = ImageSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                global image_path 
                image_path = os.path.join(settings.MEDIA_ROOT, serializer.data["image"])
                image_name = serializer.data["image"].split("/")[-1]
                image_path = os.path.join(settings.MEDIA_ROOT, 'images', image_name)
                model_name = "lr_model_satellite_wildfires.h5"
                model_path = os.path.join(settings.BASE_DIR, 'models', model_name)
                model  = load_model(model_path,compile=False)
                img = image.load_img(image_path,target_size=(256,256))
                img  = image.img_to_array(img)
                img = np.expand_dims(img,axis=0)
                ans = model.predict(img)
                if ans[0] == 0:
                    result = "no fire here"
                else:
                    result = "wild fire detected"

                return Response({'image_path': serializer.data['image'], "result":result}, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            # Log the error or handle it appropriately
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
