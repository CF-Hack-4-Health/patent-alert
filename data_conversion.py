import django
django.setup()
from drugs.models import Drug


def conversion():
    """Convert from JSON into database."""
    with open('final_dict.txt', 'r') as sample_file:
        lst = eval(sample_file.read())
        for data in lst[:100]:
            print(data)
            dmodel = Drug(**data)
            dmodel.save()

if __name__ == '__main__':
    conversion()
