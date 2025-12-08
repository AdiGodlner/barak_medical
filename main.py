import requests
import base64
import json

# -----------------------------
# CONFIGURATION - CHANGE THESE
# -----------------------------

# Worker URL
WORKER_URL = "https://contact-form-api.96goldner.workers.dev/"

# Contact form data
form_data = {
    "fullName": "Adi Goldner",
    "phone": "0528723566",
    "email": "adi.goldner@mail.huji.ac.il",
    "message": "This is a test message from Python."
}

# Optional Mailjet test
MJ_API_KEY = "e57adfee7f14c3d8f9e02ac2bb56a344"
MJ_API_SECRET = "a8603fbf783f3dd96dab82380326c7de"
MAIL_FROM = "96goldner@gmail.com"
MAIL_TO   = "96goldner@gmail.com"

# -----------------------------
# HELPER FUNCTIONS
# -----------------------------

def send_to_worker():
    """Send contact form data to Cloudflare Worker"""
    print("Sending POST request to Worker...")
    headers = {"Content-Type": "application/json"}
    response = requests.post(WORKER_URL, json=form_data, headers=headers)
    print("Response status code:", response.status_code)
    try:
        print("Response JSON:", response.json())
    except json.JSONDecodeError:
        print("Response text:", response.text)
    print("\n")


def send_to_mailjet():
    """Send test email directly to Mailjet"""
    print("Sending test email via Mailjet...")
    print()
    print()
    print()
    auth_header = "Basic " + base64.b64encode(f"{MJ_API_KEY}:{MJ_API_SECRET}".encode("utf-8")).decode("utf-8")
    print("Testing auth header:",auth_header)
    print()
    print()
    print()
    url = "https://api.mailjet.com/v3.1/send"
    auth = (MJ_API_KEY, MJ_API_SECRET)
    payload = {
        "Messages": [
            {
                "From": {"Email": MAIL_FROM, "Name": "Test Sender"},
                "To": [{"Email": MAIL_TO, "Name": "Receiver"}],
                "Subject": "Test from Python",
                "TextPart": "Hello world! This is a test."
            }
        ]
    }
    response = requests.post(url, json=payload, auth=auth)
    print("Mailjet status code:", response.status_code)
    try:
        print("Mailjet response JSON:", response.json())
    except json.JSONDecodeError:
        print("Mailjet response text:", response.text)
    print("\n")


# -----------------------------
# MAIN
# -----------------------------
if __name__ == "__main__":
    # send_to_worker()
    # Uncomment below to test Mailjet directly
    send_to_mailjet()
    # python
    # Testing auth header: Basic ZTU3YWRmZWU3ZjE0YzNkOGY5ZTAyYWMyYmI1NmEzNDQ6YTg2MDNmYmY3ODNmM2RkOTZkYWI4MjM4MDMyNmM3ZGU=
    # worker
    # Testing auth header: Basic ZTU3YWRmZWU3ZjE0YzNkOGY5ZTAyYWMyYmI1NmEzNDQ6YTg2MDNmYmY3ODNmM2RkOTZkYWI4MjM4MDMyNmM3ZGU=