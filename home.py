from flask import Flask, render_template, request
from flask_mail import Mail, Message

app = Flask(__name__)

# Configure Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = 'sandraks8891@gmail.com'
app.config['MAIL_PASSWORD'] = 'gupz xzhw rzne ywtc'  # App password from Google
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False

mail = Mail(app)

@app.route('/')
def index():
    return render_template('index1.html', success=None)

@app.route('/send_mail', methods=['POST'])
def send_message():
    try:
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']

        msg = Message(
            subject='Portfolio Contact',
            sender=email,
            recipients=['sandraks8891@gmail.com']
        )
        msg.body = f"From: {name}\nEmail: {email}\n\nMessage:\n{message}"
        mail.send(msg)

        return render_template('index1.html', success=True)
    except Exception as e:
        print("Error sending mail:", e)
        return render_template('index1.html', success=False)

if __name__ == '__main__':
    app.run(debug=True)
