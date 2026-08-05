from django.contrib.auth import get_user_model
from django.db.utils import OperationalError, ProgrammingError


User = get_user_model()


try:
    if not User.objects.filter(username="admin").exists():
        User.objects.create_superuser(
            username="admin",
            email="admin@example.com",
            password="Admin12345!",
        )
        print("Superuser created.")
except (OperationalError, ProgrammingError):
    pass