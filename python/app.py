import os
from slack_sdk.webhook import WebhookClient

def notify():
    url = os.environ['WEBHOOK']
    webhook = WebhookClient(url)

    text = (
        f"Hello World\nThis is from Python.\n"
        f":exclamation: This is second line.\n"
    )
    blocks = [{
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": text
        }
    }] 

    response = webhook.send(text="fallback", blocks=blocks)

if __name__ == '__main__':
    notify()