import json
from django.test import TestCase
from .models import Tutor


class TutorTest(TestCase):
    def test_create_get_delete_tutor(self):
        # create new tutor object
        form_data = {
            "name": "sam vesser",
            "experience": 4,
            "specialty": "CHEMISTRY"
        }
        # simulate post request with self.client.post
        # /tutor/ is the url associated with create_tutor view
        create_tutor_response = self.client.post('/api/v1/tutor/', form_data)

        # get number of created tutor
        num_of_tutors = Tutor.objects.all().count()
        # response tutor name
        name = json.loads(create_tutor_response.content)['name']
        # one tutor created successfully
        self.assertEqual(create_tutor_response.status_code, 201)
        # tutor created match with tutor object payload
        self.assertEqual(name, form_data['name'])

        # simulate get request with self.client.get
        # /tutor/ is the url associated with create_tutor view
        get_tutor_response = self.client.get('/api/v1/tutor/')

        response = json.loads(get_tutor_response.content)

        # get tutors successfully
        self.assertEqual(get_tutor_response.status_code, 200)
        # only one tutor exists, test if this is true
        self.assertEqual(response['count'], 1)
        #simulate delete request with self.client.delete
        #/tutor/1/ is the url associated with create_tutor view
        delete_tutor_response = self.client.delete('/api/v1/tutor/1/')

        # get number of created tutor
        num_of_tutors = Tutor.objects.all().count()
        # one tutor deleted successfully
        self.assertEqual(delete_tutor_response.status_code, 204)
        # no tutor left in the db, test if this is true
        self.assertEqual(num_of_tutors, 0)
